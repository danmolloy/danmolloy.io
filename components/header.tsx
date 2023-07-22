import { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import MenuIcon from './menuIcon'
import Link from 'next/link'

export const menuItems: {title: string}[] = [
  {
    title: "About",
  },
  {
    title: "Contact",
  },
]

type HeaderProps = {
  showMenu: boolean
  setShowMenu: () => void
  setShowHeader: (arg: boolean) => void
  showHeader: boolean
}

export default function Header(props: HeaderProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { showMenu, setShowMenu, setShowHeader, showHeader } = props;
  //const [showHeader, setShowHeader] = useState(true)

  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.scrollY;
      if (currentPosition > scrollPosition + 25) {
        setScrollPosition(currentPosition);
        setShowHeader(false)
      } else if (currentPosition < scrollPosition - 50) {
        setScrollPosition(currentPosition);
        setShowHeader(true)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);


  return (
    <div 
    
    className={!showHeader && scrollPosition < 750
      ? "justify-between font-display -translate-y-full transition duration-1000  fixed z-30 h-14 w-screen top-0 flex flex-row-reverse md:flex-row items-center fill-zinc-300 text-zinc-100"  
      : !showHeader
      ? "justify-between font-display -translate-y-full transition duration-500 bg-white fixed z-30 h-14 w-screen top-0 flex flex-row-reverse md:flex-row items-center  shadow fill-zinc-300 text-black"  
      : "justify-between font-display transition duration-500 ease-out fixed  bg-white z-30 h-14 w-screen top-0 flex flex-row-reverse md:flex-row  items-center  shadow fill-zinc-300 text-black"}>
{/*       <h2 className={' p-2 '}>Daniel Molloy</h2>
 */}   </div>
  )
}