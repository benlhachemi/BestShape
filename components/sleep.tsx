'use client'

// imports
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useState, useContext, useEffect } from 'react';
import dayjs from 'dayjs';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import { StepsContext } from '@/context/steps';
import CardComponent from './card'
import Picker from './picker';

export default function SleepCard(
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
        {/* AVG hours */}
        <div className="flex flex-col space-y-2">
          <Label htmlFor="age" className="text-lg">
            How many sleep hours are you getting ⏰ ?
          </Label>
          <Picker
            max={12}
            min={4}
            tag="Hours"
            value={answers.avg_sleep_hours}
            onAdd={() => setAnswers({ ...answers, avg_sleep_hours: answers.avg_sleep_hours + 1 })}
            onRemove={() => {
              setAnswers({ ...answers, avg_sleep_hours: answers.avg_sleep_hours - 1 })
            }}
            onSlide={(e) => setAnswers({ ...answers, avg_sleep_hours: e })}
          />
        </div>

        {/* morning vs night */}
        <div className="flex flex-col w-full space-y-2 text-lg">
          <Label htmlFor="gender" className="text-lg">
            Are you a morning person or a night owl 🌞🌙 ?
          </Label>
          <RadioGroup
            onValueChange={(e) => setAnswers({ ...answers, morning_or_night: e })}
            defaultValue={answers.morning_or_night}
            className="flex gap-4 w-full"
          >
            {/* Morning person */}
            <div className="w-full">
              <RadioGroupItem
                value="morning person"
                id="male"
                className="peer sr-only"
              />
              <Label
                htmlFor="male"
                className="flex gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">☀️</span>
                Morning
              </Label>
            </div>

            {/* Night owl */}
            <div className="w-full">
              <RadioGroupItem
                value="night owl"
                id="female"
                className="peer sr-only"
              />
              <Label
                htmlFor="female"
                className="flex gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-3xl">🌑</span>
                Night
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* screen time */}
        <div className="flex flex-col space-y-2 text-lg">
          <Label htmlFor="name" className="text-lg">
            Do you spend screen time before bed 📱 ?
          </Label>
          <RadioGroup
            onValueChange={(e) => setAnswers({ ...answers, screen_time: e })}
            defaultValue={answers.screen_time}
            className="flex gap-6 items-center"
          >
            <div className="flex items-center space-x-2 text-lg">
              <RadioGroupItem value="yes" id="yes" />
              <Label className="text-lg" htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <RadioGroupItem value="no" id="no" />
              <Label className="text-lg" htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        </div>

        {/* difficulty falling asleep */}
        <div className="flex flex-col space-y-2 text-lg">
          <Label htmlFor="name" className="text-lg">
            Do you experience any difficulty falling asleep 😫 ?
          </Label>
          <RadioGroup
            onValueChange={(e) => setAnswers({ ...answers, difficulty_falling_asleep: e })}
            defaultValue={answers.difficulty_falling_asleep}
            className="flex gap-6 items-center"
          >
            <div className="flex items-center space-x-2 text-lg">
              <RadioGroupItem value="yes" id="yes-2" />
              <Label className="text-lg" htmlFor="yes-2">Yes</Label>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <RadioGroupItem value="no" id="no-2" />
              <Label className="text-lg" htmlFor="no-2">No</Label>
            </div>
          </RadioGroup>
        </div>

        {/* clock */}
        <div className="flex items-center w-full gap-3 h-full">
          {/* bed time */}
          <div className="flex flex-col space-y-1.5 w-full h-full">
            <Label htmlFor="name" className="text-lg text-center">
              At what time you usually go to bed 🛏️ ?
            </Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimeClock
                ampm={false}
                views={['hours']}
                defaultValue={dayjs().set('hour', answers.sleep_time)}
                onChange={(e) => setAnswers({ ...answers, sleep_time: dayjs(e).get('hour') })}
              />
            </LocalizationProvider>
            <h3 className="text-center font-bold text-2xl">
              {answers.sleep_time}
              :00
              {' '}
              {answers.sleep_time >= 12 ? 'PM' : 'AM'}
            </h3>
          </div>

          <Separator orientation="vertical" />
          {/* wake-up time */}
          <div className="flex flex-col space-y-1.5 w-full h-full">
            <Label htmlFor="name" className="text-lg text-center">
              At what time you usually wake-up 🙂 ?
            </Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimeClock
                ampm={false}
                views={['hours']}
                defaultValue={dayjs().set('hour', answers.wakeup_time)}
                onChange={(e) => setAnswers({ ...answers, wakeup_time: dayjs(e).get('hour') })}
              />
            </LocalizationProvider>
            <h3 className="text-center font-bold text-2xl">
              {answers.wakeup_time}
              :00
              {' '}
              {answers.wakeup_time >= 12 ? 'PM' : 'AM'}
            </h3>
          </div>
        </div>
      </div>
    </CardComponent>
  )
}
