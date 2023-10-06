import Banner from "@/components/Banner";
import Faq from "@/components/FAQSection/Faq";
import GridHome from "@/components/GridHome/GridHome";
import JoinComunSection from "@/components/JoinComunSection";
import MeetTeam from "@/components/MeetTeam";
import SecondSecHome from "@/components/SecondSecHome";
import ThirdSecHome from "@/components/ThirdSection/ThirdSecHome";
import MissCont from "@/components/ThirdSection/MissCont";
import HeaderTitle from "@/components/HeaderTitle/HeaderTitle";


export default function Home() {
  return (
    <div className="">
      <HeaderTitle />
      <section className="px-3 md:-mt-40 lg:-mt-44 overflow-hidden">
        <GridHome />
      </section>
      <section className="px-3">
        <SecondSecHome />
      </section>
      <ThirdSecHome> <MissCont /> </ThirdSecHome>
      <JoinComunSection />
      <div className="relative my-24  w-full h-[200px]">
        <Banner classes={"bg-emerald-950 skew-y-1 text-white top-[35%] -translate-y-[35%] b_reverse"}/>
        <Banner classes={"bg-qua3 -skew-y-2 text-emerald-950 top-[75%] -translate-y-[75%]"}/>
      </div>
      <MeetTeam />
      <Faq />
    </div>
  )
}