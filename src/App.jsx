import { useState } from 'react'
import neuronImage from './assets/Neurone.png'
import './App.css'

const proofCards = [
  {
    value: '100+',
    label: 'pupils involved in early testing',
  },
  {
    value: '2026',
    label: 'first paid pilot planned',
  },
  {
    value: 'No phone',
    label: 'distraction-light support model',
  },
]

const storyPoints = [
  {
    title: 'Lived experience first',
    text: 'Neurodapt started from the reality that everyday systems still ask too much of people whose attention, pace, and organisation work differently.',
  },
  {
    title: 'Independence, not pressure',
    text: 'The goal is to help children build confidence and follow-through without turning every routine into another stressful battle.',
  },
  {
    title: 'Designed wider than one label',
    text: 'The long-term vision is support that works for many people with executive-function challenges, not just one diagnosis or one age group.',
  },
]

const productPoints = [
  {
    title: 'Focused by design',
    text: 'A simpler alternative to noisy apps, notifications, and phone-first productivity tools.',
  },
  {
    title: 'Tactile and discreet',
    text: 'Built to feel natural in daily life, at home or in school, without adding social friction.',
  },
  {
    title: 'Parent-aware',
    text: 'Created to support routines while helping families stay connected from a healthier distance.',
  },
  {
    title: 'Co-developed',
    text: 'Teachers, pupils, and parents have already shaped the direction through feedback and early trials.',
  },
]

const pilotSteps = [
  'Limited paid pilot planned for later in 2026.',
  'Testing in real home and school settings.',
  'Weekly surveys and feedback loops with families.',
  'Reduced pricing on future Neurodapt products for early participants.',
]

const pilotPack = [
  'Neurodapt unit',
  'Wearable strap',
  '56 task cards',
  'Get-started guide',
]

const testimonials = [
  {
    quote:
      'Teachers have responded to the concept as a way to reduce repeated prompting and give pupils more ownership of everyday tasks.',
    name: 'Will',
    role: 'Teacher',
  },
  {
    quote:
      'Parents describe the idea as support that could build confidence, independence, and calmer routines at home.',
    name: 'Vikki',
    role: 'Parent',
  },
  {
    quote:
      'The strongest response is practical: less friction, clearer routines, and support that does not feel overwhelming.',
    name: 'Harper',
    role: 'Parent',
  },
]

const teamMembers = [
  {
    name: 'Daniel',
    role: 'Co-founder',
    text: 'Lived AuDHD experience, founder energy, and direct insight into how under-supported executive-function challenges shape daily life.',
  },
  {
    name: 'Alison',
    role: 'Co-founder',
    text: 'Family perspective and a strong product instinct for making support feel practical, calm, and compassionate.',
  },
  {
    name: 'Beth',
    role: 'Product Design Adviser',
    text: 'Inclusive design and behavioural-science thinking shaped across health, innovation, and service design work.',
  },
  {
    name: 'Jason',
    role: 'Technology and Business Adviser',
    text: 'Startup, product, and commercial direction across venture-building, university innovation, and early-stage growth.',
  },
]

const networkItems = [
  'Co-design with schools, parents, teachers, and pupils across Scotland',
  'Founder support through University of Strathclyde',
  'Input from clinical, product, and innovation networks',
  'Early momentum through awards, pilot planning, and community feedback',
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
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />
      <div className="grid-overlay" />

      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Neurodapt homepage">
          <img
            className="brand-icon"
            src="/assets/brand/logo-icon-blue.png"
            alt=""
          />
          <img
            className="brand-wordmark"
            src="/assets/brand/logo-wordmark.png"
            alt="Neurodapt"
          />
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#story">Story</a>
          <a href="#product">Product</a>
          <a href="#trials">Trials</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="button button-secondary header-cta" href="#contact">
          Register interest
        </a>
      </header>

      <main id="top">
        <section className="section hero-section">
          <div className="hero-copy reveal">
            <p className="eyebrow">Inclusive assistive technology</p>
            <h1>Thrive your way.</h1>
            <p className="hero-kicker">
              Calmer support for routines, focus, and everyday independence.
            </p>
            <p className="hero-body">
              Neurodapt is building a focused device for children and families
              who need support without the distraction of smartphones or the
              clutter of complex apps.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Join the newsletter
              </a>
              <a className="button button-ghost" href="#product">
                Explore the product
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

          <div className="hero-stage reveal reveal-delay-1">
            <article className="surface-card stage-card stage-photo">
              <img
                src="/assets/photos/community-thomas.jpg"
                alt="Child testing the Neurodapt concept in a classroom setting"
                loading="eager"
                fetchPriority="high"
              />
              <div className="stage-copy">
                <p className="card-tag">Tested in context</p>
                <h2>Built around real school-day routines.</h2>
              </div>
            </article>

            <article className="surface-card stage-card stage-note">
              <p className="card-tag">Pilot planning</p>
              <h2>First paid pilot planned for later in 2026.</h2>
              <p>
                Early families will help shape the next iteration through real
                use, weekly feedback, and direct trial input.
              </p>
              <div className="stage-badges">
                <span>Home and school testing</span>
                <span>Reduced early pricing</span>
              </div>
            </article>

            <article className="surface-card stage-card stage-neuron">
              <div className="neuron-shell">
                <img
                  src={neuronImage}
                  alt="Expanded Neurodapt visual with labels visible"
                />
              </div>
              <div className="neuron-meta">
                <p className="card-tag">Visual system</p>
                <p>
                  Clear, low-distraction design language with the full Neurodapt
                  diagram visible.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section story-section" id="story">
          <div className="section-head reveal">
            <p className="eyebrow">Story</p>
            <h2>Built from lived experience, then sharpened with real users.</h2>
            <p>
              Neurodapt is not trying to make productivity look clever. It is
              trying to make everyday follow-through feel calmer, clearer, and
              more achievable.
            </p>
          </div>

          <div className="story-grid reveal reveal-delay-1">
            {storyPoints.map((item) => (
              <article className="surface-card story-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}

            <article className="surface-card story-quote">
              <p className="card-tag">Long-term direction</p>
              <h3>
                Support designed for different thinkers can improve life far
                beyond one label.
              </h3>
              <p>
                The project starts with children and families, but the longer
                ambition is broader: better tools for executive-function
                support across life stages.
              </p>
            </article>
          </div>
        </section>

        <section className="section product-section" id="product">
          <div className="product-shell">
            <div className="product-copy reveal">
              <p className="eyebrow">Product</p>
              <h2>A low-distraction routine tool with a calmer point of view.</h2>
              <p>
                The first Neurodapt product is being developed as a simple,
                affordable organisational device that works with daily life
                rather than competing with it.
              </p>
              <p>
                The aim is a product that feels discreet, wearable, intuitive,
                and genuinely useful for children, families, and school
                routines.
              </p>
            </div>

            <article className="surface-card product-visual reveal reveal-delay-1">
              <div className="product-stack" aria-hidden="true">
                <div className="stack-surface stack-surface-primary">
                  <span>Routine</span>
                  <strong>One next step at a time</strong>
                </div>
                <div className="stack-surface stack-surface-secondary">
                  <span>Focus</span>
                  <strong>Less cognitive noise</strong>
                </div>
                <div className="stack-surface stack-surface-tertiary">
                  <span>Support</span>
                  <strong>Clearer follow-through</strong>
                </div>
              </div>
              <div className="product-visual-copy">
                <p className="card-tag">What makes it different</p>
                <p>
                  Focused support, tactile interaction, and less cognitive
                  noise than app-heavy alternatives.
                </p>
              </div>
            </article>
          </div>

          <div className="difference-grid reveal reveal-delay-2">
            {productPoints.map((item) => (
              <article className="surface-card difference-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section trials-section" id="trials">
          <div className="section-head narrow reveal">
            <p className="eyebrow">Trials</p>
            <h2>Early pilots are where trust, proof, and product clarity get stronger.</h2>
            <p>
              Neurodapt is preparing a limited paid pilot so families can test
              the first prototype and directly influence what comes next.
            </p>
          </div>

          <div className="trials-grid">
            <article className="surface-card trial-card reveal reveal-delay-1">
              <p className="card-tag">What participants can expect</p>
              <div className="list-stack">
                {pilotSteps.map((item) => (
                  <div className="list-row" key={item}>
                    <span className="list-dot" aria-hidden="true" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="surface-card trial-card reveal reveal-delay-2">
              <p className="card-tag">Pilot pack</p>
              <div className="pack-grid">
                {pilotPack.map((item) => (
                  <div className="pack-item" key={item}>
                    {item}
                  </div>
                ))}
              </div>
              <p className="trial-note">
                The current live-site messaging references limited pilot spaces
                and a GBP 25 pilot price point.
              </p>
            </article>
          </div>

          <div className="testimonial-grid reveal reveal-delay-2">
            {testimonials.map((item) => (
              <article className="surface-card testimonial-card" key={item.name}>
                <p>{item.quote}</p>
                <div className="testimonial-meta">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section team-section" id="team">
          <div className="team-shell">
            <div className="team-copy reveal">
              <p className="eyebrow">Team</p>
              <h2>A founding team combining lived insight, product thinking, and early-stage execution.</h2>
              <p>
                The current Neurodapt site positions the business around
                founders with personal connection to the problem and advisers
                bringing design, behavioural, technology, and venture-building
                experience.
              </p>

              <div className="team-grid">
                {teamMembers.map((member) => (
                  <article className="surface-card team-card" key={member.name}>
                    <p className="card-tag">{member.role}</p>
                    <h3>{member.name}</h3>
                    <p>{member.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="team-media reveal reveal-delay-1">
              <article className="surface-card media-card">
                <img
                  src="/assets/photos/team-strathclyde.jpg"
                  alt="Neurodapt team photograph at Strathclyde Inspire"
                />
              </article>

              <article className="surface-card network-card">
                <img
                  src="/assets/photos/team-youngedge.jpeg"
                  alt="Neurodapt team receiving recognition at Scottish EDGE"
                />
                <div className="network-copy">
                  <p className="card-tag">Network around the project</p>
                  <div className="list-stack compact">
                    {networkItems.map((item) => (
                      <div className="list-row" key={item}>
                        <span className="list-dot" aria-hidden="true" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-shell">
            <div className="contact-copy reveal">
              <p className="eyebrow">Contact</p>
              <h2>Join updates, register interest for trials, or reach out directly.</h2>
              <p>
                This one-page version keeps the core Neurodapt information but
                presents it in a cleaner, more mobile-focused experience.
              </p>

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
                <p>122 Langlands Road, Glasgow, G51 4LQ</p>
              </article>
            </div>

            <div className="surface-card signup-card reveal reveal-delay-1">
              {submitted ? (
                <div className="success-panel" aria-live="polite">
                  <p className="card-tag">You are on the list</p>
                  <h3>Thanks for registering your interest in Neurodapt.</h3>
                  <p>
                    We will use this list for newsletter updates, pilot news,
                    and future product announcements.
                  </p>
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
                      placeholder="Tell us a little about your interest, your school, or the kind of support you are looking for."
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                    />
                  </label>

                  <button className="button button-primary form-button" type="submit">
                    Register interest
                  </button>

                  <p className="form-note">
                    {demoMode
                      ? 'Demo mode is active locally. Entries are stored in this browser until a live endpoint is connected.'
                      : 'Use this form for newsletter updates, product announcements, and pilot-interest registration.'}
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
          <p>Focused support for routines, confidence, and everyday independence.</p>
        </div>

        <p className="footer-meta">
          Modern mobile-first concept built around the current Neurodapt story,
          product direction, pilot plans, and team information.
        </p>
      </footer>
    </div>
  )
}

export default App
