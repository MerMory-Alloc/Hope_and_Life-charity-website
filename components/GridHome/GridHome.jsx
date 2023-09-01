import Image from "next/image"
import green_backgroud from "@/public/assets/images/greenBack.png"
import helping_hand from "@/public/assets/images/helpingHands.png"
import poor_child from "@/public/assets/images/poorChild.jpg"
import charity from "@/public/assets/images/charity.jpg"
import smile from "@/public/assets/icons/smile.svg"
import heart from "@/public/assets/icons/heart.svg"
import FolderShapedItem from "./FolderShapedItem"
import BtnGrid from "./BtnGrid"


const GridHome = () => {
  const backsStyle = {position: "absolute", top: "0", left: "0", zIndex: "O"}
  const imgbackStyle = {...backsStyle, objectFit: "cover", height: "100%", filter: "brightness(70%)"}
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:grid-rows-[minmax(475px,_auto)] z-0 max-w-[276px] sm:max-w-[537px] md:max-w-[796px] lg:max-w-[1042px] xl:max-w-7xl mx-auto">
        <div className=" grid grid-cols-1 grid-rows-[minmax(350px,_auto)_minmax(125px,_auto)]  gap-y-px order-4 sm:order-1">
              <FolderShapedItem direction="left" >
                <Image src={green_backgroud} width="100%" style={backsStyle}/>
                <BtnGrid 
                  text={"تبرع الآن"}
                  bottom_px={"bottom-[14px]"}
                  padX={"px-4"}
                  back_color={"bg-qui"} 
                  border_color={"border-qui2"} 
                  text_color={"text-white"} 
                  back_arrow_color={"bg-ter"} 
                  arrow_color={"fill-sec"}
                  strk_color={"stroke-sec"}/>
                  <div className="w-full text-white text-right  text-sm px-8 absolute top-1/4 ">
                  <span className="font-bold text-7xl ">65%</span> <br/>
                   <span className="opacity-60 ">من الأسر تعيش بأقل من الراتب القاعدي ومع التضخم الذي يسحقهم بشكل أكبر، فإنهم بحاجة إلى المساعدة
                   </span>
                  </div>
              </FolderShapedItem>
            <div className="w-[93%] bg-black rounded-[32px] mx-auto mt-2 mb-2 px-6  grid grid-cols-2">
              <div className="flex justify-center items-center">
                <Image src={smile} width={100}/>
              </div>
              <div className="flex justify-center items-center text-right text-3xl text-white">وأنتم الأعلون</div>
            </div>
        </div>

        <div className="h-[350px] self-end order-1 sm:order-3 md:order-4 lg:order-2">
          <FolderShapedItem direction="left">
            <Image src={poor_child} width="100%" style={imgbackStyle}/>
            <div className="w-full text-white text-right text-2xl px-6 absolute bottom-8">
            نوفر لأكثر من 8000 طفل ملابس  و لوازم مدرسية جديدة كل عام
            </div>
          </FolderShapedItem>
        </div>
        <div className=" h-[225px] w-[95%] bg-ext rounded-[32px] md:self-center lg:self-end lg:w-[93%] order-5
                          mx-auto mt-2 mb-2 relative sm:order-5 md:order-2 lg:order-3 lg:row-span-1 xl:block
                          md:col-span-1 sm:col-span-2 md:row-span-2 md:h-[300px] lg:h-[225px] lg:hidden">
          <BtnGrid 
                  text={"انضم إلى مجتمعنا الآن"}
                  bottom_px={"bottom-[7px]"}
                  padX={"px-[5px]"}
                  back_color={"bg-ext2"} 
                  border_color={"border-ext3"} 
                  text_color={"text-black"} 
                  back_arrow_color={"bg-black"} 
                  arrow_color={"fill-ext"}
                  strk_color={"stroke-ext"}/>
          <div className="w-full text-center text-3xl px-4 absolute top-1/4">
          انضم إلى أكثر من 5000 متطوع  
          </div>
        </div>
        <div className="h-[350px] self-end order-2 sm:order-4 md:order-6 lg:order-4">
          <FolderShapedItem direction="right" >
            <Image src={charity} width="100%" style={imgbackStyle}/>
            <div className="w-full text-white text-right text-2xl px-6 absolute bottom-8">
            نتكفل بقوت العائلات الفقيرة و المحتاجة في جميع ارجاء الوطن
            </div>
          </FolderShapedItem>
        </div>
        
        <div className=" grid grid-cols-1 grid-rows-[350px_125px] order-3 sm:order-2 md:order-3 lg:order-5">
              <FolderShapedItem direction="right" >
                <Image src={helping_hand} width="100%" style={backsStyle}/>
                <BtnGrid 
                  text={"تعرف علينا أكثر"}
                  bottom_px={"bottom-[14px]"}
                  padX={"px-4"}
                  back_color={"bg-qua"} 
                  border_color={"border-qua2"} 
                  text_color={"text-sec"} 
                  back_arrow_color={"bg-sec"} 
                  arrow_color={"fill-qua"}
                  strk_color={"stroke-qua"}/>
              </FolderShapedItem>
            <div className="w-[93%] bg-emerald-950 rounded-[32px] mx-auto mt-2 mb-2 py-4 px-6  grid grid-cols-[0.8fr_1.2fr] gap-x-2">
              <div className="flex justify-center items-center">
                <Image src={heart} width={80}/>
              </div>
              <div className="flex justify-end items-center text-right text-3xl text-ter">ولا تهنوا ولا تحزنوا</div>
            </div>
        </div>
    </div>
  )
}

export default GridHome