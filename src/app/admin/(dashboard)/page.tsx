"use client";

import { useEffect, useState } from 'react';

interface DashboardStats {
  testimonials: number;
  faqItems: number;
  lastUpdated: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [migrating, setMigrating] = useState(false);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [testimonialsRes, faqRes] = await Promise.all([
        fetch('/api/cms/testimonials'),
        fetch('/api/cms/faq'),
      ]);

      const [testimonials, faq] = await Promise.all([
        testimonialsRes.json(),
        faqRes.json(),
      ]);

      setStats({
        testimonials: testimonials.total || 0,
        faqItems: faq.total || 0,
        lastUpdated: new Date().toLocaleString(),
      });
    } catch (error) {
      console.error('Failed to load stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMigrate = async () => {
    if (!confirm('This will migrate the original testimonials to the CMS. Continue?')) {
      return;
    }

    setMigrating(true);
    try {
      const response = await fetch('/api/cms/migrate', {
        method: 'POST',
      });
      const data = await response.json();
      
      if (data.success) {
        alert(`Successfully migrated ${data.count} testimonials!`);
        loadStats(); // Reload stats
      } else {
        alert(data.error || 'Migration failed');
      }
    } catch (error) {
      console.error('Migration failed:', error);
      alert('Migration failed');
    } finally {
      setMigrating(false);
    }
  };

  if (loading) {
    return (
      <div>
        <h1 className="form-title">Loading Dashboard...</h1>
        <div className="stats-grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="stat-card">
              <div className="stat-title">Loading...</div>
              <div className="stat-value">-</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="form-title">Dashboard</h1>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-title">Testimonials</div>
          <div className="stat-value">{stats?.testimonials || 0}</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">FAQ Items</div>
          <div className="stat-value">{stats?.faqItems || 0}</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Last Updated</div>
          <div className="stat-value" style={{fontSize: '1rem'}}>{stats?.lastUpdated || 'Never'}</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h2 className="card-title">Quick Actions</h2>
        <div className="grid-2" style={{marginTop: '1rem'}}>
          <a href="/admin/testimonials" className="button" style={{textAlign: 'center', textDecoration: 'none', display: 'block'}}>
            Manage Testimonials
          </a>
          <a href="/admin/faq" className="button" style={{textAlign: 'center', textDecoration: 'none', display: 'block'}}>
            Manage FAQ
          </a>
          <a href="/admin/settings" className="button" style={{textAlign: 'center', textDecoration: 'none', display: 'block'}}>
            Site Settings
          </a>
          <a href="/" className="button-secondary" style={{textAlign: 'center', textDecoration: 'none', display: 'block'}}>
            View Website
          </a>
        </div>
      </div>

      {/* Migration Notice */}
      {stats && stats.testimonials === 0 && (
        <div className="bg-blue" style={{marginTop: '1.5rem'}}>
          <h3 style={{fontWeight: '600', marginBottom: '0.5rem'}}>🚀 First Time Setup</h3>
          <p style={{marginBottom: '1rem'}}>
            Would you like to migrate your existing testimonials to the CMS? This will import all current reviews from your website.
          </p>
          <button
            onClick={handleMigrate}
            disabled={migrating}
            className="button"
          >
            {migrating ? 'Migrating...' : 'Migrate Testimonials'}
          </button>
        </div>
      )}

      {/* Instructions */}
      <div className="bg-blue" style={{marginTop: '1.5rem'}}>
        <h3 style={{fontWeight: '600', marginBottom: '0.5rem'}}>Welcome to Your CMS</h3>
        <p style={{marginBottom: '1rem'}}>
          This content management system allows you to update your website content from anywhere. 
          Here&apos;s what you can manage:
        </p>
        <ul style={{listStyle: 'disc', paddingLeft: '1.5rem'}}>
          <li><strong>Testimonials:</strong> Add, edit, or remove customer reviews</li>
          <li><strong>FAQ:</strong> Manage frequently asked questions</li>
          <li><strong>Settings:</strong> Update contact information and site settings</li>
          <li><strong>Mobile-Friendly:</strong> Works on phones, tablets, and computers</li>
        </ul>
      </div>
    </div>
  );
}