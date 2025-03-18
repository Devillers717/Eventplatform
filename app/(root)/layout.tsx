import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"
import { Inter } from 'next/font/google';
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'My App',
  description: 'This is my app description',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="en" className={inter.variable}>
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
    </div>
  )
}