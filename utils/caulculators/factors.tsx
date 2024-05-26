export default function getFactors({ fitness_goal }: { fitness_goal: string }): any {
  // cardiovascular
  if (fitness_goal === 'cardiovascular') {
    return (
      <div className="flex flex-col gap-6">
        <h3 className="text-xl font-semibold">
          Factors for Improved Cardiovascular Health
        </h3>

        {/* chart */}
        <div className="w-full h-full flex gap-0 relative">
          <div className="h-full w-[40%] flex flex-col">
            <div className="flex flex-col gap-0 mb-2 w-[95%] mx-auto">
              <div className="flex mx-auto text-neutral-400 text-sm mb-1">
                40%
              </div>
              <div className="flex mx-auto w-0.5 h-4 bg-neutral-200" />
              <div className="border-t border-x h-4 border-neutral-200" />
            </div>
            <div className="bg-orange-400 text-sm lg:text-xl font-semibold text-neutral-50 flex items-center justify-center rounded-l-md shadow-md">
              Physical Activity
            </div>
          </div>

          <div className="h-full w-[30%] flex flex-col">
            <div className="flex flex-col gap-0 mb-2 w-[95%] mx-auto">
              <div className="flex mx-auto text-neutral-400 text-sm mb-1">
                30%
              </div>
              <div className="flex mx-auto w-0.5 h-4 bg-neutral-200" />
              <div className="border-t border-x h-4 border-neutral-200" />
            </div>
            <div className="bg-emerald-400 text-sm lg:text-xl font-semibold text-neutral-50 flex items-center justify-center shadow-md">
              Diet
            </div>
          </div>

          <div className="h-full w-[15%] flex flex-col">
            <div className="flex flex-col gap-0 mb-2 w-[95%] mx-auto">
              <div className="flex mx-auto text-neutral-400 text-sm mb-1">
                15%
              </div>
              <div className="flex mx-auto w-0.5 h-4 bg-neutral-200" />
              <div className="border-t border-x h-4 border-neutral-200" />
            </div>
            <div className="bg-sky-400 text-sm lg:text-xl font-semibold text-neutral-50 flex items-center justify-center shadow-md">
              Rest
            </div>
          </div>

          <div className="h-full w-[15%] flex flex-col">
            <div className="flex flex-col gap-0 mb-2 w-[95%] mx-auto">
              <div className="flex mx-auto text-neutral-400 text-sm mb-1">
                15%
              </div>
              <div className="flex mx-auto w-0.5 h-4 bg-neutral-200" />
              <div className="border-t border-x h-4 border-neutral-200" />
            </div>
            <div className="bg-yellow-400 text-sm lg:text-xl font-semibold text-neutral-50 flex items-center justify-center shadow-md rounded-r-md">
              Stress
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-9 mt-6">
          <div className="flex gap-3 relative h-fit items-stretch">
            <div className="flex flex-col pt-1">
              <div className="w-4 h-5 bg-orange-300 rounded-full" />
              <div className="h-full w-0.5 bg-gradient-to-b from-orange-300 mx-auto" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">
                Physical activities - 40%
              </h3>
              <p>
                Regular exercise is pivotal for cardiovascular health.
                It helps strengthen the heart muscle, improves circulation,
                and enhances the efficiency of oxygen utilization.
                Cardiovascular exercises like brisk walking,
                running, swimming, or cycling elevate the heart rate, promoting heart health
                and reducing the risk of heart disease. It also aids in maintaining healthy
                blood pressure levels and cholesterol profiles.
              </p>
            </div>
          </div>

          <div className="flex gap-3 relative h-fit items-stretch">
            <div className="flex flex-col pt-1">
              <div className="w-4 h-5 bg-emerald-300 rounded-full" />
              <div className="h-full w-0.5 bg-gradient-to-b from-emerald-300 mx-auto" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Diet - 30%</h3>
              <p>
                A well-balanced diet plays a crucial role in maintaining cardiovascular health.
                Emphasize a diet rich in fruits, vegetables, whole grains, and lean
                proteins. Reduce intake of saturated fats, trans fats, and sodium
                to manage cholesterol levels and blood pressure. Incorporate foods rich
                in omega-3 fatty acids, like fatty fish, to help reduce the risk of heart disease.
                Limiting processed foods and sugary beverages is also essential
                for maintaining a healthy heart.
              </p>
            </div>
          </div>

          <div className="flex gap-3 relative h-fit items-stretch">
            <div className="flex flex-col pt-1">
              <div className="w-4 h-5 bg-sky-300 rounded-full" />
              <div className="h-full w-0.5 bg-gradient-to-b from-sky-300 mx-auto" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Stress - 15%</h3>
              <p>
                Chronic stress can have detrimental effects on the cardiovascular
                system. Implement stress-reduction techniques such as mindfulness,
                meditation, yoga, or deep breathing exercises. Adequate stress
                management helps in maintaining healthy blood pressure levels
                and reducing the risk of heart-related ailments.
              </p>
            </div>
          </div>

          <div className="flex gap-3 relative h-fit items-stretch">
            <div className="flex flex-col pt-1">
              <div className="w-4 h-5 bg-yellow-300 rounded-full" />
              <div className="h-full w-0.5 bg-gradient-to-b from-yellow-300 mx-auto" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Bad Habits - 15%</h3>
              <p>
                Steering clear of harmful habits such as smoking and excessive alcohol
                consumption is vital for cardiovascular health. Smoking damages the
                blood vessels, leading to atherosclerosis and increasing the
                risk of heart disease. Excessive alcohol consumption can elevate blood
                pressure and contribute to heart muscle damage. Avoiding these habits
                significantly reduces the risk of cardiovascular complications.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // build muscle
  if (fitness_goal === 'build_muscle') {
    return (
      <div className="flex flex-col gap-6">
        <h3 className="text-xl font-semibold">
          Factors for Building Muscles
        </h3>

        {/* chart */}
        <div className="w-full h-full flex gap-0 relative">
          <div className="h-full w-[40%] flex flex-col">
            <div className="flex flex-col gap-0 mb-2 w-[95%] mx-auto">
              <div className="flex mx-auto text-neutral-400 text-sm mb-1">
                40%
              </div>
              <div className="flex mx-auto w-0.5 h-4 bg-neutral-200" />
              <div className="border-t border-x h-4 border-neutral-200" />
            </div>
            <div className="bg-orange-400 text-sm lg:text-xl font-semibold text-neutral-50 flex items-center justify-center rounded-l-md shadow-md">
              Overload
            </div>
          </div>

          <div className="h-full w-[30%] flex flex-col">
            <div className="flex flex-col gap-0 mb-2 w-[95%] mx-auto">
              <div className="flex mx-auto text-neutral-400 text-sm mb-1">
                30%
              </div>
              <div className="flex mx-auto w-0.5 h-4 bg-neutral-200" />
              <div className="border-t border-x h-4 border-neutral-200" />
            </div>
            <div className="bg-emerald-400 text-sm lg:text-xl font-semibold text-neutral-50 flex items-center justify-center shadow-md">
              Nutrition
            </div>
          </div>

          <div className="h-full w-[15%] flex flex-col">
            <div className="flex flex-col gap-0 mb-2 w-[95%] mx-auto">
              <div className="flex mx-auto text-neutral-400 text-sm mb-1">
                15%
              </div>
              <div className="flex mx-auto w-0.5 h-4 bg-neutral-200" />
              <div className="border-t border-x h-4 border-neutral-200" />
            </div>
            <div className="bg-sky-400 text-sm lg:text-xl font-semibold text-neutral-50 flex items-center justify-center shadow-md">
              Rest
            </div>
          </div>

          <div className="h-full w-[15%] flex flex-col">
            <div className="flex flex-col gap-0 mb-2 w-[95%] mx-auto">
              <div className="flex mx-auto text-neutral-400 text-sm mb-1">
                15%
              </div>
              <div className="flex mx-auto w-0.5 h-4 bg-neutral-200" />
              <div className="border-t border-x h-4 border-neutral-200" />
            </div>
            <div className="bg-yellow-400 text-sm lg:text-xl font-semibold text-neutral-50 flex items-center justify-center shadow-md rounded-r-md">
              Plan
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-9 mt-6">
          <div className="flex gap-3 relative h-fit items-stretch">
            <div className="flex flex-col pt-1">
              <div className="w-4 h-5 bg-orange-300 rounded-full" />
              <div className="h-full w-0.5 bg-gradient-to-b from-orange-300 mx-auto" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">
                Progressive Overload - 40%
              </h3>
              <p className="text-md text-neutral-500">
                Progressive overload is the most critical factor in muscle growth.
                It involves gradually increasing the stress placed on the muscle during exercise
                over time. This can be achieved by increasing the weight lifted,
                the number of repetitions,
                or the intensity of the workout. By consistently challenging your muscles,
                you stimulate muscle fibers to grow in size and strength.
                If you keep doing the same routine over and over again,
                your body is going to plateau!
                Your body adapts and that is why variety is important.
                So mix it up and adapt your workout to focus on different
                muscles keeping your body surprised and confused!
              </p>
            </div>
          </div>

          <div className="flex gap-3 relative h-fit items-stretch">
            <div className="flex flex-col pt-1">
              <div className="w-4 h-5 bg-emerald-300 rounded-full" />
              <div className="h-full w-0.5 bg-gradient-to-b from-emerald-300 mx-auto" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Nutrition - 30%</h3>
              <p className="text-md text-neutral-500">
                A well-balanced and appropriate diet is essential for muscle growth.
                It should include an adequate amount of protein to support
                muscle repair and growth, complex carbohydrates to provide
                energy, healthy fats for hormone regulation, and a variety of
                vitamins and minerals for overall health. Protein is particularly
                crucial, as it provides the building blocks (amino acids)
                necessary for muscle repair and growth.
              </p>
            </div>
          </div>

          <div className="flex gap-3 relative h-fit items-stretch">
            <div className="flex flex-col pt-1">
              <div className="w-4 h-5 bg-sky-300 rounded-full" />
              <div className="h-full w-0.5 bg-gradient-to-b from-sky-300 mx-auto" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Rest - 15%</h3>
              <p className="text-md text-neutral-500">
                Muscle growth occurs during periods of rest, not while you&apos;re working out.
                Sufficient rest is crucial to allow your muscles to recover
                and repair. Overtraining can lead to muscle fatigue, injuries,
                and hindered progress. Aim for 7-9 hours of quality sleep each
                night, and consider incorporating rest days into your workout
                routine to prevent overexertion and promote muscle repair.
              </p>
            </div>
          </div>

          <div className="flex gap-3 relative h-fit items-stretch">
            <div className="flex flex-col pt-1">
              <div className="w-4 h-5 bg-yellow-300 rounded-full" />
              <div className="h-full w-0.5 bg-gradient-to-b from-yellow-300 mx-auto" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Consistency - 15%</h3>
              <p className="text-md text-neutral-500">
                Consistency in your workout routine and discipline in adhering to your
                nutrition plan are key to achieving significant muscle growth.
                Building muscle is a gradual process that requires dedication
                and perseverance. Regular exercise and a consistent diet will
                ensure that your body receives the necessary stimuli for
                muscle growth and repair.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // burn fats
  return (
    <div className="flex flex-col gap-6 w-full">
      <h3 className="text-xl font-semibold">
        Faktorët për të humbur peshë
      </h3>

      {/* chart */}
      <div className="w-full h-full flex gap-0 relative">
        <div className="h-full flex flex-col" style={{ width: '70%' }}>
          <div className="flex flex-col gap-0 mb-2 w-[95%] mx-auto">
            <div className="flex mx-auto text-neutral-400 text-sm mb-1">
              70%
            </div>
            <div className="flex mx-auto w-0.5 h-4 bg-neutral-200" />
            <div className="border-t border-x h-4 border-neutral-200" />
          </div>
          <div className="bg-orange-400 text-sm lg:text-xl font-semibold text-neutral-50 flex items-center justify-center rounded-l-md shadow-md">
            Ushqimi
          </div>
        </div>

        <div className="h-full flex flex-col" style={{ width: '15%' }}>
          <div className="flex flex-col gap-0 mb-2 w-[95%] mx-auto">
            <div className="flex mx-auto text-neutral-400 text-sm mb-1">
              15%
            </div>
            <div className="flex mx-auto w-0.5 h-4 bg-neutral-200" />
            <div className="border-t border-x h-4 border-neutral-200" />
          </div>
          <div className="bg-emerald-400 text-sm lg:text-xl font-semibold text-neutral-50 flex items-center justify-center shadow-md">
            Aktiviteti fizik
          </div>
        </div>

        <div className="h-full flex flex-col" style={{ width: '15%' }}>
          <div className="flex flex-col gap-0 mb-2 w-[95%] mx-auto">
            <div className="flex mx-auto text-neutral-400 text-sm mb-1">
              15%
            </div>
            <div className="flex mx-auto w-0.5 h-4 bg-neutral-200" />
            <div className="border-t border-x h-4 border-neutral-200" />
          </div>
          <div className="bg-sky-400 text-sm lg:text-xl font-semibold text-neutral-50 flex items-center justify-center rounded-r-md shadow-md">
            Pushimi
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-9 mt-6">
        <div className="flex gap-3 relative h-fit items-stretch">
          <div className="flex flex-col pt-1">
            <div className="w-4 h-5 bg-orange-300 rounded-full" />
            <div className="h-full w-0.5 bg-gradient-to-b from-orange-300 mx-auto" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">
              Ushqyerja - 70%
            </h3>
            <p>
              Ushqyerja luan rolin më të rëndësishëm në humbjen e peshës. Rreth 70% e suksesit tuaj në djegien e yndyrës dhe humbjen e peshës mund t'i atribuohet ushqimit që konsumoni. Përqendrohuni në krijimin e një deficiti kalorish duke konsumuar ushqime të plota të pasura me lëndë ushqyese që janë të ulëta në sheqerna të rafinuar dhe yndyrna të ngopura. Theksoni një dietë të ekuilibruar të pasur me proteina pa yndyrë, yndyrna të shëndetshme, karbohidrate komplekse dhe një shumëllojshmëri frutash dhe perimesh. Kontrolli i porcioneve dhe ngrënia e kujdesshme janë komponentët kryesorë të një plani të suksesshëm të ushqyerjes.
            </p>
          </div>
        </div>

        <div className="flex gap-3 relative h-fit items-stretch">
          <div className="flex flex-col pt-1">
            <div className="w-4 h-5 bg-emerald-300 rounded-full" />
            <div className="h-full w-0.5 bg-gradient-to-b from-emerald-300 mx-auto" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Aktiviteti fizik - 15%</h3>
            <p>
              Aktiviteti i rregullt fizik është thelbësor për djegien e kalorive dhe rritjen e shpenzimit të përgjithshëm të energjisë. Përafërsisht 15% e suksesit të humbjes së peshës i atribuohet ushtrimeve. Përfshini një përzierje ushtrimesh kardiovaskulare, të tilla si vrapimi, çiklizmi ose noti, me ushtrime të stërvitjes së forcës për të ndërtuar masë muskulore.
            </p>
          </div>
        </div>

        <div className="flex gap-3 relative h-fit items-stretch">
          <div className="flex flex-col pt-1">
            <div className="w-4 h-5 bg-sky-300 rounded-full" />
            <div className="h-full w-0.5 bg-gradient-to-b from-sky-300 mx-auto" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Pushimi - 15%</h3>
            <p>
              Si gjumi ashtu edhe menaxhimi i stresit luajnë një rol vendimtar në rregullimin e hormoneve që ndikojnë në oreksin dhe metabolizmin. Përafërsisht 10% e humbjes së peshës mund të ndikohet nga gjumi adekuat dhe teknikat efektive të menaxhimit të stresit. Synoni për 7-9 orë gjumë cilësor çdo natë dhe praktikoni teknika të reduktimit të stresit si meditimi, joga ose ushtrime të frymëmarrjes së thellë.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
