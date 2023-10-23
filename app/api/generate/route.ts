/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

// imports
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request): Promise<any> {
  // get data from request
  let error: any = null;
  let result: any = {};
  await request
    .json()
    .then((res) => {
      result = res;
    })
    .catch((err) => {
      error = err.toString();
    });

  // validate data
  if (error) {
    return NextResponse.json(
      {
        message: 'Bad Request',
        error,
      },
      { status: 400 },
    );
  }
  if (typeof result !== 'object') {
    return NextResponse.json(
      {
        message: 'Bad request',
      },
      { status: 400 },
    );
  }

  // overview data
  const overview = {
    name: result.name || null,
    age: result.age,
    gender: result.gender,
    weight: result.weight,
    height: result.height,
    is_fat_accurate: result.is_fat_accurate === 'yes',
    neck: result.neck,
    waist: result.waist,
    hip: result.hip,
    body_type: result.body_type,
    fitness_goal: result.fitness_goal,
    workout_days: result.workout_days,
    activity: result.activity,
  };

  // save data to DB
  const prisma = new PrismaClient();
  const slug = result.name
    ? result.name + uuidv4().substring(0, 4)
    : uuidv4().substring(0, 5);
  await prisma.program
    .create({
      data: {
        slug,
        diet: {},
        overview,
        workout: {},
      },
    })
    .then(() => console.log('DATA ADDED TO DB'))
    .catch((err) => console.log(err));

  return NextResponse.json({
    slug,
  });
}
