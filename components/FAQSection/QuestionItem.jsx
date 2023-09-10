
const QuestionItem = ({ question, answer}) => {
  return (
    <details className="py-4 md:py-5 list-none after:w-[25px] after:h-[25px] relative after:-z-10
                                 after:rounded-full after:absolute after:top-4 after:left-0
                                 open:after:bg-[url('../public/assets/icons/down.png')]
                                 after:bg-[url('../public/assets/icons/back.png')] 
                                 after:bg-cover after:bg-no-repeat border-t-2 border-neutral-300
                                 md:after:w-[30px] md:after:h-[30px] md:after:top-5">

            <summary className=" list-none pl-3 text-xl md:text-2xl mb-2 text-sec  hover:text-pri cursor-pointer">
              {question}
            </summary>
            <div className="text-neutral-700 md:text-lg">
              {answer}
            </div>
          </details>
  )
}

export default QuestionItem