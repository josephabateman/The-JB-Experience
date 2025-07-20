"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface AdminUser {
  id: string;
  username: string;
  role: string;
}

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/cms/auth/me');
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          router.push('/admin/login');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/admin/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/cms/auth/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                JB Experience CMS
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Welcome, {user.username}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar and Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:block w-64 bg-white dark:bg-gray-800 shadow-sm">
          <div className="py-4">
            <nav className="space-y-1">
              <SidebarLink href="/admin" label="Dashboard" />
              <SidebarLink href="/admin/testimonials" label="Testimonials" />
              <SidebarLink href="/admin/faq" label="FAQ" />
              <SidebarLink href="/admin/settings" label="Settings" />
              <SidebarLink href="/" label="← Back to Site" external />
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 md:ml-0">
          <main className="py-6 px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ href, label, external = false }: { href: string; label: string; external?: boolean }) {
  const router = useRouter();
  
  const handleClick = (e: React.MouseEvent) => {
    if (!external) {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      {label}
    </a>
  );
}