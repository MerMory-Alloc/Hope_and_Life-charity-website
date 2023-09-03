import Link from 'next/link'

const NavListItems = () => {
  return (
    <ul className={`hidden lg:grow lg:flex lg:justify-center lg:items-center lg:gap-10 text-emerald-950 font-medium text-lg`}>
            <li className='border-b-2 border-pri py-5 after:content-["•"] after:mr-10'>
              <Link href="/#">الرئيسية</Link>
            </li>
            <li className="py-5 after:content-['•'] after:mr-10">
              <Link href="/#">من نحن</Link>
            </li>
            <li className="py-5">
              <Link href="/#">تواصل</Link>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
    </ul>
  )
}

export default NavListItems