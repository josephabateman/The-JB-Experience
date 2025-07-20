"use client";

import { useEffect, useState } from 'react';
import { SiteSettings } from '@/lib/cms-types';

export default function SettingsPage() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const response = await fetch('/api/cms/settings');
      const data = await response.json();
      if (data.success) {
        setSettings(data.data);
      }
    } catch (error) {
      console.error('Failed to load settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!settings) return;

    setSaving(true);
    setMessage('');

    try {
      const response = await fetch('/api/cms/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Settings saved successfully!');
        setSettings(data.data);
      } else {
        setMessage(data.error || 'Failed to save settings');
      }
    } catch (error) {
      console.error('Failed to save settings:', error);
      setMessage('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  const updateSetting = (key: keyof SiteSettings, value: any) => {
    if (!settings) return;
    setSettings({ ...settings, [key]: value });
  };

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-64 mb-6"></div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i}>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32 mb-2"></div>
                <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!settings) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 dark:text-red-400">Failed to load settings.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Site Settings
      </h1>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Business Information */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Business Information
            </h2>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Business Name
            </label>
            <input
              type="text"
              value={settings.businessName}
              onChange={(e) => updateSetting('businessName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tagline
            </label>
            <input
              type="text"
              value={settings.tagline}
              onChange={(e) => updateSetting('tagline', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              rows={3}
              value={settings.description}
              onChange={(e) => updateSetting('description', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Contact Information */}
          <div className="md:col-span-2 pt-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h2>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={settings.email}
              onChange={(e) => updateSetting('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={settings.phone}
              onChange={(e) => updateSetting('phone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Location Information */}
          <div className="md:col-span-2 pt-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Base Location (for distance calculations)
            </h2>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Base Location / Postcode
            </label>
            <input
              type="text"
              value={settings.baseLocation}
              onChange={(e) => updateSetting('baseLocation', e.target.value)}
              placeholder="e.g., E10 5ZD"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Latitude
              </label>
              <input
                type="number"
                step="any"
                value={settings.baseLat}
                onChange={(e) => updateSetting('baseLat', parseFloat(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Longitude
              </label>
              <input
                type="number"
                step="any"
                value={settings.baseLng}
                onChange={(e) => updateSetting('baseLng', parseFloat(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Message */}
        {message && (
          <div className={`mt-6 p-4 rounded-md ${
            message.includes('successfully') 
              ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'
              : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
          }`}>
            {message}
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-2 rounded-md font-medium transition-colors"
          >
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>

        {/* Help Text */}
        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-4">
          <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-2">
            Location Settings Help
          </h3>
          <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
            <li>• The base location is used for calculating travel distances and costs</li>
            <li>• You can find coordinates for any address using Google Maps</li>
            <li>• Right-click on a location in Google Maps and select the coordinates</li>
            <li>• E10 5ZD coordinates: Lat: 51.5693, Lng: -0.0146</li>
          </ul>
        </div>
      </form>
    </div>
  );
}