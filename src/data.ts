import { Category, Quest, Reward } from './types';

export const initialCategories: Category[] = [
  {
    id: 'fitness',
    name: 'Physical Enhancement',
    color: 'bg-red-500',
    level: 1,
    currentXP: 0,
    requiredXP: 100
  },
  {
    id: 'learning',
    name: 'Knowledge Acquisition',
    color: 'bg-blue-500',
    level: 1,
    currentXP: 0,
    requiredXP: 100
  },
  {
    id: 'social',
    name: 'Social Intelligence',
    color: 'bg-green-500',
    level: 1,
    currentXP: 0,
    requiredXP: 100
  },
  {
    id: 'productivity',
    name: 'Task Mastery',
    color: 'bg-purple-500',
    level: 1,
    currentXP: 0,
    requiredXP: 100
  }
];

export const dailyQuests: Quest[] = [
  {
    id: '1',
    title: 'Morning Exercise',
    description: 'Complete a 30-minute workout session',
    category: initialCategories[0],
    xp: 50,
    completed: false,
    type: 'daily'
  },
  {
    id: '2',
    title: 'Study Session',
    description: 'Learn something new for 1 hour',
    category: initialCategories[1],
    xp: 40,
    completed: false,
    type: 'daily'
  },
  {
    id: '3',
    title: 'Social Connection',
    description: 'Have a meaningful conversation with someone',
    category: initialCategories[2],
    xp: 30,
    completed: false,
    type: 'daily'
  }
];

export const weeklyQuests: Quest[] = [
  {
    id: '4',
    title: 'Fitness Milestone',
    description: 'Complete 5 workout sessions this week',
    category: initialCategories[0],
    xp: 200,
    completed: false,
    type: 'weekly'
  },
  {
    id: '5',
    title: 'Knowledge Project',
    description: 'Complete an online course module',
    category: initialCategories[1],
    xp: 150,
    completed: false,
    type: 'weekly'
  }
];

export const rewards: Reward[] = [
  {
    id: '1',
    name: 'Cheat Meal',
    description: 'Enjoy your favorite meal without restrictions',
    unlockLevel: 5,
    category: 'fitness',
    claimed: false
  },
  {
    id: '2',
    name: 'Gaming Session',
    description: '2 hours of guilt-free gaming',
    unlockLevel: 3,
    category: 'productivity',
    claimed: false
  },
  {
    id: '3',
    name: 'New Book',
    description: 'Purchase a book of your choice',
    unlockLevel: 4,
    category: 'learning',
    claimed: false
  }
];