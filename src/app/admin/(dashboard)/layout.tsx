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

export default function AdminDashboardLayout({ children }: AdminLayoutProps) {
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
      <html lang="en">
        <head>
          <title>JB Experience CMS</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style dangerouslySetInnerHTML={{
            __html: `
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { font-family: system-ui, -apple-system, sans-serif; background: #f3f4f6; min-height: 100vh; }
              .loading { min-height: 100vh; display: flex; align-items: center; justify-content: center; }
              .spinner { width: 2rem; height: 2rem; border: 2px solid #e5e7eb; border-top: 2px solid #4f46e5; border-radius: 50%; animation: spin 1s linear infinite; }
              @keyframes spin { to { transform: rotate(360deg); } }
            `
          }} />
        </head>
        <body>
          <div className="loading">
            <div className="spinner"></div>
          </div>
        </body>
      </html>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <html lang="en">
      <head>
        <title>JB Experience CMS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{
          __html: `
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: system-ui, -apple-system, sans-serif; background: #f3f4f6; min-height: 100vh; }
            
            .navbar { background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .navbar-content { max-width: 80rem; margin: 0 auto; padding: 0 1rem; display: flex; justify-content: space-between; align-items: center; height: 4rem; }
            .logo { font-size: 1.25rem; font-weight: 600; color: #111827; }
            .nav-right { display: flex; align-items: center; gap: 1rem; }
            .welcome { font-size: 0.875rem; color: #6b7280; }
            .logout-btn { background: #dc2626; color: white; padding: 0.5rem 1rem; border: none; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; }
            .logout-btn:hover { background: #b91c1c; }
            
            .main-container { display: flex; min-height: calc(100vh - 4rem); }
            .sidebar { width: 16rem; background: white; box-shadow: 1px 0 3px rgba(0,0,0,0.1); padding: 1rem 0; }
            .sidebar-nav { list-style: none; }
            .sidebar-link { display: block; padding: 0.75rem 1rem; color: #6b7280; text-decoration: none; font-size: 0.875rem; font-weight: 500; }
            .sidebar-link:hover { background: #f3f4f6; color: #111827; }
            
            .content { flex: 1; padding: 1.5rem; }
            
            .form { background: white; padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .form-title { font-size: 1.5rem; font-weight: 700; color: #111827; margin-bottom: 1.5rem; }
            .form-group { margin-bottom: 1rem; }
            .label { display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem; }
            .input { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; }
            .input:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
            .textarea { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; min-height: 6rem; resize: vertical; }
            .textarea:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
            .select { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; background: white; }
            .select:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
            .button { background: #4f46e5; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; }
            .button:hover { background: #4338ca; }
            .button:disabled { background: #9ca3af; cursor: not-allowed; }
            .button-secondary { background: #6b7280; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; }
            .button-secondary:hover { background: #374151; }
            
            .card { background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 1.5rem; margin-bottom: 1rem; }
            .card-title { font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem; }
            .card-text { color: #6b7280; font-size: 0.875rem; }
            
            .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; }
            .stat-card { background: white; padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .stat-title { font-size: 0.875rem; font-weight: 500; color: #6b7280; }
            .stat-value { font-size: 2rem; font-weight: 700; color: #4f46e5; margin-top: 0.5rem; }
            
            .modal { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; padding: 1rem; z-index: 50; }
            .modal-content { background: white; border-radius: 0.5rem; box-shadow: 0 10px 25px rgba(0,0,0,0.25); width: 100%; max-width: 42rem; max-height: 90vh; overflow-y: auto; }
            .modal-header { padding: 1.5rem; border-bottom: 1px solid #e5e7eb; }
            .modal-title { font-size: 1.25rem; font-weight: 700; color: #111827; }
            .modal-body { padding: 1.5rem; }
            .modal-footer { padding: 1.5rem; border-top: 1px solid #e5e7eb; display: flex; justify-content: flex-end; gap: 1rem; }
            
            .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
            .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
            
            .text-red { color: #dc2626; }
            .text-green { color: #059669; }
            .text-blue { color: #2563eb; }
            .text-gray { color: #6b7280; }
            
            .bg-red { background: #fef2f2; color: #dc2626; padding: 0.75rem; border-radius: 0.375rem; border: 1px solid #fecaca; }
            .bg-green { background: #f0fdf4; color: #059669; padding: 0.75rem; border-radius: 0.375rem; border: 1px solid #bbf7d0; }
            .bg-blue { background: #eff6ff; color: #2563eb; padding: 0.75rem; border-radius: 0.375rem; border: 1px solid #bfdbfe; }
            
            @media (max-width: 768px) {
              .main-container { flex-direction: column; }
              .sidebar { width: 100%; order: 2; }
              .content { order: 1; }
              .grid-2, .grid-3 { grid-template-columns: 1fr; }
            }
          `
        }} />
      </head>
      <body>
        {/* Navigation */}
        <nav className="navbar">
          <div className="navbar-content">
            <h1 className="logo">JB Experience CMS</h1>
            <div className="nav-right">
              <span className="welcome">Welcome, {user.username}</span>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </div>
          </div>
        </nav>

        <div className="main-container">
          {/* Sidebar */}
          <div className="sidebar">
            <nav className="sidebar-nav">
              <a href="/admin" className="sidebar-link">Dashboard</a>
              <a href="/admin/testimonials" className="sidebar-link">Testimonials</a>
              <a href="/admin/faq" className="sidebar-link">FAQ</a>
              <a href="/admin/settings" className="sidebar-link">Settings</a>
              <a href="/" className="sidebar-link">← Back to Site</a>
            </nav>
          </div>

          {/* Main Content */}
          <div className="content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}