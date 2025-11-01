'use client';

// imports
import type { programType } from '@/types.h'
import eyeAnimation from '@/animations/eye.json';
import stringAnimation from '@/animations/strong.json';
import fruitsAnimation from '@/animations/fruits.json';
import sleepAnimation from '@/animations/sleep.json';
import Accordion from '@/components/accordion';
import { FcIdea } from 'react-icons/fc';
import { GiCancel } from 'react-icons/gi';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Program({ data }: { data: programType }) {
  return (
    <div className="w-5/6 mx-auto lg:-translate-y-44 xl:-translate-y-64 2xl:-translate-y-96 flex flex-col gap-12">
      {/* overview */}
      <Accordion
        title="Overview"
        description="A general overview on the program"
        animation={eyeAnimation}
      >
        <div className="text-md text-neutral-700">{data.overview.fitness_plan_summary}</div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col gap-8">
            {data.overview.problem_roles.map((elt) => (
              <div className="flex flex-col gap-1">
                <div className="flex gap-2 items-center">
                  <span className="text-red-600 text-xl">
                    <GiCancel />
                  </span>
                  <span>{elt.bad_habit}</span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="font-bold">Impact: </span>
                  <span className="text-neutral-500">{elt.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Accordion>

      {/* workout */}
      <Accordion
        title="Workout"
        description="Weekly schedule of your workout"
        animation={stringAnimation}
      >
        <Table className="text-lg">
          <TableHeader>
            <TableRow>
              <TableHead>Day</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Schedule</TableHead>
              <TableHead>Minutes</TableHead>
              <TableHead>Exercices</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.workout.map((workout) => (
              <TableRow>
                <TableCell>{workout.day_number}</TableCell>
                <TableCell>{workout.workout_type}</TableCell>
                <TableCell>{workout.workout_clock_time}</TableCell>
                <TableCell>
                  {workout.session_minutes}
                  {' '}
                  minutes
                </TableCell>
                <TableCell>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Sets</TableHead>
                        <TableHead>Reps</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {workout.exercices.map((exercice) => (
                        <TableRow>
                          <TableCell>
                            {exercice.name}
                            <br />
                            <span className="italic text-neutral-500 text-sm">
                              rest
                              {' '}
                              {workout.rest_after_exercice}
                              {' '}
                              after finishing the exercice
                            </span>
                          </TableCell>
                          <TableCell>
                            {exercice.sets}
                            <br />
                            <span className="italic text-neutral-500 text-sm">
                              rest
                              {' '}
                              {exercice.rest_between_sets}
                              {' '}
                              between each set
                            </span>
                          </TableCell>
                          <TableCell>{exercice.reps}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Accordion>

      {/* diet */}
      <Accordion
        title="Diet"
        description="Your diet program"
        animation={fruitsAnimation}
      >
        <div>{data.diet.summary}</div>

        <Separator className="w-5/6 mx-auto" />

        {/* Nutrinional facts */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Nutritional Facts</h3>
            <p>
              Nutritional Facts provide essential information about the daily intake of calories,
              protein, carbohydrates, and fats. They help you make informed choices about your diet
              and ensure you&apos;re meeting your nutritional needs for a healthy lifestyle.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-semibold">
              <span>Calories: </span>
              <span className="font-black text-4xl">
                {data.diet.calories}
                {' '}
              </span>
              <span>per day</span>
            </h4>
            <p>{data.diet.calories_explanation}</p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-semibold">
              <span>Protein: </span>
              <span className="font-black text-4xl">{data.diet.protein}</span>
              <span>g per day</span>
            </h4>
            <p>{data.diet.protein_explanation}</p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-semibold">
              <span>Carbs: </span>
              <span className="font-black text-4xl">{data.diet.carbs}</span>
              <span>g per day</span>
            </h4>
            <p>{data.diet.carbs_explanation}</p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-semibold">
              <span>Fats: </span>
              <span className="font-black text-4xl">{data.diet.fats}</span>
              <span>g per day</span>
            </h4>
            <p>{data.diet.fats_explanation}</p>
          </div>
        </div>

        <Separator className="w-5/6 mx-auto" />

        {/* Meals */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Meals</h3>
            <p>
              Now that you have a clear understanding of your daily nutritional requirements from
              our Nutritional Facts section, it&apos;s time to explore a range of suggested meals
              designed to meet your goals. Whether you&apos;re looking to fuel
              your workouts, shed some extra pounds,
              or simply maintain a balanced diet, our curated meal options are here to inspire
              and guide you on your journey to a healthier you. Choose from a variety of delicious
              and nutritious options to help you stay on track and achieve your fitness goals.
            </p>
          </div>

          <Table className="text-lg">
            <TableHeader>
              <TableRow>
                <TableHead>Number</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Schedule</TableHead>
                <TableHead className="w-96">Nutritional Facts</TableHead>
                <TableHead>Examples</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {data.diet.meals.map((meal, index) => (
                <TableRow>
                  <TableCell>
                    Meal
                    {' '}
                    {' '}
                    {index + 1}
                  </TableCell>
                  <TableCell>{meal.meal_type}</TableCell>
                  <TableCell>{meal.schedule}</TableCell>
                  <TableCell className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                      {meal.calories}
                      {' '}
                      calories
                    </div>

                    <div className="flex items-center gap-2">
                      {meal.protein}
                      g protein
                    </div>

                    <div className="flex items-center gap-2">
                      {meal.carbs}
                      g carbs
                    </div>

                    <div className="flex items-center gap-2">
                      {meal.fats}
                      g fats
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="flex flex-col">
                      {meal.examples.map((elt) => (
                        <TableCell>{elt}</TableCell>
                      ))}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Accordion>

      {/* sleep */}
      <Accordion
        title="Sleep"
        description="Your sleep program"
        animation={sleepAnimation}
      >
        <div className="text-md text-neutral-700">
          {data.sleep.importance}
          {' '}
          {data.sleep.tips}
        </div>

        <div className="flex items-center gap-6">
          <div className="flex flex-col gap-8">
            {data.sleep.cons_fixes.map((elt) => (
              <div className="flex flex-col gap-1">
                <div className="flex gap-2 items-center">
                  <span className="text-red-600 text-xl">
                    <GiCancel />
                  </span>
                  <span>{elt.con}</span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="font-bold">Fix: </span>
                  <span className="text-neutral-500">{elt.fix}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div className="flex gap-10 h-full">
          <div className="text-xl h-full flex flex-col gap-3">
            <span>Best time to go to sleep</span>
            <div className="p-6 border-4 border-blue-500 rounded-3xl shadow-sm text-center text-2xl font-black">{data.sleep.sleep_time}</div>
          </div>

          <div className="text-xl h-full flex flex-col gap-3">
            <span>Best time to wake-up</span>
            <div className="p-6 border-4 border-blue-500 rounded-3xl shadow-sm text-center text-2xl font-black">{data.sleep.wakeup_time}</div>
          </div>
        </div>
      </Accordion>
    </div>
  )
}
