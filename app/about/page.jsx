import Image from "next/image"

import macta from "@/public/assets/images/macta.jpg"

const About = () => {
  return (
<section className="max-w-[537px] md:max-w-[796px] lg:max-w-7xl mx-auto">
  <div className="px-3">
    <div className="mx-auto w-full max-w-7xl">
      <div className="pt-16 pb-8 md:pt-20">
        <div className="flex flex-col items-start gap-14">
          <div className="flex max-w-[592px] flex-col items-start gap-4 lg:gap-6 ">
            <h2 className="font-bold text-3xl md:text-5xl about_title">حول الجمعية</h2>
            <p className="flex-col text-slate-700 max-[479px]:text-sm about_text">
            تأسست جمعية "الأمل والحياة" في ٢٠٢٣ مع التفاني والالتزام الشديدين لتحقيق تأثير إيجابي على حياة الأشخاص المحتاجين. مقرنا الرئيسي يقع في سفيزف بولاية سيدي بلعباس، ولكن مهمتنا لا تعرف حدودًا.
            </p>
          </div>
          <div className="grid place-items-start gap-8 grid-cols-1 lg:grid-cols-2 about_img">
            <Image src={macta} alt="" className="inline-block h-full w-full max-w-full object-cover rounded-2xl" />
            <div className="flex w-full flex-col items-start gap-5 border border-solid border-black p-20 rounded-2xl">
              <h2 className="font-bold text-3xl md:text-5xl">مهمتنا</h2>
              <p className="flex-col text-slate-700 max-[479px]:text-sm"> في قلوبنا ننبض شغفًا، وبأرواحنا نحمل شعلة الرحمة والإيمان بقدرة الله عز و جل و بالقوة الإنسانية. مهمتنا في جمعية "الأمل والحياة" ليست مجرد واجب إنساني، بل هي رحلة متواصلة لإشعال شمعة الأمل في كل زاوية مظلمة، و رسم البسمة على وجوه الذين يعانون
                <br />نحن نعتقد بقوة في قدرتنا  و بإذن الله طبعا على تغيير البلد بالمحبة والعمل الإنساني. نسعى لتقديم الإغاثة في أوقات الكوارث، وتقديم التعليم للشباب، وتقديم الدعم للأسر المحتاجة، والمزيد. نؤمن أن كل إنسان يستحق العيش بكرامة واحترام.
                <br />مع كل تبرع وتضحية، نبني جسورًا من الأمل ونزرع بذور الخير في أعماق القلوب. نرفع راية التغيير الإيجابي وندعو الجميع للانضمام إلينا في هذه الرحلة. إن مهمتنا هي تحويل الأحلام إلى واقع، وتقديم دعم يمكن أن يغير حياة الناس.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default About