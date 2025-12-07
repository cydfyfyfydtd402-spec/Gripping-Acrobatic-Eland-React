import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer">
        <div className="footer-wave-divider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="footer-wave-svg"
          >
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand-column">
              <div className="footer-logo-wrapper">
                <span className="footer-logo-text">Turno</span>
              </div>
              <p className="footer-brand-description">
                {' '}
                Book trusted cleaners on your schedule. Connect clients with
                professional cleaners for seamless, reliable cleaning services.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="footer-trust-badge">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="footer-trust-text">
                  Verified &amp; Trusted Platform
                </span>
              </div>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-column-title">For Clients</h3>
              <nav className="footer-nav-list">
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Post a Job</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Browse Services</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Client Dashboard</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Manage Jobs</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Pricing</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>How It Works</span>
                  </div>
                </a>
              </nav>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-column-title">For Cleaners</h3>
              <nav className="footer-nav-list">
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Become a Cleaner</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Cleaner Dashboard</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Job Matches</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Set Availability</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Payouts</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Cleaner Resources</span>
                  </div>
                </a>
              </nav>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-column-title">Company</h3>
              <nav className="footer-nav-list">
                <a href="#">
                  <div className="footer-nav-link">
                    <span>About Us</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Contact</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Careers</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Blog</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>FAQ</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Support Center</span>
                  </div>
                </a>
              </nav>
            </div>
            <div className="footer-contact-column">
              <h3 className="footer-column-title">Contact Us</h3>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="footer-contact-text">+1 (555) 123-4567</span>
                </div>
                <div className="footer-contact-item">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </g>
                  </svg>
                  <span className="footer-contact-text">support@turno.com</span>
                </div>
                <div className="footer-contact-item">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </g>
                  </svg>
                  <span className="footer-contact-text">Available 24/7</span>
                </div>
              </div>
              <div className="footer-social-wrapper">
                <span className="footer-social-label">Follow Us</span>
                <div className="footer-social-links">
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-link">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Twitter" className="footer-social-link">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Instagram" className="footer-social-link">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                            width="20"
                            height="20"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="LinkedIn" className="footer-social-link">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                          <circle r="2" cx="4" cy="4"></circle>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p className="footer-copyright">
                &amp;copy; 2025 Turno. All rights reserved.
              </p>
            </div>
            <nav className="footer-legal-links">
              <a href="#">
                <div className="footer-legal-link">
                  <span>Terms of Service</span>
                </div>
              </a>
              <span className="footer-legal-separator">|</span>
              <a href="#">
                <div className="footer-legal-link">
                  <span>Privacy Policy</span>
                </div>
              </a>
              <span className="footer-legal-separator">|</span>
              <a href="#">
                <div className="footer-legal-link">
                  <span>Cookie Policy</span>
                </div>
              </a>
              <span className="footer-legal-separator">|</span>
              <a href="#">
                <div className="footer-legal-link">
                  <span>Accessibility</span>
                </div>
              </a>
            </nav>
            <div className="footer-language-selector">
              <button
                id="footerLanguageToggle"
                aria-label="Toggle Language"
                className="footer-language-button"
              >
                <span data-lang="en" className="footer-footer-language-text1">
                  EN
                </span>
                <span data-lang="fr" className="footer-footer-language-text2">
                  {' '}
                  FR
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer-nav-link, .footer-social-link, .footer-language-button {
  transition: none;
}
.footer-nav-link:hover {
  transform: none;
}
.footer-social-link:hover {
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<script defer data-name="footer-language-toggle">
(function(){
  const languageToggle = document.getElementById("footerLanguageToggle")
  const languageTexts = languageToggle.querySelectorAll(".footer-language-text")

  let currentLang = "en"

  languageToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "fr" : "en"

    languageTexts.forEach((text) => {
      if (text.dataset.lang === currentLang) {
        text.classList.remove("footer-language-hidden")
      } else {
        text.classList.add("footer-language-hidden")
      }
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
