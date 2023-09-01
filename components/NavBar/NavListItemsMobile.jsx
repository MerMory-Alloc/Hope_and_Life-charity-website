import Link from 'next/link'

const NavListItemsMobile = () => {
  return (
    <div>
        <div className='absolute top-[71px] left-0 w-full h-full bg-black opacity-10  blur brightness-50'></div>
        <ul className={`absolute top-[71px] left-0 w-2/4 bg-white text-emerald-950 font-medium text-lg text-right`}>
            <Link href="/#">
                <li className='p-12 hover:opacity-50'>
                    الرئيسية
                </li> 
            </Link>
            <Link href="/#">
                <li className="p-12 hover:opacity-50">
                    من نحن
                </li>
            </Link>
            <Link href="/#">
                <li className="p-12 hover:opacity-50">
                    تواصل
                </li>
            </Link>
    </ul>
    </div>
  )
}

export default NavListItemsMobile