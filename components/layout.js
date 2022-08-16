import Footer from './footer'
import MenuIcon from './menuIcon'
import Menu from './menu'
import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Layout({ children, home }) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="layout">
      <Head>
      <title>Dan Molloy</title>
      </Head>
      <main className="main">
        <header className='header'>
          <div className='m-2'>
            {home &&<Image src="/images/dan-boat-close.jpeg" width={500/6} height={500/6} className='rounded-full'/>}
          </div>
          <Link href="/">
            <a className={'hover:no-underline hover:text-slate-900 active:text-orange-500 font-medium text-orange-500 '}>
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