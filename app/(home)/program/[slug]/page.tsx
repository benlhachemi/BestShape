// imports
import { Separator } from '@/components/ui/separator';
import { AiFillYoutube } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { GiHotMeal } from 'react-icons/gi';
import { GoDotFill } from 'react-icons/go';
import getBMI from '@/utils/caulculators/bmi';
import CardiovascularWorkout from '@/utils/caulculators/cardiovascular_workout';
import Link from 'next/link';
import calculateCalories from '@/utils/caulculators/calories'
import FatWorkout from '@/utils/caulculators/fat_workout';
import { PrismaClient } from '@prisma/client';
import Factors from '@/utils/caulculators/factors';
import MuscleWorkout from '@/utils/caulculators/muscle_workout';
import getCompositionData from '@/utils/caulculators/composition';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import CopyLink from '@/components/copy';

const prisma = new PrismaClient();

export default async function ProgramPage({
  params,
}: {
  params: { slug: string };
}) {
  // fetch data
  let data: any = {};
  await prisma.program
    .findUnique({
      where: { slug: params.slug },
    })
    .then((result) => {
      data = result;
    });

  // returns
  if (!data) return <h1>NO DATA</h1>;

  // bmi
  const {
    bmi, healthy, overweight, status, underweight, ideal_weight,
  } = getBMI({
    height: data.overview.height,
    weight: data.overview.weight,
    gender: data.overview.gender,
    fitness_goal: data.overview.fitness_goal,
  });

  // composition
  const composition = getCompositionData({
    age: data.overview.age,
    body_type: data.overview.body_type,
    gender: data.overview.gender,
    height: data.overview.height,
    hip: data.overview.hip,
    is_fat_accurate: data.overview.is_fat_accurate,
    neck: data.overview.neck,
    waist: data.overview.waist,
    fitness_goal: data.overview.fitness_goal,
  });

  // calories
  const calory_data = calculateCalories({
    activity: data.overview.activity,
    age: data.overview.age,
    current_weight: data.overview.weight,
    fitness_goal: data.overview.fitness_goal,
    gender: data.overview.gender,
    height: data.overview.height,
    ideal_weight,
    workout_days: data.overview.workout_days,
  })

  return (
    <div className="px-6 xl:w-3/4 mx-auto py-10 flex flex-col gap-20 text-md">
      {/* share */}
      <CopyLink params={params} />

      {/* overview */}
      <div className="flex flex-col gap-20">
        {/* Header - General overview */}
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-3xl lg:text-4xl flex-shrink-0">General Overview</h2>
          <span className="text-neutral-400 text-sm font-normal">
            A general overview on the fitness plan and current health
          </span>
        </div>

        {/* */}
        <div className="flex flex-col lg:flex-row items-center w-full h-full justify-between gap-10">
          {/* weight */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">Weight Assessment</h3>
            <div>
              Your current weight (
              {data.overview?.weight}
              {' '}
              Kg) is considered
              {status === 'healthy' && (
                <span className="font-semibold text-xl text-green-400">
                  {' '}
                  Healthy
                </span>
              )}
              {status === 'underweight' && (
                <span className="font-semibold text-xl text-yellow-400">
                  {' '}
                  Under Weight
                </span>
              )}
              {status === 'overweight' && (
                <span className="font-semibold text-xl text-yellow-400">
                  {' '}
                  Over Weight
                </span>
              )}
              {status === 'obese' && (
                <span className="font-semibold text-xl text-orange-400">
                  {' '}
                  Obese
                </span>
              )}
            </div>

            {/* chart v2 */}
            <div className="w-full flex flex-col gap-0 mb-10">
              <div className="w-full h-8 rounded-md shadow-md flex gap-0 text-neutral-50 font-semibold text-xs">
                <div className="rounded-l-md flex items-center w-[18%] bg-yellow-400 h-full">
                  <span className="text-center mx-auto">Underweight</span>
                </div>

                <div className="w-[4%] relative h-full bg-gradient-to-r from-yellow-400 to-green-400">
                  <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                    <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                    <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                      {underweight}
                    </div>
                  </div>
                </div>

                <div className="flex items-center w-[38%] bg-green-400 h-full">
                  <span className="text-center mx-auto">Healthy</span>
                </div>

                <div className="w-[4%] h-full bg-gradient-to-r from-green-400 to-yellow-400 relative">
                  <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                    <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                    <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                      {healthy}
                    </div>
                  </div>
                </div>

                <div className="flex items-center w-[20%] bg-yellow-400 h-full">
                  <span className="text-center mx-auto">Overweight</span>
                </div>

                <div className="w-[4%] h-full bg-gradient-to-r from-yellow-400 to-orange-400 relative">
                  <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                    <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                    <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                      {overweight}
                    </div>
                  </div>
                </div>

                <div className="flex rounded-r-md items-center w-[20%] bg-orange-400 h-full">
                  <span className="text-center mx-auto">Obese</span>
                </div>
              </div>
            </div>

            <Card className="bg-neutral-50 text-sm text-neutral-600 pt-2">
              <CardContent className="flex flex-col gap-2">
                <div className="text-lg font-semibold text-sky-400 flex items-center gap-2">
                  <FaInfoCircle />
                  Note
                </div>
                <p className="flex flex-wrap gap-1">
                  This result was calculated based on your
                  <Sheet>
                    <SheetTrigger className="flex gap-1 items-center text-sm text-sky-400 hover:underline underline-offset-4">
                      BMI.
                    </SheetTrigger>
                    <SheetContent side="left" className="max-w-md">
                      <div className="flex flex-col gap-6">
                        <div className="text-xl font-semibold">
                          Body Mass Index (BMI)
                        </div>
                        <div>
                          bmi = weight
                          <span className="text-sm text-neutral-400">
                            {' '}
                            (in kg)
                            {' '}
                          </span>
                          {' '}
                          / height ^ 2
                          {' '}
                        </div>
                        <div>
                          bmi =
                          {' '}
                          {data.overview.weight}
                          {' '}
                          / (
                          {data.overview.height / 100}
                          {' '}
                          ^ 2)
                        </div>
                        <div>
                          bmi =
                          {bmi}
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                  The BMI offers insight into your weight status but overlooks
                  factors like muscle mass and body composition. Two people with
                  the same BMI may have differing health profiles.
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator orientation="vertical" className="h-80 hidden lg:block" />

          {/* composition */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">Body Composition Analysis</h3>
            <div className="flex items-center gap-2">
              Your current body composition (
              {composition.fat_percentage}
              %) is considered
              {composition.is_healthy ? (
                <span className="font-semibold text-xl text-green-400">
                  Healthy
                </span>
              ) : (
                <span className="font-semibold text-xl text-yellow-400">
                  OverFat
                </span>
              )}
            </div>

            {/* chart v2 */}
            <div className="w-full flex flex-col gap-0 mb-10">
              <div className="w-full h-8 rounded-md shadow-md flex gap-0 text-neutral-50 font-semibold text-xs">
                <div className="flex rounded-l-md items-center w-[48%] bg-green-400 h-full">
                  <span className="text-center mx-auto">Healthy</span>
                </div>

                <div className="w-[4%] h-full bg-gradient-to-r from-green-400 to-yellow-400 relative">
                  <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                    <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                    <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                      {composition.max_value}
                      %
                    </div>
                  </div>
                </div>

                <div className="flex rounded-r-md items-center w-[48%] bg-yellow-400 h-full">
                  <span className="text-center mx-auto">Overfat</span>
                </div>
              </div>
            </div>

            <Card className="bg-neutral-50 text-sm text-neutral-600 pt-3">
              <CardContent className="flex flex-col gap-2">
                <div className="text-lg font-semibold text-sky-400 flex items-center gap-2">
                  <FaInfoCircle />
                  Note
                </div>
                <p>
                  Your current body composition health result has been
                  calculated taking into account your gender and age. This
                  personalized approach helps provide a more accurate assessment
                  of your specific health status
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* suggested weight and fat */}
        <div className="flex flex-col lg:flex-row items-center w-full h-full justify-between gap-10">
          {/* weight target */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">
              Target Weight Recommendation
            </h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {ideal_weight}
              {' '}
              Kg
            </div>

            {ideal_weight === data.overview.weight && data.overview.fitness_goal !== 'build_muscle' && (
              <p>
                Based D. R. Miller Formula, your current weight is considered perfect,
                make sure to maitain this weight.
              </p>
            )}

            {ideal_weight !== data.overview.weight && data.overview.fitness_goal !== 'build_muscle' && (
              <p>
                Based D. R. Miller Formula and your fitness goal, the ideal
                weight that you can achieve is
                {' '}
                {ideal_weight}
                {' '}
                Kg.
              </p>
            )}

            {data.overview.fitness_goal === 'build_muscle' && (
              <p>
                Since your fitness goal is to build muscles, you need to aim for
                {' '}
                {ideal_weight}
                {' '}
                Kg to look muscular. Keep in mind that weight
                only is not sufficient, the body fat percentage is also an
                important factor.
              </p>
            )}
          </div>

          <Separator orientation="vertical" className="h-28 hidden lg:block" />

          {/* composition target */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">
              Body Composition Recommendation
            </h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {composition.ideal_fat <= composition.fat_percentage
                ? composition.ideal_fat
                : composition.fat_percentage}
              %
            </div>
            {composition.ideal_fat >= composition.fat_percentage ? (
              <p>
                You&apos;r current body fat percentage is already considered
                perfect, so our job is to make sure that you keep this body
                composition.
              </p>
            ) : (
              <p>
                Based on Jackson & Pollock Ideal Body Fat Percentages and your
                fitness goal, the perfect body composition that you can work on
                is
                {' '}
                {composition.ideal_fat}
                %.
              </p>
            )}
          </div>
        </div>

        <Factors fitness_goal={data.overview.fitness_goal} />

        {/* summary */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Summary</h3>
          <p>
            As a summary, your goal is to
            {data.overview.weight > ideal_weight
              && ` lose ${
                data.overview.weight - ideal_weight
              } Kg to reach the ideal weight suggested (${ideal_weight} kg), `}
            {data.overview.weight < ideal_weight
              && ` gain ${
                ideal_weight - data.overview.weight
              } Kg to reach the ideal weight suggested (${ideal_weight} kg), `}
            {data.overview.weight === ideal_weight
              && ' maintain your current weight, '}
            and for the body composition you should
            {composition.fat_percentage > composition.ideal_fat
              && ` burn ${
                composition.fat_percentage - composition.ideal_fat
              } % of body fat to reach the ideal body composition suggested (${
                composition.ideal_fat
              } %).`}
            {composition.fat_percentage <= composition.ideal_fat
              && ' maintain your current body fat percentage.'}
          </p>
        </div>
      </div>

      {/* workout */}
      {data.overview.fitness_goal === 'build_muscle' && (
        <MuscleWorkout workout_days={data.overview.workout_days} />
      )}
      {data.overview.fitness_goal === 'cardiovascular' && (
        <CardiovascularWorkout workout_days={data.overview.workout_days} />
      )}
      {data.overview.fitness_goal === 'burn_fats' && (
        <FatWorkout workout_days={data.overview.workout_days} />
      )}

      {/* Diet */}
      <div className="flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-4xl flex-shrink-0">Diet Plan</h2>
          <span className="text-neutral-400 text-sm font-normal">
            Your Weekly Diet Plan: A Nutritional Roadmap
          </span>
        </div>

        {/* Calories */}
        <div className="flex flex-col gap-5 w-full h-full">
          <h3 className="text-xl font-semibold">Daily Caloric Requirement</h3>
          <div className="text-3xl font-semibold text-emerald-500">
            {ideal_weight < data.overview.weight && calory_data.lose_05}
            {ideal_weight > data.overview.weight && calory_data.gain_05}
            {ideal_weight === data.overview.weight && calory_data.calories}
            {' '}
            Calories
          </div>
          <p>
            {ideal_weight < data.overview.weight && `In order to lose 0.5 Kg per week you need to comsume ${calory_data.lose_05} calories a day.`}
            {ideal_weight > data.overview.weight && `In order to gain 0.5 Kg per week you need to comsume ${calory_data.gain_05} calories a day.`}
            {ideal_weight === data.overview.weight && `In order to maitain your current weight, you need to comsume ${calory_data.calories} calories a day.`}
          </p>

          {/* chart v2 */}
          <div className="w-full hidden lg:flex flex-col gap-0 mb-10">
            <div className="w-full h-8 rounded-md shadow-md flex gap-0 text-white font-bold text-xs">
              <div className="rounded-l-md flex items-center w-[10%] bg-red-400 h-full">
                <span className="text-center mx-auto">-1 Kg/week</span>
              </div>

              <div className="w-[5%] relative h-full bg-gradient-to-r from-red-400 to-orange-400">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.lose_1}
                    {' '}
                    calories
                  </div>
                </div>
              </div>

              <div className="flex items-center w-[10%] bg-orange-400 h-full">
                <span className="text-center mx-auto">- 0.5 Kg/week</span>
              </div>

              <div className="w-[5%] h-full bg-gradient-to-r from-orange-400 to-lime-400 relative">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.lose_05}
                    {' '}
                    calories
                  </div>
                </div>
              </div>

              <div className="flex items-center w-[10%] bg-lime-400 h-full">
                <span className="text-center mx-auto">- 0.25 Kg/week</span>
              </div>

              <div className="w-[5%] h-full bg-gradient-to-r from-lime-400 to-green-400 relative">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.lose_025}
                    {' '}
                    calories
                  </div>
                </div>
              </div>

              <div className="flex items-center w-[10%] bg-green-400 h-full">
                <span className="text-center mx-auto">Keep weight</span>
              </div>

              <div className="w-[5%] h-full bg-gradient-to-r from-green-400 to-cyan-400 relative">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.calories}
                    {' '}
                    calories
                  </div>
                </div>
              </div>

              <div className="flex items-center w-[10%] bg-cyan-400 h-full">
                <span className="text-center mx-auto">+ 0.25 Kg/week</span>
              </div>

              <div className="w-[5%] h-full bg-gradient-to-r from-cyan-400 to-sky-400 relative">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.gain_025}
                    {' '}
                    calories
                  </div>
                </div>
              </div>

              <div className="flex items-center w-[10%] bg-sky-400 h-full">
                <span className="text-center mx-auto">+ 0.5 Kg/week</span>
              </div>

              <div className="w-[5%] h-full bg-gradient-to-r from-sky-400 to-indigo-400 relative">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.gain_05}
                    {' '}
                    calories
                  </div>
                </div>
              </div>

              <div className="flex items-center w-[10%] bg-indigo-400 h-full">
                <span className="text-center mx-auto">+ 1 Kg/week</span>
              </div>

              <div className="w-[5%] h-full bg-gradient-to-r from-indigo-400 to-indigo-400 relative rounded-r-md">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1 rounded-r-md">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.gain_1}
                    {' '}
                    calories
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table for Mobile */}
          <Table className="block lg:hidden w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Kg</TableHead>
                <TableHead>Calories</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">-1 Kg/week</TableCell>
                <TableCell>{calory_data.lose_1}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">-0.5 Kg/week</TableCell>
                <TableCell>{calory_data.lose_05}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">-0.25 Kg/week</TableCell>
                <TableCell>{calory_data.lose_025}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Maitain weight</TableCell>
                <TableCell>{calory_data.calories}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">+0.25 Kg/week</TableCell>
                <TableCell>{calory_data.gain_025}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">+0.5 Kg/week</TableCell>
                <TableCell>{calory_data.gain_05}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">+1 Kg/week</TableCell>
                <TableCell>{calory_data.gain_1}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Protein */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">
              Daily Proteins Requirement
            </h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {calory_data.protein_1}
              g to
              {' '}
              {calory_data.protein_2}
              g
            </div>
            <p>
              {data.overview.fitness_goal === 'build_muscle' && 'Since your goal is to build muscles, high protein intake is an important factor to build lean muscle mass'}
            </p>
            <div className="flex flex-col gap-1">
              <div className="font-semibold">Sources:</div>
              <ul className="list-disc">
                <li>Meat</li>
                <li>Eggs</li>
                <li>Fish</li>
                <li>Poultry</li>
                <li>Legumes (e.g., lentils, chickpeas)</li>
                <li>Nuts (e.g., almonds, peanuts)</li>
                <li>Seeds (e.g., chia seeds, sunflower seeds)</li>
                <li>Tofu</li>
                <li>Quinoa</li>
                <li>Dairy (e.g., cheese, yogurt)</li>
                <li>Beans (e.g., black beans, kidney beans)</li>
                <li>Greek Yogurt</li>
                <li>Cottage Cheese</li>
              </ul>
            </div>
          </div>

          {/* Carbs */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">
              Daily Carbs Requirement
            </h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {calory_data.carbs_1}
              g to
              {' '}
              {calory_data.carbs_2}
              g
            </div>
            <p>
              {data.overview.fitness_goal === 'build_muscle' && 'Carbohydrates are a crucial macronutrient for bodybuilders due to their role in providing energy for intense workouts and aiding in muscle recovery'}
            </p>
            <div className="flex flex-col gap-1">
              <div className="font-semibold">Sources:</div>
              <ul className="list-disc">
                <li>Rice (e.g., white rice, brown rice)</li>
                <li>Pasta (e.g., spaghetti, penne)</li>
                <li>Bread (e.g., whole wheat bread, baguette)</li>
                <li>Potatoes</li>
                <li>Quinoa</li>
                <li>Oats</li>
                <li>Cereals (e.g., cornflakes, oatmeal)</li>
                <li>Beans (e.g., black beans, kidney beans)</li>
                <li>Lentils</li>
                <li>Sweet Potatoes</li>
                <li>Barley</li>
                <li>Millet</li>
                <li>Fruits (e.g, Bananas, apples)</li>
              </ul>
            </div>
          </div>

          {/* Fats */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">
              Daily Fats Requirement
            </h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {calory_data.fats_1}
              g to
              {' '}
              {calory_data.fats_2}
              g
            </div>
            <p>
              {data.overview.fitness_goal === 'build_muscle' && 'You need to take from 20% to 25% fats of total calories'}
            </p>
            <div className="flex flex-col gap-1">
              <div className="font-semibold">Sources:</div>
              <ul className="list-disc">
                <li>Avocado</li>
                <li>Olive oil</li>
                <li>Coconut oil</li>
                <li>Fatty fish (e.g., salmon, mackerel)</li>
                <li>Nuts (e.g., almonds, walnuts)</li>
                <li>Seeds (e.g., chia seeds, flaxseeds)</li>
                <li>Nut butters (e.g., almond butter, peanut butter)</li>
                <li>Dark chocolate (with high cocoa content)</li>
                <li>Full-fat yogurt</li>
                <li>Cheese (in moderation)</li>
                <li>Eggs (contain healthy fats in the yolk)</li>
                <li>Olives</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* share */}
      <CopyLink params={params} />
    </div>
  );
}
