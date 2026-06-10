import { useState } from 'react'
import './App.css'

const proofCards = [
  {
    value: '100+',
    label: 'pupils involved in testing',
  },
  {
    value: '2026',
    label: 'pilot rollout target',
  },
  {
    value: 'Remote support',
    label: 'built for trusted family follow-through',
  },
]

const storyPoints = [
  {
    title: 'Lived experience',
    text: 'Neurodapt was started by people who understand how hard unsupported routines can feel.',
  },
  {
    title: 'Everyday independence',
    text: 'The focus is simple: help children build confidence and take the next step with less friction.',
  },
  {
    title: 'Co-designed in Scotland',
    text: 'The direction has been shaped with pupils, parents, and teachers through early testing.',
  },
]

const productPoints = [
  'Focused around one clear next action',
  'Designed to feel simple, tactile, and discreet',
  'Built to support children at home and in school',
  'Created so parents can trust and support remotely',
]

const pilotSteps = [
  'Limited paid pilot planned for 2026',
  'Home and school testing',
  'Weekly surveys and feedback',
  'Reduced pricing for early participants',
]

const teamMembers = [
  {
    name: 'Daniel',
    role: 'Co-founder',
  },
  {
    name: 'Alison',
    role: 'Co-founder',
  },
  {
    name: 'Beth',
    role: 'Product Design Adviser',
  },
  {
    name: 'Jason',
    role: 'Technology and Business Adviser',
  },
]

const supporters = [
  {
    name: 'University of Strathclyde Inspire',
    logo: '/assets/supporters/strathclyde-inspire.png',
  },
  {
    name: 'UKRI Innovate UK',
    logo: '/assets/supporters/ukri-innovate-uk.png',
  },
  {
    name: 'STAC',
    logo: '/assets/supporters/stac.png',
  },
  {
    name: 'Scottish EDGE',
    logo: '/assets/supporters/scottish-edge.webp',
  },
]

const testimonials = [
  {
    quote:
      'This will save me time and give me peace of mind knowing my pupils can take more ownership in their routines',
    author: 'Will, Teacher',
  },
  {
    quote:
      'We can see how this would be an excellent tool as my daughter is neurodivergent. We keep her organised at the moment but something like this would boost confidence, independence and self esteem. Amazing job in inventing it!',
    author: 'Vikki, Parent',
  },
  {
    quote:
      'I would simply encourage you to pursue the idea - the children have a lot to remember through the day, and a lot of belongings to keep track of. I would welcome anything that would help them!',
    author: 'Harper, Parent',
  },
]

const contactLinks = [
  {
    label: 'Email',
    value: 'info@neurodapt.co.uk',
    href: 'mailto:info@neurodapt.co.uk',
  },
  {
    label: 'Phone',
    value: '(+44) 7546993063',
    href: 'tel:+447546993063',
  },
  {
    label: 'LinkedIn',
    value: 'Neurodapt',
    href: 'https://www.linkedin.com/company/neurodapt/',
  },
  {
    label: 'Instagram',
    value: '@neurodapt',
    href: 'https://www.instagram.com/neurodapt/',
  },
]

const navLinks = [
  { href: '#story', label: 'Story' },
  { href: '#product', label: 'Product' },
  { href: '#pilot', label: 'Pilot' },
  { href: '#supporters', label: 'Supporters' },
  { href: '#testimonials', label: 'Voices' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interest: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const demoMode =
    typeof window !== 'undefined' &&
    ['localhost', '127.0.0.1'].includes(window.location.hostname)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    if (!demoMode) {
      return
    }

    event.preventDefault()

    try {
      const currentEntries = JSON.parse(
        window.localStorage.getItem('neurodapt-interest-demo') ?? '[]',
      )

      currentEntries.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      })

      window.localStorage.setItem(
        'neurodapt-interest-demo',
        JSON.stringify(currentEntries),
      )
    } catch {
      // Ignore local demo storage issues so the UI can still progress.
    }

    setSubmitted(true)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      interest: '',
      message: '',
    })
  }

  return (
    <div className="page-shell">
      <div className="page-aura page-aura-one" />
      <div className="page-aura page-aura-two" />

      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Neurodapt homepage">
          <img
            className="brand-wordmark"
            src="/assets/brand/logo-wordmark.png"
            alt="Neurodapt"
          />
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navLinks.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="menu-toggle-label">Menu</span>
            <span className="menu-toggle-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <a className="button button-secondary header-cta" href="#contact">
            Join updates
          </a>
        </div>

        <button
          className={`mobile-nav-backdrop${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`mobile-nav-panel${menuOpen ? ' is-open' : ''}`}
          id="mobile-navigation"
        >
          <nav className="mobile-nav" aria-label="Mobile">
            <div className="mobile-nav-top">
              <p>Navigate</p>
              <span>Quick links</span>
            </div>
            {navLinks.map((item) => (
              <a
                className="mobile-nav-link"
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="button button-primary mobile-nav-cta"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Join updates
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="section hero-section">
          <div className="hero-copy reveal">
            <p className="eyebrow">Thrive your way</p>
            <h1>A calmer way to build independence</h1>
            <p className="hero-body">
              A focused to-do device for children, with trusted remote support
              for parents.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Join the newsletter
              </a>
              <a className="button button-ghost" href="#product">
                See the product
              </a>
            </div>

            <div className="proof-grid">
              {proofCards.map((item) => (
                <article className="surface-card proof-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-media reveal reveal-delay-1">
            <article className="hero-photo-card">
              <img
                src="/assets/photos/community-thomas.jpg"
                alt="Child testing the Neurodapt concept in a classroom setting"
                loading="eager"
                fetchPriority="high"
              />
              <div className="hero-photo-copy">
                <p>Building independence through a focused device.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section story-section" id="story">
          <div className="section-head reveal">
            <p className="eyebrow">Why we started Neurodapt</p>
            <h2>Designed to make routines feel clearer, calmer, and more achievable.</h2>
          </div>

          <div className="story-grid reveal reveal-delay-1">
            {storyPoints.map((item) => (
              <article className="surface-card story-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section product-section" id="product">
          <div className="section-head reveal">
            <p className="eyebrow">Our pilot product</p>
            <h2>A clear, simple tool for routines, prompts, and follow-through.</h2>
          </div>

          <div className="product-layout">
            <article className="surface-card product-panel reveal reveal-delay-1">
              <div className="product-panel-copy">
                <p>
                  Neurodapt is being developed as a simple, low-distraction tool
                  that fits real life at home and in school.
                </p>
              </div>
              <div className="product-points">
                {productPoints.map((item) => (
                  <div className="product-point" key={item}>
                    <span className="list-dot" aria-hidden="true" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="surface-card product-photo-card reveal reveal-delay-2">
              <img
                src="/assets/photos/community-archie.jpg"
                alt="Neurodapt co-design activity in a classroom"
              />
            </article>
          </div>
        </section>

        <section className="section pilot-section" id="pilot">
          <div className="section-head reveal">
            <p className="eyebrow">User trials</p>
            <h2>Early testing is how the next version gets stronger.</h2>
          </div>

          <div className="pilot-grid">
            <article className="surface-card pilot-card reveal reveal-delay-1">
              <p className="card-tag">What to expect</p>
              <div className="list-stack">
                {pilotSteps.map((item) => (
                  <div className="product-point" key={item}>
                    <span className="list-dot" aria-hidden="true" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="surface-card pilot-card pilot-card-plain reveal reveal-delay-2">
              <p className="card-tag">Pilot pack</p>
              <div className="pilot-pack">
                <span>Neurodapt unit</span>
                <span>Wearable strap</span>
                <span>56 task cards</span>
                <span>Get-started guide</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section supporters-section" id="supporters">
          <div className="section-head reveal">
            <p className="eyebrow">Supporters and partners</p>
            <h2>Backed by organisations helping Neurodapt move from idea to reality.</h2>
          </div>

          <div className="supporters-layout reveal reveal-delay-1">
            <article className="surface-card supporters-proof">
              <p className="card-tag">Early signal</p>
              <strong>Trialled with and approved by over 100 pupils</strong>
              <p>
                Support from schools, startup networks, and innovation programmes
                is helping shape the next stage.
              </p>
            </article>

            <div className="supporters-grid" aria-label="Supporters">
              {supporters.map((supporter) => (
                <article className="surface-card supporter-card" key={supporter.name}>
                  <img src={supporter.logo} alt={`${supporter.name} logo`} />
                  <span>{supporter.name}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonials-section" id="testimonials">
          <div className="section-head reveal">
            <p className="eyebrow">What people said</p>
            <h2>Feedback from parents and teachers already shaping the product.</h2>
          </div>

          <div className="testimonials-grid reveal reveal-delay-1">
            {testimonials.map((item) => (
              <article className="surface-card testimonial-card" key={item.author}>
                <p className="testimonial-mark" aria-hidden="true">
                  "
                </p>
                <blockquote>{item.quote}</blockquote>
                <p className="testimonial-author">{item.author}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section team-section" id="team">
          <div className="section-head reveal">
            <p className="eyebrow">Meet the team</p>
            <h2>A founder-led team building Neurodapt with design and product support.</h2>
          </div>

          <div className="team-layout">
            <div className="team-grid reveal reveal-delay-1">
              {teamMembers.map((member) => (
                <article className="surface-card team-card" key={member.name}>
                  <p className="card-tag">{member.role}</p>
                  <h3>{member.name}</h3>
                </article>
              ))}
            </div>

            <article className="surface-card team-photo-card reveal reveal-delay-2">
              <img
                src="/assets/photos/team-strathclyde.jpg"
                alt="Neurodapt team photograph at Strathclyde Inspire"
              />
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-layout">
            <div className="contact-copy reveal">
              <p className="eyebrow">Subscribe to our newsletter</p>
              <h2>Join updates or reach out directly.</h2>

              <div className="contact-grid">
                {contactLinks.map((item) => (
                  <a
                    className="surface-card contact-card"
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </a>
                ))}
              </div>

              <article className="surface-card address-card">
                <p className="card-tag">Address</p>
                <p>
                  Graham Hills Building, Level 6, 50 Richmond Street, Glasgow,
                  G1 1XP
                </p>
              </article>
            </div>

            <div className="surface-card signup-card reveal reveal-delay-1">
              {submitted ? (
                <div className="success-panel" aria-live="polite">
                  <p className="card-tag">You are on the list</p>
                  <h3>Thanks for joining the Neurodapt newsletter.</h3>
                  <p>We will share updates, pilot news, and product milestones.</p>
                  <button
                    className="button button-primary"
                    type="button"
                    onClick={() => setSubmitted(false)}
                  >
                    Add another response
                  </button>
                </div>
              ) : (
                <form
                  className="waitlist-form"
                  name="newsletter"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="newsletter" />
                  <input type="hidden" name="bot-field" />

                  <div className="form-grid">
                    <label htmlFor="firstName">
                      First name
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Jane"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </label>

                    <label htmlFor="lastName">
                      Last name
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>

                  <label htmlFor="email">
                    Email address
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label htmlFor="interest">
                    I am most interested in
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select one</option>
                      <option value="Newsletter">Newsletter updates</option>
                      <option value="User trials">User trials</option>
                      <option value="School partnership">School partnership</option>
                      <option value="Investor or supporter">Investor or supporter</option>
                    </select>
                  </label>

                  <label htmlFor="message">
                    Message
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us a little about your interest or your school."
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                    />
                  </label>

                  <button className="button button-primary form-button" type="submit">
                    Subscribe
                  </button>

                  <p className="form-note">
                    {demoMode
                      ? 'Demo mode is active locally. Entries are stored in this browser until a live endpoint is connected.'
                      : 'Use this form for newsletter updates, user-trial interest, and product news.'}
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Neurodapt</p>
          <p>Thrive your way.</p>
        </div>

        <p className="footer-meta">
          One-page concept aligned with the current Neurodapt site identity.
        </p>
      </footer>
    </div>
  )
}

export default App
