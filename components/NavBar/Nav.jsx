import Image from 'next/image'
import logo from '@/public/assets/images/logo.png'
import NavListItems from './NavListItems'
import HamBtn from './HamBtn'



const Nav = () => {
  return (
    <nav className='relative z-10 bg-white flex w-full px-8 sm:px-16 justify-between items-center border-b-4 border-gray-100'>
        <HamBtn />
        <NavListItems />
        <div className='flex items-center gap-2 py-2'>
            <h2 className ={`block text-2xl font-sulas font-bold text-pri`} >الجمعية الخيرية للأمل و الحياة</h2>
            <Image src={logo} width={60}/>
        </div>
        
    </nav>
  )
}

export default Nav