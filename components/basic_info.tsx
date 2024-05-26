'use client';

// imports
import { useState, useContext, useEffect } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { StepsContext } from '@/context/steps';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';
import { BiSolidDownArrow } from 'react-icons/bi';
import CardComponent from './card';
import { Button } from './ui/button';
import Picker from './picker';

export default function BasicInfoCard({
  title,
  description,
  id,
}: {
  title: string;
  description: string;
  id: string;
}) {
  // variables
  const {
    getAnswer, updateAnswer, blockNext, allowNext,
  } = useContext(StepsContext);
  const [answers, setAnswers] = useState<any>(getAnswer(id));
  const [is_accurate, setIsAccurate] = useState<boolean>(answers.is_fat_accurate === 'yes');
  const [is_choose, setIsChoose] = useState<boolean>(answers.is_fat_accurate);

  // functions
  useEffect(() => {
    updateAnswer(id, answers);
    if (answers.is_fat_accurate !== null) allowNext()
    else blockNext()
  }, [answers]);

  // returns
  return (
    <CardComponent title={title} description={description}>
      <div className="grid w-full items-center gap-10 lg:gap-16">
        {/* Name */}
        <div className="flex flex-col space-y-3">
          <Label htmlFor="name" className="text-md lg:text-lg">
            Adresa elektronike
            {' '}
            <span className="text-neutral-500 text-xs lg:text-md">(opsionale)</span>
          </Label>
          <Input
            defaultValue={answers.name}
            onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
            id="name"
            placeholder="info@trajneri.com"
            className="py-6 lg:py-7 text-md lg:text-xl"
          />
        </div>

        {/* Age */}
        <div className="flex flex-col space-y-3">
          <Label htmlFor="age" className="text-md lg:text-lg">
            Mosha juaj?
          </Label>
          <Picker
            max={99}
            min={16}
            tag="vjeç"
            value={answers.age}
            onAdd={() => setAnswers({ ...answers, age: answers.age + 1 })}
            onRemove={() => setAnswers({ ...answers, age: answers.age - 1 })}
            onSlide={(e) => setAnswers({ ...answers, age: e })}
          />
        </div>

        {/* Gender */}
        <div className="flex flex-col w-full space-y-3">
          <Label htmlFor="gender" className="text-md lg:text-lg">
            Gjinia
          </Label>
          <RadioGroup
            defaultValue={answers.gender}
            onValueChange={(e) => setAnswers({ ...answers, gender: e })}
            className="flex gap-4 w-full"
          >
            {/* Male */}
            <div className="w-full">
              <RadioGroupItem value="M" id="M" className="peer sr-only" />
              <Label
                htmlFor="M"
                className="flex relative h-full text-center text-xl lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-secondary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-2xl lg:text-3xl">🧑</span>
                Mashkull
              </Label>
            </div>

            {/* Female */}
            <div className="w-full">
              <RadioGroupItem
                value="F"
                id="female"
                className="peer sr-only"
              />
              <Label
                htmlFor="female"
                className="flex h-full text-center text-xl lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-2xl lg:text-3xl">👩</span>
                Femër
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Height and Weight */}
        <div className="flex flex-col lg:flex-row w-full gap-4 h-full">
          <div className="flex flex-col space-y-2 w-full h-full">
            <Label htmlFor="age" className="text-md lg:text-lg">
              Gjatesia 📏
            </Label>
            <Picker
              max={270}
              min={120}
              tag="cm"
              value={answers.height}
              onAdd={() => {
                setAnswers({ ...answers, height: answers.height + 1 });
              }}
              onRemove={() => {
                setAnswers({ ...answers, height: answers.height - 1 });
              }}
              onSlide={(e) => setAnswers({ ...answers, height: e })}
            />
          </div>

          <Separator orientation="vertical" className="hidden lg:block" />

          <div className="flex flex-col space-y-2 w-full h-full">
            <Label htmlFor="age" className="text-md lg:text-lg">
              Pesha ⚖️
            </Label>
            <Picker
              max={160}
              min={30}
              tag="Kg"
              value={answers.weight}
              onAdd={() => {
                setAnswers({ ...answers, weight: answers.weight + 1 });
              }}
              onRemove={() => {
                setAnswers({ ...answers, weight: answers.weight - 1 });
              }}
              onSlide={(e) => setAnswers({ ...answers, weight: e })}
            />
          </div>
        </div>

        {/* Measure question */}
        <div className="flex flex-col w-full gap-3">
          <Label htmlFor="name" className="text-md lg:text-lg">
            Keni një shirit matës?
          </Label>
          <RadioGroup
            defaultValue={answers.is_fat_accurate}
            onValueChange={(e) => {
              setAnswers({ ...answers, is_fat_accurate: e });
              setIsChoose(true)
              setIsAccurate(e === 'yes')
            }}
            className="flex gap-6 items-center"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes" className="text-md">
                Po
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no" className="text-md">
                Jo
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Body composition - Approximate */}
        {is_choose && !is_accurate && (
          <div className="flex flex-col w-full space-y-3">
            <Label htmlFor="gender" className="text-md lg:text-lg">
              Cila është përqindja aktuale e yndyrës në trup?
            </Label>

            <RadioGroup
              onValueChange={(e) => setAnswers({ ...answers, body_type: e })}
              defaultValue={answers.body_type}
              className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full"
            >
              {/* Ultra-Lean */}
              <div className="w-full col-span-1 h-full">
                <RadioGroupItem
                  value="ultralean"
                  id="ultralean"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="ultralean"
                  className="flex h-full text-center text-lg lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-3xl">💪🏋️‍♂️🔥</span>
                  Ekstremisht i Hollë
                  <span className="text-neutral-400 text-sm text-center font-normal">
                    1% - 5% yndyrë trupore
                  </span>
                </Label>
              </div>

              {/* very Lean */}
              <div className="w-full col-span-1 h-full">
                <RadioGroupItem
                  value="verylean"
                  id="verylean"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="verylean"
                  className="flex h-full text-center text-lg lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-3xl">🏃‍♂️💨👌</span>
                  Shumë i dobët
                  <span className="text-neutral-400 text-sm text-center font-normal">
                    6% - 10% yndyrë trupore
                  </span>
                </Label>
              </div>

              {/* Lean */}
              <div className="w-full col-span-1 h-full">
                <RadioGroupItem
                  value="lean"
                  id="lean"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="lean"
                  className="flex h-full text-center text-lg lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-3xl">🏋️‍♀️🥗💫</span>
                  Dobët
                  <span className="text-neutral-400 text-sm text-center font-normal">
                    11% - 15% yndyrë trupore
                  </span>
                </Label>
              </div>

              {/* Moderately Lean */}
              <div className="w-full col-span-1 h-full">
                <RadioGroupItem
                  value="moderatelylean"
                  id="moderatelylean"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="moderatelylean"
                  className="flex h-full text-center text-lg lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-3xl">🚴‍♂️🥦🏋️‍♀️</span>
                  Mesatarisht i dobët
                  <span className="text-neutral-400 text-sm text-center font-normal">
                    16% - 20% yndyrë trupore
                  </span>
                </Label>
              </div>

              {/* Healthy */}
              <div className="w-full col-span-1 h-full">
                <RadioGroupItem
                  value="healthy"
                  id="healthy"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="healthy"
                  className="flex h-full text-center text-lg lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-3xl">🏃‍♀️🍏😊</span>
                  Të shëndetshëm
                  <span className="text-neutral-400 text-sm text-center font-normal">
                    21% - 25% yndyrë trupore
                  </span>
                </Label>
              </div>

              {/* Moderately Overweight */}
              <div className="w-full col-span-1 h-full">
                <RadioGroupItem
                  value="moderatelyoverweight"
                  id="moderatelyoverweight"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="moderatelyoverweight"
                  className="flex h-full text-center text-lg lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-3xl">🏋️‍♂️🍔😬</span>
                  Mbipeshë mesatare
                  <span className="text-neutral-400 text-sm text-center font-normal">
                    26% - 30% yndyrë trupore
                  </span>
                </Label>
              </div>

              {/* overweight */}
              <div className="w-full col-span-1 h-full">
                <RadioGroupItem
                  value="overweight"
                  id="overweight"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="overweight"
                  className="flex h-full text-center text-lg lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-3xl">🍔🍕😓</span>
                  Mbipeshë
                  <span className="text-neutral-400 text-sm text-center font-normal">
                    31% - 35% yndyrë trupore
                  </span>
                </Label>
              </div>

              {/* obese */}
              <div className="w-full col-span-1 h-full">
                <RadioGroupItem
                  value="obese"
                  id="obese"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="obese"
                  className="flex h-full text-center text-lg lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-3xl">🍔🍟😔</span>
                  Trashë
                  <span className="text-neutral-400 text-sm text-center font-normal">
                    36% - 40% yndyrë trupore
                  </span>
                </Label>
              </div>

              {/* extremly obese */}
              <div className="w-full col-span-1 h-full">
                <RadioGroupItem
                  value="extremly_obese"
                  id="extremly_obese"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="extremly_obese"
                  className="flex h-full text-center text-lg lg:text-2xl gap-2 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <span className="text-3xl">🍔🍟🆘</span>
                  Jashtëzakonisht trashë
                  <span className="text-neutral-400 text-sm text-center font-normal">
                    41% dhe më shumë yndyrë trupore
                  </span>
                </Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {/* Body composition - Accurate */}
        {is_choose && is_accurate && (
          <div className="flex flex-col w-full gap-3">
            <Label htmlFor="gender" className="text-md lg:text-lg">
              Cila është përqindja aktuale e yndyrës në trup?
            </Label>

            <p className="text-neutral-400 text-sm mb-3">
              Për të përcaktuar me saktësi përqindjen e yndyrës në trup,
              ne kemi nevojë për dy matje: madhësinë e qafës dhe madhësinë e belit.
              Këto matje thelbësore na mundësojnë të llogarisim përqindjen e yndyrës në trup.
            </p>

            <div className="flex flex-col md:flex-row gap-4 w-full h-full">
              <div className="flex flex-col space-y-2 w-full h-full">
                <Label htmlFor="age" className="text-md lg:text-lg">
                  Qafa
                </Label>
                <Picker
                  max={100}
                  min={20}
                  tag="cm"
                  value={answers.neck}
                  onAdd={() => {
                    setAnswers({ ...answers, neck: answers.neck + 1 });
                  }}
                  onRemove={() => {
                    setAnswers({ ...answers, neck: answers.neck - 1 });
                  }}
                  onSlide={(e) => setAnswers({ ...answers, neck: e })}
                />
              </div>

              <Separator orientation="vertical" />

              <div className="flex flex-col space-y-2 w-full h-full">
                <Label htmlFor="age" className="text-md lg:text-lg">
                  Beli
                </Label>
                <Picker
                  max={200}
                  min={50}
                  tag="cm"
                  value={answers.waist}
                  onAdd={() => {
                    setAnswers({ ...answers, waist: answers.waist + 1 });
                  }}
                  onRemove={() => {
                    setAnswers({ ...answers, waist: answers.waist - 1 });
                  }}
                  onSlide={(e) => setAnswers({ ...answers, waist: e })}
                />
              </div>

              {answers.gender === 'F' && (
                <>
                  <Separator orientation="vertical" />

                  <div className="flex flex-col space-y-2 w-full h-full">
                    <Label htmlFor="age" className="text-md lg:text-lg">
                      Ijë
                    </Label>
                    <Picker
                      max={200}
                      min={30}
                      tag="cm"
                      value={answers.hip}
                      onAdd={() => {
                        setAnswers({ ...answers, hip: answers.hip + 1 });
                      }}
                      onRemove={() => {
                        setAnswers({ ...answers, hip: answers.hip - 1 });
                      }}
                      onSlide={(e) => setAnswers({ ...answers, hip: e })}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </CardComponent>
  );
}
