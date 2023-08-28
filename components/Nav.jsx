import Image from 'next/image'
import logo from '@/public/assets/images/logo.png'
import localFont from 'next/font/local'
import NavListItems from './NavListItems'
import HamBtn from './HamBtn'


const logoFont = localFont({ src: '../public/assets/fonts/sulas.ttf' })


const Nav = (props) => {
  return (
    <nav className='flex w-full px-8 sm:px-16 justify-between items-center border-b-4 border-gray-100'>
        <HamBtn font={props.font}/>
        <NavListItems font={props.font} />
        <div className='flex items-center gap-2 py-2'>
            <h2 className ={`block ${logoFont.className} text-2xl font-bold text-primary`} >الجمعية الخيرية للأمل و الحياة</h2>
            <Image src={logo} width={60}/>
        </div>
        
    </nav>
  )
}

export default Nav