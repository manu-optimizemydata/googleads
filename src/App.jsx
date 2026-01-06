import './App.css'
import logo from './assets/logo.png'
import { useState } from 'react'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
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

  // Google Ads conversion tracking function
  const gtag_report_conversion = (url) => {
    if (typeof window !== 'undefined' && window.gtag) {
      const callback = function () {
        if (typeof(url) != 'undefined') {
          window.location = url;
        }
      };
      window.gtag('event', 'conversion', {
        'send_to': 'AW-399659101/WUlACPLA1NkbEN2gyb4B',
        'value': 1.0,
        'currency': 'INR',
        'event_callback': callback
      });
      return false;
    }
  }

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
        // Track conversion on form submission
        gtag_report_conversion()
        
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
          <Link to="/" className="logo-link">
            <div className="logo-container">
              <img src={logo} alt="PPC Expert Online logo" className="logo" />
            </div>
          </Link>
          <h1 className="header-title">PPC Expert Online</h1>
        </div>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <a href="/#contact" className="nav-link">Contact Us</a>
        </nav>
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
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo-section">
            <Link to="/" className="footer-logo-link">
              <div className="footer-logo-container">
                <img src={logo} alt="PPC Expert Online logo" className="footer-logo" />
              </div>
            </Link>
            <p className="footer-brand">PPC Expert Online</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h3 className="footer-heading">Quick Links</h3>
              <Link to="/" className="footer-link">Home</Link>
              <a href="/#contact" className="footer-link">Contact Us</a>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Legal</h3>
              <a href="https://www.ppcexpert.online/privacy-policy/" className="footer-link">Privacy Policy</a>
              <a href="https://www.ppcexpert.online/terms-and-conditions/" className="footer-link">Terms and Conditions</a>
            </div>
          </div>
          
          <div className="footer-social">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/company/optimize-my-data/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/OMD2022" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/optimizemydata/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 PPC Expert Online. All Rights Reserved.</p>
        </div>
      </footer>
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
