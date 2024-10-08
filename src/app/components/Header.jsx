'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
function Header() {
  const pathname = usePathname()
 
  return (
    <nav className="bg-blue-500 p-3 m-11 text-white flex justify-center">
      <Link
        className={`link p-3 ${pathname === '/home' ? 'active underline' : ''}`}
        href="/home"
      >
        Home
      </Link>
      <Link
        className={`link p-3 ${pathname === '/contect' ? 'active underline' : ''}`}
        href="/contect"
      >
        Contect
      </Link>
      <Link className={`link p-3 ${pathname === '/blog' ? 'active underline' : ''}`} 
      href="/blog">
        Blog
      </Link>
      <Link className={`link p-3 ${pathname === '/dashboard' ? 'active underline' : ''}`} 
      href="/dashboard">
        Dashboard
      </Link>
 
      <Link
        className={`link p-3 ${pathname === '/about' ? 'active underline' : ''}`}
        href="/about"
      >
        About
      </Link>
    </nav>
  )
}

export default Header