import Link from 'next/link'
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { RiGameFill } from 'react-icons/ri'
import { animateScroll as scroll } from 'react-scroll'

export default function Footer() {
  return (
    <footer className="w-full h-20 dark:bg-zinc-900 flex sm:flex-row flex-col sm:justify-between p-2 items-center border-t">
      <div className='flex flex-row'>
      <Link href="https://twitter.com/dan_molloy1" target="_blank" className=' p-1 m-1 text-xl'>
          <AiOutlineTwitter className='react-icons'/>
      </Link>
      <Link target="_blank" href="https://www.instagram.com/danielmolloy2/" className=' p-1 m-1 text-xl'>
          <AiOutlineInstagram className='react-icons'/>
      </Link>
      </div>
      {/* <Link href="/conundrum" className=' text-2xl active:text-yellow-400 hover:text-slate-900 text-yellow-400 flex-row mr-4' >
          <RiGameFill />
      </Link> */}
      <button className='hover:underline font-display text-sm font-light hover:cursor-pointer active:text-zinc-400 m-1 ' onClick={() => scroll.scrollToTop({ smooth: true, duration: 750 })}>
        Back to top
      </button>
    </footer>
  )
}