"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Trophy,
  PlayCircle,
  ChevronRight,
  Star,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Clock,
  Award,
  Sparkles,
  Brain,
  Target,
  Lightbulb,
} from "lucide-react";

export default function Home() {
  const { loading } = useAuth();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="rounded-full h-16 w-16 border-4 border-white/20 border-t-white"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [-20, 20, -20] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Hero Section */}
      <motion.main
        className="relative min-h-screen flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Navigation */}
        <motion.nav
          className="flex justify-between items-center p-6 lg:px-12"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg flex items-center justify-center"
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-2xl font-bold text-white">
              Saroj Learning
            </span>
          </div>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8 text-white/80">
              <a
                href="#features"
                className="hover:text-white transition-colors"
              >
                Features
              </a>
              <a href="#courses" className="hover:text-white transition-colors">
                Courses
              </a>
              <a
                href="#testimonials"
                className="hover:text-white transition-colors"
              >
                Reviews
              </a>
              <a href="#pricing" className="hover:text-white transition-colors">
                Pricing
              </a>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/login"
                className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Login
              </Link>
            </motion.div>
          </div>
        </motion.nav>

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-4 lg:px-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-center lg:text-left space-y-8"
              variants={itemVariants}
            >
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">AI-Powered Learning Platform</span>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
                variants={itemVariants}
              >
                Transform Your
                <motion.span
                  className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Learning Journey
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl text-white/80 max-w-2xl"
                variants={itemVariants}
              >
                Experience the future of education with our cutting-edge LMS
                platform. Interactive courses, AI-driven insights, and
                personalized learning paths that adapt to your unique style.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/login"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all shadow-2xl hover:shadow-pink-500/25"
                  >
                    Start Learning Free
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
                  >
                    Sign In
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-6 pt-8"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="text-white/80 text-sm">
                    50K+ Active Learners
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="text-white/80 text-sm ml-1">
                    4.9/5 Rating
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="relative" variants={itemVariants}>
              <motion.div
                className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
                variants={floatingVariants}
                animate="animate"
              >
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-4">
                    <BookOpen className="w-8 h-8 text-white mb-2" />
                    <div className="text-2xl font-bold text-white">2,400+</div>
                    <div className="text-white/60 text-sm">Courses</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl p-4">
                    <Users className="w-8 h-8 text-white mb-2" />
                    <div className="text-2xl font-bold text-white">50K+</div>
                    <div className="text-white/60 text-sm">Students</div>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-2xl p-4">
                    <Trophy className="w-8 h-8 text-white mb-2" />
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-white/60 text-sm">Success Rate</div>
                  </div>
                  <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-4">
                    <Award className="w-8 h-8 text-white mb-2" />
                    <div className="text-2xl font-bold text-white">15K+</div>
                    <div className="text-white/60 text-sm">Certificates</div>
                  </div>
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <PlayCircle className="w-5 h-5" />
                  <span>Watch Demo</span>
                </motion.button>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Brain className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center shadow-2xl"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Target className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.main>

      {/* Courses Section */}
      <motion.section
        id="courses"
        className="relative py-20 px-4 lg:px-12 bg-white/5 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Popular Courses
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover our most loved courses designed by industry experts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Full Stack Web Development",
                instructor: "Sarah Johnson",
                rating: 4.9,
                students: "12.5K",
                duration: "42 hours",
                price: "$79",
                image:
                  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
                category: "Development",
                level: "Beginner to Advanced",
              },
              {
                title: "Data Science & Machine Learning",
                instructor: "Dr. Michael Chen",
                rating: 4.8,
                students: "8.3K",
                duration: "38 hours",
                price: "$99",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
                category: "Data Science",
                level: "Intermediate",
              },
              {
                title: "Digital Marketing Mastery",
                instructor: "Emma Wilson",
                rating: 4.9,
                students: "15.2K",
                duration: "28 hours",
                price: "$59",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
                category: "Marketing",
                level: "All Levels",
              },
              {
                title: "UI/UX Design Fundamentals",
                instructor: "Alex Rodriguez",
                rating: 4.7,
                students: "9.8K",
                duration: "32 hours",
                price: "$69",
                image:
                  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop",
                category: "Design",
                level: "Beginner",
              },
              {
                title: "Mobile App Development",
                instructor: "James Park",
                rating: 4.8,
                students: "11.1K",
                duration: "45 hours",
                price: "$89",
                image:
                  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
                category: "Mobile",
                level: "Intermediate",
              },
              {
                title: "Business Analytics",
                instructor: "Lisa Zhang",
                rating: 4.9,
                students: "7.6K",
                duration: "35 hours",
                price: "$79",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
                category: "Business",
                level: "Advanced",
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded">
                      {course.level}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    by {course.instructor}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">
                          {course.rating}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-white/60" />
                        <span className="text-white/70 text-sm">
                          {course.students}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-white/60" />
                      <span className="text-white/70 text-sm">
                        {course.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                      {course.price}
                    </div>
                    <motion.button
                      className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all text-sm font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Enroll Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              View All Courses
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Reviews/Testimonials Section */}
      <motion.section
        id="testimonials"
        className="relative py-20 px-4 lg:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our Students Say
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Join thousands of satisfied learners who transformed their careers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Thompson",
                role: "Software Engineer at Google",
                avatar:
                  "https://images.unsplash.com/photo-1494790108755-2616b612b167?w=80&h=80&fit=crop&crop=face",
                rating: 5,
                review:
                  "The Full Stack course completely changed my career trajectory. The hands-on projects and expert guidance helped me land my dream job at Google!",
                course: "Full Stack Development",
              },
              {
                name: "Marcus Johnson",
                role: "Data Scientist at Microsoft",
                avatar:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
                rating: 5,
                review:
                  "Outstanding content and presentation. The Data Science course gave me practical skills I use daily. Best investment in my career!",
                course: "Data Science & ML",
              },
              {
                name: "Emily Chen",
                role: "Digital Marketing Manager",
                avatar:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
                rating: 5,
                review:
                  "Incredible value and comprehensive curriculum. I went from zero marketing knowledge to running successful campaigns for Fortune 500 companies.",
                course: "Digital Marketing",
              },
              {
                name: "David Rodriguez",
                role: "UX Designer at Airbnb",
                avatar:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
                rating: 5,
                review:
                  "The UI/UX course is phenomenal! Clear explanations, practical exercises, and real-world projects. Now I'm designing products used by millions.",
                course: "UI/UX Design",
              },
              {
                name: "Rachel Kim",
                role: "Mobile Developer at Spotify",
                avatar:
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
                rating: 5,
                review:
                  "Exceptional course structure and mentorship. The Mobile Development program equipped me with skills to build apps downloaded by thousands of users.",
                course: "Mobile Development",
              },
              {
                name: "Alex Parker",
                role: "Business Analyst at Tesla",
                avatar:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
                rating: 5,
                review:
                  "Game-changing experience! The Business Analytics course taught me to turn data into actionable insights. My recommendations now drive company strategy.",
                course: "Business Analytics",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-white/90 mb-6 leading-relaxed">
                  "{testimonial.review}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/70 text-sm">{testimonial.role}</p>
                    <p className="text-pink-400 text-xs mt-1">
                      {testimonial.course}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        id="pricing"
        className="relative py-20 px-4 lg:px-12 bg-white/5 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Choose Your Learning Plan
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Flexible pricing options to fit your learning goals and budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Free",
                price: "$0",
                period: "forever",
                description: "Perfect for getting started",
                features: [
                  "Access to 5 free courses",
                  "Basic community access",
                  "Mobile app access",
                  "Course completion certificates",
                  "Email support",
                ],
                buttonText: "Get Started Free",
                popular: false,
                gradient: "from-gray-500 to-gray-600",
              },
              {
                name: "Pro",
                price: "$29",
                period: "per month",
                description: "Most popular choice for learners",
                features: [
                  "Access to all 2,400+ courses",
                  "Premium community access",
                  "Offline course downloads",
                  "1-on-1 mentorship sessions",
                  "Priority support",
                  "Advanced analytics",
                  "Custom learning paths",
                  "Industry certifications",
                ],
                buttonText: "Start Pro Trial",
                popular: true,
                gradient: "from-pink-500 to-purple-600",
              },
              {
                name: "Enterprise",
                price: "$99",
                period: "per month",
                description: "For teams and organizations",
                features: [
                  "Everything in Pro",
                  "Team management tools",
                  "Custom course creation",
                  "Advanced reporting",
                  "API access",
                  "Dedicated account manager",
                  "Custom integrations",
                  "24/7 phone support",
                ],
                buttonText: "Contact Sales",
                popular: false,
                gradient: "from-blue-500 to-indigo-600",
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? "border-pink-500 bg-white/15 scale-105 shadow-2xl shadow-pink-500/20"
                    : "border-white/10 hover:bg-white/15"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: plan.popular ? 1.05 : 1.02, y: -5 }}
              >
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </motion.div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-white/70 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-white/80 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/login"
                    className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                    }`}
                  >
                    {plan.buttonText}
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-white/70 mb-4">
              All plans include 30-day money-back guarantee
            </p>
            <div className="flex items-center justify-center space-x-8 text-white/60 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Cancel Anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>Industry Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        id="features"
        className="relative py-20 px-4 lg:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Saroj Learning?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover the powerful features that make learning engaging,
              effective, and enjoyable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered Learning",
                description:
                  "Personalized learning paths that adapt to your pace and style",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: BarChart3,
                title: "Real-time Analytics",
                description:
                  "Track your progress with detailed insights and performance metrics",
                gradient: "from-blue-500 to-purple-500",
              },
              {
                icon: Globe,
                title: "Global Community",
                description:
                  "Connect with learners worldwide and share knowledge",
                gradient: "from-green-500 to-blue-500",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description:
                  "Enterprise-grade security with 99.9% uptime guarantee",
                gradient: "from-orange-500 to-red-500",
              },
              {
                icon: Clock,
                title: "Learn Anytime",
                description:
                  "Access courses 24/7 from any device, anywhere in the world",
                gradient: "from-teal-500 to-green-500",
              },
              {
                icon: Lightbulb,
                title: "Interactive Content",
                description: "Engaging videos, quizzes, and hands-on projects",
                gradient: "from-yellow-500 to-orange-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/70">{feature.description}</p>
                <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all absolute top-6 right-6" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="relative py-20 px-4 lg:px-12 bg-white/5 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Active Students", icon: Users },
              { number: "2,400+", label: "Course Library", icon: BookOpen },
              { number: "98%", label: "Success Rate", icon: Trophy },
              { number: "24/7", label: "Support Available", icon: Shield },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  className="text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="relative py-20 px-4 lg:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Learning Adventure?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of learners who are already transforming their
              careers
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <Link
                href="/login"
                className="group inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all shadow-2xl hover:shadow-pink-500/25"
              >
                Get Started Free
                <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-8 px-4 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg flex items-center justify-center"
            >
              <Sparkles className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-white font-semibold">Saroj Learning</span>
          </div>
          <p className="text-white/60 text-sm">
            © 2025 Saroj Learning. Empowering minds, transforming futures.
          </p>
        </div>
      </footer>
    </div>
  );
}
