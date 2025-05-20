import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

export default function RootLayout({ children }) {
  return(
    <html lang="en">
      <head>
        <title>Johnvessly Alti</title>
      </head>
      <body className='bg-gradient-to-br from-blue-950 via-sky-950 to-black-950'>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
        disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}