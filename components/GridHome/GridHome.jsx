import Image from "next/image"
import green_backgroud from "@/public/assets/images/greenBack.png"
import helping_hand from "@/public/assets/images/helpingHands.png"
import poor_child from "@/public/assets/images/poorChild.jpg"
import charity from "@/public/assets/images/charity.jpg"
import smile from "@/public/assets/icons/smile.svg"
import heart from "@/public/assets/icons/heart.svg"
import FolderShapedItem from "../FolderShapedItem"
import BtnGrid from "../BtnGrid"


const GridHome = () => {
  const backsStyle = {position: "absolute", top: "0", left: "0", zIndex: "O", objectFit: "cover", height: "100%"}
  const imgbackStyle = {...backsStyle, filter: "brightness(70%)"}
  return (
    <div className="relative grid grid-cols-2 gap-2 lg:gap-4 md:grid-cols-4 lg:grid-cols-5 z-0  sm:max-w-[537px]
                     md:max-w-[796px] lg:max-w-7xl mx-auto lg:grid-rows-[repeat(4,120px)]">
        
        <div className=" w-full h-[325px] sm:h-[350px] md:h-[275px] lg:h-[350px] order-3 md:order-1 lg:row-span-3 self-end">
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
                  <div className="w-full text-white text-right  text-sm px-8 absolute top-[45px] sm:top-1/4 md:top-[25px] lg:top-1/4">
                    <span className="font-bold text-7xl ">65%</span> <br/>
                    <span className="opacity-60 ">من الأسر تعيش بأقل من الراتب القاعدي ومع التضخم الذي يسحقهم بشكل أكبر، فإنهم بحاجة إلى المساعدة
                    </span>
                  </div>
              </FolderShapedItem>
        </div>


        <div className="w-full h-[120px]  bg-black rounded-[32px] mx-auto my-2 lg:my-0 pl-2 pr-6 lg:order-6 
                        grid grid-cols-2 md:grid-cols-[1.1fr_0.9fr] lg:grid-cols-2 md:self-end order-5">
            <div className="flex justify-center items-center text-right text-2xl sm:text-3xl md:text-2xl xl:text-3xl text-white">
              ولا تهنوا ولا تحزنوا</div>
              <div className="flex justify-center items-center">
                <Image src={smile} width={100}/>
              </div>
            </div>


        <div className="h-[325px] sm:h-[350px] md:h-[275px] lg:h-[350px] order-1  md:order-4 lg:order-2 lg:row-span-4 
                        lg:self-end">
          <FolderShapedItem direction="left">
            <Image src={poor_child} width="100%" style={{...imgbackStyle, objectPosition: "top"}}/>
            <div className="w-full text-white text-right text-2xl px-6 absolute bottom-8">
            نوفر لأكثر من 8000 طفل ملابس  و لوازم مدرسية جديدة كل عام
            </div>
          </FolderShapedItem>
        </div>


        <div className=" h-[225px] w-full bg-ext rounded-[32px]  order-7 md:order-2 lg:order-3
                          mx-auto relative md:self-end md:top-1/2 lg:top-auto lg:row-span-4
                          col-span-2 lg:col-span-1 md:h-[200px] lg:h-[240px]">
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


        <div className="h-[325px] sm:h-[350px] md:h-[275px] lg:h-[350px] order-2  md:order-7 lg:order-4 lg:row-span-4 lg:self-end ">
          <FolderShapedItem direction="right" >
            <Image src={charity} width="100%" style={imgbackStyle}/>
            <div className="w-full text-white text-right text-2xl px-6 absolute bottom-8">
            نتكفل بقوت العائلات الفقيرة و المحتاجة في جميع ارجاء الوطن
            </div>
          </FolderShapedItem>
        </div>
        


        <div className="h-[325px] sm:h-[350px] md:h-[275px] lg:h-[350px] lg:self-end order-4 md:order-3 lg:order-5 lg:row-span-3">
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
        </div>


        <div className="w-full h-[120px] bg-emerald-950 rounded-[32px] mx-auto my-2 lg:my-0 py-4 pl-2 pr-6 lg:order-7
                        grid grid-cols-[0.9fr_1.1fr] md:grid-cols-[1.1fr_0.9fr] lg:grid-cols-2 gap-x-2 order-6 md:self-end">
              <div className="flex justify-end items-center text-right text-2xl sm:text-3xl md:text-2xl xl:text-3xl text-ter">
                وأنتم الأعلون</div>
              <div className="flex justify-center items-center">
                <Image src={heart} width={80}/>
              </div>
        </div>


    </div>
  )
}

export default GridHome