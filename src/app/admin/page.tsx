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
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-64 mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20 mb-2"></div>
              <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard
          title="Testimonials"
          value={stats?.testimonials || 0}
          href="/admin/testimonials"
        />
        <StatsCard
          title="FAQ Items"
          value={stats?.faqItems || 0}
          href="/admin/faq"
        />
        <StatsCard
          title="Last Updated"
          value={stats?.lastUpdated || 'Never'}
          isText
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <QuickActionButton
            href="/admin/testimonials"
            title="Add Testimonial"
            description="Add a new customer review"
          />
          <QuickActionButton
            href="/admin/faq"
            title="Add FAQ"
            description="Add a new FAQ item"
          />
          <QuickActionButton
            href="/admin/settings"
            title="Site Settings"
            description="Update site configuration"
          />
          <QuickActionButton
            href="/"
            title="View Site"
            description="Preview your website"
            external
          />
        </div>
      </div>

      {/* Migration Notice */}
      {stats && stats.testimonials === 0 && (
        <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-200 mb-2">
            🚀 First Time Setup
          </h3>
          <p className="text-yellow-800 dark:text-yellow-300 mb-4">
            Would you like to migrate your existing testimonials to the CMS? This will import all current reviews from your website.
          </p>
          <button
            onClick={handleMigrate}
            disabled={migrating}
            className="bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-400 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            {migrating ? 'Migrating...' : 'Migrate Testimonials'}
          </button>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">
          Welcome to Your CMS
        </h3>
        <p className="text-blue-800 dark:text-blue-300 mb-4">
          This content management system allows you to update your website content from anywhere. 
          Here&apos;s what you can manage:
        </p>
        <ul className="text-blue-800 dark:text-blue-300 space-y-1 text-sm">
          <li>• <strong>Testimonials:</strong> Add, edit, or remove customer reviews</li>
          <li>• <strong>FAQ:</strong> Manage frequently asked questions</li>
          <li>• <strong>Settings:</strong> Update contact information and site settings</li>
          <li>• <strong>Mobile-Friendly:</strong> Works on phones, tablets, and computers</li>
        </ul>
      </div>
    </div>
  );
}

function StatsCard({ title, value, href, isText = false }: { 
  title: string; 
  value: number | string; 
  href?: string; 
  isText?: boolean;
}) {
  const content = (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {title}
      </div>
      <div className={`mt-2 text-2xl font-bold text-gray-900 dark:text-white ${!isText ? 'text-indigo-600 dark:text-indigo-400' : ''}`}>
        {value}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:shadow-lg transition-shadow">
        {content}
      </a>
    );
  }

  return content;
}

function QuickActionButton({ href, title, description, external = false }: {
  href: string;
  title: string;
  description: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
    >
      <div className="font-medium text-gray-900 dark:text-white">
        {title}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        {description}
      </div>
    </a>
  );
}