import './globals.css'

export const metadata = {
  title: 'Twenty3rd Music Group | Music, Culture & Merchandise',
  description: 'Official Twenty3rd Music Group website — music, albums, EPs, artists, videos, merchandise and culture.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
