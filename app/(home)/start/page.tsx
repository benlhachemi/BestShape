'use client';

// imports
import { useContext, useEffect, useState } from 'react';
import { StepsContext } from '@/context/steps';
import StepBar from '@/components/step_bar';
import BasicInfoCard from '@/components/basic_info';
import FitGoal from '@/components/fit_goal';
import MedicalCard from '@/components/medical';
import SleepCard from '@/components/sleep';
import Lifestyle from '@/components/lifestyle';
import AvailabilityCard from '@/components/availability';
import DietCard from '@/components/diet';
import Loader from '@/components/loader';
import Loading from '@/components/loading';
import Lottie from 'lottie-react';
import doneAnimation from '@/animations/done.json';
import waveAnimation from '@/animations/wave.json';
import Program from '@/components/program';
import { useRouter } from 'next/navigation';

export default function Home() {
  // variables
  const {
    step_num, loadComponent, steps_list, getAllAnswers,
  } = useContext(StepsContext);
  const [is_loading, setIsLoading] = useState<boolean>(false)

  // functions
  useEffect(() => {
    loadComponent('BasicInfoCard', BasicInfoCard);
    loadComponent('FitGoal', FitGoal);
    loadComponent('MedicalCard', MedicalCard);
    loadComponent('SleepCard', SleepCard);
    loadComponent('Lifestyle', Lifestyle);
    loadComponent('AvailabilityCard', AvailabilityCard);
    loadComponent('DietCard', DietCard);
  }, []);

  const generateProgram = async () => {
    try {
      setIsLoading(true)
      const response = await getAllAnswers()
    } catch (err) {
      console.log(err)
    }
  }

  const getStepComponent = () => {
    const {
      title,
      icon,
      description,
      id,
      component: Card,
    } = steps_list[step_num];
    if (Card) return <Card id={id} title={title} description={description} />;
    return <Loader />;
  };

  // returns
  return (
    <div className="w-full px-1 lg:w-3/4 2xl:w-2/4 mx-auto">
      <StepBar generateProgram={generateProgram} is_loading={is_loading} />
      {getStepComponent()}
    </div>
  );
}
