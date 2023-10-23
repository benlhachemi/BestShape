/* eslint-disable max-len */
type bmiType = {
  height: number;
  weight: number;
  gender: 'M' | 'F';
  fitness_goal: 'build_muscle' | 'burn_fats' | 'endurance' | 'cardiovascular';
};

type responseType = {
  status: 'healthy' | 'underweight' | 'overweight' | 'obese';
  bmi: number;
  underweight: string;
  healthy: string;
  overweight: string;
  ideal_weight: number;
};

export function bmiToKg(bmi: number, height_meters: number): number {
  return bmi * (height_meters * height_meters);
}

export function getIdealWeight({
  fitness_goal,
  height,
  gender,
}: {
  fitness_goal: 'build_muscle' | 'burn_fats' | 'endurance' | 'cardiovascular';
  height: number;
  gender: 'M' | 'F';
}): number {
  if (fitness_goal === 'build_muscle') {
    if (height <= 167) return 73;
    if (height <= 170) return 75;
    if (height <= 173) return 78;
    if (height <= 178) return 80;
    if (height <= 179) return 82;
    if (height <= 182) return 84;
    if (height <= 185) return 87;
    if (height <= 188) return 89;
    if (height <= 192) return 91;
    if (height <= 195) return 93;
    if (height <= 198) return 96;
    return 98;
  }

  if (gender === 'M') return Math.floor((56.2 + 1.41 * (height * 0.4)) * 0.45);
  return Math.floor((53.1 + 1.36 * (height * 0.4)) * 0.45);
}

export default function getBMI({
  height,
  weight,
  gender,
  fitness_goal,
}: bmiType): responseType {
  // calculate BMI
  const height_meters = height / 100;
  const bmi = Math.floor(weight / (height_meters * height_meters));
  let status: 'healthy' | 'underweight' | 'overweight' | 'obese' = 'healthy';
  if (bmi < 18.5) status = 'underweight';
  else if (bmi >= 18.5 && bmi < 25) status = 'healthy';
  else if (bmi >= 25 && bmi < 30) status = 'overweight';
  else status = 'obese';

  return {
    bmi,
    ideal_weight: Math.abs(getIdealWeight({ fitness_goal, gender, height }) - weight) < 4 ? weight : getIdealWeight({ fitness_goal, gender, height }),
    status,
    underweight: `${Math.floor(bmiToKg(18.5, height_meters))} Kg`,
    healthy: `${Math.floor(bmiToKg(25, height_meters))} Kg`,
    overweight: `${Math.floor(bmiToKg(30, height_meters))} Kg`,
  };
}
