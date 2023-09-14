import FolderShapedItem from "./FolderShapedItem"
import Image from "next/image"
import walter from "@/public/assets/images/WalterWhite.webp"
import jesse from "@/public/assets/images/JessePinkman.png"
import saul from "@/public/assets/images/Saulgoodman.webp"
import mike from "@/public/assets/images/Mike_Ehrmantraut.jpg"

const MeetTeam = () => {
    const imageStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "top",
        filter: "grayscale(100%) brightness(1.2)",
    }
  return (
    <section className="px-3 my-16 sm:my-20 max-w-[537px] md:max-w-[796px] relative
    lg:max-w-7xl mx-auto text-black">
        <h2 className="w-full text-center text-4xl lg:text-5xl my-2 md:w-8/12 mx-auto">فريق العمل المخلص</h2>
        <p className="w-full md:w-1/2 text-center text-base sm:text-lg mb-12 mx-auto">
            فريق الشغف والتفاني، يجمع بين الخبرات والأفكار الإبداعية، مكرس لتقديم العون وتحقيق التغيير الإيجابي في حياة الآخرين
        </p>
        <div className="w-full flex flex-wrap justify-center  items-center gap-4 mx-auto">
            <div>
                <div className="w-[250px] h-[350px]">
                    <FolderShapedItem direction="left"> 
                        <Image src={walter} style={imageStyle} alt="image of a person" placeholder ="blur"/>
                    </FolderShapedItem>
                </div>
                <div className="w-full pr-2 text-right text-3xl">
                والتر وايت
                </div>
                <div className="w-full pr-2 text-right text-sm sm:text-base">
                مؤسس الجمعية
                </div>
            </div>
            <div>
                <div className="w-[250px] h-[350px]">
                    <FolderShapedItem direction="left"> 
                        <Image src={jesse} style={imageStyle} alt="image of a person" placeholder ="blur"/>
                    </FolderShapedItem>
                </div>
                <div className="w-full pr-2 text-right text-3xl">
                جيسي بينكمان
                </div>
                <div className="w-full pr-2 text-right text-sm sm:text-base">
                الشريك المؤسس للجمعية
                </div>
            </div>
            <div>
                <div className="w-[250px] h-[350px]">
                    <FolderShapedItem direction="left"> 
                        <Image src={mike} style={imageStyle} alt="image of a person" placeholder ="blur"/>
                    </FolderShapedItem>
                </div>
                <div className="w-full pr-2 text-right text-3xl">
                مايكل إيرمانتروخت
                </div>
                <div className="w-full pr-2 text-right text-sm sm:text-base">
                مسؤول العمليات الميدانية
                </div>
            </div>
            <div>
                <div className="w-[250px] h-[350px]">
                    <FolderShapedItem direction="left"> 
                        <Image src={saul} style={imageStyle} alt="image of a person" placeholder ="blur"/>
                    </FolderShapedItem>
                </div>
                <div className="w-full pr-2 text-right text-3xl">
                سول غودمان
                </div>
                <div className="w-full pr-2 text-right text-sm sm:text-base">
                المحامي القانوني للجمعية
                </div>
            </div>
        </div>
    </section>
  )
}

export default MeetTeam