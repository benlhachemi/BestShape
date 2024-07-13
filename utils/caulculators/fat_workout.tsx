import { AiFillYoutube } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GiHotMeal } from 'react-icons/gi';
import { GoDotFill } from 'react-icons/go';
import Link from 'next/link';

export default function FatWorkout({ workout_days }: { workout_days: number }) {
  const programs = {
    days_2: [
      {
        workout_type: 'Strength Training and Cardio',
        exercices: [
          {
            name: 'Bodyweight Squats',
            sets: '3',
            reps: '15 - 20',
          },
          {
            name: 'Push-ups ',
            sets: '3',
            reps: '15 - 20',
          },
          {
            name: 'Jumping Jacks',
            sets: '3',
            reps: '1 minute',
          },
          {
            name: 'Lunges',
            sets: '3',
            reps: '10 - 12 per leg',
          },
          {
            name: 'Plank',
            sets: '3',
            reps: '30 - 45 seconds',
          },
          {
            name: 'Cardio (Running, Rowing, Cycling, Swimming ...)',
            sets: '1',
            reps: '20 - 30 minutes',
          },
        ],
      },
      {
        workout_type: 'HIIT',
        exercices: [
          { name: 'Burpees', sets: '3 - 4', reps: '30 seconds' },
          { name: 'Mountain climbers', sets: '3 - 4', reps: '30 seconds' },
          { name: 'High knees', sets: '3 - 4', reps: '30 seconds' },
          { name: 'Jump squats', sets: '3 - 4', reps: '30 seconds' },
          { name: 'Bicycle crunches', sets: '3 - 4', reps: '30 seconds' },
          {
            name: 'Cardio (Running, Rowing, Cycling, Swimming ...)',
            sets: '1',
            reps: '10 - 15 minutes',
          },
        ],
      },
    ],

    days_3: [
      {
        workout_type: 'Strength Training and Cardio',
        exercices: [
          {
            name: 'Bodyweight Squats',
            sets: '3',
            reps: '15 - 20',
          },
          {
            name: 'Push-ups ',
            sets: '3',
            reps: '15 - 20',
          },
          {
            name: 'Jumping Jacks',
            sets: '3',
            reps: '1 minute',
          },
          {
            name: 'Lunges',
            sets: '3',
            reps: '10 - 12 per leg',
          },
          {
            name: 'Plank',
            sets: '3',
            reps: '30 - 45 seconds',
          },
          {
            name: 'Cardio (Running, Rowing, Cycling, Swimming ...)',
            sets: '1',
            reps: '20 - 30 minutes',
          },
        ],
      },
      {
        workout_type: 'HIIT',
        exercices: [
          { name: 'Burpees', sets: '3 - 4', reps: '30 seconds' },
          { name: 'Mountain climbers', sets: '3 - 4', reps: '30 seconds' },
          { name: 'High knees', sets: '3 - 4', reps: '30 seconds' },
          { name: 'Jump squats', sets: '3 - 4', reps: '30 seconds' },
          { name: 'Bicycle crunches', sets: '3 - 4', reps: '30 seconds' },
          {
            name: 'Cardio (Running, Rowing, Cycling, Swimming ...)',
            sets: '1',
            reps: '10 - 15 minutes',
          },
        ],
      },
      {
        workout_type: 'Active Recovery',
        exercices: [
          {
            name: 'Low-Intensity Cardio (walking, light cycling)',
            sets: '1',
            reps: '30 - 45 Minutes',
          },
          { name: 'Stretching', sets: '1', reps: '10 - 15 Minutes' },
        ],
      },
    ],

    days_4: [
      {
        workout_type: 'Strength Training and Cardio',
        exercices: [
          {
            name: 'Bodyweight Squats',
            sets: '3',
            reps: '15 - 20',
          },
          {
            name: 'Push-ups ',
            sets: '3',
            reps: '15 - 20',
          },
          {
            name: 'Jumping Jacks',
            sets: '3',
            reps: '1 minute',
          },
          {
            name: 'Lunges',
            sets: '3',
            reps: '10 - 12 per leg',
          },
          {
            name: 'Plank',
            sets: '3',
            reps: '30 - 45 seconds',
          },
          {
            name: 'Cardio (Running, Rowing, Cycling, Swimming ...)',
            sets: '1',
            reps: '20 - 30 minutes',
          },
        ],
      },
      {
        workout_type: 'HIIT',
        exercices: [
          { name: 'Burpees', sets: '3 - 4', reps: '30 seconds' },
          { name: 'Mountain climbers', sets: '3 - 4', reps: '30 seconds' },
          { name: 'High knees', sets: '3 - 4', reps: '30 seconds' },
          { name: 'Jump squats', sets: '3 - 4', reps: '30 seconds' },
          { name: 'Bicycle crunches', sets: '3 - 4', reps: '30 seconds' },
          {
            name: 'Cardio (Running, Rowing, Cycling, Swimming ...)',
            sets: '1',
            reps: '10 - 15 minutes',
          },
        ],
      },
      {
        workout_type: 'Active Recovery',
        exercices: [
          {
            name: 'Low-Intensity Cardio (walking, light cycling)',
            sets: '1',
            reps: '30 - 45 Minutes',
          },
          { name: 'Stretching', sets: '1', reps: '10 - 15 Minutes' },
        ],
      },
      {
        workout_type: 'Light Cardio',
        exercices: [
          {
            name: 'light cardio (brisk walking, cycling, or swimming)',
            sets: '1',
            reps: '30 Minutes',
          },
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
            Programi i stërvitjes i përshtatur për ju (2 ditë stërvitje siç kërkuat)
          </span>
        </div>

        {/* Days - details */}
        <div className="flex flex-col gap-16">
          {programs.days_2.map((day, i) => (
            <div key={day.workout_type} className="flex flex-col gap-6">
              {/* day */}
              <h3 className="text-xl font-semibold">
                Dita
                {' '}
                {i + 1}
                {' '}
                -
                {' '}
                {day.workout_type}
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
                            <span>Shiko Video</span>
                            <span className="text-red-500 text-xl">
                              <AiFillYoutube />
                            </span>
                          </Link>
                          <Link
                            target="_blank"
                            className="flex gap-1 items-center text-sm text-sky-500 hover:underline underline-offset-4"
                            href={`https://www.google.com/search?q=${exercice.name}&tbm=isch`}
                          >
                            <span>Shiko Foto</span>
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

  // 3 days
  if (workout_days === 3) {
    return (
      <div className="flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-4xl flex-shrink-0">Plani i ushtrimeve</h2>
          <span className="text-neutral-400 text-sm font-normal">
          Programi i stërvitjes i përshtatur për ju (3 ditë stërvitje siç kërkuat)
          </span>
        </div>

        {/* Days - details */}
        <div className="flex flex-col gap-16">
          {programs.days_3.map((day, i) => (
            <div key={day.workout_type} className="flex flex-col gap-6">
              {/* day */}
              <h3 className="text-xl font-semibold">
                Dita
                {' '}
                {i + 1}
                {' '}
                -
                {' '}
                {day.workout_type}
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
                            <span>Shiko Video</span>
                            <span className="text-red-500 text-xl">
                              <AiFillYoutube />
                            </span>
                          </Link>
                          <Link
                            target="_blank"
                            className="flex gap-1 items-center text-sm text-sky-500 hover:underline underline-offset-4"
                            href={`https://www.google.com/search?q=${exercice.name}&tbm=isch`}
                          >
                            <span>Shiko Foto</span>
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

  // 4 days or more
  return (
    <div className="flex flex-col gap-20">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-4xl flex-shrink-0">Plani i ushtrimeve</h2>
        <span className="text-neutral-400 text-sm font-normal">
        Programi i stërvitjes i përshtatur për ju
        </span>
      </div>

      {/* Days - details */}
      <div className="flex flex-col gap-16">
        {programs.days_4.map((day, i) => (
          <div key={day.workout_type} className="flex flex-col gap-6">
            {/* day */}
            <h3 className="text-xl font-semibold">
              Day
              {' '}
              {i + 1}
              {' '}
              -
              {' '}
              {day.workout_type}
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
                          <span>Shiko Video</span>
                          <span className="text-red-500 text-xl">
                            <AiFillYoutube />
                          </span>
                        </Link>
                        <Link
                          target="_blank"
                          className="flex gap-1 items-center text-sm text-sky-500 hover:underline underline-offset-4"
                          href={`https://www.google.com/search?q=${exercice.name}&tbm=isch`}
                        >
                          <span>Shiko Foto</span>
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
