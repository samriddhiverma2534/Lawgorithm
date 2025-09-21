import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Users, BookOpen, TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const quickStats = [
    {
      title: "Documents Processed",
      value: "12",
      icon: FileText,
      color: "bg-blue-500"
    },
    {
      title: "Lawyer Consultations",
      value: "3",
      icon: Users,
      color: "bg-green-500"
    },
    {
      title: "IPC Sections Viewed",
      value: "45",
      icon: BookOpen,
      color: "bg-purple-500"
    },
    {
      title: "Cases Tracked",
      value: "2",
      icon: TrendingUp,
      color: "bg-amber-500"
    }
  ];

  const recentActivity = [
    {
      type: "document",
      title: "Property Agreement Simplified",
      time: "2 hours ago",
      status: "completed",
      icon: FileText
    },
    {
      type: "lawyer",
      title: "Connected with Adv. Priya Sharma",
      time: "1 day ago",
      status: "pending",
      icon: Users
    },
    {
      type: "ipc",
      title: "Viewed IPC Section 420",
      time: "3 days ago",
      status: "completed",
      icon: BookOpen
    }
  ];

  const quickActions = [
    {
      title: "Simplify Document",
      description: "Upload a legal document for AI analysis",
      icon: FileText,
      path: "/document-simplifier",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Find Lawyer",
      description: "Connect with specialized legal experts",
      icon: Users,
      path: "/lawyer-connect",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Browse IPC",
      description: "Explore Indian Penal Code sections",
      icon: BookOpen,
      path: "/ipc-simplifier",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your legal matters today.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center">
                <div className={`${stat.color} rounded-lg p-3`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid gap-4">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-all"
                  onClick={() => navigate(action.path)}
                >
                  <div className="flex items-center">
                    <div className={`bg-gradient-to-r ${action.color} rounded-lg p-3`}>
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{action.title}</h3>
                      <p className="text-gray-600">{action.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-gray-100 rounded-full p-2">
                      <activity.icon className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    <div className="flex-shrink-0">
                      {activity.status === 'completed' ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <Clock className="h-4 w-4 text-amber-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Reminders */}
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-5 w-5 text-amber-600 mr-2" />
                <h3 className="text-lg font-semibold text-amber-900">Upcoming Reminders</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-amber-800">Property case hearing - Dec 15, 2024</p>
                <p className="text-sm text-amber-800">Document deadline - Dec 20, 2024</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}