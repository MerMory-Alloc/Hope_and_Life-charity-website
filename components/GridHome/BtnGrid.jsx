import Link from 'next/link'
import Image from 'next/image'
const BtnGrid = ({text ,bottom_px,padX, back_color, border_color, text_color, back_arrow_color, arrow_color, strk_color}) => {
  return (
    <div className={`absolute  ${bottom_px} ${padX} w-full z-10`}>
        <Link href="/#">
        <div className={`${back_color} ${border_color} ${text_color} w-full  py-3 px-2  rounded-[28px] border-2 border-solid flex justify-between items-center`}>
            <div>{text}</div>
            <div className={`w-10 h-10 rounded-full flex justify-center items-center ${back_arrow_color}`}>
                
                <svg id="Flat" className={`stroke-[8px] ${strk_color} w-7 ${arrow_color}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <path d="M196,64V168a4,4,0,0,1-8,0V73.65625L66.82812,194.82812a3.99957,3.99957,0,0,1-5.65625-5.65625L182.34375,68H88a4,4,0,0,1,0-8H192A4.0002,4.0002,0,0,1,196,64Z"/>
</svg>
            </div>
        </div>
        </Link>
    </div>
    
  )
}

export default BtnGrid