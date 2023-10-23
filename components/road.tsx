'use client'

// imports
import type { breakpointType, roadType } from '@/types.h'
import { useContext, useState, useEffect } from 'react';
import { StepsContext } from '@/context/steps';
import { BsCaretDownFill } from 'react-icons/bs'
import { Separator } from './ui/separator'

// components
function Bar({ done }: { done: boolean }): any {
  return (
    <Separator className={`w-5 xl:w-9 2xl:w-10 h-0.5 xl:h-1 rounded-full opacity-50 ${done ? 'bg-gradient-primary' : 'bg-neutral-400'}`} />
  )
}

function SpecialPoint({ icon, has_next }: { icon: JSX.Element, has_next: boolean }) {
  return (
    <>
      <span className="text-3xl xl:text-4xl 2xl:text-5xl mr-1">{icon}</span>
      {has_next && <Bar done />}
    </>
  )
}

function BreakPoint({
  /* eslint-disable */
  icon, status, is_current, onClick, is_point
}: { icon: JSX.Element, status: 'done' | 'not_done', is_current: boolean, onClick: any, is_point: boolean }) {
  

  // returns
  if (is_current && status === 'not_done') {
    return (
      <>
        <div
          onClick={onClick}
          className="bg-white border relative cursor-pointer animate__animated animate__infinite animate__pulse shadow-md w-12 h-12 xl:w-16 xl:h-16 rounded-full flex items-center justify-center"
        >
          {is_point && <div className="bg-red-600 w-1 h-1 xl:w-2 xl:h-2 rounded-full absolute top-2/4 left-0 -translate-x-full -translate-y-2/4" />}
          <span className="text-2xl xl:text-3xl">{icon}</span>
        </div>
        <Bar done={false} />
      </>
    )
  }
  if (is_current && status === 'done') {
    return (
      <>
        <div
          onClick={onClick}
          className="bg-gradient-to-tr from-sky-200 to-emerald-100 relative border-2 border-sky-500 cursor-pointer animate__animated animate__infinite animate__pulse shadow-md w-12 h-12 xl:w-16 xl:h-16 rounded-full flex items-center justify-center"
        >
          <span className="text-2xl xl:text-3xl">{icon}</span>
        </div>
        <Bar done />
      </>
    )
  }
  if (status === 'done') {
    return (
      <>
        <div
          onClick={onClick}
          className="bg-gradient-to-tr from-sky-200 to-emerald-100 relative border-2 border-sky-500 cursor-pointer shadow-md w-8 h-8 xl:h-10 xl:w-10 rounded-full flex items-center justify-center"
        >
          <span className="text-sm xl:text-lg">{icon}</span>
        </div>
        <Bar done />
      </>
    )
  }
  return (
    <>
      <div
        onClick={onClick}
        className="bg-neutral-400 relative cursor-pointer shadow-md w-8 h-8 xl:h-10 xl:w-10 rounded-full flex items-center justify-center"
      >
        {is_point && <div className="bg-red-600 w-1 h-1 xl:w-2 xl:h-2 rounded-full absolute top-2/4 left-0 -translate-x-full -translate-y-2/4" />}
        <span className="text-sm xl:text-lg">{icon}</span>
      </div>
      <Bar done={false} />
    </>
  )
  /* eslint-enable */
}

export default function Road({ data }: { data: roadType }) {
  // variables
  const { changeStep, step_num } = useContext(StepsContext)
  const [point_position, setPointPosition] = useState<number>(0)

  // functions
  useEffect(() => {
    let found = false
    let i = 0
    while (!found && i < data.breakpoints.length) {
      if (data.breakpoints[i].status === 'not_done') {
        setPointPosition(i)
        found = true
      }
      i += 1
    }
  }, [step_num, data])

  // returns
  return (
    <div className="hidden lg:flex items-center absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
      {data.start_icon && <SpecialPoint has_next icon={data.start_icon} />}

      {data.breakpoints.map((breakpoint: breakpointType, index) => (
        <BreakPoint
          key={breakpoint.id}
          onClick={() => {
            // check if there is previous breakpoints that are not done
            let is_error = false
            let needed_step = 0
            let i = 0
            while (is_error === false && i < data.breakpoints.length) {
              if (i < index && data.breakpoints[i].status !== 'done') {
                is_error = true
                needed_step = i
              }
              i += 1
            }
            if (!is_error) changeStep(index)
            else changeStep(needed_step)
          }}
          is_current={breakpoint === data.current_breakpoint}
          icon={breakpoint.icon}
          status={breakpoint.status}
          is_point={point_position === index}
        />
      ))}

      {data.finish_icon && <SpecialPoint has_next={false} icon={data.finish_icon} />}
    </div>
  )
}
