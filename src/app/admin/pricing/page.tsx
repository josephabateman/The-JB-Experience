"use client";

import { useEffect, useState } from 'react';

interface PricingSettings {
  id: string;
  soloPrice: number;
  trioPrice: number;
  saxPrice: number;
  baseTravelCostPerMile: number;
  additionalPersonTravelCostPerMile: number;
  distanceSurcharge2Hours: number;
  distanceSurcharge5Hours: number;
  congestionChargePerPerson: number;
  distanceThreshold2Hours: number;
  distanceThreshold5Hours: number;
  updatedAt: string;
}

export default function PricingPage() {
  const [pricing, setPricing] = useState<PricingSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState<{username: string} | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/cms/auth/me');
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        loadPricing();
      } else {
        window.location.href = '/admin/login';
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      window.location.href = '/admin/login';
    }
  };

  const loadPricing = async () => {
    try {
      const response = await fetch('/api/cms/pricing');
      const data = await response.json();
      if (data.success) {
        setPricing(data.data);
      }
    } catch (error) {
      console.error('Failed to load pricing:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pricing) return;

    setSaving(true);
    setMessage('');

    try {
      const response = await fetch('/api/cms/pricing', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pricing),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Pricing settings saved successfully!');
        setPricing(data.data);
      } else {
        setMessage(data.error || 'Failed to save pricing settings');
      }
    } catch (error) {
      console.error('Failed to save pricing:', error);
      setMessage('Failed to save pricing settings');
    } finally {
      setSaving(false);
    }
  };

  const updateSetting = (key: keyof PricingSettings, value: any) => {
    if (!pricing) return;
    setPricing({ ...pricing, [key]: value });
  };

  const logout = async () => {
    try {
      await fetch('/api/cms/auth/logout', { method: 'POST' });
      window.location.href = '/admin/login';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Sample calculation
  const calculateSample = () => {
    if (!pricing) return null;

    const miles = 50;
    const hours = 1.5;
    const performanceType = 'trio';
    const inCongestionZone = false;

    const basePrice = performanceType === 'solo' ? pricing.soloPrice : pricing.trioPrice;
    const travelCost = miles * pricing.baseTravelCostPerMile;
    const timeSurcharge = hours >= pricing.distanceThreshold5Hours ? pricing.distanceSurcharge5Hours :
                          hours >= pricing.distanceThreshold2Hours ? pricing.distanceSurcharge2Hours : 0;
    const congestionCharge = inCongestionZone ? pricing.congestionChargePerPerson * 3 : 0;
    const total = basePrice + travelCost + timeSurcharge + congestionCharge;

    return {
      basePrice,
      travelCost,
      timeSurcharge,
      congestionCharge,
      total,
      miles,
      hours,
      performanceType
    };
  };

  const sample = calculateSample();

  if (!user) {
    return (
      <html lang="en">
        <head>
          <title>Loading...</title>
        </head>
        <body style={{fontFamily: 'system-ui', background: '#f3f4f6', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div>Loading...</div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <title>JB Experience CMS - Pricing Settings</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{
          __html: `
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: system-ui, -apple-system, sans-serif; background: #f3f4f6; min-height: 100vh; }
            
            .navbar { background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 1rem 0; }
            .navbar-content { max-width: 80rem; margin: 0 auto; padding: 0 1rem; display: flex; justify-content: space-between; align-items: center; }
            .logo { font-size: 1.25rem; font-weight: 600; color: #111827; }
            .nav-right { display: flex; align-items: center; gap: 1rem; }
            .welcome { font-size: 0.875rem; color: #6b7280; }
            .logout-btn { background: #dc2626; color: white; padding: 0.5rem 1rem; border: none; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; text-decoration: none; }
            .logout-btn:hover { background: #b91c1c; }
            
            .container { max-width: 80rem; margin: 0 auto; padding: 2rem 1rem; }
            .title { font-size: 1.875rem; font-weight: 700; color: #111827; margin-bottom: 1rem; }
            
            .nav-links { display: flex; gap: 1rem; margin-bottom: 2rem; }
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
            
            .message { padding: 0.75rem; border-radius: 0.375rem; margin-bottom: 1rem; }
            .message.success { background: #f0fdf4; color: #059669; border: 1px solid #bbf7d0; }
            .message.error { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; }
            
            .sample-calc { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.375rem; padding: 1rem; }
            .calc-row { display: flex; justify-content: space-between; margin-bottom: 0.5rem; }
            .calc-total { font-weight: 600; padding-top: 0.5rem; border-top: 1px solid #e2e8f0; }
            
            @media (max-width: 768px) {
              .grid-2 { grid-template-columns: 1fr; }
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
              <button onClick={logout} className="logout-btn">
                Logout
              </button>
            </div>
          </div>
        </nav>

        <div className="container">
          {/* Navigation Links */}
          <div className="nav-links">
            <a href="/admin" className="nav-link">← Dashboard</a>
            <a href="/admin/testimonials" className="nav-link">Testimonials</a>
            <a href="/admin/faq" className="nav-link">FAQ</a>
            <a href="/admin/settings" className="nav-link">Settings</a>
            <a href="/" className="nav-link">View Site</a>
          </div>

          <h1 className="title">Pricing Settings</h1>

          {loading ? (
            <div className="card">Loading pricing settings...</div>
          ) : (
            <div className="grid grid-2">
              <div className="card">
                <h2 className="card-title">Pricing Configuration</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="form-section">
                    <h3 className="section-title">Base Prices</h3>
                    
                    <div className="form-group">
                      <label className="label">Solo Performance (£)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={pricing?.soloPrice || ''}
                        onChange={(e) => updateSetting('soloPrice', parseFloat(e.target.value))}
                        className="input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="label">Trio Performance (£)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={pricing?.trioPrice || ''}
                        onChange={(e) => updateSetting('trioPrice', parseFloat(e.target.value))}
                        className="input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="label">Saxophone Player Add-on (£)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={pricing?.saxPrice || ''}
                        onChange={(e) => updateSetting('saxPrice', parseFloat(e.target.value))}
                        className="input"
                      />
                    </div>
                  </div>

                  <div className="form-section">
                    <h3 className="section-title">Travel Costs</h3>
                    
                    <div className="form-group">
                      <label className="label">Base Travel Cost per Mile (£)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={pricing?.baseTravelCostPerMile || ''}
                        onChange={(e) => updateSetting('baseTravelCostPerMile', parseFloat(e.target.value))}
                        className="input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="label">Additional Person Travel Cost per Mile (£)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={pricing?.additionalPersonTravelCostPerMile || ''}
                        onChange={(e) => updateSetting('additionalPersonTravelCostPerMile', parseFloat(e.target.value))}
                        className="input"
                      />
                    </div>
                  </div>

                  <div className="form-section">
                    <h3 className="section-title">Distance Surcharges</h3>
                    
                    <div className="form-group">
                      <label className="label">2+ Hours Travel Surcharge (£)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={pricing?.distanceSurcharge2Hours || ''}
                        onChange={(e) => updateSetting('distanceSurcharge2Hours', parseFloat(e.target.value))}
                        className="input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="label">5+ Hours Travel Surcharge (£)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={pricing?.distanceSurcharge5Hours || ''}
                        onChange={(e) => updateSetting('distanceSurcharge5Hours', parseFloat(e.target.value))}
                        className="input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="label">Congestion Charge per Person (£)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={pricing?.congestionChargePerPerson || ''}
                        onChange={(e) => updateSetting('congestionChargePerPerson', parseFloat(e.target.value))}
                        className="input"
                      />
                    </div>
                  </div>

                  {message && (
                    <div className={`message ${message.includes('success') ? 'success' : 'error'}`}>
                      {message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={saving}
                    className="button"
                  >
                    {saving ? 'Saving...' : 'Save Pricing Settings'}
                  </button>
                </form>
              </div>

              <div className="card">
                <h2 className="card-title">Sample Quote Calculation</h2>
                
                {sample && (
                  <div className="sample-calc">
                    <h4 style={{marginBottom: '1rem', fontWeight: '600'}}>
                      Example: Trio, {sample.miles} miles, {sample.hours}h travel
                    </h4>
                    
                    <div className="calc-row">
                      <span>Base Price ({sample.performanceType}):</span>
                      <span>£{sample.basePrice}</span>
                    </div>
                    
                    <div className="calc-row">
                      <span>Travel Cost ({sample.miles} miles):</span>
                      <span>£{sample.travelCost.toFixed(2)}</span>
                    </div>
                    
                    {sample.timeSurcharge > 0 && (
                      <div className="calc-row">
                        <span>Distance Surcharge:</span>
                        <span>£{sample.timeSurcharge}</span>
                      </div>
                    )}
                    
                    {sample.congestionCharge > 0 && (
                      <div className="calc-row">
                        <span>Congestion Charge:</span>
                        <span>£{sample.congestionCharge}</span>
                      </div>
                    )}
                    
                    <div className="calc-row calc-total">
                      <span><strong>Total:</strong></span>
                      <span><strong>£{sample.total.toFixed(2)}</strong></span>
                    </div>
                  </div>
                )}

                <div style={{marginTop: '1.5rem', fontSize: '0.875rem', color: '#6b7280'}}>
                  <h4 style={{fontWeight: '600', marginBottom: '0.5rem'}}>How Pricing Works:</h4>
                  <ul style={{listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: '1.5'}}>
                    <li>Base price depends on performance type</li>
                    <li>Travel cost = miles × base rate (+ extra for 4th person)</li>
                    <li>Distance surcharges apply for long journeys</li>
                    <li>Congestion charges apply in central London</li>
                    <li>All prices update automatically on the booking form</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </body>
    </html>
  );
}