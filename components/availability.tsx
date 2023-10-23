'use client'

// imports
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Lottie from 'lottie-react';
import gymAnimation from '@/animations/gym.json'
import homegymAnimation from '@/animations/homegym.json'
import nogymAnimation from '@/animations/nogym.json'
import {
  Suspense, useState, useContext, useEffect,
} from 'react';
import { StepsContext } from '@/context/steps';
import CardComponent from './card'
import { Slider } from './ui/slider';
import Picker from './picker';

export default function AvailabilityCard(
  { title, description, id }:
  { title: string, description: string, id: string },
) {
  // variables
  const { getAnswer, updateAnswer } = useContext(StepsContext);
  const [answers, setAnswers] = useState<any>(getAnswer(id));

  // functions
  useEffect(() => {
    updateAnswer(id, answers);
  }, [answers]);

  // returns
  return (
    <CardComponent title={title} description={description}>
      <div className="grid w-full items-center gap-12">
        {/* gym */}
        <div className="flex flex-col w-full h-full space-y-1.5">
          <Label htmlFor="gender" className="text-lg">Do you have access to a gym or a home-gym 🏠 ?</Label>
          <RadioGroup
            onValueChange={(e) => setAnswers({ ...answers, gym_access: e })}
            defaultValue={answers.gym_access}
            className="flex gap-4 w-full h-full"
          >
            {/* Gym */}
            <div className="w-full h-full">
              <RadioGroupItem value="real gym" id="gym" className="peer sr-only" />
              <Label
                htmlFor="gym"
                className="flex h-full gap-2 text-2xl font-bold flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Suspense>
                  <Lottie className="h-48" animationData={gymAnimation} loop />
                </Suspense>
                Real Gym
                <span className="text-neutral-400 text-sm text-center font-normal">With all necessary equipments</span>
              </Label>
            </div>

            {/* Home gym */}
            <div className="w-full h-full">
              <RadioGroupItem value="homegym" id="homegym" className="peer sr-only" />
              <Label
                htmlFor="homegym"
                className="flex h-full gap-2 text-2xl font-bold flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Suspense>
                  <Lottie className="h-48" animationData={homegymAnimation} loop />
                </Suspense>
                Home Gym
                <span className="text-neutral-400 text-sm text-center font-normal">Dumbells & barbells Only</span>
              </Label>
            </div>

            {/* No-gym */}
            <div className="w-full h-full">
              <RadioGroupItem value="nogym" id="nogym" className="peer sr-only" />
              <Label
                htmlFor="nogym"
                className="flex h-full gap-2 text-2xl font-bold flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Suspense>
                  <Lottie className="h-48" animationData={nogymAnimation} loop />
                </Suspense>
                No Gym
                <span className="text-neutral-400 text-sm text-center font-normal">Only open air</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* days */}
        <div className="flex flex-col space-y-2">
          <Label htmlFor="age" className="text-lg">How many days a week are you willing to commit to your fitness routine 🗓️ ?</Label>
          <Picker
            max={7}
            min={2}
            tag="Days per week"
            value={answers.workout_days}
            onAdd={() => setAnswers({ ...answers, workout_days: answers.workout_days + 1 })}
            onRemove={() => {
              setAnswers({ ...answers, workout_days: answers.workout_days - 1 })
            }}
            onSlide={(e) => setAnswers({ ...answers, workout_days: e })}
          />
        </div>

        {/* sessions */}
        <div className="flex flex-col space-y-2">
          <Label htmlFor="age" className="text-lg">How much time can you realistically dedicate to each workout session ⏱️ ?</Label>
          <Picker
            max={120}
            min={15}
            tag="Minutes per session"
            value={answers.session_minutes}
            onAdd={() => setAnswers({ ...answers, session_minutes: answers.session_minutes + 1 })}
            onRemove={() => {
              setAnswers({ ...answers, session_minutes: answers.session_minutes - 1 })
            }}
            onSlide={(e) => setAnswers({ ...answers, session_minutes: e })}
          />
        </div>

        {/* time */}
        <div className="flex flex-col w-full space-y-1.5">
          <Label htmlFor="gender" className="text-lg">
            Do you have any time constraints or scheduling preferences for your workouts ⏰📅 ?
          </Label>
          <RadioGroup
            onValueChange={(e) => setAnswers({ ...answers, schedule: e })}
            defaultValue={answers.schedule}
            className="flex gap-4 w-full"
          >
            {/* anytime */}
            <div className="w-full">
              <RadioGroupItem
                value="anytime"
                id="anytime"
                className="peer sr-only"
              />
              <Label
                htmlFor="anytime"
                className="flex gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl text-center">🌍</span>
                Anytime
              </Label>
            </div>

            {/* Morning */}
            <div className="w-full">
              <RadioGroupItem
                value="morning"
                id="morning"
                className="peer sr-only"
              />
              <Label
                htmlFor="morning"
                className="flex gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">☀️</span>
                Morning
              </Label>
            </div>

            {/* Lunch time */}
            <div className="w-full">
              <RadioGroupItem
                value="lunch"
                id="lunch"
                className="peer sr-only"
              />
              <Label
                htmlFor="lunch"
                className="flex gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">🌘</span>
                Lunch Time
              </Label>
            </div>

            {/* evening */}
            <div className="w-full">
              <RadioGroupItem
                value="evening"
                id="evening"
                className="peer sr-only"
              />
              <Label
                htmlFor="evening"
                className="flex gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">🌚</span>
                Evening
              </Label>
            </div>
          </RadioGroup>
        </div>

      </div>
    </CardComponent>
  )
}
