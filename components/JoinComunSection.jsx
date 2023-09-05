import Image from "next/image"
import Link from "next/link"
import kid from "@/public/assets/images/kid.jpg"


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
                        lg:max-w-[1042px] xl:max-w-7xl mx-auto text-black">
        <div className="w-full text-center text-3xl sm:text-4xl lg:text-5xl mt-4 md:w-8/12 mx-auto">
            إنضم لمجتمعنا من فاعلي الخير من أنحاء الوطن و كن جزءا من التغيير الإيجابي حيث أكثر من
        </div>
        <div className="w-full text-center text-[8rem] md:text-[10rem] lg:text-[12rem] my-2">
            1000+
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
        <div className="absolute top-[3rem] left-[25px] w-[140px] h-[180px]">
            <Image src={kid} style={imageStyle}/>
        </div>
        <div className="absolute -bottom-[1rem] left-[100px] w-[160px] h-[160px]">
            <Image src={kid} style={imageStyle}/>
        </div>
        <div className="absolute top-[3.5rem] right-[25px] w-[130px] h-[130px]">
            <Image src={kid} style={imageStyle}/>
        </div>
        <div className="absolute bottom-[4rem] right-[90px] w-[140px] h-[180px]">
            <Image src={kid} style={imageStyle}/>
        </div>
    </section>
  )
}

export default JoinComunSection