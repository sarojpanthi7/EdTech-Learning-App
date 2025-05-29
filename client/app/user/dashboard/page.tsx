"use client";

export default function DashboardPage() {
  // Dummy course data
  const courses = [
    {
      id: 1,
      title: "Full stack Wordpress Development",
      description: "Essential wordpress concepts for developers",
      instructor: "Saroj Panthi",
      duration: "12 weeks",
      level: "Advanced",
    },
    {
      id: 2,
      title: "Advance Digital Marketing",
      description: "Digital Marketing Essentials from beginner to advance",
      instructor: "Saroj Panthi",
      duration: "12 weeks",
      level: "Advanced",
    },
    {
      id: 3,
      title: "Frontend web Development",
      description: "Learn the basics of HTML, CSS, and JavaScript, React",
      instructor: "Saroj Panthi",
      duration: "4 weeks",
      level: "Intermediate",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">All Courses</h1>
        {/* <div className="flex gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <input
            type="text"
            placeholder="Search courses..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {course.title}
                </h3>
                <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                  {course.level}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Instructor: {course.instructor}</span>
                <span>{course.duration}</span>
              </div>
              <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
