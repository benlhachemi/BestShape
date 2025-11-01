'use client';

// imports
import { useContext, useEffect, useState } from 'react';
import { StepsContext } from '@/context/steps';
import type { breakpointType, roadType } from '@/types.h';
import { PiSpinnerGap } from 'react-icons/pi'
import { Button } from './ui/button';
import Road from './road';

export default function StepBar({
  generateProgram,
  is_loading,
}: {
  generateProgram: () => {};
  is_loading: boolean
}) {
  // variables
  const {
    is_next_btn,
    is_previous_btn,
    nextStep,
    previousStep,
    step_num,
    is_generate_btn,
    steps_list,
    is_blocked,
  } = useContext(StepsContext);
  // breakpoints

  const initial_breakpoints: breakpointType[] = steps_list.map((elt: any) => ({
    id: elt.id,
    icon: <span>{elt.icon}</span>,
    status: 'not_done',
  }));

  // Road object
  const initial_road: roadType = {
    breakpoints: initial_breakpoints,
    current_breakpoint: initial_breakpoints[0],
    start_icon: <span>🚀</span>,
    finish_icon: <span>⛳️</span>,
  };
  const [road, setRoad] = useState<roadType>(initial_road);
  const [breakpoints, setBPs] = useState<breakpointType[]>(initial_breakpoints);

  // functions
  useEffect(() => {
    setRoad({
      ...road,
      breakpoints,
      current_breakpoint: breakpoints[step_num],
    });
  }, [breakpoints, step_num]);

  // returns
  if (is_loading) {
    return (
      <div className="border-t-2 h-20 py-3 px-8 bg-white bg-opacity-50 backdrop-blur-md z-50 fixed bottom-0 left-0 w-full flex items-center">
        <div className="mx-auto animate-spin text-4xl">
          <PiSpinnerGap />
        </div>
      </div>
    )
  }

  return (
    <div
      className={`border-t-2 py-3 px-8 bg-white bg-opacity-50 backdrop-blur-md z-50 fixed bottom-0 left-0 w-full flex ${
        !is_previous_btn && is_next_btn ? 'justify-end' : 'justify-between'
      }`}
    >
      {is_previous_btn && (
        <Button
          onClick={() => {
            previousStep();
            setRoad({
              ...road,
              current_breakpoint: breakpoints[step_num - 1],
            });
          }}
          variant="secondary"
          className="lg:w-32 xl:w-40 2xl:w-44 lg:py-6 xl:py-7 2xl:py-8 text-lg xl:text-xl"
        >
          👈 Previous
        </Button>
      )}
      <Road data={road} />
      {is_next_btn && (
        <Button
          disabled={is_blocked}
          onClick={() => {
            nextStep();
            setBPs(
              breakpoints.map((breakpoint, index) => {
                if (index === step_num) {
                  return {
                    ...breakpoint,
                    status: 'done',
                  };
                }
                return breakpoint;
              }),
            );
          }}
          className={`lg:w-32 xl:w-40 2xl:w-44 lg:py-6 xl:py-7 2xl:py-8 text-lg xl:text-xl animate__animated ${
            is_blocked ? '' : 'animate__pulse'
          } animate__infinite`}
        >
          Next 👉
        </Button>
      )}
      {is_generate_btn && (
        <Button
          onClick={generateProgram}
          className="lg:w-32 xl:w-40 2xl:w-44 lg:py-6 xl:py-7 2xl:py-8 text-lg xl:text-xl"
        >
          Let&apos;s Go 🚀
        </Button>
      )}
    </div>
  );
}
