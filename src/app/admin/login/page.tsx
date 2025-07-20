"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/cms/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/admin');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <html lang="en">
      <head>
        <title>JB Experience CMS - Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{
          __html: `
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: system-ui, -apple-system, sans-serif; background: #f3f4f6; min-height: 100vh; }
            .container { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 3rem 1rem; }
            .form-wrapper { width: 100%; max-width: 28rem; }
            .header { text-align: center; margin-bottom: 2rem; }
            .title { font-size: 1.875rem; font-weight: 800; color: #111827; margin-bottom: 0.5rem; }
            .subtitle { font-size: 0.875rem; color: #6b7280; }
            .form { margin-top: 2rem; }
            .input-group { position: relative; margin-bottom: 1rem; }
            .input { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; }
            .input:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
            .error { background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; padding: 0.75rem; border-radius: 0.375rem; font-size: 0.875rem; margin-bottom: 1rem; }
            .button { width: 100%; background: #4f46e5; color: white; padding: 0.75rem; border: none; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; margin-bottom: 1rem; }
            .button:hover { background: #4338ca; }
            .button:disabled { background: #9ca3af; cursor: not-allowed; }
            .info { background: #eff6ff; border: 1px solid #bfdbfe; color: #1e40af; padding: 1rem; border-radius: 0.375rem; font-size: 0.875rem; text-align: center; }
            .info strong { display: block; margin-bottom: 0.5rem; }
            .info small { font-size: 0.75rem; color: #1d4ed8; display: block; margin-top: 0.5rem; }
          `
        }} />
      </head>
      <body>
        <div className="container">
          <div className="form-wrapper">
            <div className="header">
              <h2 className="title">JB Experience CMS</h2>
              <p className="subtitle">Sign in to manage your website content</p>
            </div>
            
            <form className="form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input"
                  placeholder="Username"
                />
              </div>
              
              <div className="input-group">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                  placeholder="Password"
                />
              </div>

              {error && (
                <div className="error">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="button"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>

              <div className="info">
                <strong>Default Login:</strong>
                Username: admin<br />
                Password: JBExperience2024!
                <small>Please change these credentials after first login!</small>
              </div>
            </form>
          </div>
        </div>
      </body>
    </html>
  );
}