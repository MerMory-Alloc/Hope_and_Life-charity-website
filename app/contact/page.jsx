import Image from "next/image"

const Cotact = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 lg:gap-20 py-12 px-3 contact_container
                   max-w-[537px] md:max-w-[796px] lg:max-w-7xl mx-auto lg:pt-20">
      <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold  leading-tight text-center px-4 
                     md:w-3/4 lg:w-1/2 contact_title'>
      تواصل معنا وتابعنا على مختلف الوسائل التواصل الإجتماعية
      </h2>     

      <div className="contact-wrapper gap-8 lg:grid-cols-2 lg:gap-12 contact_img">

      <form className="email-form">
              <input type="text" className="form-control" id="name" placeholder="الإسم الكامل" name="name"  required />
              <input type="email" className="form-control" id="email" placeholder="الإيمايل" name="email"  required />
              <textarea className="form-control" rows="7" placeholder="الرسالة " name="message" required></textarea>
              <button className="send-button" id="submit" type="submit" value="SEND">
              أرسل
              </button>

        </form>
      
        <div className="direct-contact-container">

        <ul className="contact-list w-max mx-auto">
          <li className="list-item "><i className="fa fa-map-marker fa-2x"></i><span className="contact-text place text-lg sm:text-xl mr-2"> ولاية سيدي بلعباس، الجزائر </span></li>

          <li className="list-item"><i className="fa fa-phone fa-2x"></i><span className="contact-text phone text-xl  sm:text-2xl mr-2"><a href="tel:2131111111111" title="تكلم معنا">0651234567</a></span></li>

          <li className="list-item"><i className="fa fa-envelope fa-2x"></i><span className="contact-text gmail text-lg sm:text-xl mr-2"><a href="mailto:hope_life.charity@gmail.com" title="أرسل إيمايل">hope_life.charity@gmail.com</a></span></li>

        </ul>

        <hr />
        <ul className="social-media-list flex-wrap">
          <a href="https://github.com/MerMory-Alloc" target="_blank" className="contact-icon"><li>
            <i className="fa fa-instagram " aria-hidden="true"></i>
          </li></a>
          <a href="https://www.facebook.com/MerbahMedAmin/" target="_blank" className="contact-icon"><li>
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </li></a>
          <a href="https://twitter.com/mbhmma" target="_blank" className="contact-icon"><li>
          <i class="fa-brands fa-x-twitter"></i>
          </li></a>
          <a href="https://www.linkedin.com/in/merbah-mohamed-amine-mermory/" target="_blank" className="contact-icon"><li>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </li></a>
        </ul>
        <hr />

        <div className="copyright">متوفرون كل يوم ماعدا الجمعة من 8 إلى 5 مساءً</div>

      </div>
        
      </div>         

    </div>
  )
}

export default Cotact