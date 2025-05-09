'use client';

import { Clock, CheckCircle, Play, Pause, MoreHorizontal } from 'lucide-react';
import { Routine } from '@/types';

interface RoutineCardProps {
  routine: Routine;
  onStart: (routineId: string) => void;
  onPause: (routineId: string) => void;
  onComplete: (routineId: string) => void;
  onEdit: (routineId: string) => void;
}

export default function RoutineCard({ 
  routine, 
  onStart, 
  onPause, 
  onComplete, 
  onEdit 
}: RoutineCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'morning': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'work': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'health': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'evening': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusIcon = () => {
    if (routine.isCompleted) {
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    }
    if (routine.isActive) {
      return <Pause className="h-5 w-5 text-blue-500" />;
    }
    return <Play className="h-5 w-5 text-gray-400" />;
  };

  const getStatusText = () => {
    if (routine.isCompleted) return 'Completed';
    if (routine.isActive) return 'In Progress';
    return 'Ready';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(routine.type)}`}>
            {routine.type.charAt(0).toUpperCase() + routine.type.slice(1)}
          </span>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{routine.name}</h3>
        </div>
        <div className="flex items-center space-x-2">
          {getStatusIcon()}
          <button className="p-1 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{routine.description}</p>

      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
        <Clock className="h-4 w-4 mr-2" />
        {routine.startTime} - {routine.endTime} ({routine.duration}m)
      </div>

      <div className="space-y-2 mb-4">
        {routine.tasks.map((task, index) => (
          <div key={task.id} className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${task.isCompleted ? 'bg-green-500' : 'bg-gray-300'}`} />
            <span className={`text-sm ${task.isCompleted ? 'line-through text-gray-500' : 'text-gray-700 dark:text-gray-300'}`}>
              {task.name} ({task.duration}m)
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400">{getStatusText()}</span>
        <div className="flex space-x-2">
          {!routine.isCompleted && !routine.isActive && (
            <button
              onClick={() => onStart(routine.id)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors"
            >
              Start
            </button>
          )}
          {routine.isActive && (
            <button
              onClick={() => onPause(routine.id)}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors"
            >
              Pause
            </button>
          )}
          {!routine.isCompleted && (
            <button
              onClick={() => onComplete(routine.id)}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors"
            >
              Complete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
