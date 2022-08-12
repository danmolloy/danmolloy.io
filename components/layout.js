import Footer from './footer'
import MenuIcon from './menuIcon'
import Menu from './menu'
import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Layout({ children, home }) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="layout">
      <Head>
      <title>Dan Molloy</title>
      </Head>
      <main className="main">
        <header className='header'>
          <Link href="/">
            <a className={'hover:no-underline hover:text-slate-500 active:text-slate-600 font-medium text-slate-400 self-start -m-1'}>
            <h2 className='text-3xl font-display'>Dan Molloy</h2>
            </a>
          </Link>
            {/* <MenuIcon setShowMenu={() => setShowMenu(!showMenu)} showMenu={showMenu}/> */}
        </header>
        {showMenu && <Menu showMenu={() => setShowMenu(false)}/>}
        <div className='body'>
        {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}