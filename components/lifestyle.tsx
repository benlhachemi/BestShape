'use client'

// imports
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useState, useContext, useEffect } from 'react';
import { StepsContext } from '@/context/steps';
import CardComponent from './card'

export default function Lifestyle(
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
        {/* active */}
        <div className="flex flex-col w-full space-y-1.5">
          <Label htmlFor="gender" className="text-lg">How active are you during the day 🏃‍♂️ ?</Label>
          <RadioGroup
            onValueChange={(e) => setAnswers({ ...answers, activity: e })}
            defaultValue={answers.activity}
            className="grid grid-cols-2 gap-4 w-full jfull"
          >
            {/* none */}
            <div className="w-full h-full col-span-1">
              <RadioGroupItem value="no movements" id="none" className="peer sr-only" />
              <Label
                htmlFor="none"
                className="flex h-full text-center text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">💻</span>
                No movements at all
                <span className="text-neutral-400 text-sm text-center font-normal">I spend almost all day on my desk</span>
              </Label>
            </div>

            {/* low */}
            <div className="w-full h-full col-span-1">
              <RadioGroupItem value="low" id="low" className="peer sr-only" />
              <Label
                htmlFor="low"
                className="flex h-full text-center text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">🧘‍♂️</span>
                Few movements
                <span className="text-neutral-400 text-sm text-center font-normal">I take a break from time to time to do physical movements</span>
              </Label>
            </div>

            {/* Moderately Active */}
            <div className="w-full h-full col-span-1">
              <RadioGroupItem value="moderate" id="moderate" className="peer sr-only" />
              <Label
                htmlFor="moderate"
                className="flex h-full text-center text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">⚡️</span>
                Moderately Active
                <span className="text-neutral-400 text-sm text-center font-normal">I spend an average of 60 minutes a day doing physical activities </span>
              </Label>
            </div>

            {/* Very Active */}
            <div className="w-full h-full col-span-1">
              <RadioGroupItem value="active" id="active" className="peer sr-only" />
              <Label
                htmlFor="active"
                className="flex h-full text-center text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">🔥</span>
                Very Active
                <span className="text-neutral-400 text-sm text-center font-normal">I spend a big amount of time doing physical activities</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Sun */}
        <div className="flex flex-col space-y-1.5 text-lg">
          <Label htmlFor="name" className="text-lg">
            Are you exposed to enough time (30 to 45 minutes) of natural light during the day 🌞 ?
          </Label>
          <RadioGroup
            onValueChange={(e) => setAnswers({ ...answers, natural_light: e })}
            defaultValue={answers.natural_light}
            className="flex gap-6 items-center"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes-2" />
              <Label htmlFor="yes-2" className="text-md">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no-2" />
              <Label htmlFor="no-2" className="text-md">No</Label>
            </div>
          </RadioGroup>
        </div>

        {/* coffee */}
        <div className="flex flex-col space-y-1.5 text-lg">
          <Label htmlFor="name" className="text-lg">
            Do you consume lot of coffee ☕️ ?
          </Label>
          <RadioGroup
            onValueChange={(e) => setAnswers({ ...answers, coffee: e })}
            defaultValue={answers.coffee}
            className="flex gap-6 items-center"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes-2" />
              <Label htmlFor="yes-2" className="text-md">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no-2" />
              <Label htmlFor="no-2" className="text-md">No</Label>
            </div>
          </RadioGroup>
        </div>

        {/* alcohol */}
        <div className="flex flex-col space-y-1.5 text-lg">
          <Label htmlFor="name" className="text-lg">
            What about alcohol 🍷 ?
          </Label>
          <RadioGroup
            onValueChange={(e) => setAnswers({ ...answers, alcohol: e })}
            defaultValue={answers.alcohol}
            className="flex gap-6 items-center"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes-2" />
              <Label htmlFor="yes-2" className="text-md">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no-2" />
              <Label htmlFor="no-2" className="text-md">No</Label>
            </div>
          </RadioGroup>
        </div>

        {/* fitness level */}
        <div className="flex flex-col w-full space-y-1.5">
          <Label htmlFor="gender" className="text-lg">What&apos;s your current fitness level/experience ?</Label>
          <RadioGroup
            onValueChange={(e) => setAnswers({ ...answers, fitness_level: e })}
            defaultValue={answers.fitness_level}
            className="grid grid-cols-3 gap-4 w-full jfull"
          >
            {/* beginner */}
            <div className="w-full h-full col-span-1">
              <RadioGroupItem value="beginner" id="beginner" className="peer sr-only" />
              <Label
                htmlFor="beginner"
                className="flex h-full text-center text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">👶</span>
                Beginner
                <span className="text-neutral-400 text-sm text-center font-normal">I have very limited or no experience</span>
              </Label>
            </div>

            {/* intermediate */}
            <div className="w-full h-full col-span-1">
              <RadioGroupItem value="intermediate" id="intermediate" className="peer sr-only" />
              <Label
                htmlFor="intermediate"
                className="flex h-full text-center text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">🏃‍♀️</span>
                Intermediate
                <span className="text-neutral-400 text-sm text-center font-normal">I have some experience with structured workouts</span>
              </Label>
            </div>

            {/* advanced */}
            <div className="w-full h-full col-span-1">
              <RadioGroupItem value="advanced" id="advanced" className="peer sr-only" />
              <Label
                htmlFor="advanced"
                className="flex h-full text-center text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">🏋️‍♂️</span>
                Advanced
                <span className="text-neutral-400 text-sm text-center font-normal">I have a high level of experience in fitness</span>
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </CardComponent>
  )
}
