import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function SettingsPage() {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    notifications: true,
    newsletter: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement settings update logic
    alert('Settings updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
          
          <div className="bg-white rounded-lg shadow p-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full border rounded-md p-2"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full border rounded-md p-2"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Preferences</h2>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="notifications"
                        checked={formData.notifications}
                        onChange={(e) => setFormData({ ...formData, notifications: e.target.checked })}
                        className="h-4 w-4 rounded border-gray-300"
                      />
                      <label htmlFor="notifications" className="ml-2 text-sm">
                        Receive order notifications
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="newsletter"
                        checked={formData.newsletter}
                        onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                        className="h-4 w-4 rounded border-gray-300"
                      />
                      <label htmlFor="newsletter" className="ml-2 text-sm">
                        Subscribe to newsletter
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}