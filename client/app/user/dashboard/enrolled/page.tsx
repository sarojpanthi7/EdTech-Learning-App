"use client";

export default function EnrolledCoursesPage() {
  // Dummy enrolled courses data
  const enrolledCourses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      progress: 75,
      lastAccessed: "2 days ago",
      nextLesson: "CSS Layouts",
    },
    {
      id: 2,
      title: "Advanced React Development",
      progress: 30,
      lastAccessed: "1 week ago",
      nextLesson: "React Hooks",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">My Enrolled Courses</h1>

      <div className="grid gap-6">
        {enrolledCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {course.title}
                </h3>
                <p className="text-gray-600 mt-1">
                  Last accessed: {course.lastAccessed}
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Progress</div>
                <div className="text-lg font-semibold text-blue-600">
                  {course.progress}%
                </div>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-gray-600">
                Next lesson:{" "}
                <span className="font-medium">{course.nextLesson}</span>
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Continue Learning
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
