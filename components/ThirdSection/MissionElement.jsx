import Image from "next/image"
import kid from "@/public/assets/images/kid.jpg"
const MissionElement = () => {
    const imageStyle = {
        width: "100%",
        height: "250px",
        objectFit: "cover",
        filter: "grayscale(100%)",
        borderRadius: "16px",
        marginBottom: "2rem",
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
    }

    const donators = 60;
    const currentFund = 25000;
    const totalFund = 200000;
    const percentFund = (currentFund / totalFund) * 100;


  return (
    <div className="flex flex-col items-center justify-center w-[350px] p-4 rounded-3xl border-2 border-gray-100">
        <Image src={kid} style={imageStyle}/>
        <h3 className="font-bold text-2xl text-right w-full">دعم أسر الفقراء في شهر رمضان</h3>
        <p className="text-base text-right w-full truncate my-1 text-thin text-neutral-700">
            انضموا إلى حملتنا لتوفير المساعدة للأسر المحتاجة خلال شهر رمضان الكريم. ساهموا في توفير الطعام والاحتياجات الأساسية لأولئك الذين يحتاجونها</p>
        <div className="w-full flex items-start justify-center flex-col gap-1 my-1 text-sm">
            <p className="flex items-center gap-1 text-thin text-neutral-700"> <span className="text-emerald-950 font-bold text-lg"> {currentFund}دج  </span>   تم جمعها لهدف الوصول إلى  {totalFund}دج</p>
            <div className="w-full rounded-[32px]  bg-ext2">
                <div className={`rounded-[32px] h-[10px] bg-ter`} style={{width: `${percentFund}%`}}></div>
            </div>
            <div className="flex items-center justify-between w-full  mt-1 text-thin text-neutral-700">
                <div className="flex items-center justify-center gap-2">
                <span className="font-bold text-xl brightness-200">❤️</span> {donators}  متبرع
                </div>
                <div className="border-2 border-neutral-700 rounded-full px-4">رمضان</div>
            </div>
        </div>
    </div>
  )
}

export default MissionElement