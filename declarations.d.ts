declare module "*.md" {
    const content: {
      attributes: {
        title: string;
        body: string;
      };
      react: React.ComponentType;
    };
    export const attributes: {
      title: string;
      body: string;
    };
    export const react: React.ComponentType;
  }
  