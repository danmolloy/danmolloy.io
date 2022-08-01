import Footer from './footer'
import MenuIcon from './menuIcon'
import Menu from './menu'
import { useState } from 'react'
import Link from 'next/link'

export default function Layout({ children, home }) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="layout">
      <main className="main">
        <header className='header'>
          <Link href="/">
            <a className={home ? 'invisible' : 'font-medium text-slate-700 self-start -m-1'}>
            <h2 className='text-3xl'>Dan Molloy</h2>
            </a>
          </Link>
            <MenuIcon showMenu={() => setShowMenu(!showMenu)}/>
        </header>
        {showMenu && <Menu />}
        <div className='body'>
        {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}