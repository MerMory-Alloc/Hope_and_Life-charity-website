import '@/styles/globals.css'
import Nav from '@/components/NavBar/Nav'
import Footer from '@/components/Footer'

import Script from 'next/script'


export const metadata = {
  title: 'الجمعية الخيرية للأمل و الحياة',
  description: ' الموقع الرسمي الخاص بالجمعية الخيرية للأمل و الحياة',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className='relative '>
      <div className="z-0 absolute top-20 right-1/2  w-4/12 h-32  bg-lime-300 translate-x-2/4 blur-2xl opacity-20"></div>
        <Nav />
        <main className=''>
          {children}
        </main>
        <footer className='px-3 mx-auto'>
          <Footer />
        </footer>
        <Script
          src="https://kit.fontawesome.com/b2eef88262.js"
        />
      </body>
    </html>
  )
}
