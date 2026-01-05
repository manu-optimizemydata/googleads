import './App.css'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'

function ThankYou() {
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
          <a href="https://www.ppcexpert.online/about-us/" className="nav-link">About Us</a>
        </nav>
      </header>

      <main className="container">
        <section className="card" style={{ textAlign: 'center', maxWidth: '600px', margin: '60px auto' }}>
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '24px' }}>
            Thank You!
          </h2>
          <p className="hero-lead" style={{ marginBottom: '32px' }}>
            We've received your message and will contact you soon.
          </p>
          <p className="muted" style={{ marginBottom: '32px' }}>
            Our team typically responds within 24 hours. In the meantime, feel free to reach out via WhatsApp or give us a call.
          </p>
          <div className="cta-row" style={{ justifyContent: 'center', gap: '16px' }}>
            <Link to="/" className="btn primary">
              Return to Home
            </Link>
            <a className="btn secondary" href="https://wa.me/917892064440" target="_blank" rel="noopener noreferrer">
              WhatsApp now
            </a>
          </div>
          <div className="muted" style={{ marginTop: '32px', fontSize: '0.9rem' }}>
            Prefer to call? <a href="tel:+917892064440" className="link">+91 78920 64440</a>
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
              <a href="https://www.ppcexpert.online/about-us/" className="footer-link">About Us</a>
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
              <a href="https://www.linkedin.com/company/ppc-expert-online" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com/ppcexpertonline" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/ppcexpertonline" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
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

export default ThankYou


