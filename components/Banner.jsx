
const Banner = ({classes,textColor}) => {
  /*const sty={
    backgroundSize: "fill",
    backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='31' height='31' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(193, 232, 100,1)'/%3E%3Cpath d='M0 20L20 0L20 20L0 40L0 20zM40 20L60 0L60 20L40 40L40 20z' fill='rgba(161, 205, 92,1)' filter='url(%23filter-doodad-1)'/%3E%3Cpath d='M20 20L30 0L40 20L30 40L20 20z' fill='rgba(193, 232, 100,1)' filter='url(%23filter-doodad-2)'/%3E%3Cpath d='M20 20h4L30 40zM40 20h-16L30 0z' fill='rgba(161, 205, 92,1)' filter='url(%23filter-doodad-1)'/%3E%3Cpath d='M0 20h4L0 40L0 20zM20 20h-16L20 0zM40 20h4L40 40L40 20zM60 20h-16L60 0z ' fill='rgba(193, 232, 100,1)' filter='url(%23filter-doodad-2)'/%3E%3C/pattern%3E%3Cfilter id='filter-doodad-1'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='2'/%3E%3C/filter%3E%3Cfilter id='filter-doodad-2'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='0.2'/%3E%3C/filter%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")`
  }*/
  
  return (
    <div className={"absolute w-full text-5xl font-bold py-6 whitespace-nowrap overflow-hidden text-center" + " " + classes}>
      {/*<div className="w-[25%] h-full absolute -z-10 left-0 top-0" style={sty}>
      </div>*/}
      * لنتعاون على البر و التقوى * لنتعاون على البر و التقوى * لنتعاون على البر و التقوى *
    </div>
  )
}

export default Banner