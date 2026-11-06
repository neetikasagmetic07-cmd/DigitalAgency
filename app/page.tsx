import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

const services = [
  {
    number: "01",
    title: "Web development",
    description:
      "Fast, thoughtful websites that turn curious visitors into your next customers.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="5" y="8" width="38" height="31" rx="5" />
        <path d="M5 17h38M13 13h.1M18 13h.1M23 13h.1M18 25l-5 4 5 4m12-8 5 4-5 4m-5-7-3 7" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "UI/UX design",
    description:
      "Clear, characterful experiences that make every interaction feel effortless.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 9h32v25H8zM18 40h12m-6-6v6" />
        <path d="m18 26 5-6 4 4 5-7" />
        <circle cx="18" cy="26" r="1" />
        <circle cx="23" cy="20" r="1" />
        <circle cx="27" cy="24" r="1" />
        <circle cx="32" cy="17" r="1" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "SEO & growth",
    description:
      "Search strategies that bring the right people to your business, and keep them coming.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="21" cy="21" r="12" />
        <path d="m30 30 9 9M15 24l4-5 4 3 5-7" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Independent digital studio
            </p>
            <h1>
              Make your next move <span>matter.</span>
            </h1>
            <p className="hero-description">
              We bring strategy, design, and technology together to build
              digital experiences your customers remember.
            </p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/#contact">
                Let&apos;s talk
                <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" href="/#services">
                Explore our work <span aria-hidden="true">↓</span>
              </Link>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true">
                <span>J</span>
                <span>M</span>
                <span>A</span>
              </div>
              <p>
                <strong>Good people.</strong> Great work.
              </p>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract digital studio artwork">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-sun" />
            <div className="art-card art-card-back">
              <span className="art-card-label">Ideas in motion</span>
              <div className="art-chart">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="art-card art-card-front">
              <div className="art-card-top">
                <span className="art-window-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>your next big thing</span>
              </div>
              <div className="art-card-content">
                <span className="art-kicker">BUILT TO BE</span>
                <strong>Unmissable.</strong>
                <span className="art-line" />
                <span className="art-line art-line-short" />
                <span className="art-pill">Let&apos;s make it real <b>↗</b></span>
              </div>
            </div>
            <div className="art-sticker">
              <span>Ideas</span>
              <strong>→</strong>
              <span>impact</span>
            </div>
            <span className="art-spark spark-one" aria-hidden="true">✳</span>
            <span className="art-spark spark-two" aria-hidden="true">✳</span>
          </div>
          <Link className="scroll-cue" href="/#about">
            <span className="scroll-line" />
            Scroll to explore
          </Link>
        </section>

        <section className="intro-strip" aria-label="Studio promise">
          <p>
            Small team. <span>Big-picture thinking.</span> Work that works.
          </p>
          <span className="intro-mark" aria-hidden="true">✳</span>
        </section>

        <section className="about section-wrap" id="about">
          <div className="about-art" role="img" aria-label="Colorful abstract studio composition">
            <div className="about-grid" />
            <div className="about-window">
              <span className="about-window-bar"><i /><i /><i /></span>
              <div className="about-shape shape-orange" />
              <div className="about-shape shape-purple" />
              <div className="about-shape shape-lime" />
              <span className="about-window-caption">A little different, by design.</span>
            </div>
            <div className="about-note">
              <span>Curiosity</span>
              <strong>is our<br />superpower.</strong>
              <span className="note-star">✳</span>
            </div>
            <span className="about-art-label">The good stuff happens when we work together.</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">A bit about us</p>
            <h2>We make digital feel a little more <span>human.</span></h2>
            <p className="body-copy">
              We&apos;re a close-knit crew of thinkers, makers, and problem
              solvers. We partner with ambitious businesses to turn big ideas
              into thoughtful digital experiences, without the agency
              nonsense.
            </p>
            <Link className="text-link" href="/#contact">
              Get to know us <span aria-hidden="true">↗</span>
            </Link>
            <div className="about-stats">
              <div><strong>8+</strong><span>years making</span></div>
              <div><strong>40</strong><span>projects launched</span></div>
              <div><strong>100%</strong><span>good energy</span></div>
            </div>
          </div>
        </section>

        <section className="services section-wrap" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What we do</p>
              <h2>Good ideas, <span>made real.</span></h2>
            </div>
            <p className="section-description">
              The right mix of thinking and making to get your business where
              it wants to go.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-icon">{service.icon}</span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href="/#contact" aria-label={`Ask us about ${service.title}`}>
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-spark" aria-hidden="true">✳</div>
          <p className="eyebrow">Have a good one in mind?</p>
          <h2>Let&apos;s make <span>something matter.</span></h2>
          <p className="contact-description">
            Tell us what you&apos;re dreaming up. We&apos;ll bring the coffee and
            a few ideas of our own.
          </p>
          <a className="button button-light" href="mailto:hello@orbitstudio.co">
            hello@orbitstudio.co <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
