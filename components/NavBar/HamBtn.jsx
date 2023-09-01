'use client'

import { useState } from "react";
import NavListItemsMobile from "./NavListItemsMobile";

const HamBtn = () => {

    const [isClicked, setIsClicked] = useState(false);

    var classStyle= "w-9 before:content-[''] before:block before:h-1 before:bg-emerald-950 before:rounded-md before:my-1.5 before:duration-500 after:content-[''] after:block after:h-1 after:bg-emerald-950 after:rounded-md after:my-1.5 after:duration-500";
  return (
    <div>
    <button type="button" className="lg:hidden flex items-center justify-center" onClick={() => setIsClicked(!isClicked)}>
        <div className={isClicked ? classStyle + " before:translate-y-2.5 before:rotate-[135deg] after:-translate-y-2.5 after:-rotate-[135deg]" : classStyle}>
            <div className={`block bg-emerald-950 h-1 rounded-md my-1.5 duration-500 ${isClicked ? "scale-0" : ""}`}></div>
        </div>
    </button>
    {isClicked && <NavListItemsMobile />}
    </div>
  )
}

export default HamBtn