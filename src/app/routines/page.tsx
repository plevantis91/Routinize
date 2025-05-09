'use client';

import { useState } from 'react';
import { Plus, Calendar, Filter } from 'lucide-react';
import RoutineCard from '@/components/RoutineCard';
import { Routine } from '@/types';

// Mock data for demonstration
const mockRoutines: Routine[] = [
  {
    id: '1',
    name: 'Morning Ritual',
    description: 'Start the day with intention and energy',
    type: 'morning',
    duration: 90,
    startTime: '06:00',
    endTime: '07:30',
    isActive: false,
    isCompleted: true,
    tasks: [
      { id: '1', name: 'Meditation', duration: 15, isCompleted: true, order: 1 },
      { id: '2', name: 'Exercise', duration: 30, isCompleted: true, order: 2 },
      { id: '3', name: 'Journaling', duration: 15, isCompleted: true, order: 3 },
      { id: '4', name: 'Healthy Breakfast', duration: 30, isCompleted: true, order: 4 }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'Deep Work Block',
    description: 'Focused coding and development work',
    type: 'work',
    duration: 180,
    startTime: '09:00',
    endTime: '12:00',
    isActive: true,
    isCompleted: false,
    tasks: [
      { id: '5', name: 'Code Review', duration: 30, isCompleted: true, order: 1 },
      { id: '6', name: 'Feature Development', duration: 90, isCompleted: false, order: 2 },
      { id: '7', name: 'Architecture Planning', duration: 60, isCompleted: false, order: 3 }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    name: 'Health Check',
    description: 'Midday wellness and energy assessment',
    type: 'health',
    duration: 15,
    startTime: '14:00',
    endTime: '14:15',
    isActive: false,
    isCompleted: false,
    tasks: [
      { id: '8', name: 'Hydration Check', duration: 5, isCompleted: false, order: 1 },
      { id: '9', name: 'Posture Reset', duration: 5, isCompleted: false, order: 2 },
      { id: '10', name: 'Energy Assessment', duration: 5, isCompleted: false, order: 3 }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '4',
    name: 'Evening Wind-down',
    description: 'Prepare for rest and recovery',
    type: 'evening',
    duration: 60,
    startTime: '20:00',
    endTime: '21:00',
    isActive: false,
    isCompleted: false,
    tasks: [
      { id: '11', name: 'Digital Detox', duration: 20, isCompleted: false, order: 1 },
      { id: '12', name: 'Reading', duration: 20, isCompleted: false, order: 2 },
      { id: '13', name: 'Gratitude Practice', duration: 20, isCompleted: false, order: 3 }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export default function RoutinesPage() {
  const [routines, setRoutines] = useState<Routine[]>(mockRoutines);
  const [filter, setFilter] = useState<'all' | 'morning' | 'work' | 'health' | 'evening'>('all');

  const handleStart = (routineId: string) => {
    setRoutines(prev => prev.map(routine => 
      routine.id === routineId 
        ? { ...routine, isActive: true }
        : { ...routine, isActive: false }
    ));
  };

  const handlePause = (routineId: string) => {
    setRoutines(prev => prev.map(routine => 
      routine.id === routineId 
        ? { ...routine, isActive: false }
        : routine
    ));
  };

  const handleComplete = (routineId: string) => {
    setRoutines(prev => prev.map(routine => 
      routine.id === routineId 
        ? { ...routine, isCompleted: true, isActive: false }
        : routine
    ));
  };

  const handleEdit = (routineId: string) => {
    // TODO: Implement edit functionality
    console.log('Edit routine:', routineId);
  };

  const filteredRoutines = filter === 'all' 
    ? routines 
    : routines.filter(routine => routine.type === filter);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Routines</h1>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                {filteredRoutines.length} routines
              </span>
            </div>
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
        {/* Filters */}
        <div className="mb-6">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-gray-400" />
            <div className="flex space-x-2">
              {[
                { key: 'all', label: 'All' },
                { key: 'morning', label: 'Morning' },
                { key: 'work', label: 'Work' },
                { key: 'health', label: 'Health' },
                { key: 'evening', label: 'Evening' }
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key as any)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    filter === key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Routine Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoutines.map((routine) => (
            <RoutineCard
              key={routine.id}
              routine={routine}
              onStart={handleStart}
              onPause={handlePause}
              onComplete={handleComplete}
              onEdit={handleEdit}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredRoutines.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Calendar className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No routines found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {filter === 'all' 
                ? "Create your first routine to get started"
                : `No ${filter} routines found. Try a different filter.`
              }
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              <Plus className="h-4 w-4 inline mr-2" />
              Create Routine
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
