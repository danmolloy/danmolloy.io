import Link from 'next/link'
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { RiGameFill } from 'react-icons/ri'

export default function Footer() {
  return (
    <footer className="footer">
      <div className='footer-icons'>
      <Link href="https://github.com/danmolloy">
        <a target="_blank">
          <AiOutlineGithub className='react-icons'/>
        </a>
      </Link>
      <Link href="https://twitter.com/dan_molloy1">
        <a target="_blank">
          <AiOutlineTwitter className='react-icons'/>
        </a>
      </Link>
      <Link href="https://www.instagram.com/danielmolloy2/">
        <a target="_blank">
          <AiOutlineInstagram className='react-icons'/>
        </a>
      </Link>
      </div>
      <Link href="/conundrum">
        <a className=' text-2xl active:text-yellow-400 hover:text-slate-900 text-yellow-400 flex-row mr-4' >
          <RiGameFill />
        </a>
      </Link>
      
    </footer>
  )
}