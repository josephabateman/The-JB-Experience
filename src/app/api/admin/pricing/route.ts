import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JB Experience CMS - Pricing Settings</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; background: #f3f4f6; min-height: 100vh; }
    
    .navbar { background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 1rem 0; }
    .navbar-content { max-width: 80rem; margin: 0 auto; padding: 0 1rem; display: flex; justify-content: space-between; align-items: center; }
    .logo { font-size: 1.25rem; font-weight: 600; color: #111827; }
    .nav-right { display: flex; align-items: center; gap: 1rem; }
    .welcome { font-size: 0.875rem; color: #6b7280; }
    .logout-btn { background: #dc2626; color: white; padding: 0.5rem 1rem; border: none; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; }
    .logout-btn:hover { background: #b91c1c; }
    
    .container { max-width: 80rem; margin: 0 auto; padding: 2rem 1rem; }
    .title { font-size: 1.875rem; font-weight: 700; color: #111827; margin-bottom: 2rem; }
    
    .nav-links { display: flex; gap: 1rem; margin-bottom: 1rem; }
    .nav-link { color: #4f46e5; text-decoration: none; font-weight: 500; }
    .nav-link:hover { text-decoration: underline; }
    
    .grid { display: grid; gap: 2rem; }
    .grid-2 { grid-template-columns: 1fr 1fr; }
    
    .card { background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 1.5rem; }
    .card-title { font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1.5rem; }
    
    .form-section { margin-bottom: 2rem; }
    .section-title { font-size: 1rem; font-weight: 600; color: #374151; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid #e5e7eb; }
    
    .form-group { margin-bottom: 1rem; }
    .label { display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem; }
    .input { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; }
    .input:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
    
    .button { background: #4f46e5; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; }
    .button:hover { background: #4338ca; }
    .button:disabled { background: #9ca3af; cursor: not-allowed; }
    
    .message { padding: 0.75rem; border-radius: 0.375rem; margin-bottom: 1rem; display: none; }
    .message.success { background: #f0fdf4; color: #059669; border: 1px solid #bbf7d0; }
    .message.error { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; }
    
    .sample-calc { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.375rem; padding: 1rem; }
    .calc-row { display: flex; justify-content: space-between; margin-bottom: 0.5rem; }
    .calc-total { font-weight: 600; padding-top: 0.5rem; border-top: 1px solid #e2e8f0; }
    
    @media (max-width: 768px) {
      .grid-2 { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar">
    <div class="navbar-content">
      <h1 class="logo">JB Experience CMS</h1>
      <div class="nav-right">
        <span class="welcome">Welcome, <span id="username">admin</span></span>
        <button onclick="logout()" class="logout-btn">Logout</button>
      </div>
    </div>
  </nav>

  <div class="container">
    <!-- Navigation Links -->
    <div class="nav-links">
      <a href="/api/admin/dashboard" class="nav-link">← Dashboard</a>
      <a href="/api/admin/testimonials" class="nav-link">Testimonials</a>
      <a href="/api/admin/settings" class="nav-link">Settings</a>
      <a href="/" class="nav-link">View Site</a>
    </div>

    <h1 class="title">Pricing Settings</h1>

    <div id="loading" style="text-align: center; padding: 2rem; color: #6b7280;">
      Loading pricing settings...
    </div>

    <div id="pricing-content" style="display: none;">
      <div class="grid grid-2">
        <div class="card">
          <h2 class="card-title">Pricing Configuration</h2>
          
          <form id="pricing-form">
            <div class="form-section">
              <h3 class="section-title">Base Prices</h3>
              
              <div class="form-group">
                <label class="label">Solo Performance (£)</label>
                <input type="number" step="0.01" id="soloPrice" class="input">
              </div>

              <div class="form-group">
                <label class="label">Trio Performance (£)</label>
                <input type="number" step="0.01" id="trioPrice" class="input">
              </div>

              <div class="form-group">
                <label class="label">Saxophone Player Add-on (£)</label>
                <input type="number" step="0.01" id="saxPrice" class="input">
              </div>
            </div>

            <div class="form-section">
              <h3 class="section-title">Travel Costs</h3>
              
              <div class="form-group">
                <label class="label">Base Travel Cost per Mile (£)</label>
                <input type="number" step="0.01" id="baseTravelCostPerMile" class="input">
              </div>

              <div class="form-group">
                <label class="label">Additional Person Travel Cost per Mile (£)</label>
                <input type="number" step="0.01" id="additionalPersonTravelCostPerMile" class="input">
              </div>
            </div>

            <div class="form-section">
              <h3 class="section-title">Distance Surcharges</h3>
              
              <div class="form-group">
                <label class="label">2+ Hours Travel Surcharge (£)</label>
                <input type="number" step="0.01" id="distanceSurcharge2Hours" class="input">
              </div>

              <div class="form-group">
                <label class="label">5+ Hours Travel Surcharge (£)</label>
                <input type="number" step="0.01" id="distanceSurcharge5Hours" class="input">
              </div>

              <div class="form-group">
                <label class="label">Congestion Charge per Person (£)</label>
                <input type="number" step="0.01" id="congestionChargePerPerson" class="input">
              </div>
            </div>

            <div id="message" class="message"></div>

            <button type="submit" id="submit-btn" class="button">
              Save Pricing Settings
            </button>
          </form>
        </div>

        <div class="card">
          <h2 class="card-title">Sample Quote Calculation</h2>
          
          <div id="sample-calc" class="sample-calc">
            <h4 style="margin-bottom: 1rem; font-weight: 600;">
              Example: Trio, 50 miles, 1.5h travel
            </h4>
            <!-- Sample calculation will be populated by JavaScript -->
          </div>

          <div style="margin-top: 1.5rem; font-size: 0.875rem; color: #6b7280;">
            <h4 style="font-weight: 600; margin-bottom: 0.5rem;">How Pricing Works:</h4>
            <ul style="list-style: disc; padding-left: 1.5rem; line-height: 1.5;">
              <li>Base price depends on performance type</li>
              <li>Travel cost = miles × base rate (+ extra for 4th person)</li>
              <li>Distance surcharges apply for long journeys</li>
              <li>Congestion charges apply in central London</li>
              <li>All prices update automatically on the booking form</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    let pricing = null;

    async function init() {
      try {
        // Check authentication
        const authResponse = await fetch('/api/cms/auth/me');
        if (!authResponse.ok) {
          window.location.href = '/api/admin/login';
          return;
        }
        
        const authData = await authResponse.json();
        document.getElementById('username').textContent = authData.user.username;
        
        await loadPricing();
      } catch (error) {
        console.error('Init failed:', error);
        window.location.href = '/api/admin/login';
      }
    }

    async function loadPricing() {
      try {
        const response = await fetch('/api/cms/pricing');
        const data = await response.json();
        
        if (data.success) {
          pricing = data.data;
          populateForm();
          updateSampleCalc();
        } else {
          showMessage('Failed to load pricing settings', 'error');
        }
      } catch (error) {
        console.error('Failed to load pricing:', error);
        showMessage('Failed to load pricing settings', 'error');
      } finally {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('pricing-content').style.display = 'block';
      }
    }

    function populateForm() {
      if (!pricing) return;
      
      document.getElementById('soloPrice').value = pricing.soloPrice;
      document.getElementById('trioPrice').value = pricing.trioPrice;
      document.getElementById('saxPrice').value = pricing.saxPrice;
      document.getElementById('baseTravelCostPerMile').value = pricing.baseTravelCostPerMile;
      document.getElementById('additionalPersonTravelCostPerMile').value = pricing.additionalPersonTravelCostPerMile;
      document.getElementById('distanceSurcharge2Hours').value = pricing.distanceSurcharge2Hours;
      document.getElementById('distanceSurcharge5Hours').value = pricing.distanceSurcharge5Hours;
      document.getElementById('congestionChargePerPerson').value = pricing.congestionChargePerPerson;
    }

    function updateSampleCalc() {
      if (!pricing) return;

      const miles = 50;
      const hours = 1.5;
      const performanceType = 'trio';
      const inCongestionZone = false;

      const basePrice = pricing.trioPrice;
      const travelCost = miles * pricing.baseTravelCostPerMile;
      const timeSurcharge = hours >= pricing.distanceThreshold5Hours ? pricing.distanceSurcharge5Hours :
                            hours >= pricing.distanceThreshold2Hours ? pricing.distanceSurcharge2Hours : 0;
      const congestionCharge = inCongestionZone ? pricing.congestionChargePerPerson * 3 : 0;
      const total = basePrice + travelCost + timeSurcharge + congestionCharge;

      document.getElementById('sample-calc').innerHTML = \`
        <h4 style="margin-bottom: 1rem; font-weight: 600;">
          Example: Trio, \${miles} miles, \${hours}h travel
        </h4>
        
        <div class="calc-row">
          <span>Base Price (\${performanceType}):</span>
          <span>£\${basePrice}</span>
        </div>
        
        <div class="calc-row">
          <span>Travel Cost (\${miles} miles):</span>
          <span>£\${travelCost.toFixed(2)}</span>
        </div>
        
        \${timeSurcharge > 0 ? \`
          <div class="calc-row">
            <span>Distance Surcharge:</span>
            <span>£\${timeSurcharge}</span>
          </div>
        \` : ''}
        
        \${congestionCharge > 0 ? \`
          <div class="calc-row">
            <span>Congestion Charge:</span>
            <span>£\${congestionCharge}</span>
          </div>
        \` : ''}
        
        <div class="calc-row calc-total">
          <span><strong>Total:</strong></span>
          <span><strong>£\${total.toFixed(2)}</strong></span>
        </div>
      \`;
    }

    document.getElementById('pricing-form').addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = document.getElementById('submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Saving...';

      const formData = {
        soloPrice: parseFloat(document.getElementById('soloPrice').value),
        trioPrice: parseFloat(document.getElementById('trioPrice').value),
        saxPrice: parseFloat(document.getElementById('saxPrice').value),
        baseTravelCostPerMile: parseFloat(document.getElementById('baseTravelCostPerMile').value),
        additionalPersonTravelCostPerMile: parseFloat(document.getElementById('additionalPersonTravelCostPerMile').value),
        distanceSurcharge2Hours: parseFloat(document.getElementById('distanceSurcharge2Hours').value),
        distanceSurcharge5Hours: parseFloat(document.getElementById('distanceSurcharge5Hours').value),
        congestionChargePerPerson: parseFloat(document.getElementById('congestionChargePerPerson').value),
      };

      try {
        const response = await fetch('/api/cms/pricing', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.success) {
          pricing = data.data;
          updateSampleCalc();
          showMessage('Pricing settings saved successfully!', 'success');
        } else {
          showMessage(data.error || 'Failed to save pricing settings', 'error');
        }
      } catch (error) {
        console.error('Save failed:', error);
        showMessage('Failed to save pricing settings', 'error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Save Pricing Settings';
      }
    });

    function showMessage(text, type) {
      const messageDiv = document.getElementById('message');
      messageDiv.textContent = text;
      messageDiv.className = \`message \${type}\`;
      messageDiv.style.display = 'block';
      
      setTimeout(() => {
        messageDiv.style.display = 'none';
      }, 5000);
    }

    async function logout() {
      try {
        await fetch('/api/cms/auth/logout', { method: 'POST' });
        window.location.href = '/api/admin/login';
      } catch (error) {
        console.error('Logout failed:', error);
      }
    }

    // Initialize when page loads
    init();
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