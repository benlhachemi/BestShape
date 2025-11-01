export type stepType = {
  id: string;
  component: any;
  title: string;
  description: string;
  icon: string;
  answers: object;
};

export type stepsType = {
  step_num: number;
  animation: string;
  is_next_btn: boolean;
  is_previous_btn: boolean;
  is_generate_btn: boolean;
  steps_list: stepType[];
  is_blocked: boolean;
};

export type breakpointType = {
  id: string;
  icon: JSX.Element;
  status: 'done' | 'not_done';
};

export type roadType = {
  breakpoints: breakpointType[];
  current_breakpoint: breakpointType;
  start_icon: JSX.Element;
  finish_icon: JSX.Element;
};

export type exerciceType = {
  name: string;
  sets: string;
  reps: string;
  rest_between_sets: string;
};

export type workoutType = {
  day_number: number;
  workout_clock_time: string;
  workout_type: string;
  session_minutes: number;
  exercices: exerciceType[];
  rest_after_exercice: string;
};

export type mealType = {
  schedule: string;
  meal_type: string;
  examples: string[];
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
};

export type dietType = {
  summary: string;
  calories: number;
  calories_explanation: string;
  protein: number;
  protein_explanation: string;
  carbs: number;
  carbs_explanation: string;
  fats: number;
  fats_explanation: string;
  meals: mealType[];
};

export type sleep_cons = {
  con: string;
  fix: string;
};

export type sleepType = {
  cons_fixes: sleep_cons[];
  sleep_time: string;
  wakeup_time: string;
  tips: string;
  importance: string;
};

export type overviewProblemType = {
  bad_habit: string;
  impact: string;
};

export type overviewType = {
  fitness_plan_summary: string;
  problem_roles: overviewProblemType[];
};

export type programType = {
  overview: overviewType;
  workout: workoutType[];
  diet: dietType;
  sleep: sleepType;
};
