"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true,
  });

  const [theme, setTheme] = useState("light");

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
      <p className="mt-2 text-sm text-gray-700">
        Manage your account settings and preferences.
      </p>

      <div className="mt-8 space-y-6">
        {/* Notification Settings */}
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Notification Preferences
            </h3>
            <div className="mt-5 space-y-4">
              <div className="flex items-center">
                <input
                  id="email-notifications"
                  type="checkbox"
                  checked={notifications.email}
                  onChange={(e) =>
                    setNotifications({
                      ...notifications,
                      email: e.target.checked,
                    })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="email-notifications"
                  className="ml-3 text-sm font-medium text-gray-700"
                >
                  Email Notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="push-notifications"
                  type="checkbox"
                  checked={notifications.push}
                  onChange={(e) =>
                    setNotifications({
                      ...notifications,
                      push: e.target.checked,
                    })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="push-notifications"
                  className="ml-3 text-sm font-medium text-gray-700"
                >
                  Push Notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="weekly-digest"
                  type="checkbox"
                  checked={notifications.weekly}
                  onChange={(e) =>
                    setNotifications({
                      ...notifications,
                      weekly: e.target.checked,
                    })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="weekly-digest"
                  className="ml-3 text-sm font-medium text-gray-700"
                >
                  Weekly Digest
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Settings */}
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Theme Settings
            </h3>
            <div className="mt-5">
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
