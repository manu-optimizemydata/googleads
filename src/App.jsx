import './App.css'
import logo from './assets/logo.png'
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ThankYou from './ThankYou.jsx'

function Home() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Use environment variable if set; otherwise rely on same-origin/proxy
      const apiUrl = import.meta.env.VITE_API_URL || ''
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Network error' }))
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.success) {
        // Clear form data
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: ''
        })
        // Navigate to thank you page
        navigate('/thank-you')
      } else {
        setSubmitMessage(data.message || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      // Provide a more user-friendly error message
      const errorMsg = error.message.includes('fetch') || error.message.includes('Network') 
        ? 'Network error. Please check your connection and ensure the server is running.'
        : error.message
      setSubmitMessage(`Failed to send message: ${errorMsg}. Please try again or contact us directly.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="page">
      <header className="header">
        <div className="logo-wrap">
          <img src={logo} alt="Optimize My Data logo" className="logo" />
          <h1 className="header-title">Optimize My Data</h1>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <h2>Google Ads specialist for agencies & SMEs.</h2>
          <p className="hero-lead">
            High-intent search campaigns built to capture leads fast. Audits, buildouts, and optimization tailored for in-house teams and white-label partners.
          </p>
          <h3 id="ad-specialist-help" className="subheading">As an ad specialist, I can help you with:</h3>
          <div className="bullets">
            <div>• Exact/phrase match focus (e.g., “google ads consultant”, “white label google ads management”, “google ads expert for small business”) with tight negatives and SKAG/structured match.</div>
            <div>• Industries: B2B SaaS, professional services, local services, eCommerce add-on, agency white-label clients.</div>
            <div>• Conversions: forms, booked calls, WhatsApp chats, call clicks, offline/CRM imports—tracked in GA4 and synced to Ads.</div>
            <div>• Campaign mix: Search first; controlled PMax/DSA when appropriate; remarketing for re-engagement; brand defense if needed.</div>
            <div>• KPIs: lower CPL, higher qualified lead rate, stronger ROAS/POAS, better CVR, reduced waste, faster time-to-first-lead.</div>
            <div>• Launch in 7 days; weekly huddles with clear stakeholder reporting.</div>
          </div>
          <div className="cta-row">
            <button className="btn primary" onClick={scrollToContact}>
              Book a strategy call
            </button>
            <a className="btn secondary" href="https://wa.me/917892064440" target="_blank" rel="noopener noreferrer">
              WhatsApp now
            </a>
          </div>
          <div className="trust">
            <span>Trusted for white-label and direct support</span>
            <span>• Google Partner</span>
            <span>• B2B lead gen, SaaS, local services</span>
          </div>
        </section>

        <section id="ppc-expert" className="card">
          <h2 className="section-title">PPC Expert & Google Ads Specialist</h2>
          <p className="hero-lead" style={{ marginBottom: '24px' }}>
            With years of hands-on experience managing high-performing Google Ads campaigns, I bring deep expertise in pay-per-click (PPC) advertising that drives measurable results for agencies and businesses.
          </p>
          <div className="list">
            <div><strong>Certified PPC Expert:</strong> Google Ads certified with proven track record across search, display, shopping, and Performance Max campaigns.</div>
            <div><strong>Data-driven approach:</strong> Every decision backed by analytics, A/B testing, and conversion tracking to maximize ROI and minimize wasted spend.</div>
            <div><strong>Full-funnel expertise:</strong> From keyword research and ad copywriting to landing page optimization and conversion tracking—end-to-end PPC management.</div>
            <div><strong>Advanced strategies:</strong> SKAG/STAG structures, negative keyword management, bid strategies, audience targeting, and automated bidding optimization.</div>
            <div><strong>Multi-platform knowledge:</strong> Google Ads, Microsoft Advertising, and experience with Facebook/Meta Ads for integrated campaigns.</div>
            <div><strong>Industry experience:</strong> Successfully managed PPC campaigns for B2B SaaS, professional services, eCommerce, local businesses, and agency white-label clients.</div>
          </div>
          <div className="chips" style={{ marginTop: '20px' }}>
            <span className="chip">PPC Expert</span>
            <span className="chip">Google Ads Certified</span>
            <span className="chip">PPC Consultant</span>
            <span className="chip">Pay-Per-Click Specialist</span>
          </div>
        </section>

        <section className="two-col">
          <div id="what-you-get" className="card">
            <h2 className="section-title">What you get</h2>
            <div className="list">
              <div><strong>Audit & rebuild:</strong> account audit, SKAG/structured match, negatives, QS cleanup.</div>
              <div><strong>Conversion setup:</strong> forms, calls, WhatsApp, offline imports; GA4 & Tag Manager.</div>
              <div><strong>White-label ready:</strong> client-facing decks, SLAs, and Slack/Asana workflows.</div>
              <div><strong>Optimization:</strong> search term pruning, bid/CPA targets, ad testing, landing CRO.</div>
              <div><strong>Reporting:</strong> weekly scorecard; clear CPL/ROAS tracking.</div>
            </div>
            <div className="chips">
              <span className="chip">Google Ads consultant</span>
              <span className="chip">Google Ads freelancer</span>
              <span className="chip">Google Ads agency support</span>
              <span className="chip">White label Google Ads management</span>
            </div>
          </div>

          <div id="recent-results" className="card">
            <h2 className="section-title">Recent results</h2>
            <div className="list">
              <div><span className="stat">+42% leads</span> at -28% CPL for B2B SaaS within 45 days.</div>
              <div><span className="stat">3.8x ROAS</span> for local services after match-type cleanup.</div>
              <div><span className="stat">12-day launch</span> for an agency’s white-label client; weekly call reporting.</div>
            </div>
            <div className="faq">
              <strong>Testimonials</strong>
              <div className="muted">“Handed over two accounts; got cleaner search terms and better CPL in 30 days.”</div>
              <div className="muted">“White-label ready. Client decks and tracking were plug-and-play.”</div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="card">
          <h2 className="section-title">How it works</h2>
          <div className="list">
            <div><strong>48-hour audit:</strong> quick wins, risks, and forecast.</div>
            <div><strong>Launch in 7 days:</strong> campaigns, tracking, landing page tweaks.</div>
            <div><strong>Weekly huddles:</strong> performance, blockers, next tests.</div>
            <div><strong>Engagements:</strong> project audit, ongoing management, or white-label pod.</div>
          </div>
        </section>

        <section id="faq" className="card">
          <h2 className="section-title">FAQs</h2>
          <div className="faq"><strong>What is PPC?</strong><div className="muted">PPC (Pay-Per-Click) is a digital advertising model where advertisers pay each time someone clicks on their ad. It's used on platforms like Google Ads, Microsoft Advertising, and social media to drive targeted traffic, leads, and sales. You only pay when users click, making it a cost-effective way to reach potential customers actively searching for your products or services.</div></div>
          <div className="faq"><strong>What is a PPC expert?</strong><div className="muted">A PPC expert is a certified specialist who manages pay-per-click advertising campaigns across platforms like Google Ads and Microsoft Advertising. They have deep knowledge of keyword research, bid management, ad copywriting, landing page optimization, conversion tracking, and analytics. A PPC expert helps businesses maximize ROI, reduce wasted ad spend, and scale profitable campaigns.</div></div>
          <div className="faq"><strong>What does a PPC expert do?</strong><div className="muted">A PPC expert handles end-to-end campaign management: conducting account audits, building campaign structures (SKAG/STAG), writing ad copy, managing keywords and negative keywords, optimizing bids and budgets, setting up conversion tracking, analyzing performance data, A/B testing ads and landing pages, and providing regular reporting. They focus on improving metrics like cost-per-lead (CPL), return on ad spend (ROAS), click-through rates (CTR), and conversion rates.</div></div>
          <div className="faq"><strong>Do you do white label?</strong><div className="muted">Yes—client decks, call notes, and Slack-ready updates.</div></div>
          <div className="faq"><strong>Budget fit?</strong><div className="muted">Commonly $3k–$50k/mo ad spend; tailored to efficiency or scale goals.</div></div>
          <div className="faq"><strong>How fast to start?</strong><div className="muted">Audit in 48 hours; launch in 7 days after access + tracking.</div></div>
          <div className="faq"><strong>Industries?</strong><div className="muted">B2B lead gen, SaaS, local services, and agency white-label clients.</div></div>
        </section>

        <section id="contact" className="card">
          <h2 className="section-title">Book a strategy call</h2>
          <p className="muted">Tell me about your accounts and goals. I’ll reply same day.</p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="muted" style={{ margin: '0 0 6px' }}>* Required fields</div>
            {submitMessage && (
              <div style={{ 
                padding: '12px', 
                borderRadius: '8px', 
                marginBottom: '16px',
                backgroundColor: submitMessage.includes('Thank you') ? '#e6f6ed' : '#fee2e2',
                color: submitMessage.includes('Thank you') ? '#0b5b2b' : '#991b1b'
              }}>
                {submitMessage}
              </div>
            )}
            <div>
              <label>Name *</label>
              <input 
                type="text" 
                name="name"
                placeholder="Your name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div>
              <label>Work email *</label>
              <input 
                type="email" 
                name="email"
                placeholder="you@company.com" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div>
              <label>Company *</label>
              <input 
                type="text" 
                name="company"
                placeholder="Agency or business name" 
                value={formData.company}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div>
              <label>Phone/WhatsApp *</label>
              <input 
                type="tel" 
                name="phone"
                placeholder="+91 78920 64440" 
                value={formData.phone}
                onChange={handleInputChange}
                required 
              />
            </div>
            <button className="btn primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send & schedule'}
            </button>
          </form>
          <div className="muted contact-note">
            Prefer chat? <a href="https://wa.me/917892064440" target="_blank" rel="noopener noreferrer" className="link">WhatsApp</a> or call +91 78920 64440.
          </div>
        </section>
      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  )
}

export default App
