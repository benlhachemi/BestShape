export default function calculateCalories(
  {
    current_weight,
    ideal_weight,
    height,
    age,
    gender,
    activity,
    workout_days,
    fitness_goal,
  }: {
    current_weight: number,
    ideal_weight: number,
    height: number,
    age: number,
    workout_days: number,
    gender: 'M' | 'F',
    activity: string,
    fitness_goal: 'burn_fats' | 'build_muscle' | 'cardiovascular'
  },
): {
    calories: number,
    description: string,
    lose_025: number,
    lose_05: number,
    lose_1: number,
    gain_025: number,
    gain_05: number,
    gain_1: number
    protein_1: number
    protein_2: number
    fats_1: number
    fats_2: number
    carbs_1: number
    carbs_2: number
  } {
  // caculate BMR
  let bmr = 0
  if (gender === 'M') bmr = 10 * current_weight + 6.25 * height - 5 * age + 5
  else bmr = 10 * current_weight + 6.25 * height - 5 * age - 161

  // add workout_days to BMR
  if (workout_days <= 2) bmr += 1.375
  if (workout_days <= 5) bmr += 1.55
  if (workout_days <= 7) bmr += 1.725

  // add activity to BMR
  if (activity === '0') bmr += 1.2
  if (activity === '1') bmr += 1.375
  if (activity === '2') bmr += 1.55
  if (activity === '3') bmr += 1.725

  // convertion
  bmr = Math.floor(bmr)

  // protein
  let protein_1 = 0
  let protein_2 = 0
  if (fitness_goal === 'build_muscle') {
    protein_1 = Math.floor(current_weight * 1.6)
    protein_2 = Math.floor(current_weight * 2.2)
  } else {
    protein_1 = Math.floor(current_weight * 1.2)
    protein_2 = Math.floor(current_weight * 1.8)
  }

  // fats
  let fats_1 = 0
  let fats_2 = 0
  if (fitness_goal === 'build_muscle') {
    fats_1 = Math.floor((bmr * 0.2) / 9)
    fats_2 = Math.floor((bmr * 0.25) / 9)
  } else {
    fats_1 = Math.floor((bmr * 0.3) / 9)
    fats_2 = Math.floor((bmr * 0.35) / 9)
  }

  // carbs
  let carbs_1 = 0
  let carbs_2 = 0
  if (current_weight - ideal_weight > 4) {
    carbs_2 = Math.floor((bmr - 500 - protein_1 * 4 - fats_1 * 9) / 4)
    carbs_1 = Math.floor((bmr - 500 - protein_2 * 4 - fats_2 * 9) / 4)
  }
  if (ideal_weight - current_weight > 4) {
    carbs_2 = Math.floor((bmr + 500 - protein_1 * 4 - fats_1 * 9) / 4)
    carbs_1 = Math.floor((bmr + 500 - protein_2 * 4 - fats_2 * 9) / 4)
  } else {
    carbs_2 = Math.floor((bmr - protein_1 * 4 - fats_1 * 9) / 4)
    carbs_1 = Math.floor((bmr - protein_2 * 4 - fats_2 * 9) / 4)
  }

  return {
    calories: bmr,
    lose_05: bmr - 500,
    lose_025: bmr - 250,
    lose_1: bmr - 1000,
    gain_025: bmr + 250,
    gain_05: bmr + 500,
    gain_1: bmr + 1000,
    description: '',
    protein_1,
    protein_2,
    fats_1,
    fats_2,
    carbs_1,
    carbs_2,
  }
}
