// imports
import { Separator } from '@/components/ui/separator';
import { AiFillYoutube } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { GiHotMeal } from 'react-icons/gi';
import { GoDotFill } from 'react-icons/go';
import getBMI from '@/utils/caulculators/bmi';
import CardiovascularWorkout from '@/utils/caulculators/cardiovascular_workout';
import Link from 'next/link';
import calculateCalories from '@/utils/caulculators/calories'
import FatWorkout from '@/utils/caulculators/fat_workout';
import { PrismaClient } from '@prisma/client';
import Factors from '@/utils/caulculators/factors';
import MuscleWorkout from '@/utils/caulculators/muscle_workout';
import getCompositionData from '@/utils/caulculators/composition';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import CopyLink from '@/components/copy';

const prisma = new PrismaClient();

export default async function ProgramPage({
  params,
}: {
  params: { slug: string };
}) {
  // fetch data
  let data: any = {};
  await prisma.program
    .findUnique({
      where: { slug: params.slug },
    })
    .then((result) => {
      data = result;
    });

  // returns
  if (!data) return <h1>NO DATA</h1>;

  // bmi
  const {
    bmi, healthy, overweight, status, underweight, ideal_weight,
  } = getBMI({
    height: data.overview.height,
    weight: data.overview.weight,
    gender: data.overview.gender,
    fitness_goal: data.overview.fitness_goal,
  });

  // composition
  const composition = getCompositionData({
    age: data.overview.age,
    body_type: data.overview.body_type,
    gender: data.overview.gender,
    height: data.overview.height,
    hip: data.overview.hip,
    is_fat_accurate: data.overview.is_fat_accurate,
    neck: data.overview.neck,
    waist: data.overview.waist,
    fitness_goal: data.overview.fitness_goal,
  });

  // calories
  const calory_data = calculateCalories({
    activity: data.overview.activity,
    age: data.overview.age,
    current_weight: data.overview.weight,
    fitness_goal: data.overview.fitness_goal,
    gender: data.overview.gender,
    height: data.overview.height,
    ideal_weight,
    workout_days: data.overview.workout_days,
  })

  return (
    <div className="px-6 xl:w-3/4 mx-auto py-10 flex flex-col gap-20 text-md">
      {/* share */}
      <CopyLink params={params} />

      {/* overview */}
      <div className="flex flex-col gap-20">
        {/* Header - General overview */}
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-3xl lg:text-4xl flex-shrink-0">Përmbledhje e përgjithshme</h2>
          <span className="text-neutral-400 text-sm font-normal">
             Një përmbledhje e përgjithshme mbi planin e fitnesit dhe shëndetin aktual
          </span>
        </div>

        {/* */}
        <div className="flex flex-col lg:flex-row items-center w-full h-full justify-between gap-10">
          {/* weight */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">Vlerësimi i peshës</h3>
            <div>
             Pesha juaj aktuale (
              {data.overview?.weight}
              {' '}
              Kg) konsiderohet
              {status === 'healthy' && (
                <span className="font-semibold text-xl text-green-400">
                  {' '}
                  E shëndetshme
                </span>
              )}
              {status === 'underweight' && (
                <span className="font-semibold text-xl text-yellow-400">
                  {' '}
                  Nën peshë
                </span>
              )}
              {status === 'overweight' && (
                <span className="font-semibold text-xl text-yellow-400">
                  {' '}
                  Mbi peshë
                </span>
              )}
              {status === 'obese' && (
                <span className="font-semibold text-xl text-orange-400">
                  {' '}
                  Mbi peshë e tepruar
                </span>
              )}
            </div>

            {/* chart v2 */}
            <div className="w-full flex flex-col gap-0 mb-10">
              <div className="w-full h-8 rounded-md shadow-md flex gap-0 text-neutral-50 font-semibold text-xs">
                <div className="rounded-l-md flex items-center w-[18%] bg-yellow-400 h-full">
                  <span className="text-center mx-auto">Nën peshë</span>
                </div>

                <div className="w-[4%] relative h-full bg-gradient-to-r from-yellow-400 to-green-400">
                  <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                    <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                    <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                      {underweight}
                    </div>
                  </div>
                </div>

                <div className="flex items-center w-[38%] bg-green-400 h-full">
                  <span className="text-center mx-auto">Shëndetshëm</span>
                </div>

                <div className="w-[4%] h-full bg-gradient-to-r from-green-400 to-yellow-400 relative">
                  <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                    <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                    <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                      {healthy}
                    </div>
                  </div>
                </div>

                <div className="flex items-center w-[20%] bg-yellow-400 h-full">
                  <span className="text-center mx-auto">Mbi peshë</span>
                </div>

                <div className="w-[4%] h-full bg-gradient-to-r from-yellow-400 to-orange-400 relative">
                  <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                    <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                    <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                      {overweight}
                    </div>
                  </div>
                </div>

                <div className="flex rounded-r-md items-center w-[20%] bg-orange-400 h-full">
                  <span className="text-center mx-auto">Mbi peshë e tepruar</span>
                </div>
              </div>
            </div>

            <Card className="bg-neutral-50 text-sm text-neutral-600 pt-2">
              <CardContent className="flex flex-col gap-2">
                <div className="text-lg font-semibold text-sky-400 flex items-center gap-2">
                  <FaInfoCircle />
                  Shënim
                </div>
                <p className="flex flex-wrap gap-1">
                  Ky rezultat është llogaritur bazuar në 
                  <Sheet>
                    <SheetTrigger className="flex gap-1 items-center text-sm text-sky-400 hover:underline underline-offset-4">
                      BMI.
                    </SheetTrigger>
                    <SheetContent side="left" className="max-w-md">
                      <div className="flex flex-col gap-6">
                        <div className="text-xl font-semibold">
                          Body Mass Index (BMI)
                        </div>
                        <div>
                          bmi = pesha
                          <span className="text-sm text-neutral-400">
                            {' '}
                            (në kg)
                            {' '}
                          </span>
                          {' '}
                          / gjatësia ^ 2
                          {' '}
                        </div>
                        <div>
                          bmi =
                          {' '}
                          {data.overview.weight}
                          {' '}
                          / (
                          {data.overview.height / 100}
                          {' '}
                          ^ 2)
                        </div>
                        <div>
                          bmi =
                          {bmi}
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                  BMI ofron informacion mbi gjendjen tuaj të peshës,
                  por injoron faktorë si masa muskulore dhe kompozicioni i trupit. 
                  Dy persona me të njëjtin BMI mund të kenë profile të ndryshme shëndetësore.
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator orientation="vertical" className="h-80 hidden lg:block" />

          {/* composition */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">Analiza e strukturës së trupit</h3>
            <div className="flex items-center gap-2">
            Struktura aktuale e trupit tënd (
              {composition.fat_percentage}
              %) konsiderohet
              {composition.is_healthy ? (
                <span className="font-semibold text-xl text-green-400">
                  E shëndetshme
                </span>
              ) : (
                <span className="font-semibold text-xl text-yellow-400">
                  Përmbipeshë
                </span>
              )}
            </div>

            {/* chart v2 */}
            <div className="w-full flex flex-col gap-0 mb-10">
              <div className="w-full h-8 rounded-md shadow-md flex gap-0 text-neutral-50 font-semibold text-xs">
                <div className="flex rounded-l-md items-center w-[48%] bg-green-400 h-full">
                  <span className="text-center mx-auto">E shëndetshme</span>
                </div>

                <div className="w-[4%] h-full bg-gradient-to-r from-green-400 to-yellow-400 relative">
                  <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                    <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                    <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                      {composition.max_value}
                      %
                    </div>
                  </div>
                </div>

                <div className="flex rounded-r-md items-center w-[48%] bg-yellow-400 h-full">
                  <span className="text-center mx-auto">Përmbipeshë</span>
                </div>
              </div>
            </div>

            <Card className="bg-neutral-50 text-sm text-neutral-600 pt-3">
              <CardContent className="flex flex-col gap-2">
                <div className="text-lg font-semibold text-sky-400 flex items-center gap-2">
                  <FaInfoCircle />
                  Shënim
                </div>
                <p>
                Rezultati i shëndetit të strukturës së trupit tënd aktual 
                është llogaritur duke marrë parasysh gjininë dhe moshën tënde. 
                Kjo qasje e personalizuar ndihmon në sigurimin e një vlerësimi 
                më të saktë të gjendjes së shëndetit tënd specifik.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* suggested weight and fat */}
        <div className="flex flex-col lg:flex-row items-center w-full h-full justify-between gap-10">
          {/* weight target */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">
              Rekomandimi për peshën që synohet
            </h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {ideal_weight}
              {' '}
              Kg
            </div>

            {ideal_weight === data.overview.weight && data.overview.fitness_goal !== 'build_muscle' && (
              <p>
                Bazuar në formulën e D.R. Miller, pesha juaj aktuale konsiderohet e përsosur. 
                Sigurohuni që të mbani këtë peshë.
              </p>
            )}

            {ideal_weight !== data.overview.weight && data.overview.fitness_goal !== 'build_muscle' && (
              <p>
                Bazuar në formulën e D.R. Miller dhe qëllimin tuaj për fitnes, 
                pesha ideale që mund të arrini është
                {' '}
                {ideal_weight}
                {' '}
                Kg.
              </p>
            )}

            {data.overview.fitness_goal === 'build_muscle' && (
              <p>
                Duke qenë që qëllimi juaj i fitnesit është të ndërtoni muskuj, duhet të synoni për
                {' '}
                {ideal_weight}
                {' '}
                Kg për të dukur muskuloz. Kini parasysh që vetëm pesha 
                nuk është e mjaftueshme, përqindja e yndyrës në trup 
                është gjithashtu një faktor i rëndësishëm.
              </p>
            )}
          </div>

          <Separator orientation="vertical" className="h-28 hidden lg:block" />

          {/* composition target */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">
              Rekomandimi për strukturën e trupit
            </h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {composition.ideal_fat <= composition.fat_percentage
                ? composition.ideal_fat
                : composition.fat_percentage}
              %
            </div>
            {composition.ideal_fat >= composition.fat_percentage ? (
              <p>
                Përqindja aktuale e yndyrës në trupin tuaj 
                konsiderohet tashmë perfekte, kështu që detyra 
                jonë është të sigurojmë që të mbani këtë strukturë trupore.
              </p>
            ) : (
              <p>
                Bazuar në përqindjet e ideale të yndyrës së trupit 
                sipas Jackson & Pollock dhe qëllimin tuaj për fitnes, 
                kompozicioni i trupit perfekt me të cilin mund të punoni 
                është
                {' '}
                {composition.ideal_fat}
                %.
              </p>
            )}
          </div>
        </div>

        <Factors fitness_goal={data.overview.fitness_goal} />

        {/* summary */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Përmbledhje</h3>
          <p>
           Si perfundim, qëllimi juaj është të
            {data.overview.weight > ideal_weight
              && ` humbni ${
                data.overview.weight - ideal_weight
              } Kg për të arritur peshën ideale e sugjeruar (${ideal_weight} kg), `}
            {data.overview.weight < ideal_weight
              && ` te shtoni ${
                ideal_weight - data.overview.weight
              } Kg për të arritur peshën ideale e sugjeruar (${ideal_weight} kg), `}
            {data.overview.weight === ideal_weight
              && ' mbani peshën tuaj aktuale, '}
            dhe për përbërjen e trupit duhet të digjni 
            {composition.fat_percentage > composition.ideal_fat
              && ` digjni ${
                composition.fat_percentage - composition.ideal_fat
              } % e yndyrës së trupit për të arritur përbërjen ideale të trupit të sugjeruar (${
                composition.ideal_fat
              } %).`}
            {composition.fat_percentage <= composition.ideal_fat
              && ' mbani përqindjen aktuale të yndyrës në trup.'}
          </p>
        </div>
      </div>

      {/* workout */}
      {data.overview.fitness_goal === 'build_muscle' && (
        <MuscleWorkout workout_days={data.overview.workout_days} />
      )}
      {data.overview.fitness_goal === 'cardiovascular' && (
        <CardiovascularWorkout workout_days={data.overview.workout_days} />
      )}
      {data.overview.fitness_goal === 'burn_fats' && (
        <FatWorkout workout_days={data.overview.workout_days} />
      )}

      {/* Diet */}
      <div className="flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-4xl flex-shrink-0">Plani i dietës</h2>
          <span className="text-neutral-400 text-sm font-normal">
            Plani javor i ushqimit tuaj
          </span>
        </div>

        {/* Calories */}
        <div className="flex flex-col gap-5 w-full h-full">
          <h3 className="text-xl font-semibold">Kërkesa ditore kalorike</h3>
          <div className="text-3xl font-semibold text-emerald-500">
            {ideal_weight < data.overview.weight && calory_data.lose_05}
            {ideal_weight > data.overview.weight && calory_data.gain_05}
            {ideal_weight === data.overview.weight && calory_data.calories}
            {' '}
            Kaloritë
          </div>
          <p>
            {ideal_weight < data.overview.weight && `Në mënyrë që të humbni 0.5 kg në javë, duhet të konsumoni ${calory_data.lose_05} kalori në ditë.`}
            {ideal_weight > data.overview.weight && `Në mënyrë që të fitoni 0.5 kg në javë, duhet të konsumoni ${calory_data.gain_05} kalori në ditë.`}
            {ideal_weight === data.overview.weight && `Në mënyrë që të mbani peshën tuaj aktuale, duhet të konsumoni ${calory_data.calories} kalori në ditë.`}
          </p>

          {/* chart v2 */}
          <div className="w-full hidden lg:flex flex-col gap-0 mb-10">
            <div className="w-full h-8 rounded-md shadow-md flex gap-0 text-white font-bold text-xs">
              <div className="rounded-l-md flex items-center w-[10%] bg-red-400 h-full">
                <span className="text-center mx-auto">-1 Kg/javë</span>
              </div>

              <div className="w-[5%] relative h-full bg-gradient-to-r from-red-400 to-orange-400">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.lose_1}
                    {' '}
                    kaloritë
                  </div>
                </div>
              </div>

              <div className="flex items-center w-[10%] bg-orange-400 h-full">
                <span className="text-center mx-auto">- 0.5 Kg/javë</span>
              </div>

              <div className="w-[5%] h-full bg-gradient-to-r from-orange-400 to-lime-400 relative">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.lose_05}
                    {' '}
                    kaloritë
                  </div>
                </div>
              </div>

              <div className="flex items-center w-[10%] bg-lime-400 h-full">
                <span className="text-center mx-auto">- 0.25 Kg/javë</span>
              </div>

              <div className="w-[5%] h-full bg-gradient-to-r from-lime-400 to-green-400 relative">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.lose_025}
                    {' '}
                    kaloritë
                  </div>
                </div>
              </div>

              <div className="flex items-center w-[10%] bg-green-400 h-full">
                <span className="text-center mx-auto">Mbajeni peshën</span>
              </div>

              <div className="w-[5%] h-full bg-gradient-to-r from-green-400 to-cyan-400 relative">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.calories}
                    {' '}
                    kaloritë
                  </div>
                </div>
              </div>

              <div className="flex items-center w-[10%] bg-cyan-400 h-full">
                <span className="text-center mx-auto">+ 0.25 Kg/javë</span>
              </div>

              <div className="w-[5%] h-full bg-gradient-to-r from-cyan-400 to-sky-400 relative">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.gain_025}
                    {' '}
                    kaloritë
                  </div>
                </div>
              </div>

              <div className="flex items-center w-[10%] bg-sky-400 h-full">
                <span className="text-center mx-auto">+ 0.5 Kg/javë</span>
              </div>

              <div className="w-[5%] h-full bg-gradient-to-r from-sky-400 to-indigo-400 relative">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.gain_05}
                    {' '}
                    kaloritë
                  </div>
                </div>
              </div>

              <div className="flex items-center w-[10%] bg-indigo-400 h-full">
                <span className="text-center mx-auto">+ 1 Kg/javë</span>
              </div>

              <div className="w-[5%] h-full bg-gradient-to-r from-indigo-400 to-indigo-400 relative rounded-r-md">
                <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1 rounded-r-md">
                  <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                  <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                    {calory_data.gain_1}
                    {' '}
                    kaloritë
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table for Mobile */}
          <Table className="block lg:hidden w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Kg</TableHead>
                <TableHead>Kaloritë</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">-1 Kg/javë</TableCell>
                <TableCell>{calory_data.lose_1}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">-0.5 Kg/javë</TableCell>
                <TableCell>{calory_data.lose_05}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">-0.25 Kg/javë</TableCell>
                <TableCell>{calory_data.lose_025}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Mbajeni peshën</TableCell>
                <TableCell>{calory_data.calories}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">+0.25 Kg/javë</TableCell>
                <TableCell>{calory_data.gain_025}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">+0.5 Kg/javë</TableCell>
                <TableCell>{calory_data.gain_05}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">+1 Kg/javë</TableCell>
                <TableCell>{calory_data.gain_1}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Protein */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">
              Kërkesat ditore për proteina
            </h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {calory_data.protein_1}
              g deri
              {' '}
              {calory_data.protein_2}
              g
            </div>
            <p>
              {data.overview.fitness_goal === 'build_muscle' && 'Since your goal is to build muscles, high protein intake is an important factor to build lean muscle mass'}
            </p>
            <div className="flex flex-col gap-1">
              <div className="font-semibold">Burimet:</div>
              <ul className="list-disc list-inside">
                <li>Mish</li>
                <li>Ve</li>
                <li>Peshk</li>
                <li>Shpendët</li>
                <li>Bishtajoret (e.g., thjerrëzat, qiqrat)</li>
                <li>Arrat (e.g., bajame, kikirikë)</li>
                <li>Farat (e.g., farat chia, farë lulediellis)</li>
                <li>Tofu</li>
                <li>Kuinoa</li>
                <li>Produktet e qumështit (e.g., djathi, jogurti)</li>
                <li>Fasulet (e.g., fasulet e zeza, fasula nyje)</li>
                <li>Jogurt grek</li>
                <li>Gjizë</li>
              </ul>
            </div>
          </div>

          {/* Carbs */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">
             Kërkesa ditore për karbohidrate
            </h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {calory_data.carbs_1}
              g deri
              {' '}
              {calory_data.carbs_2}
              g
            </div>
            <p>
              {data.overview.fitness_goal === 'build_muscle' && 'Carbohydrates are a crucial macronutrient for bodybuilders due to their role in providing energy for intense workouts and aiding in muscle recovery'}
            </p>
            <div className="flex flex-col gap-1">
              <div className="font-semibold">Burimet:</div>
              <ul className="list-disc list-inside">
                <li>Oriz (e.g., oriz i bardhë, oriz i kaftë)</li>
                <li>Pasta (e.g., shpageta, makarona)</li>
                <li>Buke (e.g., bukë e zezë, baguette)</li>
                <li>Patatet</li>
                <li>Kuinoa</li>
                <li>Tërshëra</li>
                <li>Drithërat (e.g., kornfleks, bollgur)</li>
                <li>Fasulet (e.g., fasulet e zeza, fasula nyje)</li>
                <li>Thjerrëzat</li>
                <li>Patate e ëmbël</li>
                <li>Elbi</li>
                <li>Meli</li>
                <li>Frutat (e.g, Banane, mollë)</li>
              </ul>
            </div>
          </div>

          {/* Fats */}
          <div className="flex flex-col gap-5 w-full h-full">
            <h3 className="text-xl font-semibold">
             Kërkesat ditore për yndyrna
            </h3>
            <div className="text-3xl font-semibold text-emerald-500">
              {calory_data.fats_1}
              g deri
              {' '}
              {calory_data.fats_2}
              g
            </div>
            <p>
              {data.overview.fitness_goal === 'build_muscle' && 'You need to take from 20% to 25% fats of total calories'}
            </p>
            <div className="flex flex-col gap-1">
              <div className="font-semibold">Burimet:</div>
              <ul className="list-disc list-inside">
                <li>Avokado</li>
                <li>Vaj ulliri</li>
                <li>Vaj kokosi</li>
                <li>Peshku i yndyrshëm(e.g., salmon, skumbri)</li>
                <li>Arrat (e.g., bajamet, arra)</li>
                <li>Farat (e.g., farat chia, fara liri)</li>
                <li>Gjalpë arrash (e.g., gjalpë bajamesh, gjalp kikiriku)</li>
                <li>Çokollate e zezë (me përmbajtje të lartë kakao)</li>
                <li>Jogurt me yndyrë të plotë</li>
                <li>Djathë (në masë)</li>
                <li>Vezë (përmbajnë yndyrna të shëndetshme në të verdhën e verdhë)</li>
                <li>Ullinj</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* share */}
      <CopyLink params={params} />
    </div>
  );
}