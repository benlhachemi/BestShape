'use client';

// imports
import { StepsContext } from '@/context/steps';
import { useContext, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function CardComponent({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  // variables
  const { animation } = useContext(StepsContext);

  // functions
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // returns
  return (
    <Card
      className={`w-full relative bg-opacity-0 bg-white space-y-6 lg:space-y-12 pb-20 xl:pb-28 shadow-none border-0 animate__animated ${animation}`}
    >
      <CardHeader>
        <CardTitle className="text-xl lg:text-3xl 2xl:text-4xl">{title}</CardTitle>
        <CardDescription className="text-sm lg:text-md">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col w-full gap-10 lg:gap-16">{children}</CardContent>
    </Card>
  );
}
