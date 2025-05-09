import { Routine, HealthRecord, TimeBlock } from '@/types';

// Local storage keys
const ROUTINES_KEY = 'routinize-routines';
const HEALTH_RECORDS_KEY = 'routinize-health-records';
const TIME_BLOCKS_KEY = 'routinize-time-blocks';

// Generic storage functions
export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    if (typeof window === 'undefined') return defaultValue;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading from localStorage key "${key}":`, error);
      return defaultValue;
    }
  },

  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing to localStorage key "${key}":`, error);
    }
  },

  remove: (key: string): void => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  }
};

// Routine-specific functions
export const routineStorage = {
  getRoutines: (): Routine[] => {
    return storage.get(ROUTINES_KEY, []);
  },

  saveRoutines: (routines: Routine[]): void => {
    storage.set(ROUTINES_KEY, routines);
  },

  addRoutine: (routine: Routine): void => {
    const routines = routineStorage.getRoutines();
    routines.push(routine);
    routineStorage.saveRoutines(routines);
  },

  updateRoutine: (id: string, updates: Partial<Routine>): void => {
    const routines = routineStorage.getRoutines();
    const index = routines.findIndex(r => r.id === id);
    if (index !== -1) {
      routines[index] = { ...routines[index], ...updates, updatedAt: new Date() };
      routineStorage.saveRoutines(routines);
    }
  },

  deleteRoutine: (id: string): void => {
    const routines = routineStorage.getRoutines();
    const filtered = routines.filter(r => r.id !== id);
    routineStorage.saveRoutines(filtered);
  }
};

// Health record functions
export const healthStorage = {
  getHealthRecords: (): HealthRecord[] => {
    return storage.get(HEALTH_RECORDS_KEY, []);
  },

  saveHealthRecords: (records: HealthRecord[]): void => {
    storage.set(HEALTH_RECORDS_KEY, records);
  },

  addHealthRecord: (record: HealthRecord): void => {
    const records = healthStorage.getHealthRecords();
    records.unshift(record); // Add to beginning
    healthStorage.saveHealthRecords(records);
  }
};

// Time block functions
export const timeBlockStorage = {
  getTimeBlocks: (): TimeBlock[] => {
    return storage.get(TIME_BLOCKS_KEY, []);
  },

  saveTimeBlocks: (blocks: TimeBlock[]): void => {
    storage.set(TIME_BLOCKS_KEY, blocks);
  },

  addTimeBlock: (block: TimeBlock): void => {
    const blocks = timeBlockStorage.getTimeBlocks();
    blocks.push(block);
    timeBlockStorage.saveTimeBlocks(blocks);
  },

  updateTimeBlock: (id: string, updates: Partial<TimeBlock>): void => {
    const blocks = timeBlockStorage.getTimeBlocks();
    const index = blocks.findIndex(b => b.id === id);
    if (index !== -1) {
      blocks[index] = { ...blocks[index], ...updates };
      timeBlockStorage.saveTimeBlocks(blocks);
    }
  }
};

// Utility functions
export const getToday = (): Date => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

export const isToday = (date: Date): boolean => {
  const today = getToday();
  return date.getTime() === today.getTime();
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
};
