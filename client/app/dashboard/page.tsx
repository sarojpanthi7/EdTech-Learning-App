"use client";

import { useAuth } from "@/context/AuthContext";
import {
  AcademicCapIcon,
  BookOpenIcon,
  UserGroupIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    name: "Total Courses",
    value: "12",
    icon: BookOpenIcon,
    change: "+4.75%",
    changeType: "positive",
  },
  {
    name: "Active Students",
    value: "573",
    icon: UserGroupIcon,
    change: "+54.02%",
    changeType: "positive",
  },
  {
    name: "Course Completion",
    value: "89%",
    icon: AcademicCapIcon,
    change: "+1.39%",
    changeType: "positive",
  },
  {
    name: "Average Score",
    value: "85%",
    icon: ChartBarIcon,
    change: "+10.18%",
    changeType: "positive",
  },
];

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome back, {user?.name}!
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Here's what's happening with your courses today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-blue-500 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {item.value}
              </p>
              <p
                className={`ml-2 flex items-baseline text-sm font-semibold ${
                  item.changeType === "positive"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {item.change}
              </p>
            </dd>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
        <div className="mt-4 overflow-hidden rounded-lg bg-white shadow">
          <ul role="list" className="divide-y divide-gray-200">
            {[1, 2, 3].map((item) => (
              <li key={item} className="px-6 py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-gray-200" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900">
                      New student enrolled in Web Development Course
                    </p>
                    <p className="truncate text-sm text-gray-500">
                      2 hours ago
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
