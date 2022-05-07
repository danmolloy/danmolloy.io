import Link from "next/link";

export default function Menu(props) {
  return (
    <div className="menu">
      <Link href="/"><a className="menu-items">Home</a></Link>
      <Link href="/about" ><a className="menu-items">About</a></Link>
      <Link href="/projects" ><a className="menu-items">Web Projects</a></Link>
      <Link href="/contact" ><a className="menu-items">Contact</a></Link>
    </div>
  )
}