'use client';

import { Clock, Play, Pause, Square, RotateCcw } from 'lucide-react';
import { useState, useEffect } from 'react';

interface TimeBlockProps {
  title: string;
  duration: number; // in minutes
  isActive: boolean;
  isCompleted: boolean;
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
  onReset: () => void;
}

export default function TimeBlock({ 
  title, 
  duration, 
  isActive, 
  isCompleted, 
  onStart, 
  onPause, 
  onStop, 
  onReset 
}: TimeBlockProps) {
  const [timeRemaining, setTimeRemaining] = useState(duration * 60); // Convert to seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeRemaining]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((duration * 60 - timeRemaining) / (duration * 60)) * 100;

  const handleStart = () => {
    setIsRunning(true);
    onStart();
  };

  const handlePause = () => {
    setIsRunning(false);
    onPause();
  };

  const handleStop = () => {
    setIsRunning(false);
    setTimeRemaining(duration * 60);
    onStop();
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeRemaining(duration * 60);
    onReset();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <div className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {formatTime(timeRemaining)}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-6">
        <div 
          className={`h-3 rounded-full transition-all duration-300 ${
            isCompleted ? 'bg-green-500' : 
            isActive ? 'bg-blue-500' : 'bg-gray-400'
          }`}
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Status */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${
            isCompleted ? 'bg-green-500' : 
            isActive ? 'bg-blue-500' : 'bg-gray-400'
          }`} />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {isCompleted ? 'Completed' : 
             isActive ? 'In Progress' : 'Ready'}
          </span>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {Math.round(progress)}% complete
        </span>
      </div>

      {/* Controls */}
      <div className="flex space-x-2">
        {!isCompleted && !isRunning && (
          <button
            onClick={handleStart}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <Play className="h-4 w-4" />
            <span>Start</span>
          </button>
        )}
        
        {isRunning && (
          <button
            onClick={handlePause}
            className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <Pause className="h-4 w-4" />
            <span>Pause</span>
          </button>
        )}

        {!isRunning && timeRemaining < duration * 60 && (
          <button
            onClick={handleStart}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <Play className="h-4 w-4" />
            <span>Resume</span>
          </button>
        )}

        <button
          onClick={handleStop}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
        >
          <Square className="h-4 w-4" />
          <span>Stop</span>
        </button>

        <button
          onClick={handleReset}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}
