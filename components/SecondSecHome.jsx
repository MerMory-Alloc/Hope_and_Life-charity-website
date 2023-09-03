import Image from "next/image"
import smile from "@/public/assets/icons/smile2.svg"
import heart from "@/public/assets/icons/heart2.svg"
import sun from "@/public/assets/icons/sun.svg"


const SecondSecHome = () => {
  return (
    <div className=" w-full bg-ter2 flex flex-col items-center justify-center
                     lg:gap-16 gap-12 px-8 md:px-16 py-20 rounded-3xl my-5 md:my-10 lg:my-20 text-emerald-950 
                     text-center z-0 max-w-[537px] md:max-w-[796px]
                     lg:max-w-[1042px] xl:max-w-7xl mx-auto ">
        <div className="relative">
            <p className="font-bold text-xl mb-2">قالَ اللهُ تعالى</p>
            <h2 
                text="سورة الحشر - الآية 9"
                className="relative font-bold text-3xl md:text-4xl leading-loose md:after:mr-2
                            md:w-3/4 w-full mx-auto md:leading-relaxed after:text-lg md:after:static
                            after:content-[attr(text)] after:absolute after:-bottom-8 after:left-0">
                    "وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِم وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ وَمَن يُوقَ شُحَّ نَفْسِهِ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَْْ"
            </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-8">
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-[140px] h-[130px] relative">
                    <div className="w-[110px] h-[130px] bg-gray-100 rounded-[50%] ml-px absolute left-1/2 -translate-x-1/2"></div>
                    <Image src={smile} width={140} className="absolute rotate-12 ml-4 mt-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
                </div>
                <h3 className="font-bold text-2xl ">شارك العطاء</h3>
                <p className="w-3/4 md:w-full lg:w-3/4 text-lg">مع مساهمتك، تكون جزءًا من شبكة عطاء تنمو وتعزز الخير في المجتمع</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-[200px] h-[130px] relative">
                    <div className="relative right-4 w-[75px] h-[130px] bg-gray-100 rounded-[50%] inline-block rotate-[30deg] "></div>
                    <div className="relative left-4 w-[75px] h-[130px] bg-gray-100 rounded-[50%] inline-block -rotate-[30deg] "></div>
                    <Image src={heart} width={130} className="absolute rotate-11 -bottom-4 right-2"/>
                </div>
                <h3 className="font-bold text-2xl ">ساهم في التغيير </h3>
                <p className="w-3/4 md:w-full lg:w-3/4 text-lg">نؤمن بأن التغيير يبدأ من القلوب وينمو من خلال العطاء والتضامن</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-[200px] h-[130px] relative">
                    <div className="relative right-8 w-[60px] h-[110px] bg-gray-100 rounded-[50%] inline-block rotate-[30deg] "></div>
                    <div className="relative bottom-1 w-[70px] h-[130px] bg-gray-100 rounded-[50%] inline-block "></div>
                    <div className="relative left-7 w-[50px] h-[120px] bg-gray-100 rounded-[50%] inline-block -rotate-[30deg] "></div>
                    <Image src={sun} width={130} className="absolute -rotate-12 -top-1 left-1"/>
                </div>
                <h3 className="font-bold text-2xl ">اصنع الفرص</h3>
                <p className="w-3/4 md:w-full lg:w-3/4 text-lg">دعمك يفتح الباب أمام الأفراد لتحقيق طموحاتهم وبناء مستقبل أفضل</p>
            </div>
        </div>
    </div>
  )
}

export default SecondSecHome