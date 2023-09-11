import Link from 'next/link'

const NavListItemsMobile = ({onClick}) => {
    

    const navlinks = [
        {path:"/", name:"الرئيسية"},
        {path:"/about", name:"من نحن"},
        {path:"/contact", name:"تواصل"},
      ]

  return (
    <div className='absolute top-[71px]  right-0 w-full h-screen bg-transparent z-10 '>
        <div className='absolute top-0 right-0 w-full h-screen bg-black  opacity-30' onClick={onClick}></div>
        <ul className={`absolute top-0 left-0 h-screen w-[250px] md:w-[350px] bg-white text-emerald-950 font-medium text-lg text-right z-30`}>
            {navlinks.map((link, index) => (
                <Link href={link.path} key={index} onClick={onClick}>
                    <li className='p-12 hover:opacity-50 border-b-2 border-gray-100'>
                        {link.name}
                    </li> 
                </Link>
            ))}
    </ul>
    </div>
  )
}

export default NavListItemsMobile