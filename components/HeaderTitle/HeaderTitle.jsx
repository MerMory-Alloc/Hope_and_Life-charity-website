
import Link from "next/link";

const HeaderTitle = () => {

  return (
    <section className="w-11/12  sm:w-4/5 lg:w-2/3 mx-auto text-center text-black gap-8 flex flex-col items-center justify-center py-10 md:p-10 xl:p-14">
        
        <div className="overflow-hidden py-2 ">
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold  leading-tight slide_in_bottom'>
        معاً لنصنع فرقاً في حياة المحتاجين و لنمنحهم الأمل الذي يحتاجونه 
          </h2>
        </div>
        <div className="overflow-hidden">
        <p className="w-full md:w-3/4 mx-auto text-base sm:text-lg slide_in_bottom">
        نحن هنا لنقف إلى جانب الذين يواجهون التحديات، ولنمنحهم القوة والدعم الذي يحتاجونه لتجاوز الصعوبات. من خلال مؤسسة الأمل والحياة، نريد أن نبني جسرًا من الأمل يمتد بين القلوب الخيرة وأولئك الذين ينتظرون يد العون
        </p>
        </div>
        <div className="overflow-hidden w-full md:w-3/5 lg:w-full ">
        <div className="font-bold relative flex justify-center items-center flex-col lg:flex-row gap-4 z-0 lg:z-10 slide_in_bottom">
          <Link href="/contact" className='bg-gray-200 w-4/5 lg:w-1/4 max-w-[333px] md:max-w-[270px] text-black p-4  rounded-full block'>
             تواصل معنا 
          </Link>
          <Link href="/#" className='bg-black w-4/5 lg:w-1/4 text-white p-4 max-w-[333px] md:max-w-[270px] rounded-full block'>
             تبرع الآن 
          </Link>
        </div>
        </div>
      </section>
  )
}

export default HeaderTitle