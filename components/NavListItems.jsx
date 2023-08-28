import Link from 'next/link'

const NavListItems = (props) => {
  return (
    <ul className={`hidden md:grow md:flex md:justify-center md:items-center md:gap-10 text-emerald-950 font-medium text-lg ${props.font}`}>
            <li className="py-5 after:content-['•'] after:ml-10">
              <Link href="/#">تواصل</Link>
            </li>
            <li className="py-5 after:content-['•'] after:ml-10">
              <Link href="/#">من نحن</Link>
            </li>
            <li className='border-b-2 border-primary py-5'>
              <Link href="/#">الرئيسية</Link>
            </li>
    </ul>
  )
}

export default NavListItems