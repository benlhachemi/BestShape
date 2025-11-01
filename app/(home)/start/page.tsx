'use client'

// imports
import { useContext, useEffect, useState } from 'react';
import { StepsContext } from '@/context/steps';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// Dynamically import ALL components that might use browser APIs
const StepBar = dynamic(() => import('@/components/step_bar'), { ssr: false });
const BasicInfoCard = dynamic(() => import('@/components/basic_info'), { ssr: false });
const FitGoal = dynamic(() => import('@/components/fit_goal'), { ssr: false });
const MedicalCard = dynamic(() => import('@/components/medical'), { ssr: false });
const SleepCard = dynamic(() => import('@/components/sleep'), { ssr: false });
const Lifestyle = dynamic(() => import('@/components/lifestyle'), { ssr: false });
const AvailabilityCard = dynamic(() => import('@/components/availability'), { ssr: false });
const DietCard = dynamic(() => import('@/components/diet'), { ssr: false });
const Loader = dynamic(() => import('@/components/loader'), { ssr: false });
const Loading = dynamic(() => import('@/components/loading'), { ssr: false });
const Program = dynamic(() => import('@/components/program'), { ssr: false });
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Home() {
  // variables
  const {
    step_num, loadComponent, steps_list, getAllAnswers,
  } = useContext(StepsContext);
  const [is_loading, setIsLoading] = useState<boolean>(false);
  const [componentsLoaded, setComponentsLoaded] = useState(false);

  // functions
  useEffect(() => {
    // Only load components on client side
    if (typeof window !== 'undefined') {
      loadComponent('BasicInfoCard', BasicInfoCard);
      loadComponent('FitGoal', FitGoal);
      loadComponent('MedicalCard', MedicalCard);
      loadComponent('SleepCard', SleepCard);
      loadComponent('Lifestyle', Lifestyle);
      loadComponent('AvailabilityCard', AvailabilityCard);
      loadComponent('DietCard', DietCard);
      setComponentsLoaded(true);
    }
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
    if (!componentsLoaded) return <Loader />;

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

  // Don't render until client-side
  if (!componentsLoaded) {
    return (
      <div className="w-full px-1 lg:w-3/4 2xl:w-2/4 mx-auto">
        <div className="flex items-center justify-center min-h-screen">
          Loading...
        </div>
      </div>
    );
  }

  // returns
  return (
    <div className="w-full px-1 lg:w-3/4 2xl:w-2/4 mx-auto">
      <StepBar generateProgram={generateProgram} is_loading={is_loading} />
      {getStepComponent()}
    </div>
  );
}