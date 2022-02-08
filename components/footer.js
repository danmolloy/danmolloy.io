import Link from 'next/link'
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="footer">
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
    </footer>
  )
}