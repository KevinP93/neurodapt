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

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interest: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

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
          <a href="#story">Story</a>
          <a href="#product">Product</a>
          <a href="#pilot">Pilot</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="button button-secondary header-cta" href="#contact">
          Join updates
        </a>
      </header>

      <main id="top">
        <section className="section hero-section">
          <div className="hero-copy reveal">
            <p className="eyebrow">Thrive your way</p>
            <h1>Focused support for everyday independence</h1>
            <p className="hero-body">
              A focused to-do device that children can use with confidence and
              that parents can trust and support remotely.
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
              <img
                className="hero-squiggle"
                src="/assets/graphics/squiggle-blue.png"
                alt=""
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
