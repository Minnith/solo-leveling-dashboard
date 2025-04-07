export interface Activity {
  id: string;
  name: string;
  category: Category;
  xp: number;
  completed: boolean;
  timestamp?: Date;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  category: Category;
  xp: number;
  completed: boolean;
  deadline?: Date;
  type: 'daily' | 'weekly';
}

export interface Category {
  id: string;
  name: string;
  color: string;
  level: number;
  currentXP: number;
  requiredXP: number;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  unlockLevel: number;
  category: string;
  claimed: boolean;
}