import { useState } from 'react'
import neuronImage from './assets/Neurone.png'
import './App.css'

const heroHighlights = [
  {
    title: 'Calmer UX',
    text: 'Low-friction interactions, clean language, and a mobile-first experience.',
  },
  {
    title: 'Community-shaped',
    text: 'Built with feedback from families, students, and professionals from day one.',
  },
  {
    title: 'Single-purpose focus',
    text: 'A more intentional alternative to noisy, general-purpose productivity tools.',
  },
]

const audienceCards = [
  {
    title: 'Parents of children aged 6-14',
    text: 'Warm, practical support that feels safe for younger users and thoughtful for the adults guiding them.',
  },
  {
    title: 'Students and young professionals',
    text: 'A focused tool for routines, planning, and follow-through without the clutter that often comes with everyday apps.',
  },
]

const valuePillars = [
  {
    title: 'Accessibility without labels',
    text: 'Neurodapt is informed by lived experience of neurodiversity, but designed so more people can benefit from it.',
  },
  {
    title: 'Simplicity you can feel',
    text: 'Everything should feel clear, calm, intuitive, and easy to return to when the day gets busy.',
  },
  {
    title: 'Built with, not just for',
    text: 'Co-development is part of the product process and part of the trust the brand is trying to build.',
  },
]

const communityMoments = [
  'Real-world co-development sessions with children, families, and educators.',
  'A growing digital community feeding back on messaging, experience, and priorities.',
  'A pre-launch waitlist designed to bring supporters into the journey before Kickstarter goes live.',
]

const waitlistBenefits = [
  'Early product updates and launch milestones',
  'Behind-the-scenes co-development notes',
  'First notice when Kickstarter goes live',
]

const stats = [
  { value: '2,000-3,000', label: 'waitlist target in 3 months' },
  { value: 'Late Q3 2026', label: 'Kickstarter launch target' },
  { value: 'Mobile-first', label: 'social traffic expected' },
]

function App() {
  const [formData, setFormData] = useState({
    email: '',
    audience: '',
    challenge: '',
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
        window.localStorage.getItem('neurodapt-waitlist-demo') ?? '[]',
      )

      currentEntries.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      })

      window.localStorage.setItem(
        'neurodapt-waitlist-demo',
        JSON.stringify(currentEntries),
      )
    } catch {
      // Ignore local demo storage issues so the UI can still progress.
    }

    setSubmitted(true)
    setFormData({
      email: '',
      audience: '',
      challenge: '',
    })
  }

  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

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
          <a href="#audiences">Audiences</a>
          <a href="#community">Community</a>
          <a href="#waitlist">Waitlist</a>
        </nav>

        <a className="button button-secondary header-cta" href="#waitlist">
          Join waitlist
        </a>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy reveal">
            <div className="hero-copy-main">
              <p className="eyebrow">
                Pre-launch marketing hub | Kickstarter planned for late Q3 2026
              </p>

              <h1>Keeping you on track, wherever you go.</h1>

              <p className="hero-lead">
                Neurodapt is building a calmer, more focused way to support
                planning, organisation, and everyday follow-through.
              </p>

              <p className="hero-support">
                Designed from lived experience. Shaped with real users. Built to
                feel accessible, warm, modern, and genuinely useful from the
                first tap.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#waitlist">
                  Join the waitlist
                </a>
                <a className="button button-ghost" href="#story">
                  See the story
                </a>
              </div>
            </div>

            <div className="hero-highlights">
              {heroHighlights.map((item) => (
                <article className="highlight-card" key={item.title}>
                  <p className="highlight-title">{item.title}</p>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-1">
            <div className="hero-stage-glow hero-stage-glow-one" />
            <div className="hero-stage-glow hero-stage-glow-two" />

            <img
              className="hero-squiggle"
              src="/assets/graphics/squiggle-blue.png"
              alt=""
            />

            <div className="hero-chip hero-chip-top">
              <span>Neural-inspired clarity</span>
              <strong>Simple support, calmer flow</strong>
            </div>

            <div className="hero-chip hero-chip-bottom">
              <span>Waitlist target</span>
              <strong>2,000-3,000 early supporters</strong>
            </div>

            <article className="hero-frame hero-frame-primary">
              <img
                src={neuronImage}
                alt="Glowing neuron illustration used as a premium visual metaphor for connected support and focus"
                loading="eager"
                fetchPriority="high"
              />
            </article>

            <article className="hero-frame hero-frame-secondary">
              <p className="card-tag">Neural-inspired design</p>
              <h2>Calm systems, not noisy productivity hacks.</h2>
              <p>
                A more intentional experience for routines, planning, and
                follow-through, designed to feel connected and low-friction.
              </p>
            </article>

            <article className="hero-frame hero-frame-tertiary">
              <img
                src="/assets/photos/community-thomas.jpg"
                alt="Child taking part in a Neurodapt co-development session"
              />
              <div className="frame-copy">
                <p className="frame-kicker">Co-developed with real users</p>
                <h2>Grounded in everyday reality.</h2>
              </div>
            </article>
          </div>
        </section>

        <section className="section stats-strip reveal reveal-delay-2">
          {stats.map((item) => (
            <article className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="section story-panel" id="story">
          <div className="section-intro">
            <p className="eyebrow">The product need</p>
            <h2>A simpler everyday, without the noise.</h2>
          </div>

          <div className="story-grid">
            <div className="story-copy">
              <p>
                The core challenge is not just productivity. It is stress,
                overwhelm, follow-through, confidence, and independence in the
                middle of real life.
              </p>
              <p>
                Neurodapt is positioning itself as a calmer alternative: a more
                intentional experience for executive function support, without
                turning the product into something clinical, stigmatised, or
                overwhelming to use.
              </p>
              <p>
                That means the website has to do more than explain a product. It
                needs to make the brand feel trustworthy, emotionally intelligent,
                and easy to engage with in seconds on mobile.
              </p>
            </div>

            <div className="story-points">
              <article>
                <h3>Primary job</h3>
                <p>
                  Convert social traffic into waitlist sign-ups before launch.
                </p>
              </article>
              <article>
                <h3>Brand tension</h3>
                <p>
                  Speak to parents first, while still feeling relevant to young
                  adults and professionals.
                </p>
              </article>
              <article>
                <h3>Experience standard</h3>
                <p>
                  Low cognitive load, fast access, responsive design, and
                  accessible interactions throughout.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section audience-section" id="audiences">
          <div className="section-intro narrow">
            <p className="eyebrow">Who it is for</p>
            <h2>Two audiences. One clear, credible experience.</h2>
            <p>
              The site needs to hold a careful balance: warm enough for parents
              and younger end users, but sharp enough to feel current for older
              users looking for focused support.
            </p>
          </div>

          <div className="audience-grid">
            {audienceCards.map((audience) => (
              <article className="audience-card" key={audience.title}>
                <p className="card-tag">Audience</p>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section principles-section">
          <div className="principles-grid">
            {valuePillars.map((pillar) => (
              <article className="principle-card" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section community-section" id="community">
          <div className="community-copy">
            <p className="eyebrow">Co-development</p>
            <h2>Built with the people it is meant to help.</h2>
            <p>
              Community is not a marketing add-on here. It is part of the way
              the product is being shaped, tested, and made trustworthy ahead of
              launch.
            </p>

            <div className="community-list">
              {communityMoments.map((item) => (
                <article className="community-item" key={item}>
                  <span className="community-marker" aria-hidden="true" />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="community-collage">
            <article className="collage-card collage-large">
              <img
                src="/assets/photos/community-archie.jpg"
                alt="Classroom co-development session"
              />
            </article>
            <article className="collage-card">
              <img
                src="/assets/photos/team-strathclyde.jpg"
                alt="Neurodapt team with supporters"
              />
            </article>
            <article className="collage-note">
              <p className="card-tag">Why this matters</p>
              <h3>Trust grows faster when people can see themselves in the process.</h3>
            </article>
          </div>
        </section>

        <section className="section waitlist-section" id="waitlist">
          <div className="waitlist-copy">
            <p className="eyebrow">Join early</p>
            <h2>Be part of what comes next.</h2>
            <p>
              The waitlist is the centre of the pre-launch journey. It is where
              early supporters can follow product progress, hear about milestones,
              and be first to know when Kickstarter goes live.
            </p>

            <div className="benefits-list">
              {waitlistBenefits.map((item) => (
                <article className="benefit-item" key={item}>
                  <span className="benefit-dot" aria-hidden="true" />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="signup-card">
            {submitted ? (
              <div className="success-panel" aria-live="polite">
                <p className="card-tag">You are in</p>
                <h3>Thanks for joining the Neurodapt waitlist.</h3>
                <p>
                  We will keep early supporters close to the journey as the
                  product moves toward launch.
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
                name="waitlist"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="waitlist" />
                <input type="hidden" name="bot-field" />

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

                <label htmlFor="audience">
                  I am joining as
                  <select
                    id="audience"
                    name="audience"
                    value={formData.audience}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select one</option>
                    <option value="Parent">Parent</option>
                    <option value="Student">Student</option>
                    <option value="Professional">Professional</option>
                    <option value="Educator">Educator</option>
                    <option value="Supporter">Supporter</option>
                  </select>
                </label>

                <label htmlFor="challenge">
                  What would you most like support with?
                  <textarea
                    id="challenge"
                    name="challenge"
                    rows="4"
                    placeholder="Routines, planning, focus, follow-through..."
                    value={formData.challenge}
                    onChange={handleChange}
                  />
                </label>

                <button className="button button-primary form-button" type="submit">
                  Join the waitlist
                </button>

                <p className="form-note">
                  {demoMode
                    ? 'Demo mode is active locally. Submissions are stored in this browser until a live form endpoint is connected.'
                    : 'Early supporters will receive launch updates, waitlist news, and Kickstarter reminders.'}
                </p>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Neurodapt</p>
          <p>Calmer support for planning, focus, and everyday follow-through.</p>
        </div>

        <p className="footer-meta">
          Pre-launch website concept built from the 2026 website brief and value
          proposition notes.
        </p>
      </footer>
    </div>
  )
}

export default App
