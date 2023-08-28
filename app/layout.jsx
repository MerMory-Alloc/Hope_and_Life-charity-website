import '@/styles/globals.css'
import Nav from '@/components/Nav'
import localFont from 'next/font/local'


const prencipalFont = localFont({ src: '../public/assets/fonts/new.ttf' })


export const metadata = {
  title: 'الجمعية الخيرية للأمل و الحياة',
  description: ' الموقع الرسمي الخاص بالجمعية الخيرية للأمل و الحياة',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body >
        <Nav font={prencipalFont.className} />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
