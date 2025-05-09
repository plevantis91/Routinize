export interface Routine {
  id: string;
  name: string;
  description: string;
  type: 'morning' | 'work' | 'health' | 'evening';
  duration: number; // in minutes
  startTime: string; // HH:MM format
  endTime: string; // HH:MM format
  isActive: boolean;
  isCompleted: boolean;
  tasks: RoutineTask[];
  createdAt: Date;
  updatedAt: Date;
}

export interface RoutineTask {
  id: string;
  name: string;
  duration: number; // in minutes
  isCompleted: boolean;
  order: number;
}

export interface TimeBlock {
  id: string;
  title: string;
  duration: number; // in minutes
  isActive: boolean;
  isCompleted: boolean;
  startTime?: Date;
  endTime?: Date;
  notes?: string;
}

export interface Progress {
  routineId: string;
  date: Date;
  completionRate: number; // 0-100
  totalTimeSpent: number; // in minutes
  streak: number;
}

export interface HealthCheck {
  id: string;
  date: Date;
  hydration: number; // 1-10 scale
  energy: number; // 1-10 scale
  focus: number; // 1-10 scale
  mood: number; // 1-10 scale
  notes?: string;
}

export interface HealthRecord {
  id: string;
  date: Date;
  data: {
    hydration: number;
    energy: number;
    focus: number;
    mood: number;
    notes: string;
  };
}
