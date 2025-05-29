"use client";

const stats = [
  { name: "Total Students", value: "1,234" },
  { name: "Active Courses", value: "45" },
  { name: "Total Revenue", value: "$45,678" },
  { name: "Completion Rate", value: "87%" },
];

export default function AnalyticsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">
        Analytics Dashboard
      </h1>
      <p className="mt-2 text-sm text-gray-700">
        Overview of your learning management system performance.
      </p>

      <div className="mt-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
            >
              <dt>
                <div className="absolute rounded-md bg-blue-500 p-3">
                  <div className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">
                  {stat.name}
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
              </dd>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Course Enrollment Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">
            Course Enrollment Trends
          </h3>
          <div className="mt-4 h-64 bg-gray-50 rounded flex items-center justify-center">
            <p className="text-gray-500">
              Chart visualization will be added here
            </p>
          </div>
        </div>

        {/* Student Activity Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">
            Student Activity Overview
          </h3>
          <div className="mt-4 h-64 bg-gray-50 rounded flex items-center justify-center">
            <p className="text-gray-500">
              Chart visualization will be added here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
