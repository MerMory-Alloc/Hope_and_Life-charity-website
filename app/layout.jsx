import './styles/globals.css'


export const metadata = {
  title: 'الجمعية الخيرية للأمل و الحياة',
  description: ' الموقع الرسمي الخاص بالجمعية الخيرية للأمل و الحياة',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>
        {children}
      </body>
    </html>
  )
}
