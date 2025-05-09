'use client';

import { Heart, Brain, Droplets, Smile, Target } from 'lucide-react';
import { useState } from 'react';

interface HealthCheckProps {
  onSave: (data: HealthCheckData) => void;
}

interface HealthCheckData {
  hydration: number;
  energy: number;
  focus: number;
  mood: number;
  notes: string;
}

export default function HealthCheck({ onSave }: HealthCheckProps) {
  const [healthData, setHealthData] = useState<HealthCheckData>({
    hydration: 5,
    energy: 5,
    focus: 5,
    mood: 5,
    notes: ''
  });

  const handleSliderChange = (metric: keyof Omit<HealthCheckData, 'notes'>, value: number) => {
    setHealthData(prev => ({ ...prev, [metric]: value }));
  };

  const handleNotesChange = (notes: string) => {
    setHealthData(prev => ({ ...prev, notes }));
  };

  const handleSave = () => {
    onSave(healthData);
  };

  const getSliderColor = (value: number) => {
    if (value <= 3) return 'bg-red-500';
    if (value <= 6) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getSliderWidth = (value: number) => {
    return `${(value / 10) * 100}%`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Target className="h-5 w-5 text-orange-500" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Health Check</h3>
      </div>

      <div className="space-y-6">
        {/* Hydration */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Droplets className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Hydration</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{healthData.hydration}/10</span>
          </div>
          <div className="relative">
            <input
              type="range"
              min="1"
              max="10"
              value={healthData.hydration}
              onChange={(e) => handleSliderChange('hydration', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div 
              className={`absolute top-0 h-2 rounded-lg ${getSliderColor(healthData.hydration)}`}
              style={{ width: getSliderWidth(healthData.hydration) }}
            />
          </div>
        </div>

        {/* Energy */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Energy</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{healthData.energy}/10</span>
          </div>
          <div className="relative">
            <input
              type="range"
              min="1"
              max="10"
              value={healthData.energy}
              onChange={(e) => handleSliderChange('energy', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div 
              className={`absolute top-0 h-2 rounded-lg ${getSliderColor(healthData.energy)}`}
              style={{ width: getSliderWidth(healthData.energy) }}
            />
          </div>
        </div>

        {/* Focus */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Brain className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Focus</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{healthData.focus}/10</span>
          </div>
          <div className="relative">
            <input
              type="range"
              min="1"
              max="10"
              value={healthData.focus}
              onChange={(e) => handleSliderChange('focus', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div 
              className={`absolute top-0 h-2 rounded-lg ${getSliderColor(healthData.focus)}`}
              style={{ width: getSliderWidth(healthData.focus) }}
            />
          </div>
        </div>

        {/* Mood */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Smile className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Mood</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{healthData.mood}/10</span>
          </div>
          <div className="relative">
            <input
              type="range"
              min="1"
              max="10"
              value={healthData.mood}
              onChange={(e) => handleSliderChange('mood', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div 
              className={`absolute top-0 h-2 rounded-lg ${getSliderColor(healthData.mood)}`}
              style={{ width: getSliderWidth(healthData.mood) }}
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Notes
          </label>
          <textarea
            value={healthData.notes}
            onChange={(e) => handleNotesChange(e.target.value)}
            placeholder="How are you feeling? Any observations..."
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            rows={3}
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Save Health Check
        </button>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
