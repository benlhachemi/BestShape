'use client';

// imports
import Lottie from 'lottie-react';
import fireAnimation from '@/animations/fire.json';
import strongAnimation from '@/animations/strong.json';
import { useState, useContext, useEffect } from 'react';
import powerAnimation from '@/animations/power.json';
import healthAnimation from '@/animations/health.json';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { StepsContext } from '@/context/steps';
import bulkAnimation from '@/animations/bulk.json';
import recompositionAnimation from '@/animations/recomposition.json';
import robotAnimation from '@/animations/robot.json';
import CardComponent from './card';
import Picker from './picker';
import { Input } from './ui/input';

export default function FitGoal({
  title,
  description,
  id,
}: {
  title: string;
  description: string;
  id: string;
}) {
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
      {/* Fitness goal */}
      <div className="flex flex-col space-y-3">
        <Label htmlFor="name" className="text-md lg:text-lg">
          Zgjidhni qëllimin tuaj të fitnesit 🎯
        </Label>

        <RadioGroup
          defaultValue={answers.fitness_goal}
          onValueChange={(e) => setAnswers({ ...answers, fitness_goal: e })}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full"
        >
          {/* Burn Fat */}
          <div className="w-full col-span-1 h-full">
            <RadioGroupItem
              value="burn_fats"
              id="burn_fats"
              className="peer sr-only"
            />
            <Label
              htmlFor="burn_fats"
              className="flex cursor-pointer gap-2 h-full text-2xl lg:text-3xl font-black text-center flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Djeg yndyrnat
              <Lottie loop animationData={fireAnimation} className="w-14" />
              <span className="text-neutral-400 text-sm text-center font-normal">
                Djeg yndyrat dhe humb peshë.
              </span>
            </Label>
          </div>

          {/* Cardiovascular Health */}
          <div className="w-full col-span-1 h-full">
            <RadioGroupItem
              value="cardiovascular"
              id="cardiovascular"
              className="peer sr-only"
            />
            <Label
              htmlFor="cardiovascular"
              className="flex cursor-pointer gap-2 h-full text-2xl lg:text-3xl font-black text-center flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Shëndeti kardiovaskular
              <Lottie loop animationData={healthAnimation} className="w-14" />
              <span className="text-neutral-400 text-sm text-center font-normal">
                Shëndet më i mirë i zemrës dhe enëve të gjakut
              </span>
            </Label>
          </div>

          {/* build muscles */}
          <div className="w-full col-span-1 h-full">
            <RadioGroupItem
              value="build_muscle"
              id="build_muscle"
              className="peer sr-only"
            />
            <Label
              htmlFor="build_muscle"
              className="flex h-full cursor-pointer gap-2 text-2xl lg:text-3xl font-black text-center flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Ndërtoni muskuj
              <Lottie loop animationData={strongAnimation} className="w-14" />
              <span className="text-neutral-400 text-sm text-center font-normal">
                Djeg yndyrnat dhe fito muskuj
              </span>
            </Label>
          </div>
        </RadioGroup>
      </div>
      <br />

      {/* days */}
      <div className="flex flex-col space-y-2">
        <Label htmlFor="age" className="text-md lg:text-lg">Sa ditë në javë jeni të gatshëm t'i përkushtoheni rutinës së fitnesit?</Label>
        <Picker
          max={7}
          min={2}
          tag="Ditë në javë"
          value={answers.workout_days}
          onAdd={() => setAnswers({ ...answers, workout_days: answers.workout_days + 1 })}
          onRemove={() => {
            setAnswers({ ...answers, workout_days: answers.workout_days - 1 })
          }}
          onSlide={(e) => setAnswers({ ...answers, workout_days: e })}
        />
      </div>

      {/* active */}
      <div className="flex flex-col w-full space-y-1.5">
        <Label htmlFor="gender" className="text-md lg:text-lg">Sa aktiv jeni gjatë ditës?</Label>
        <RadioGroup
          onValueChange={(e) => setAnswers({ ...answers, activity: e })}
          defaultValue={answers.activity}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full jfull"
        >
          {/* none */}
          <div className="w-full h-full col-span-1">
            <RadioGroupItem value="0" id="none" className="peer sr-only" />
            <Label
              htmlFor="none"
              className="flex h-full text-center text-lg lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <span className="text-3xl">💻</span>
              Asnjë lëvizje fare
              <span className="text-neutral-400 text-sm text-center font-normal">Pothuajse gjithë ditën e kaloj në tavolinën time</span>
            </Label>
          </div>

          {/* low */}
          <div className="w-full h-full col-span-1">
            <RadioGroupItem value="1" id="low" className="peer sr-only" />
            <Label
              htmlFor="low"
              className="flex h-full text-center text-lg lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <span className="text-3xl">🧘‍♂️</span>
              Pak lëvizje
              <span className="text-neutral-400 text-sm text-center font-normal">Ndërkohë bëj ushtrime fizike</span>
            </Label>
          </div>

          {/* Moderately Active */}
          <div className="w-full h-full col-span-1">
            <RadioGroupItem value="2" id="moderate" className="peer sr-only" />
            <Label
              htmlFor="moderate"
              className="flex h-full text-center text-lg lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <span className="text-3xl">⚡️</span>
              Mesatarisht aktiv
              <span className="text-neutral-400 text-sm text-center font-normal">Unë kaloj mesatarisht 60 minuta në ditë duke bërë aktivitete fizike</span>
            </Label>
          </div>

          {/* Very Active */}
          <div className="w-full h-full col-span-1">
            <RadioGroupItem value="3" id="active" className="peer sr-only" />
            <Label
              htmlFor="active"
              className="flex h-full text-center text-lg lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <span className="text-3xl">🔥</span>
              Shumë aktiv
              <span className="text-neutral-400 text-sm text-center font-normal">Kaloj shumë kohë duke bërë aktivitete fizike</span>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </CardComponent>
  );
}
