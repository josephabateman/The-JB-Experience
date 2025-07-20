"use client";

import { useEffect, useState } from 'react';

interface Testimonial {
  id: string;
  name: string;
  event: string;
  text: string;
  rating: number;
  featured: boolean;
  displayOrder: number;
  active: boolean;
  updatedAt: string;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    event: '',
    text: '',
    rating: 5,
    featured: false,
    displayOrder: 999,
    active: true,
  });
  const [submitting, setSubmitting] = useState(false);
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
        loadTestimonials();
      } else {
        window.location.href = '/admin/login';
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      window.location.href = '/admin/login';
    }
  };

  const loadTestimonials = async () => {
    try {
      const response = await fetch('/api/cms/testimonials');
      const data = await response.json();
      if (data.success) {
        setTestimonials(data.data || []);
      }
    } catch (error) {
      console.error('Failed to load testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const url = editingId 
        ? `/api/cms/testimonials/${editingId}`
        : '/api/cms/testimonials';
      
      const method = editingId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        await loadTestimonials();
        resetForm();
      } else {
        alert(data.error || 'Failed to save testimonial');
      }
    } catch (error) {
      console.error('Failed to save testimonial:', error);
      alert('Failed to save testimonial');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (testimonial: Testimonial) => {
    setFormData({
      name: testimonial.name,
      event: testimonial.event,
      text: testimonial.text,
      rating: testimonial.rating,
      featured: testimonial.featured,
      displayOrder: testimonial.displayOrder,
      active: testimonial.active,
    });
    setEditingId(testimonial.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) {
      return;
    }

    try {
      const response = await fetch(`/api/cms/testimonials/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        await loadTestimonials();
      } else {
        alert(data.error || 'Failed to delete testimonial');
      }
    } catch (error) {
      console.error('Failed to delete testimonial:', error);
      alert('Failed to delete testimonial');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      event: '',
      text: '',
      rating: 5,
      featured: false,
      displayOrder: 999,
      active: true,
    });
    setEditingId(null);
    setShowForm(false);
  };

  const logout = async () => {
    try {
      await fetch('/api/cms/auth/logout', { method: 'POST' });
      window.location.href = '/admin/login';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

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
        <title>JB Experience CMS - Testimonials</title>
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
            .logout-btn { background: #dc2626; color: white; padding: 0.5rem 1rem; border: none; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; }
            .logout-btn:hover { background: #b91c1c; }
            
            .container { max-width: 80rem; margin: 0 auto; padding: 2rem 1rem; }
            .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
            .title { font-size: 1.875rem; font-weight: 700; color: #111827; }
            .button { background: #4f46e5; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; text-decoration: none; display: inline-block; }
            .button:hover { background: #4338ca; }
            .button:disabled { background: #9ca3af; cursor: not-allowed; }
            .button-danger { background: #dc2626; }
            .button-danger:hover { background: #b91c1c; }
            
            .nav-links { display: flex; gap: 1rem; margin-bottom: 1rem; }
            .nav-link { color: #4f46e5; text-decoration: none; font-weight: 500; }
            .nav-link:hover { text-decoration: underline; }
            
            .card { background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 1.5rem; margin-bottom: 1rem; }
            .card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; }
            .card-title { font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem; }
            .card-meta { font-size: 0.875rem; color: #6b7280; margin-bottom: 0.5rem; }
            .card-text { color: #374151; line-height: 1.5; margin-bottom: 1rem; }
            .card-actions { display: flex; gap: 0.5rem; }
            
            .badge { font-size: 0.75rem; padding: 0.25rem 0.5rem; border-radius: 0.25rem; }
            .badge-blue { background: #eff6ff; color: #1d4ed8; }
            .badge-red { background: #fef2f2; color: #dc2626; }
            
            .modal { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; padding: 1rem; z-index: 50; }
            .modal-content { background: white; border-radius: 0.5rem; box-shadow: 0 10px 25px rgba(0,0,0,0.25); width: 100%; max-width: 42rem; max-height: 90vh; overflow-y: auto; }
            .modal-header { padding: 1.5rem; border-bottom: 1px solid #e5e7eb; }
            .modal-title { font-size: 1.25rem; font-weight: 700; color: #111827; }
            .modal-body { padding: 1.5rem; }
            .modal-footer { padding: 1.5rem; border-top: 1px solid #e5e7eb; display: flex; justify-content: flex-end; gap: 1rem; }
            
            .form-group { margin-bottom: 1rem; }
            .label { display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem; }
            .input { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; }
            .input:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
            .textarea { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; min-height: 6rem; resize: vertical; }
            .textarea:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
            .select { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; background: white; }
            .select:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
            .checkbox { margin-right: 0.5rem; }
            
            .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
            .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
            
            @media (max-width: 768px) {
              .grid-2, .grid-3 { grid-template-columns: 1fr; }
              .header { flex-direction: column; gap: 1rem; align-items: stretch; }
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
            <a href="/admin/pricing" className="nav-link">Pricing</a>
            <a href="/admin/settings" className="nav-link">Settings</a>
            <a href="/" className="nav-link">View Site</a>
          </div>

          <div className="header">
            <h1 className="title">Manage Testimonials</h1>
            <button onClick={() => setShowForm(true)} className="button">
              Add Testimonial
            </button>
          </div>

          {/* Form Modal */}
          {showForm && (
            <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title">
                    {editingId ? 'Edit Testimonial' : 'Add New Testimonial'}
                  </h2>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="modal-body">
                    <div className="grid-2">
                      <div className="form-group">
                        <label className="label">Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="input"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label className="label">Event *</label>
                        <input
                          type="text"
                          required
                          value={formData.event}
                          onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                          placeholder="e.g., Wedding - London"
                          className="input"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="label">Testimonial Text *</label>
                      <textarea
                        required
                        value={formData.text}
                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                        className="textarea"
                      />
                    </div>

                    <div className="grid-3">
                      <div className="form-group">
                        <label className="label">Rating</label>
                        <select
                          value={formData.rating}
                          onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                          className="select"
                        >
                          {[5, 4, 3, 2, 1].map(rating => (
                            <option key={rating} value={rating}>{rating} Star{rating !== 1 ? 's' : ''}</option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="label">Display Order</label>
                        <input
                          type="number"
                          value={formData.displayOrder}
                          onChange={(e) => setFormData({ ...formData, displayOrder: Number(e.target.value) })}
                          className="input"
                        />
                      </div>

                      <div className="form-group">
                        <label style={{display: 'block', marginBottom: '0.5rem'}}>
                          <input
                            type="checkbox"
                            checked={formData.featured}
                            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                            className="checkbox"
                          />
                          Featured
                        </label>
                        
                        <label style={{display: 'block'}}>
                          <input
                            type="checkbox"
                            checked={formData.active}
                            onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                            className="checkbox"
                          />
                          Active
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      onClick={resetForm}
                      style={{background: '#6b7280', color: 'white', padding: '0.75rem 1.5rem', border: 'none', borderRadius: '0.375rem', cursor: 'pointer'}}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="button"
                    >
                      {submitting ? 'Saving...' : 'Save'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Testimonials List */}
          {loading ? (
            <div className="card">Loading testimonials...</div>
          ) : testimonials.length === 0 ? (
            <div className="card">
              <p style={{textAlign: 'center', color: '#6b7280'}}>No testimonials yet.</p>
              <div style={{textAlign: 'center', marginTop: '1rem'}}>
                <button onClick={() => setShowForm(true)} className="button">
                  Add your first testimonial
                </button>
              </div>
            </div>
          ) : (
            testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card">
                <div className="card-header">
                  <div style={{flex: 1}}>
                    <h3 className="card-title">{testimonial.name}</h3>
                    <p className="card-meta">{testimonial.event}</p>
                    <div style={{display: 'flex', gap: '0.5rem', marginBottom: '0.5rem'}}>
                      <span style={{color: '#f59e0b'}}>
                        {'★'.repeat(testimonial.rating)}
                      </span>
                      {testimonial.featured && (
                        <span className="badge badge-blue">Featured</span>
                      )}
                      {!testimonial.active && (
                        <span className="badge badge-red">Inactive</span>
                      )}
                    </div>
                  </div>
                  <div className="card-actions">
                    <button
                      onClick={() => handleEdit(testimonial)}
                      className="button"
                      style={{padding: '0.5rem 1rem', fontSize: '0.75rem'}}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(testimonial.id)}
                      className="button button-danger"
                      style={{padding: '0.5rem 1rem', fontSize: '0.75rem'}}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p className="card-text">
                  &quot;{testimonial.text}&quot;
                </p>
                <div style={{fontSize: '0.75rem', color: '#9ca3af'}}>
                  Order: {testimonial.displayOrder} | Updated: {new Date(testimonial.updatedAt).toLocaleDateString()}
                </div>
              </div>
            ))
          )}
        </div>
      </body>
    </html>
  );
}