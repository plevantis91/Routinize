import { Clock, Target, CheckCircle, Plus, Calendar, TrendingUp, Home, Timer, Heart, Settings } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Routinize</h1>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">for makers</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                <Home className="h-4 w-4" />
                <span className="text-sm font-medium">Dashboard</span>
              </Link>
              <Link href="/routines" className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                <Target className="h-4 w-4" />
                <span className="text-sm font-medium">Routines</span>
              </Link>
              <Link href="/time-blocks" className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                <Timer className="h-4 w-4" />
                <span className="text-sm font-medium">Time Blocks</span>
              </Link>
              <Link href="/health" className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                <Heart className="h-4 w-4" />
                <span className="text-sm font-medium">Health</span>
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Calendar className="h-5 w-5" />
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                New Routine
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Today's Focus */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Today's Focus</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-lg font-medium text-gray-900 dark:text-white">Deep Work Block</span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">2h 30m remaining</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>

        {/* Routine Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Morning Routine */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Morning Ritual</h3>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Clock className="h-4 w-4 mr-2" />
                6:00 AM - 7:30 AM
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                • Meditation (15m)<br/>
                • Exercise (30m)<br/>
                • Journaling (15m)
              </div>
            </div>
          </div>

          {/* Work Blocks */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Deep Work</h3>
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Clock className="h-4 w-4 mr-2" />
                9:00 AM - 12:00 PM
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                • Code review<br/>
                • Feature development<br/>
                • Architecture planning
              </div>
            </div>
          </div>

          {/* Health Check */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Health Check</h3>
              <Target className="h-5 w-5 text-orange-500" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Clock className="h-4 w-4 mr-2" />
                2:00 PM - 2:15 PM
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                • Hydration check<br/>
                • Posture reset<br/>
                • Energy assessment
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link href="/routines" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="h-6 w-6 text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Routines</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Manage your daily routines and track completion
            </p>
            <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              View Routines →
            </div>
          </Link>

          <Link href="/time-blocks" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <Timer className="h-6 w-6 text-green-500" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Time Blocks</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Structured work sessions with focus timers
            </p>
            <div className="text-sm text-green-600 dark:text-green-400 font-medium">
              Start Timer →
            </div>
          </Link>

          <Link href="/health" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="h-6 w-6 text-red-500" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Health Check</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Track wellness metrics and energy levels
            </p>
            <div className="text-sm text-red-600 dark:text-red-400 font-medium">
              Check Health →
            </div>
          </Link>
        </div>

        {/* Progress Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Weekly Progress</h3>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">87%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">24h</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Deep Work</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">7</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Streak Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">12</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Routines</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
