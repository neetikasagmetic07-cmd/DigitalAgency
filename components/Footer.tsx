import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand footer-logo" href="/#home">
            <span className="brand-mark" aria-hidden="true">o</span>
            <span>orbit<span className="brand-period">.</span></span>
          </Link>
          <p>Independent by nature.<br />Together by design.</p>
        </div>
        <div className="footer-links">
          <h3>Explore</h3>
          <Link href="/#home">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <div className="footer-social">
          <h3>Say hello</h3>
          <a href="mailto:hello@orbitstudio.co">hello@orbitstudio.co</a>
          <div className="social-links">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Orbit Studio. All good things reserved.</span>
        <Link href="/#home">Back to top ↑</Link>
      </div>
    </footer>
  );
}