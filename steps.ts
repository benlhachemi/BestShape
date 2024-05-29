// imports
import type { stepType } from '@/types.h';

const steps_list: stepType[] = [
  {
    id: 'BasicInfoCard',
    icon: '📝',
    title: 'Të dhënat personale 📝',
    description: 'Për të filluar, na duhen disa informacione bazë nga ju',
    component: null,
    answers: {
      name: '',
      age: 22,
      gender: 'M',
      height: 175,
      weight: 70,
      body_type: 'healthy',
      neck: 50,
      waist: 90,
      hip: 60,
      is_fat_accurate: null,
    },
  },
  {
    id: 'FitGoal',
    icon: '🏃',
    title: 'Objektivi i fitnesit 🏃',
    description: 'Çfarë doni të arrini në udhëtimin tuaj të ri të fitnesit',
    component: null,
    answers: {
      fitness_goal: 'burn_fats',
      workout_days: 3,
      activity: '0',
    },
  },
];

export default steps_list;
