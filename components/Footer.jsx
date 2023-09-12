import Image from "next/image"
import logoG from "../public/assets/images/logoG.png"
import Link from "next/link"
import BtnGrid from "./BtnGrid"

const Footer = () => {
    const btnStyle = {
      position: "static",
      width: "130px",
      zIndex: "0",
    }
    const inDivStyle = {
        padding: "4px 8px 4px 4px",
        color: "rgb(226 232 240)",
        fontSize: "15px",
    }
    const circDivStyle = {
        width: "28px",
        height: "28px",
    }

  return (
    <div className="w-full bg-sec2 flex flex-col items-center text-slate-200
    px-8 md:px-16 lg:px-20 pt-4 rounded-3xl mb-2 md:mb-4 gap-0
    max-w-[537px] md:max-w-[796px] lg:max-w-7xl mx-auto">

        <div className="w-full grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2  py-6 ">
            <div className="flex flex-col items-start justify-center gap-3
                            border-b-2 border-emerald-900 pb-6
                            md:border-0 md:pb-0">
                <div className="flex items-center gap-2">
                    <Image src={logoG} width={60}/>
                    <h2 className="block text-2xl font-sulas font-bold text-white">الجمعية الخيرية للأمل و الحياة</h2>
                </div>
                <p className="font-thin  text-sm"> الموقع الرسمي الخاص بالجمعية الخيرية للأمل و الحياة</p>
            </div>

            <div className="grid grid-cols-3 place-items-start md:place-items-end
                            gap-4">
                <p><Link href="/#"> حول عملنا </Link></p>
                <p><Link href="/#"> كن شريك معنا </Link></p>
                <p><Link href="/#">  0651234567 </Link></p>
                <p><Link href="/#"> تبرع </Link></p>
                <p><Link href="/#"> فايسبوك </Link></p>
                <p><Link href="/#"> انستغرام </Link></p>
                <p><Link href="/#"> تطوع </Link></p>
                <p><Link href="/#"> تويتر (اكس) </Link></p>
                <p><Link href="/#"> لينكدإين </Link></p>
            </div>
        </div>

        <div className="w-full flex items-center justify-between py-6 border-t-2 border-emerald-900">
            <p className="text-xs font-thin">© 2023 جميع الحقوق محفوظة لأصحابها.</p>
            <BtnGrid 
                  text={"تبرع الآن"}
                  padX={"px-0"}
                  back_color={"bg-qui"} 
                  border_color={"border-qui2"} 
                  text_color={"text-white"} 
                  back_arrow_color={"bg-ter"} 
                  arrow_color={"fill-sec"}
                  strk_color={"stroke-sec"}
                  arrow_width={"w-6"}
                  style={btnStyle}
                  divInStyle={inDivStyle}
                  circDivStyle={circDivStyle}/>
        </div>
    </div>
  )
}

export default Footer