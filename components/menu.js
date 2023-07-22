import Link from "next/link";

export default function Menu(props) {
  return (
    <div className="menu">
      <Link href="/" className="menu-items" data-testid="menu-home-link">Home</Link>
      <Link href="/about" className="menu-items" data-testid="menu-about-link">About</Link>
      <Link href="/contact" className="menu-items" data-testid="menu-contact-link">Contact</Link>
    </div>
  )
}