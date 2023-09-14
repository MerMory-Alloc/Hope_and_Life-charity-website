import Image from "next/image"

const MissionElement = ({mission}) => {

    const convertImage = (w, h) => `
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">

      <!-- Animated gradient -->
      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(20)">
          <stop offset="5%"  stop-color="#eee">
            <animate attributeName="stop-color" values="#EEEEEE; #CCCCCC; #EEEEEE" dur="2s" repeatCount="indefinite"></animate>
          </stop>
          <stop offset="95%" stop-color="#aaa">
            <animate attributeName="stop-color" values="#EEEEEE; #DDDDDD; #EEEEEE" dur="3s" repeatCount="indefinite"></animate>
          </stop>
        </linearGradient>
      </defs>
    
      <!-- Shapes -->
      <rect fill="url(#myGradient)" width="${w}" height="${h}" />
      
    </svg>`;

    const toBase64 = (str) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);


    const imageStyle = {
        width: "100%",
        height: "250px",
        objectFit: "cover",
        filter: "grayscale(100%)",
        borderRadius: "16px",
        marginBottom: "2rem",
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
    }

    const donators = mission.donators;
    const currentFund = mission.donation_amount;
    const totalFund = mission.goal_amount;
    const percentFund = (currentFund / totalFund) * 100;

  return (
    <div className=" flex flex-col items-center justify-between w-[350px] p-4 rounded-3xl border-2 border-gray-100">
        <Image src={mission.image_url} alt={mission.title} placeholder="blur"  blurDataURL={`data:image/svg+xml;base64,${toBase64(convertImage(700, 700))}`}
               width={300} height={250} style={imageStyle}/>
        <div className="w-full self-end ">
            <h3 className="font-bold text-2xl text-right w-full">{mission.title}</h3>
            <p className="text-base text-right w-full truncate my-1 text-thin text-neutral-700">
                {mission.description}
            </p>
            <div className="w-full flex items-start justify-center flex-col gap-1 my-1 text-sm">
                <p className="flex items-center gap-1 text-thin text-neutral-700"> <span className="text-emerald-950 font-bold text-lg"> {currentFund}دج  </span>   تم جمعها لهدف الوصول إلى  {totalFund}دج</p>
                <div className="w-full rounded-[32px]  bg-ext2">
                    <div className={`rounded-[32px] h-[10px] bg-ter`} style={{width: `${percentFund}%`}}></div>
                </div>
                <div className="flex items-center justify-between w-full  mt-1 text-thin text-neutral-700">
                    <div className="flex items-center justify-center gap-2">
                    <span className="font-bold text-xl brightness-200">❤️</span> {donators}  متبرع
                    </div>
                    <div className="border-2 border-neutral-700 rounded-full px-4">{mission.type}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MissionElement