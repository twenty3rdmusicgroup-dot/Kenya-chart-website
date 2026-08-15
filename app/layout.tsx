import './globals.css'

export const metadata = { title: 'Twenty3rd Hot 50', description: 'Kenya’s independent music chart by Twenty3rd Music Group.' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
