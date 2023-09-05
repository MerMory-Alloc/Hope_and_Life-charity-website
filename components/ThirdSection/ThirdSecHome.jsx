import Image from "next/image"
import back from "@/public/assets/icons/back.png"
import forward from "@/public/assets/icons/forward.png"
import MissionElement from "./MissionElement"

const ThirdSecHome = () => {
  return (
    <section className="px-3 max-w-[537px] md:max-w-[796px]
                        lg:max-w-[1042px] xl:max-w-7xl mx-auto">
        <div className="flex items-center justify-between my-8 lg:-mt-4">
            <h2 className="font-bold text-2xl sm:text-3xl">الحملات التبرعية المقامة حاليا</h2>
            <div className="flex items-center gap-2">
                <Image src={forward} width={35}/>
                <Image src={back} width={35}/>
            </div>
        </div>
        <div className="flex items-center overflow-x-scroll gap-4 no-scrollbar">
            <MissionElement />
            <MissionElement />
            <MissionElement />
            <MissionElement />
            <MissionElement />
        </div>
    </section>
  )
}

export default ThirdSecHome