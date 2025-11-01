/* eslint-disable max-len */
type dataType = {
  neck: number;
  waist: number;
  height: number;
  hip: number;
  gender: 'M' | 'F';
};

export function calculateFat({
  neck,
  waist,
  hip,
  height,
  gender,
}: dataType): number {
  if (gender === 'M') {
    return Math.floor(
      495
        / (1.0324
          - 0.19077 * Math.log10(waist - neck)
          + 0.15456 * Math.log10(height))
        - 450,
    );
  }
  return Math.floor(
    495
      / (1.29579
        - 0.35004 * Math.log10(waist + hip - neck)
        + 0.221 * Math.log10(height))
      - 450,
  );
}

export function getIdeal({
  age,
  gender,
}: {
  age: number;
  gender: 'M' | 'F';
}): number {
  if (age <= 20 && gender === 'M') return 9;
  if (age <= 20 && gender === 'F') return 18;
  if (age <= 25 && gender === 'M') return 11;
  if (age <= 25 && gender === 'F') return 19;
  if (age <= 30 && gender === 'M') return 13;
  if (age <= 30 && gender === 'F') return 20;
  if (age <= 35 && gender === 'M') return 14;
  if (age <= 35 && gender === 'F') return 24;
  if (age <= 40 && gender === 'M') return 16;
  if (age <= 40 && gender === 'F') return 23;
  if (age <= 45 && gender === 'M') return 17;
  if (age <= 45 && gender === 'F') return 23;
  if (age <= 50 && gender === 'M') return 19;
  if (age <= 50 && gender === 'F') return 26;
  if (age <= 55 && gender === 'M') return 21;
  if (age <= 55 && gender === 'F') return 27;
  if (gender === 'M') return 21;
  if (gender === 'F') return 27;
  return 0;
}

export function isCompositionHealthy({
  fat_percentage,
  gender,
  age,
}: {
  fat_percentage: number;
  gender: 'M' | 'F';
  age: number;
}): boolean {
  // age less than 40 - F
  if (age < 40 && gender === 'F' && fat_percentage < 33) return true;

  // age less than 40 - M
  if (age < 40 && gender === 'M' && fat_percentage < 20) return true;

  // age 40 to 59 - F
  if (age >= 40 && age < 60 && gender === 'F' && fat_percentage < 34) {
    return true;
  }

  // age 40 to 59 - M
  if (age >= 40 && age < 60 && gender === 'M' && fat_percentage < 22) {
    return true;
  }

  // age +60 - F
  if (age >= 60 && gender === 'F' && fat_percentage < 36) return true;

  // age +60 - M
  if (age >= 60 && gender === 'M' && fat_percentage < 24) return true;

  return false;
}

export default function getCompositionData({
  is_fat_accurate,
  gender,
  height,
  hip,
  neck,
  waist,
  age,
  body_type,
  fitness_goal,
}: {
  is_fat_accurate: boolean;
  neck: number;
  waist: number;
  height: number;
  hip: number;
  gender: 'M' | 'F';
  age: number;
  fitness_goal: 'build_muscle' | 'burn_fats' | 'endurance' | 'cardiovascular';
  body_type:
  | 'ultralean'
  | 'verylean'
  | 'lean'
  | 'moderatelylean'
  | 'healthy'
  | 'moderatelyoverweight'
  | 'overweight'
  | 'obese';
}): {
    fat_percentage: number;
    is_healthy: boolean;
    max_value: number;
    ideal_fat: number;
  } {
  let fat_percentage = 0;
  if (is_fat_accurate) {
    fat_percentage = calculateFat({
      gender,
      height,
      hip,
      neck,
      waist,
    });
  } else {
    if (body_type === 'ultralean') fat_percentage = 3;
    if (body_type === 'verylean') fat_percentage = 8;
    if (body_type === 'lean') fat_percentage = 13;
    if (body_type === 'moderatelylean') fat_percentage = 18;
    if (body_type === 'healthy') fat_percentage = 23;
    if (body_type === 'moderatelyoverweight') fat_percentage = 28;
    if (body_type === 'overweight') fat_percentage = 33;
    if (body_type === 'obese') fat_percentage = 38;
  }

  let max_value = 0;
  // age less than 40 - F
  if (age < 40 && gender === 'F') max_value = 33;

  // age less than 40 - M
  if (age < 40 && gender === 'M') max_value = 20;

  // age 40 to 59 - F
  if (age >= 40 && age < 60 && gender === 'F') max_value = 34;

  // age 40 to 59 - M
  if (age >= 40 && age < 60 && gender === 'M') max_value = 22;

  // age +60 - F
  if (age >= 60 && gender === 'F') max_value = 36;

  // age +60 - M
  if (age >= 60 && gender === 'M') max_value = 24;

  let ideal_fat = getIdeal({ age, gender });
  if (fitness_goal === 'build_muscle') ideal_fat -= 3;

  return {
    fat_percentage,
    is_healthy: isCompositionHealthy({ age, fat_percentage, gender }),
    max_value,
    ideal_fat,
  };
}
