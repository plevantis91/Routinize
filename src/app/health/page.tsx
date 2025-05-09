'use client';

import { useState } from 'react';
import { Heart, Brain, Droplets, Smile, Target, TrendingUp, Calendar } from 'lucide-react';
import HealthCheck from '@/components/HealthCheck';

interface HealthCheckData {
  hydration: number;
  energy: number;
  focus: number;
  mood: number;
  notes: string;
}

interface HealthRecord {
  id: string;
  date: Date;
  data: HealthCheckData;
}

export default function HealthPage() {
  const [healthRecords, setHealthRecords] = useState<HealthRecord[]>([
    {
      id: '1',
      date: new Date(),
      data: {
        hydration: 8,
        energy: 7,
        focus: 9,
        mood: 8,
        notes: 'Feeling great today! Had a good morning routine.'
      }
    },
    {
      id: '2',
      date: new Date(Date.now() - 86400000), // Yesterday
      data: {
        hydration: 6,
        energy: 5,
        focus: 6,
        mood: 7,
        notes: 'Tired from late night work. Need better sleep schedule.'
      }
    }
  ]);

  const handleSaveHealthCheck = (data: HealthCheckData) => {
    const newRecord: HealthRecord = {
      id: Date.now().toString(),
      date: new Date(),
      data
    };
    setHealthRecords(prev => [newRecord, ...prev]);
  };

  const getAverageScore = (records: HealthRecord[]) => {
    if (records.length === 0) return 0;
    const total = records.reduce((sum, record) => {
      return sum + record.data.hydration + record.data.energy + record.data.focus + record.data.mood;
    }, 0);
    return Math.round(total / (records.length * 4));
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600 dark:text-green-400';
    if (score >= 6) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 8) return 'bg-green-100 dark:bg-green-900';
    if (score >= 6) return 'bg-yellow-100 dark:bg-yellow-900';
    return 'bg-red-100 dark:bg-red-900';
  };

  const recentRecords = healthRecords.slice(0, 7); // Last 7 days
  const averageScore = getAverageScore(recentRecords);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Health Check</h1>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                {healthRecords.length} records
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Calendar className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Health Check Form */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Today's Health Check
          </h2>
          <HealthCheck onSave={handleSaveHealthCheck} />
        </div>

        {/* Health Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Droplets className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Hydration</span>
              </div>
              <span className={`text-2xl font-bold ${getScoreColor(healthRecords[0]?.data.hydration || 0)}`}>
                {healthRecords[0]?.data.hydration || 0}/10
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${(healthRecords[0]?.data.hydration || 0) * 10}%` }}
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Energy</span>
              </div>
              <span className={`text-2xl font-bold ${getScoreColor(healthRecords[0]?.data.energy || 0)}`}>
                {healthRecords[0]?.data.energy || 0}/10
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-red-500 h-2 rounded-full"
                style={{ width: `${(healthRecords[0]?.data.energy || 0) * 10}%` }}
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Focus</span>
              </div>
              <span className={`text-2xl font-bold ${getScoreColor(healthRecords[0]?.data.focus || 0)}`}>
                {healthRecords[0]?.data.focus || 0}/10
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-purple-500 h-2 rounded-full"
                style={{ width: `${(healthRecords[0]?.data.focus || 0) * 10}%` }}
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Smile className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Mood</span>
              </div>
              <span className={`text-2xl font-bold ${getScoreColor(healthRecords[0]?.data.mood || 0)}`}>
                {healthRecords[0]?.data.mood || 0}/10
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-yellow-500 h-2 rounded-full"
                style={{ width: `${(healthRecords[0]?.data.mood || 0) * 10}%` }}
              />
            </div>
          </div>
        </div>

        {/* Weekly Trend */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Weekly Trend</h3>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className={`text-3xl font-bold ${getScoreColor(averageScore)}`}>
                {averageScore}/10
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Average Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {recentRecords.length}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Days Tracked</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold ${getScoreColor(averageScore)}`}>
                {averageScore >= 8 ? 'Excellent' : averageScore >= 6 ? 'Good' : 'Needs Attention'}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Overall Status</div>
            </div>
          </div>
        </div>

        {/* Recent Records */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Health Checks
          </h3>
          <div className="space-y-4">
            {healthRecords.map((record) => (
              <div key={record.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {record.date.toLocaleDateString()}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreBgColor(getAverageScore([record]))} ${getScoreColor(getAverageScore([record]))}`}>
                    {getAverageScore([record])}/10
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Droplets className="h-4 w-4 text-blue-500" />
                    <span className="text-gray-600 dark:text-gray-400">{record.data.hydration}/10</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span className="text-gray-600 dark:text-gray-400">{record.data.energy}/10</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Brain className="h-4 w-4 text-purple-500" />
                    <span className="text-gray-600 dark:text-gray-400">{record.data.focus}/10</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Smile className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-600 dark:text-gray-400">{record.data.mood}/10</span>
                  </div>
                </div>
                {record.data.notes && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
                    "{record.data.notes}"
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
