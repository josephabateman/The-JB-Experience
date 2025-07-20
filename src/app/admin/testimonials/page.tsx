"use client";

import { useEffect, useState } from 'react';
import { Testimonial } from '@/lib/cms-types';

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

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      const response = await fetch('/api/cms/testimonials');
      const data = await response.json();
      if (data.success) {
        setTestimonials(data.data);
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

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-64 mb-6"></div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-40 mb-2"></div>
              <div className="h-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Testimonials
        </h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
        >
          Add Testimonial
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-screen overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {editingId ? 'Edit Testimonial' : 'Add New Testimonial'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Event *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.event}
                      onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                      placeholder="e.g., Wedding - London"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Testimonial Text *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Rating
                    </label>
                    <select
                      value={formData.rating}
                      onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                    >
                      {[5, 4, 3, 2, 1].map(rating => (
                        <option key={rating} value={rating}>{rating} Star{rating !== 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Display Order
                    </label>
                    <input
                      type="number"
                      value={formData.displayOrder}
                      onChange={(e) => setFormData({ ...formData, displayOrder: Number(e.target.value) })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.featured}
                        onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Featured</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.active}
                        onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Active</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-2 rounded-md font-medium transition-colors"
                  >
                    {submitting ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials List */}
      <div className="space-y-4">
        {testimonials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No testimonials yet.</p>
            <button
              onClick={() => setShowForm(true)}
              className="mt-4 text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Add your first testimonial
            </button>
          </div>
        ) : (
          testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.event}
                  </p>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-400">
                      {'★'.repeat(testimonial.rating)}
                    </span>
                    {testimonial.featured && (
                      <span className="ml-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                    {!testimonial.active && (
                      <span className="ml-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs px-2 py-1 rounded">
                        Inactive
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(testimonial)}
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(testimonial.id)}
                    className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                Order: {testimonial.displayOrder} | Updated: {new Date(testimonial.updatedAt).toLocaleDateString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}