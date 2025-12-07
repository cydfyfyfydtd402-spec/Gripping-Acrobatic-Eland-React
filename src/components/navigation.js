import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
[data-theme="light"] .navigation-theme-icon-dark, [data-theme="dark"] .navigation-theme-icon-light {
  display: block;
}
@media (prefers-reduced-motion: reduce) {
.navigation-link::after, .navigation-link, .navigation-mobile-link, .navigation-mobile-overlay {
  transition: none;
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav className="navigation-container">
        <div className="navigation-content">
          <a href="/">
            <div aria-label="Turno Home" className="navigation-logo">
              <span className="section-title">Clean Connect MTL</span>
            </div>
          </a>
          <div className="navigation-desktop-menu">
            <a href="/">
              <div className="navigation-link">
                <span data-lang-en="Home" data-lang-fr="Accueil">
                  Home
                </span>
              </div>
            </a>
            <a href="/services">
              <div className="navigation-link">
                <span data-lang-en="Services" data-lang-fr="Services">
                  Services
                </span>
              </div>
            </a>
            <a href="/about">
              <div className="navigation-link">
                <span data-lang-en="About" data-lang-fr="À propos">
                  About
                </span>
              </div>
            </a>
            <a href="/contact">
              <div className="navigation-link">
                <span data-lang-en="Contact" data-lang-fr="Contact">
                  Contact
                </span>
              </div>
            </a>
          </div>
          <div className="navigation-actions">
            <button
              id="langToggle"
              aria-label="Switch language"
              className="navigation-lang-toggle"
            >
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
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
                </g>
              </svg>
              <span
                data-lang-en="EN"
                data-lang-fr="FR"
                className="navigation-navigation-lang-label"
              >
                {' '}
                EN
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </button>
            <button
              id="themeToggle"
              aria-label="Toggle theme"
              className="navigation-theme-toggle"
            >
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="navigation-navigation-theme-icon-light"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="4" cx="12" cy="12"></circle>
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
                </g>
              </svg>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="navigation-navigation-theme-icon-dark"
              >
                <path
                  d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <a href="/login">
              <div className="btn navigation-btn-login btn-outline">
                <span data-lang-en="Login" data-lang-fr="Connexion">
                  Login
                </span>
              </div>
            </a>
            <a href="/signup">
              <div className="btn btn-primary navigation-btn-signup">
                <span data-lang-en="Sign Up" data-lang-fr="Inscription">
                  Sign Up
                </span>
              </div>
            </a>
            <button
              id="mobileMenuToggle"
              aria-label="Toggle menu"
              aria-expanded="false"
              className="navigation-mobile-toggle"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                className="navigation-mobile-icon-menu"
              >
                <path
                  d="M4 5h16M4 12h16M4 19h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div id="mobileMenuOverlay" className="navigation-mobile-overlay">
          <div className="navigation-mobile-header">
            <a href="/">
              <div aria-label="Turno Home" className="navigation-logo">
                <span className="section-title">Turno</span>
              </div>
            </a>
            <button
              id="mobileMenuClose"
              aria-label="Close menu"
              className="navigation-mobile-close"
            >
              <svg
                width="28"
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-mobile-menu">
            <a href="/">
              <div className="navigation-mobile-link">
                <span data-lang-en="Home" data-lang-fr="Accueil">
                  Home
                </span>
              </div>
            </a>
            <a href="/services">
              <div className="navigation-mobile-link">
                <span data-lang-en="Services" data-lang-fr="Services">
                  Services
                </span>
              </div>
            </a>
            <a href="/about">
              <div className="navigation-mobile-link">
                <span data-lang-en="About" data-lang-fr="À propos">
                  About
                </span>
              </div>
            </a>
            <a href="/contact">
              <div className="navigation-mobile-link">
                <span data-lang-en="Contact" data-lang-fr="Contact">
                  Contact
                </span>
              </div>
            </a>
            <div className="navigation-mobile-divider"></div>
            <a href="/login">
              <div className="btn btn-outline navigation-mobile-btn">
                <span data-lang-en="Login" data-lang-fr="Connexion">
                  Login
                </span>
              </div>
            </a>
            <a href="/signup">
              <div className="btn btn-primary navigation-mobile-btn">
                <span data-lang-en="Sign Up" data-lang-fr="Inscription">
                  Sign Up
                </span>
              </div>
            </a>
          </div>
        </div>
      </nav>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
        @keyframes navigationSlideIn {from {opacity: 0;
transform: translateY(-20px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes navigationFadeIn {from {opacity: 0;
transform: translateX(-20px);}
to {opacity: 1;
transform: translateX(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation-controls">
(function(){
  const mobileMenuToggle = document.getElementById("mobileMenuToggle")
  const mobileMenuClose = document.getElementById("mobileMenuClose")
  const mobileMenuOverlay = document.getElementById("mobileMenuOverlay")

  function openMobileMenu() {
    mobileMenuOverlay.classList.add("navigation-mobile-active")
    mobileMenuToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  function closeMobileMenu() {
    mobileMenuOverlay.classList.remove("navigation-mobile-active")
    mobileMenuToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  mobileMenuToggle.addEventListener("click", openMobileMenu)
  mobileMenuClose.addEventListener("click", closeMobileMenu)

  const mobileLinks = mobileMenuOverlay.querySelectorAll(
    ".navigation-mobile-link, .navigation-mobile-btn"
  )
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu)
  })

  mobileMenuOverlay.addEventListener("click", (e) => {
    if (e.target === mobileMenuOverlay) {
      closeMobileMenu()
    }
  })

  const langToggle = document.getElementById("langToggle")
  let currentLang = "en"

  function updateLanguage(lang) {
    currentLang = lang
    document.querySelectorAll("[data-lang-en]").forEach((el) => {
      el.textContent =
        lang === "en"
          ? el.getAttribute("data-lang-en")
          : el.getAttribute("data-lang-fr")
    })
  }

  langToggle.addEventListener("click", () => {
    const newLang = currentLang === "en" ? "fr" : "en"
    updateLanguage(newLang)
  })

  const themeToggle = document.getElementById("themeToggle")
  const html = document.documentElement

  // Initialize theme from localStorage or system preference
  const storedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")

  applyTheme(storedTheme)

  function applyTheme(theme) {
    const suffix = theme === "dark" ? "dark" : "light"

    // Update ALL active color variables to point to the correct theme
    html.style.setProperty("--color-primary", \`var(--color-primary-\${suffix})\`)
    html.style.setProperty(
      "--color-secondary",
      \`var(--color-secondary-\${suffix})\`
    )
    html.style.setProperty("--color-accent", \`var(--color-accent-\${suffix})\`)
    html.style.setProperty("--color-neutral", \`var(--color-neutral-\${suffix})\`)
    html.style.setProperty("--color-surface", \`var(--color-surface-\${suffix})\`)
    html.style.setProperty(
      "--color-on-surface",
      \`var(--color-on-surface-\${suffix})\`
    )
    html.style.setProperty(
      "--color-on-surface-secondary",
      \`var(--color-on-surface-secondary-\${suffix})\`
    )
    html.style.setProperty(
      "--color-on-primary",
      \`var(--color-on-primary-\${suffix})\`
    )
    html.style.setProperty(
      "--color-surface-elevated",
      \`var(--color-surface-elevated-\${suffix})\`
    )
    html.style.setProperty(
      "--color-on-secondary",
      \`var(--color-on-secondary-\${suffix})\`
    )
    html.style.setProperty(
      "--color-on-accent",
      \`var(--color-on-accent-\${suffix})\`
    )
    html.style.setProperty("--color-border", \`var(--color-border-\${suffix})\`)
    html.style.setProperty("--color-outline", \`var(--color-outline-\${suffix})\`)
    html.style.setProperty("--color-overlay", \`var(--color-overlay-\${suffix})\`)
    html.style.setProperty(
      "--color-backplate",
      \`var(--color-backplate-\${suffix})\`
    )
    html.style.setProperty("--color-scrim", \`var(--color-scrim-\${suffix})\`)

    html.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }

  function toggleTheme() {
    const currentTheme = html.getAttribute("data-theme")
    const newTheme = currentTheme === "light" ? "dark" : "light"
    applyTheme(newTheme)
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
