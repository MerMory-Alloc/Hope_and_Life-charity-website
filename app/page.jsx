import Banner from "@/components/Banner";
import Faq from "@/components/FAQSection/Faq";
import GridHome from "@/components/GridHome/GridHome";
import JoinComunSection from "@/components/JoinComunSection";
import MeetTeam from "@/components/MeetTeam";
import SecondSecHome from "@/components/SecondSecHome";
import ThirdSecHome from "@/components/ThirdSection/ThirdSecHome";
import MissCont from "@/components/ThirdSection/MissCont";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <section className="w-11/12  sm:w-4/5 lg:w-2/3 mx-auto text-center text-black gap-8 flex flex-col items-center justify-center py-10 md:p-10 xl:p-14">
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold  leading-tight'>
        معاً لنصنع فرقاً في حياة المحتاجين و لنمنحهم الأمل الذي يحتاجونه 
        </h2>
        <p className="w-full md:w-3/4 mx-auto text-base sm:text-lg">
        نحن هنا لنقف إلى جانب الذين يواجهون التحديات، ولنمنحهم القوة والدعم الذي يحتاجونه لتجاوز الصعوبات. من خلال مؤسسة الأمل والحياة، نريد أن نبني جسرًا من الأمل يمتد بين القلوب الخيرة وأولئك الذين ينتظرون يد العون
        </p>
        <div className="w-full md:w-3/5 lg:w-full  font-bold relative flex justify-center items-center flex-col lg:flex-row gap-4 z-0 lg:z-10">
          <Link href="/contact" className='bg-gray-200 w-4/5 lg:w-1/4 max-w-[333px] md:max-w-[270px] text-black p-4  rounded-full block'>
             تواصل معنا 
          </Link>
          <Link href="/#" className='bg-black w-4/5 lg:w-1/4 text-white p-4 max-w-[333px] md:max-w-[270px] rounded-full block'>
             تبرع الآن 
          </Link>
        </div>
      </section>
      <section className="px-3 md:-mt-40 lg:-mt-44 ">
        <GridHome />
      </section>
      <section className="px-3">
        <SecondSecHome />
      </section>
      <ThirdSecHome> <MissCont /> </ThirdSecHome>
      <JoinComunSection />
      <div className="relative my-24  w-full h-[200px]">
        <Banner classes={"bg-emerald-950 skew-y-1 text-white top-[35%] -translate-y-[35%]"}/>
        <Banner classes={"bg-qua3 -skew-y-2 text-emerald-950 top-[75%] -translate-y-[75%]"}/>
      </div>
      <MeetTeam />
      <Faq />
    </div>
  )
}