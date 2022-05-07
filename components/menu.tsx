import Link from "next/link";

export default function Menu(props) {
  return (
    <div className="menu">
      <Link href="/"><a className="menu-items" data-testid="menu-home-link">Home</a></Link>
      <Link href="/about" ><a className="menu-items" data-testid="menu-about-link">About</a></Link>
      <Link href="/projects" ><a className="menu-items" data-testid="menu-projects-link">Web Projects</a></Link>
      <Link href="/contact" ><a className="menu-items" data-testid="menu-contact-link">Contact</a></Link>
    </div>
  )
}