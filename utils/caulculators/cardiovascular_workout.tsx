import { AiFillYoutube } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GiHotMeal } from 'react-icons/gi';
import { GoDotFill } from 'react-icons/go';
import Link from 'next/link';

export default function CardiovascularWorkout({
  workout_days,
}: {
  workout_days: number;
}) {
  const programs = {
    days_2: [
      {
        workout_type: 'Aerobic',
        exercices: [
          {
            name: 'Cycling / brisk walking / swimming / running',
            sets: '1',
            reps: '20-30 minutes',
          },
        ],
      },
      {
        workout_type: 'HIIT',
        exercices: [{ name: 'Sprint', sets: '6 - 8', reps: '30 seconds' }],
      },
    ],

    days_3: [
      {
        workout_type: 'Aerobic',
        exercices: [
          {
            name: 'Cycling / brisk walking / swimming / running',
            sets: '1',
            reps: '20-30 minutes',
          },
        ],
      },
      {
        workout_type: 'HIIT',
        exercices: [{ name: 'Sprint', sets: '6 - 8', reps: '30 seconds' }],
      },
      {
        workout_type: 'Circuit Training',
        exercices: [
          { name: 'Jumping jacks', sets: '3 - 4', reps: '1 minute' },
          { name: 'Bodyweight squats', sets: '3 - 4', reps: '10 - 15' },
          { name: 'Push-ups', sets: '3 - 4', reps: '10 - 15' },
          { name: 'Burpees', sets: '3 - 4', reps: '10 - 15' },
        ],
      },
    ],
  };

  // 2 days
  if (workout_days === 2) {
    return (
      <div className="flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-4xl flex-shrink-0">Plani i ushtrimeve</h2>
          <span className="text-neutral-400 text-sm font-normal">
            Tailored Workout Program for You (2 days workout as you requested)
          </span>
        </div>

        {/* Days - details */}
        <div className="flex flex-col gap-16">
          {programs.days_2.map((day, i) => (
            <div key={day.workout_type} className="flex flex-col gap-6">
              {/* day */}
              <h3 className="text-xl font-semibold">
                Dita {i + 1} - {day.workout_type}
              </h3>

              {/* exercices */}
              <div className="flex flex-col gap-6">
                {day.exercices.map((exercice) => (
                  <div
                    key={exercice.name}
                    className="flex gap-3 relative h-fit items-stretch"
                  >
                    <div className="flex flex-col pt-1">
                      <div className="w-4 h-4 bg-neutral-300 rounded-full" />
                      <div className="h-full w-0.5 bg-gradient-to-b from-neutral-300 mx-auto" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold">{exercice.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Sets:</span>
                        <span>{exercice.sets}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-medium">Reps:</span>
                        <span>{exercice.reps}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-medium">Help:</span>
                        <div className="flex gap-6 items-center">
                          <Link
                            target="_blank"
                            className="flex gap-1 items-center text-sm text-sky-500 hover:underline underline-offset-4"
                            href={`https://www.youtube.com/results?search_query=${exercice.name}`}
                          >
                            <span>Watch Videos</span>
                            <span className="text-red-500 text-xl">
                              <AiFillYoutube />
                            </span>
                          </Link>
                          <Link
                            target="_blank"
                            className="flex gap-1 items-center text-sm text-sky-500 hover:underline underline-offset-4"
                            href={`https://www.google.com/search?q=${exercice.name}&tbm=isch`}
                          >
                            <span>See Images</span>
                            <span className="text-xl">
                              <FcGoogle />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 3 days or more
  return (
    <div className="flex flex-col gap-20">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-4xl flex-shrink-0">Plani i ushtrimeve</h2>
        <span className="text-neutral-400 text-sm font-normal">
          Tailored Workout Program for You
        </span>
      </div>

      {/* Days - details */}
      <div className="flex flex-col gap-16">
        {programs.days_3.map((day, i) => (
          <div key={day.workout_type} className="flex flex-col gap-6">
            {/* day */}
            <h3 className="text-xl font-semibold">
              Dita {i + 1} - {day.workout_type}
            </h3>

            {/* exercices */}
            <div className="flex flex-col gap-6">
              {day.exercices.map((exercice) => (
                <div
                  key={exercice.name}
                  className="flex gap-3 relative h-fit items-stretch"
                >
                  <div className="flex flex-col pt-1">
                    <div className="w-4 h-4 bg-neutral-300 rounded-full" />
                    <div className="h-full w-0.5 bg-gradient-to-b from-neutral-300 mx-auto" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold">{exercice.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Sets:</span>
                      <span>{exercice.sets}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-medium">Reps:</span>
                      <span>{exercice.reps}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-medium">Help:</span>
                      <div className="flex gap-6 items-center">
                        <Link
                          target="_blank"
                          className="flex gap-1 items-center text-sm text-sky-500 hover:underline underline-offset-4"
                          href={`https://www.youtube.com/results?search_query=${exercice.name}`}
                        >
                          <span>Watch Videos</span>
                          <span className="text-red-500 text-xl">
                            <AiFillYoutube />
                          </span>
                        </Link>
                        <Link
                          target="_blank"
                          className="flex gap-1 items-center text-sm text-sky-500 hover:underline underline-offset-4"
                          href={`https://www.google.com/search?q=${exercice.name}&tbm=isch`}
                        >
                          <span>See Images</span>
                          <span className="text-xl">
                            <FcGoogle />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
