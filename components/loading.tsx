'use client'

// imports
import { useState, useEffect } from 'react'
import { Progress } from './ui/progress'

export default function Loading() {
  // variables
  const [progress, setProgress] = useState<number>(0)

  // functions
  const sleep = async (time: number) => new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })

  const animate = async (time: number) => {
    const time_between_executions = time / 100
    let tmp = 0
    setInterval(() => {
      tmp += 1
      setProgress(tmp)
    }, time_between_executions)
  }

  useEffect(() => {
    animate(60 * 1.5 * 1000)
  }, [])

  // returns
  return (
    <div className="w-5/6 mx-auto relative flex flex-col gap-20 pt-16">
      <h1 className="text-center font-bold text-6xl leading-snug">
        You are
        <span className="font-black text-7xl"> 1 Minute </span>
        away from your new Fitness Journey...
      </h1>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3 text-xl font-semibold text-neutral-600 w-4/6 mx-auto">
          <span className="text-neutral-600">0%</span>
          <Progress className="border shadow-lg h-10" value={progress} />
          <span className="text-neutral-600">100%</span>
        </div>

        <div className="font-black text-6xl text-center">
          {progress}
          {' '}
          %
        </div>
      </div>
    </div>
  )
}
