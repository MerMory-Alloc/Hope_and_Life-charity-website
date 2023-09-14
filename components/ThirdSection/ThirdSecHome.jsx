"use client"

import Image from "next/image"
import back from "@/public/assets/icons/back.png"
import forward from "@/public/assets/icons/forward.png"
import { useRef } from 'react'


const  ThirdSecHome = ({children}) => {

  const refMissions = useRef(null);
  
  function sideScroll(element,direction,speed,distance,step){
    var scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
          element.scrollLeft -= step;
        } else {
          element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
  }


  return (
    <section className="px-3 max-w-[537px] md:max-w-[796px]
                        lg:max-w-7xl mx-auto">
        <div className="flex items-center justify-between my-8 lg:-mt-4">
            <h2 className="font-bold text-2xl sm:text-3xl">الحملات التبرعية المقامة حاليا</h2>
            <div className="flex items-center gap-2">
                <button type="button" onClick={() => {sideScroll(refMissions.current,'right',25,350,25)}}>
                  <Image src={forward} width={35}/>
                </button>
                <button type="button" onClick={() => {sideScroll(refMissions.current,'left',25,350,25)}}>
                  <Image src={back} width={35}/>
                </button>
            </div>
        </div>
        <div ref={refMissions} className="overflow-x-scroll no-scrollbar">
          {children}
        </div>
    </section>
  )
}

export default ThirdSecHome