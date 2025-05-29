"use client";

import { useAuth } from "@/context/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-6 mb-8">
          <div className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-3xl text-gray-500">
              {user?.name?.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {user?.name}
            </h2>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Account Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <p className="mt-1 text-gray-900">{user?.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <p className="mt-1 text-gray-900">{user?.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Account Type
                </label>
                <p className="mt-1 text-gray-900 capitalize">{user?.role}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Learning Statistics
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Enrolled Courses
                </label>
                <p className="mt-1 text-gray-900">2 courses</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Completed Courses
                </label>
                <p className="mt-1 text-gray-900">0 courses</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Average Progress
                </label>
                <p className="mt-1 text-gray-900">52%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
