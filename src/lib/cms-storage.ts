import fs from 'fs';
import path from 'path';

// Simple JSON file-based storage for CMS data
export class CMSStorage {
  private dataDir: string;

  constructor() {
    this.dataDir = path.join(process.cwd(), 'cms-data');
    this.ensureDataDirectory();
  }

  private ensureDataDirectory() {
    if (!fs.existsSync(this.dataDir)) {
      fs.mkdirSync(this.dataDir, { recursive: true });
    }
  }

  private getFilePath(collection: string): string {
    return path.join(this.dataDir, `${collection}.json`);
  }

  async readCollection<T>(collection: string): Promise<T[]> {
    try {
      const filePath = this.getFilePath(collection);
      if (!fs.existsSync(filePath)) {
        return [];
      }
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error reading collection ${collection}:`, error);
      return [];
    }
  }

  async writeCollection<T>(collection: string, data: T[]): Promise<void> {
    try {
      const filePath = this.getFilePath(collection);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(`Error writing collection ${collection}:`, error);
      throw error;
    }
  }

  async findById<T extends { id: string }>(collection: string, id: string): Promise<T | null> {
    const items = await this.readCollection<T>(collection);
    return items.find(item => item.id === id) || null;
  }

  async create<T extends { id: string; updatedAt: string }>(collection: string, data: Omit<T, 'updatedAt'>): Promise<T> {
    const items = await this.readCollection<T>(collection);
    const newItem = {
      ...data,
      updatedAt: new Date().toISOString(),
    } as T;
    
    items.push(newItem);
    await this.writeCollection(collection, items);
    return newItem;
  }

  async update<T extends { id: string; updatedAt: string }>(collection: string, id: string, data: Partial<Omit<T, 'id' | 'updatedAt'>>): Promise<T | null> {
    const items = await this.readCollection<T>(collection);
    const index = items.findIndex(item => item.id === id);
    
    if (index === -1) {
      return null;
    }

    items[index] = {
      ...items[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };

    await this.writeCollection(collection, items);
    return items[index];
  }

  async delete<T extends { id: string }>(collection: string, id: string): Promise<boolean> {
    const items = await this.readCollection<T>(collection);
    const filteredItems = items.filter(item => item.id !== id);
    
    if (filteredItems.length === items.length) {
      return false; // Item not found
    }

    await this.writeCollection(collection, filteredItems);
    return true;
  }

  async filter<T>(collection: string, predicate: (item: T) => boolean): Promise<T[]> {
    const items = await this.readCollection<T>(collection);
    return items.filter(predicate);
  }

  async count(collection: string): Promise<number> {
    const items = await this.readCollection(collection);
    return items.length;
  }
}

// Singleton instance
export const cmsStorage = new CMSStorage();