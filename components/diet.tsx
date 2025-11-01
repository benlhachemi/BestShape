'use client';

// imports
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useState, useContext, useEffect } from 'react';
import { StepsContext } from '@/context/steps';
import CardComponent from './card';
import Picker from './picker';

export default function DietCard(
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
        {/* Meals */}
        <div className="flex flex-col space-y-2">
          <Label htmlFor="meals" className="text-lg">
            How much average meals you eat per day ?
          </Label>
          <Picker
            max={8}
            min={1}
            tag={`Meal${answers.avg_meals_day !== 1 ? 's' : ''} per day`}
            value={answers.avg_meals_day}
            onAdd={() => setAnswers({ ...answers, avg_meals_day: answers.avg_meals_day + 1 })}
            onRemove={() => {
              setAnswers({ ...answers, avg_meals_day: answers.avg_meals_day - 1 })
            }}
            onSlide={(e) => setAnswers({ ...answers, avg_meals_day: e })}
          />
        </div>

        {/* Meal prep */}
        <div className="flex flex-col w-full space-y-1.5">
          <Label htmlFor="gender" className="text-lg">
            Are you able to prep your meals 🍽 ?
          </Label>
          <RadioGroup
            onValueChange={(e) => setAnswers({ ...answers, prep_meals: e })}
            defaultValue={answers.prep_meals}
            className="flex gap-4 w-full h-full"
          >
            {/* yes */}
            <div className="w-full min-h-full">
              <RadioGroupItem value="yes" id="yes" className="peer sr-only" />
              <Label
                htmlFor="yes"
                className="flex h-full text-center text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">👍</span>
                Yes
                <span className="text-neutral-400 text-sm text-center font-normal">
                  I can give any time needed to prep my meals
                </span>
              </Label>
            </div>

            {/* maybee */}
            <div className="w-full min-h-full">
              <RadioGroupItem
                value="maybee"
                id="maybee"
                className="peer sr-only"
              />
              <Label
                htmlFor="maybee"
                className="flex h-full text-center text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">🤔</span>
                Maybee
                <span className="text-neutral-400 text-sm text-center font-normal">
                  I have only small time to prep my meals (in the morning, evening, etc...)
                </span>
              </Label>
            </div>

            {/* No */}
            <div className="w-full min-h-full">
              <RadioGroupItem
                value="no"
                id="no"
                className="peer sr-only"
              />
              <Label
                htmlFor="no"
                className="flex h-full text-center text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">👎</span>
                No
                <span className="text-neutral-400 text-sm text-center font-normal">
                  I don&apos;t have anytime during the day to prep my meals
                </span>
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </CardComponent>
  );
}
