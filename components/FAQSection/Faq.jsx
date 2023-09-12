import Link from "next/link"
import Image from "next/image"
import question from "@/public/assets/icons/question.svg"
import QuestionItem from "./QuestionItem"

const Faq = () => {
  const imageStyle = {
    transform: "rotate(12deg)"
  }
  return (
    <section className="px-3 mx-auto">
        <div className="w-full bgagin flex flex-col items-center justify-center
                     lg:gap-16 gap-12 px-8 md:px-16 lg:px-20 py-20 rounded-3xl mb-10 mt-20  lg:mt-40
                     text-center z-0 max-w-[537px] md:max-w-[796px]
                     lg:max-w-7xl mx-auto relative">
          <div className="w-[80px] h-[100px] grid place-items-center
                          absolute -top-[50px] right-1/2 translate-x-1/2 bg-ter rounded-[50%]">
              <Image src={question} width={70} style={imageStyle}/>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <h2 className="font-bold text-5xl">الأسئلة المتكررة</h2>
            <p className="text-base text-neutral-700">لديك سؤال آخر ؟ يمكنك مراسلتنا عن طريق هذا الإيمايل <Link href="" style={{ textDecoration: 'underline' }}> hope_life.charity@gmail.com </Link></p>
          </div>

          <div className="w-full text-right border-b-2 border-neutral-300">
            <QuestionItem
              question=" ما هي أهداف جمعيتكم؟"
              answer="هدف جمعيتنا هو تقديم الدعم والمساعدة للأفراد والأسر المحتاجة في مختلف جوانب حياتهم، بما في ذلك الغذاء، الإسكان، التعليم، والرعاية الصحية" />
            
            <QuestionItem 
              question="ما هي الطرق التي يمكنني بها المساهمة بوقتي وجهدي في العمل التطوعي؟"
              answer="نحن نرحب بالمتطوعين بكل حماس. يمكنك الاتصال بفريق العمل لمعرفة المزيد عن الفرص التطوعية المتاحة وكيف يمكنك المساهمة في مشاريعنا"/>

            <QuestionItem 
              question="ما هي نسبة التبرعات التي تذهب إلى تغطية التكاليف الإدارية؟"
              answer="حن نسعى جاهدين لضمان أن الجزء الأكبر من التبرعات يذهب مباشرة إلى الأهداف الخيرية. نسبة صغيرة تذهب لتغطية تكاليف الإدارة والتشغيل، وهذا يتيح لنا تقديم المزيد من الدعم للمحتاجين"/>

            <QuestionItem 
              question="هل تعملون مع شركاء أو منظمات أخرى في مشروعاتكم؟"
              answer="نعم، نعمل بشكل منتظم مع منظمات وشركاء آخرين لتعزيز تأثير مشروعاتنا. هذا يمكن أن يشمل الحكومة المحلية والمؤسسات الأخرى ذات الصلة"/>

            <QuestionItem 
              question="كيف يمكنني متابعة استخدام تبرعي؟"
              answer="بمجرد تبرعك، سنرسل لك إيصالًا أو تأكيدًا يحتوي على تفاصيل التبرع. بالإضافة إلى ذلك، يمكنك دائماً التواصل معنا لمعرفة كيف تم استخدام تبرعك والتأثير الذي أحدثته"/>
          </div>
        </div>
    </section>
  )
}

export default Faq