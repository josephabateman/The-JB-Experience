import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JB Experience CMS - Login</title>
  <style>
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
    .error { background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; padding: 0.75rem; border-radius: 0.375rem; font-size: 0.875rem; margin-bottom: 1rem; display: none; }
    .button { width: 100%; background: #4f46e5; color: white; padding: 0.75rem; border: none; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; margin-bottom: 1rem; }
    .button:hover { background: #4338ca; }
    .button:disabled { background: #9ca3af; cursor: not-allowed; }
    .info { background: #eff6ff; border: 1px solid #bfdbfe; color: #1e40af; padding: 1rem; border-radius: 0.375rem; font-size: 0.875rem; text-align: center; }
    .info strong { display: block; margin-bottom: 0.5rem; }
    .info small { font-size: 0.75rem; color: #1d4ed8; display: block; margin-top: 0.5rem; }
  </style>
</head>
<body>
  <div class="container">
    <div class="form-wrapper">
      <div class="header">
        <h2 class="title">JB Experience CMS</h2>
        <p class="subtitle">Sign in to manage your website content</p>
      </div>
      
      <form class="form" id="login-form">
        <div class="input-group">
          <input
            id="username"
            name="username"
            type="text"
            required
            class="input"
            placeholder="Username"
          />
        </div>
        
        <div class="input-group">
          <input
            id="password"
            name="password"
            type="password"
            required
            class="input"
            placeholder="Password"
          />
        </div>

        <div id="error" class="error"></div>

        <button type="submit" id="submit-btn" class="button">
          Sign in
        </button>

        <div class="info">
          <strong>CMS Login:</strong>
          Use your secure credentials<br />
          (Set via Vercel environment variables)
          <small>Contact admin if you don't have credentials</small>
        </div>
      </form>
    </div>
  </div>

  <script>
    document.getElementById('login-form').addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = document.getElementById('submit-btn');
      const errorDiv = document.getElementById('error');
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Signing in...';
      errorDiv.style.display = 'none';

      const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
      };

      try {
        const response = await fetch('/api/cms/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          window.location.href = '/api/admin/dashboard';
        } else {
          errorDiv.textContent = data.error || 'Login failed';
          errorDiv.style.display = 'block';
        }
      } catch (error) {
        errorDiv.textContent = 'Network error. Please try again.';
        errorDiv.style.display = 'block';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Sign in';
      }
    });
  </script>
</body>
</html>
  `;

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'no-store',
    },
  });
}