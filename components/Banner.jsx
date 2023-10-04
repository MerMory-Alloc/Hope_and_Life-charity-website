
const Banner = ({classes,textColor}) => {
 
  
  return (
    <div className={" absolute w-full text-5xl font-bold py-6 whitespace-nowrap overflow-hidden text-center flex" + " " + classes}>
      <div className="banner_animation primary flex ">
        <div>* لنتعاون على البر و التقوى *</div>
        <div>* لنتعاون على البر و التقوى *</div>
        <div>* لنتعاون على البر و التقوى *</div>
        <div>* لنتعاون على البر و التقوى *</div>
      </div>
      <div className="banner_animation secondary flex ">
        <div>* لنتعاون على البر و التقوى *</div>
        <div>* لنتعاون على البر و التقوى *</div>
        <div>* لنتعاون على البر و التقوى *</div>
        <div>* لنتعاون على البر و التقوى *</div>
      </div>
    </div>
  )
}

export default Banner