export default function getFactors({ fitness_goal }: { fitness_goal: string }): any {
  // cardiovascular
  if (fitness_goal === 'cardiovascular') {
    return (
      <div className="flex flex-col gap-6">
        <h3 className="text-xl font-semibold">
          Faktorët për përmirësimin e shëndetit kardiovaskular
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
              Aktiviteti fizik
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
             Dieta
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
              Pushimi
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
                Aktiviteti Fizik - 40%
              </h3>
              <p>
                Ushtrimet e rregullta janë thelbësore për shëndetin kardiovaskular.
                 Ndihmon në forcimin e muskujve të zemrës, përmirëson qarkullimin,
                 dhe rrit efikasitetin e përdorimit të oksigjenit.
                 Ushtrime kardiovaskulare si ecja e shpejtë,
                 vrapimi, noti ose çiklizmi rrisin rrahjet e zemrës, duke promovuar shëndetin e zemrës
                 dhe reduktimin e rrezikut të sëmundjeve të zemrës. Gjithashtu ndihmon në ruajtjen e shëndetit
                 Nivelet e presionit të gjakut dhe profilet e kolesterolit.
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
                 Një dietë e ekuilibruar mirë luan një rol vendimtar në ruajtjen e shëndetit kardiovaskular.
                 Theksoni një dietë të pasur me fruta, perime, drithëra dhe proteina pa yndyrë. Reduktoni marrjen e yndyrave të ngopura, yndyrave trans dhe natriumit
                 për të menaxhuar nivelet e kolesterolit dhe presionin e gjakut. Përfshini ushqime të pasura
                 në acidet yndyrore omega-3, si peshku yndyror, për të ndihmuar në uljen e rrezikut të sëmundjeve të zemrës.
                 Kufizimi i ushqimeve të përpunuara dhe pijeve me sheqer është gjithashtu thelbësor
                 për të mbajtur një zemër të shëndetshme.
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
              Stresi kronik mund të ketë efekte të dëmshme në sistemin kardiovaskular.
              Zbatoni teknika për uljen e stresit si ndërgjegjësimi, meditimi,
               yoga ose ushtrimet e frymëmarrjes së thellë. Menaxhimi i duhur 
               i stresit ndihmon në mbajtjen e niveleve të shëndetshme të tensionit 
               të gjakut dhe reduktimin e rrezikut të sëmundjeve të zemrës.
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
              Shmangia e zakoneve të dëmshme siç janë pirja e duhanit dhe 
              konsumimi i tepruar i alkoolit është jetike për shëndetin 
              kardiovaskular. Pirja e duhanit dëmton enët e gjakut, duke 
              çuar në arteriosklerozë dhe duke rritur rrezikun e sëmundjeve 
              të zemrës. Konsumimi i tepruar i alkoolit mund të rrisë tensionin 
              e gjakut dhe të kontribuojë në dëmtimin e muskujve të zemrës. 
              Shmangia e këtyre zakoneve ul ndjeshëm rrezikun e komplikimeve kardiovaskulare.
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
        Faktorët për Ndërtimin e Muskujve
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
              Ngarkesë progresive
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
              Ushqyerja
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
              Pushimi
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
              Plani
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
                Ngarkesë progresive - 40%
              </h3>
              <p className="text-md text-neutral-500">
              Ngarkesa progresive është faktori më i rëndësishëm për rritjen e muskujve. 
              Ajo përfshin rritjen graduale të stresit të vendosur mbi muskujt gjatë 
              ushtrimeve me kalimin e kohës. Kjo mund të arrihet duke rritur peshën 
              që ngrini, numrin e përsëritjeve ose intensitetin e stërvitjes. Duke 
              sfiduar vazhdimisht muskujt tuaj, stimuloni fibrat muskulore të rriten 
              në madhësi dhe forcë. Nëse vazhdoni të bëni të njëjtën rutinë pa ndryshime, 
              trupi juaj do të arrijë një pikë të qëndrueshme! Trupi juaj përshtatet, 
              prandaj është e rëndësishme të keni larmi. Ndryshoni rutinën dhe përshtatni 
              stërvitjen tuaj për të fokusuar muskujt e ndryshëm, duke mbajtur trupin 
              tuaj të befasuar dhe të papërgatitur!
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
              Një dietë e mirëbalancuar dhe e përshtatshme është thelbësore 
              për rritjen e muskujve. Ajo duhet të përfshijë një sasi të 
              mjaftueshme të proteinave për të mbështetur riparimin dhe 
              rritjen e muskujve, karbohidrate komplekse për të siguruar 
              energji, yndyrna të shëndetshme për rregullimin e hormoneve, 
              dhe një shumëllojshmëri vitaminash dhe mineralesh për shëndetin 
              e përgjithshëm. Proteinat janë veçanërisht të rëndësishme, 
              pasi ato sigurojnë blloqet ndërtuese (aminoacidet) të nevojshme 
              për riparimin dhe rritjen e muskujve.
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
              Një dietë e mirëbalancuar dhe e përshtatshme është thelbësore 
              për rritjen e muskujve. Ajo duhet të përfshijë një sasi të 
              mjaftueshme të proteinave për të mbështetur riparimin dhe rritjen 
              e muskujve, karbohidrate komplekse për të siguruar energji, 
              yndyrna të shëndetshme për rregullimin e hormoneve, dhe një 
              shumëllojshmëri vitaminash dhe mineralesh për shëndetin e përgjithshëm. 
              Proteinat janë veçanërisht të rëndësishme, pasi ato sigurojnë blloqet 
              ndërtuese (aminoacidet) të nevojshme për riparimin dhe rritjen e muskujve.
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
              Konsistenca në rutinën tuaj të stërvitjes dhe disiplina në 
              përmbajtjen e planit tuaj të ushqimit janë çelësi për të 
              arritur rritje muskulore të konsiderueshme. Ndërtimi i 
              muskujve është një proces i gradual që kërkon dedikim dhe 
              vullnet. Ushtrimet e rregullta dhe një dietë e qëndrueshme 
              do të sigurojnë që trupi juaj të marrë stimujt e nevojshëm 
              për rritjen dhe riparimin e muskujve.
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
