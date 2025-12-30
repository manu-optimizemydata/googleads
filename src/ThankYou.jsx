import './App.css'
import logo from './assets/logo.png'

function ThankYou() {
  return (
    <div className="page">
      <header className="header">
        <div className="logo-wrap">
          <img src={logo} alt="Optimize My Data logo" className="logo" />
          <h1 className="header-title">Optimize My Data</h1>
        </div>
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
            <a className="btn primary" href="/">
              Return to Home
            </a>
            <a className="btn secondary" href="https://wa.me/917892064440" target="_blank" rel="noopener noreferrer">
              WhatsApp now
            </a>
          </div>
          <div className="muted" style={{ marginTop: '32px', fontSize: '0.9rem' }}>
            Prefer to call? <a href="tel:+917892064440" className="link">+91 78920 64440</a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ThankYou


