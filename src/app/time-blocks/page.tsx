'use client';

import { useState } from 'react';
import { Clock, Play, Pause, Square, RotateCcw, Plus } from 'lucide-react';
import TimeBlock from '@/components/TimeBlock';

interface TimeBlockData {
  id: string;
  title: string;
  duration: number;
  isActive: boolean;
  isCompleted: boolean;
}

export default function TimeBlocksPage() {
  const [timeBlocks, setTimeBlocks] = useState<TimeBlockData[]>([
    {
      id: '1',
      title: 'Deep Work Session',
      duration: 120, // 2 hours
      isActive: false,
      isCompleted: false
    },
    {
      id: '2',
      title: 'Code Review',
      duration: 60, // 1 hour
      isActive: false,
      isCompleted: true
    },
    {
      id: '3',
      title: 'Learning & Research',
      duration: 90, // 1.5 hours
      isActive: true,
      isCompleted: false
    }
  ]);

  const handleStart = (blockId: string) => {
    setTimeBlocks(prev => prev.map(block => ({
      ...block,
      isActive: block.id === blockId,
      isCompleted: block.id === blockId ? false : block.isCompleted
    })));
  };

  const handlePause = (blockId: string) => {
    setTimeBlocks(prev => prev.map(block => 
      block.id === blockId 
        ? { ...block, isActive: false }
        : block
    ));
  };

  const handleStop = (blockId: string) => {
    setTimeBlocks(prev => prev.map(block => 
      block.id === blockId 
        ? { ...block, isActive: false, isCompleted: true }
        : block
    ));
  };

  const handleReset = (blockId: string) => {
    setTimeBlocks(prev => prev.map(block => 
      block.id === blockId 
        ? { ...block, isActive: false, isCompleted: false }
        : block
    ));
  };

  const activeBlock = timeBlocks.find(block => block.isActive);
  const completedBlocks = timeBlocks.filter(block => block.isCompleted);
  const pendingBlocks = timeBlocks.filter(block => !block.isCompleted && !block.isActive);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Time Blocks</h1>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                {timeBlocks.length} blocks
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                <Plus className="h-4 w-4 inline mr-2" />
                New Block
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Active Block */}
        {activeBlock && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Currently Active
            </h2>
            <TimeBlock
              title={activeBlock.title}
              duration={activeBlock.duration}
              isActive={activeBlock.isActive}
              isCompleted={activeBlock.isCompleted}
              onStart={() => handleStart(activeBlock.id)}
              onPause={() => handlePause(activeBlock.id)}
              onStop={() => handleStop(activeBlock.id)}
              onReset={() => handleReset(activeBlock.id)}
            />
          </div>
        )}

        {/* Pending Blocks */}
        {pendingBlocks.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Pending Blocks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pendingBlocks.map((block) => (
                <TimeBlock
                  key={block.id}
                  title={block.title}
                  duration={block.duration}
                  isActive={block.isActive}
                  isCompleted={block.isCompleted}
                  onStart={() => handleStart(block.id)}
                  onPause={() => handlePause(block.id)}
                  onStop={() => handleStop(block.id)}
                  onReset={() => handleReset(block.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Completed Blocks */}
        {completedBlocks.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Completed Today
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedBlocks.map((block) => (
                <TimeBlock
                  key={block.id}
                  title={block.title}
                  duration={block.duration}
                  isActive={block.isActive}
                  isCompleted={block.isCompleted}
                  onStart={() => handleStart(block.id)}
                  onPause={() => handlePause(block.id)}
                  onStop={() => handleStop(block.id)}
                  onReset={() => handleReset(block.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {timeBlocks.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Clock className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No time blocks created
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Create your first time block to start structured work sessions
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              <Plus className="h-4 w-4 inline mr-2" />
              Create Time Block
            </button>
          </div>
        )}

        {/* Quick Stats */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Today's Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {completedBlocks.length}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {pendingBlocks.length}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Pending</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {activeBlock ? '1' : '0'}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Active</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {Math.round(completedBlocks.length / timeBlocks.length * 100) || 0}%
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Progress</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
