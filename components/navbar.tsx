import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-wrap" aria-label="Main navigation">
        <Link className="brand" href="/#home" aria-label="Orbit Studio home">
          <span className="brand-mark" aria-hidden="true">o</span>
          <span>orbit<span className="brand-period">.</span></span>
        </Link>
        <div className="nav-links">
          <Link href="/#home">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <Link className="nav-cta" href="/#contact">
          Get started <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}
