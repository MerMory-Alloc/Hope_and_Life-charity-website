"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavListItems = () => {

  const pathname = usePathname()
  const navlinks = [
    {path:"/", name:"الرئيسية"},
    {path:"/about", name:"من نحن"},
    {path:"/contact", name:"تواصل"},
  ]

  const linkStyle = {
    padding:"18px 0px",
  }

  const currentLink = {
    ...linkStyle,
    borderBottom : "2px solid #005544",
  }

  return (
    <ul className={`hidden lg:ml-36 xl:ml-48  lg:grow lg:flex lg:justify-center lg:items-center lg:gap-14 text-emerald-950 font-medium text-lg`}>
            {navlinks.map((link, index) => {
              const isActive = pathname === link.path;
              return (
                <li key={index} className={`py-0.5 ${index === navlinks.length - 1 ? "" :"after:content-['•']"} after:pr-14`}>
                  <Link href={link.path} style={isActive ? currentLink : linkStyle}>{link.name}</Link>
                </li>
              )
            })}
    </ul>
  )
}

export default NavListItems