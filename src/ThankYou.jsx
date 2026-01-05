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

export default ThankYou


