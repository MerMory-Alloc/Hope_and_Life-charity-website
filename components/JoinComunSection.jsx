import Image from "next/image"
import Link from "next/link"
import kid1 from "@/public/assets/images/kido1.jpg"
import kid2 from "@/public/assets/images/kido2.jpg"
import kid3 from "@/public/assets/images/kido3.jpg"
import man from "@/public/assets/images/man.jpg"


const JoinComunSection = () => {
    const imageStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "grayscale(100%)",
        borderRadius: "24px",
    }

  return (
    <section className="px-3 my-16 sm:my-20 max-w-[537px] md:max-w-[796px] relative
                        lg:max-w-7xl mx-auto text-black">
        <div className="w-full text-center text-3xl sm:text-4xl lg:text-5xl mt-4 md:w-8/12 mx-auto">
            إنضم لمجتمعنا من فاعلي الخير من أنحاء الوطن و كن جزءا من التغيير الإيجابي حيث أكثر من
        </div>
        <div className="w-full text-center text-[8rem] md:text-[10rem] lg:text-[12rem] my-2">
            5000+
        </div>
        <div className="w-full text-center mb-4 flex flex-col items-center gap-4">
            <div className=" text-xl">
            متطوع و متطوعة قد إنضم إلينا
            </div>
            <Link href="/#">
                <div className="text-base text-white bg-black py-4 px-16 rounded-full">
                    نعم أريد الإنضمام
                </div>
            </Link>
        </div>
        <div className="hidden absolute 
                        md:inline-block  md:top-[5rem] md:left-[10px] md:w-[120px] md:h-[160px]
                        lg:top-[3rem] lg:left-[25px] lg:w-[140px] lg:h-[180px]">
            <Image src={kid1} style={imageStyle} alt="image of a child" placeholder ="blur"/>
        </div>
        <div className="hidden md:inline-block absolute md:-bottom-[1rem] md:left-[70px] md:w-[140px] md:h-[140px]
                        lg:-bottom-[1rem] lg:left-[100px] lg:w-[160px] lg:h-[160px]">
            <Image src={man} style={imageStyle} alt="image of a man" placeholder ="blur"/>
        </div>
        <div className="hidden md:inline-block absolute md:top-[5.25rem] md:right-[10px] md:w-[110px] md:h-[110px]
                        lg:top-[3.5rem] lg:right-[25px] lg:w-[130px] lg:h-[130px]">
            <Image src={kid3} style={imageStyle} alt="image of a child" placeholder ="blur"/>
        </div>
        <div className="hidden md:inline-block absolute md:bottom-[3rem] md:right-[70px] md:w-[120px] md:h-[160px]
                        lg:bottom-[4rem] lg:right-[90px] lg:w-[140px] lg:h-[180px]">
            <Image src={kid2} style={imageStyle} alt="image of a child" placeholder ="blur"/>
        </div>
    </section>
  )
}

export default JoinComunSection