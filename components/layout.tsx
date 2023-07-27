import Footer from './footer'
import { useState } from 'react'
import Head from 'next/head'
import Header from './header'

export default function Layout({ children, home }) {
  const [showMenu, setShowMenu] = useState(false)
  const [showHeader, setShowHeader] = useState(true)

  return (
    <div className=" dark:bg-zinc-900 dark:text-zinc-300 w-full min-h-screen bg-white flex flex-col items-center justify-between font-sans">
      <Head>
      <title>Dan Molloy</title>
      </Head>
      <main className='dark:bg-zinc-900 dark:text-zinc-300 w-full min-h-screen bg-white flex flex-col items-center justify-between font-sans'>
        <Header  showHeader={showHeader} setShowHeader={(i) => setShowHeader(i)} setShowMenu={() => setShowMenu(!showMenu)} showMenu={showMenu} />
        <div className={" transition duration-500 flex flex-col items-center"}>
        {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}