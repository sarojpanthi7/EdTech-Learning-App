"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { BookOpen, GraduationCap, User, Settings, Menu, X } from "lucide-react";
import RouteProgress from "@/components/RouteProgress";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { user, loading } = useAuth();
  const router = useRouter();

  const menuItems = [
    {
      title: "All Courses",
      href: "/user/dashboard",
      icon: BookOpen,
    },
    {
      title: "Enrolled Courses",
      href: "/user/dashboard/enrolled",
      icon: GraduationCap,
    },
    {
      title: "My Profile",
      href: "/user/dashboard/profile",
      icon: User,
    },
    {
      title: "Settings",
      href: "/user/dashboard/settings",
      icon: Settings,
    },
  ];

  useEffect(() => {
    // Only redirect if we're sure there's no user and not loading
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [user, loading, router]);

  // Show loading state during initial load
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // If we're not loading and there's no user, don't render anything
  if (!loading && !user) {
    return null;
  }

  // If we have a user but they're an admin, redirect to admin dashboard
  if (user && user.role === "admin") {
    router.replace("/dashboard");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <RouteProgress />
      <div className="flex h-screen overflow-hidden">
        {/* Mobile Sidebar Toggle */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-600 text-white md:hidden"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              Navi Learning
            </h2>
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main
          className={`min-h-screen transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-0"
          } md:ml-64`}
        >
          <div className="p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
