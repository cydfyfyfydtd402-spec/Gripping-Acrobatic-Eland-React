import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Gripping Acrobatic Eland</title>
        <meta property="og:title" content="Gripping Acrobatic Eland" />
        <link rel="canonical" href="https://www.cleanconnectmtl.com/" />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
* {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
.hero-image-card {
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="hero-container">
        <div className="hero-content-wrapper">
          <div className="hero-left">
            <div className="hero-language-switch">
              <button data-lang="en" className="hero-lang-active hero-lang-btn">
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
                <span>EN</span>
              </button>
              <button data-lang="fr" className="hero-lang-btn">
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
                <span>FR</span>
              </button>
            </div>
            <h1 className="home-hero-title hero-title">
              <span
                data-en="Book Trusted Cleaners"
                data-fr="Réservez des nettoyeurs de confiance"
                className="home-hero-title-primary"
              >
                {' '}
                Book Trusted Cleaners
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span
                data-en="On Your Schedule"
                data-fr="Selon votre planning"
                className="home-hero-title-accent"
              >
                {' '}
                On Your Schedule
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h1>
            <p
              data-en="Connect with vetted cleaning professionals or offer your services. Simple, secure, and built for trust."
              data-fr="Connectez-vous avec des professionnels du nettoyage vérifiés ou offrez vos services. Simple, sécurisé et conçu pour la confiance."
              className="hero-subtitle home-hero-subtitle"
            >
              {' '}
              Connect with vetted cleaning professionals or offer your services.
              Simple, secure, and built for trust.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="hero-cta-group">
              <button
                data-en="Post a Cleaning Job"
                data-fr="Publier une annonce"
                className="btn hero-cta-primary btn-lg btn-primary"
              >
                {' '}
                Post a Cleaning Job
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <button
                data-en="Become a Cleaner"
                data-fr="Devenir nettoyeur"
                className="hero-cta-secondary btn btn-lg btn-secondary"
              >
                {' '}
                Become a Cleaner
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="hero-trust-badges">
              <div className="hero-badge">
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
                <span
                  data-en="Verified Professionals"
                  data-fr="Professionnels vérifiés"
                >
                  {' '}
                  Verified Professionals
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="hero-badge">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span data-en="4.9/5 Rating" data-fr="Note 4.9/5">
                  4.9/5 Rating
                </span>
              </div>
              <div className="hero-badge">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2v20m5-17H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span
                  data-en="Instant Booking"
                  data-fr="Réservation instantanée"
                >
                  {' '}
                  Instant Booking
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-image-card">
              <img
                alt="Professional cleaner providing quality service"
                src="https://images.pexels.com/photos/6195275/pexels-photo-6195275.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="eager"
              />
              <div className="hero-image-overlay">
                <div className="hero-stat-card">
                  <div className="hero-stat-number">
                    <span>12,500+</span>
                  </div>
                  <div
                    data-en="Jobs Completed"
                    data-fr="Tâches terminées"
                    className="hero-stat-label"
                  >
                    <span>
                      {' '}
                      Jobs Completed
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline-container">
        <div className="timeline-content-wrapper">
          <h2
            data-en="How It Works"
            data-fr="Comment ça marche"
            className="section-title timeline-header"
          >
            {' '}
            How It Works
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h2>
          <p
            data-en="Four simple steps to a spotless space"
            data-fr="Quatre étapes simples pour un espace impeccable"
            className="timeline-subtitle section-subtitle"
          >
            {' '}
            Four simple steps to a spotless space
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="timeline-track">
            <div className="timeline-line"></div>
            <div className="timeline-step timeline-step-left">
              <div className="timeline-marker">
                <div className="timeline-marker-inner">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 2v4m8-4v4"></path>
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="timeline-card">
                <div className="timeline-step-number">
                  <span>01</span>
                </div>
                <h3
                  data-en="Post Your Job"
                  data-fr="Publiez votre annonce"
                  className="timeline-step-title"
                >
                  {' '}
                  Post Your Job
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p
                  data-en="Describe your cleaning needs, upload photos, and set your schedule. It takes less than 2 minutes."
                  data-fr="Décrivez vos besoins de nettoyage, téléchargez des photos et définissez votre horaire. Cela prend moins de 2 minutes."
                  className="timeline-step-desc"
                >
                  {' '}
                  Describe your cleaning needs, upload photos, and set your
                  schedule. It takes less than 2 minutes.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="timeline-step-right timeline-step">
              <div className="timeline-marker">
                <div className="timeline-marker-inner">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      rx="2"
                      fill="none"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></rect>
                  </svg>
                </div>
              </div>
              <div className="timeline-card">
                <div className="timeline-step-number">
                  <span>02</span>
                </div>
                <h3
                  data-en="Cleaner Accepts"
                  data-fr="Le nettoyeur accepte"
                  className="timeline-step-title"
                >
                  {' '}
                  Cleaner Accepts
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p
                  data-en="Verified professionals in your area receive your request and can accept the job instantly."
                  data-fr="Des professionnels vérifiés dans votre région reçoivent votre demande et peuvent accepter le travail instantanément."
                  className="timeline-step-desc"
                >
                  {' '}
                  Verified professionals in your area receive your request and
                  can accept the job instantly.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="timeline-step timeline-step-left">
              <div className="timeline-marker">
                <div className="timeline-marker-inner">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                </div>
              </div>
              <div className="timeline-card">
                <div className="timeline-step-number">
                  <span>03</span>
                </div>
                <h3
                  data-en="Service Completed"
                  data-fr="Service terminé"
                  className="timeline-step-title"
                >
                  {' '}
                  Service Completed
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p
                  data-en="Your cleaner arrives on time, completes the job to your specifications, and uploads before/after photos."
                  data-fr="Votre nettoyeur arrive à l'heure, termine le travail selon vos spécifications et télécharge des photos avant/après."
                  className="timeline-step-desc"
                >
                  {' '}
                  Your cleaner arrives on time, completes the job to your
                  specifications, and uploads before/after photos.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="timeline-step-right timeline-step">
              <div className="timeline-marker">
                <div className="timeline-marker-inner">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2v20m5-17H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="timeline-card">
                <div className="timeline-step-number">
                  <span>04</span>
                </div>
                <h3
                  data-en="Secure Payment"
                  data-fr="Paiement sécurisé"
                  className="timeline-step-title"
                >
                  {' '}
                  Secure Payment
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p
                  data-en="Review the work, rate your cleaner, and payment is processed automatically. Easy and transparent."
                  data-fr="Examinez le travail, notez votre nettoyeur et le paiement est traité automatiquement. Simple et transparent."
                  className="timeline-step-desc"
                >
                  {' '}
                  Review the work, rate your cleaner, and payment is processed
                  automatically. Easy and transparent.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="features-container">
        <div className="features-bento">
          <div className="features-col-left">
            <div className="features-card-client features-card">
              <div className="features-card-header">
                <div className="features-icon-badge features-icon-client">
                  <svg
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
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
                </div>
                <h3
                  data-en="For Clients"
                  data-fr="Pour les clients"
                  className="features-card-title"
                >
                  {' '}
                  For Clients
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
              </div>
              <p
                data-en="Post jobs, track cleaners in real-time, and enjoy peace of mind"
                data-fr="Publiez des annonces, suivez les nettoyeurs en temps réel et profitez d'une tranquillité d'esprit"
                className="features-card-desc"
              >
                {' '}
                Post jobs, track cleaners in real-time, and enjoy peace of mind
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <ul className="features-list">
                <li className="features-list-item">
                  <div className="features-list-icon">
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
                  </div>
                  <span
                    data-en="Vetted &amp; Background-Checked Professionals"
                    data-fr="Professionnels vérifiés et contrôlés"
                  >
                    {' '}
                    Vetted &amp; Background-Checked Professionals
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="features-list-item">
                  <div className="features-list-icon">
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
                        <path d="M8 2v4m8-4v4"></path>
                        <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                        <path d="M3 10h18"></path>
                      </g>
                    </svg>
                  </div>
                  <span
                    data-en="Flexible Scheduling &amp; Recurring Bookings"
                    data-fr="Planification flexible et réservations récurrentes"
                  >
                    {' '}
                    Flexible Scheduling &amp; Recurring Bookings
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="features-list-item">
                  <div className="features-list-icon">
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
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                  </div>
                  <span
                    data-en="Real-Time Job Status &amp; Notifications"
                    data-fr="Statut du travail en temps réel et notifications"
                  >
                    {' '}
                    Real-Time Job Status &amp; Notifications
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="features-list-item">
                  <div className="features-list-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span
                    data-en="Transparent Reviews &amp; Ratings"
                    data-fr="Avis et notes transparents"
                  >
                    {' '}
                    Transparent Reviews &amp; Ratings
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="features-col-right">
            <div className="features-card features-card-cleaner">
              <div className="features-card-header">
                <div className="features-icon-cleaner features-icon-badge">
                  <svg
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 6v6l4 2"></path>
                      <circle r="10" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                </div>
                <h3
                  data-en="For Cleaners"
                  data-fr="Pour les nettoyeurs"
                  className="features-card-title"
                >
                  {' '}
                  For Cleaners
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
              </div>
              <p
                data-en="Grow your business with flexible jobs that fit your schedule"
                data-fr="Développez votre entreprise avec des emplois flexibles qui correspondent à votre emploi du temps"
                className="features-card-desc"
              >
                {' '}
                Grow your business with flexible jobs that fit your schedule
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <ul className="features-list">
                <li className="features-list-item">
                  <div className="features-list-icon">
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
                        <path d="M8 2v4m8-4v4"></path>
                        <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                        <path d="M3 10h18"></path>
                      </g>
                    </svg>
                  </div>
                  <span
                    data-en="Set Your Own Availability &amp; Schedule"
                    data-fr="Définissez votre propre disponibilité et horaire"
                  >
                    {' '}
                    Set Your Own Availability &amp; Schedule
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="features-list-item">
                  <div className="features-list-icon">
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
                        <path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                        <circle r="3" cx="10" cy="10"></circle>
                      </g>
                    </svg>
                  </div>
                  <span
                    data-en="Browse Jobs Near You"
                    data-fr="Parcourir les emplois près de chez vous"
                  >
                    {' '}
                    Browse Jobs Near You
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="features-list-item">
                  <div className="features-list-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2v20m5-17H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span
                    data-en="Transparent Pricing &amp; Quick Payouts"
                    data-fr="Tarification transparente et paiements rapides"
                  >
                    {' '}
                    Transparent Pricing &amp; Quick Payouts
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="features-list-item">
                  <div className="features-list-icon">
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
                  </div>
                  <span
                    data-en="Verified Client Reviews &amp; Secure Platform"
                    data-fr="Avis clients vérifiés et plateforme sécurisée"
                  >
                    {' '}
                    Verified Client Reviews &amp; Secure Platform
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
            </div>
            <div className="features-image-card">
              <img
                alt="Professional cleaning team ready to serve"
                src="https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials-container">
        <div className="testimonials-content-wrapper">
          <div className="testimonials-header">
            <h2
              data-en="Trusted by Thousands"
              data-fr="Approuvé par des milliers"
              className="section-title"
            >
              {' '}
              Trusted by Thousands
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p
              data-en="See what our community says about Turno"
              data-fr="Découvrez ce que notre communauté dit de Turno"
              className="section-subtitle"
            >
              {' '}
              See what our community says about Turno
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="testimonials-masonry">
            <div className="testimonials-col">
              <div className="testimonials-card">
                <div className="testimonials-stars">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p
                  data-en="I was skeptical at first, but Turno made finding a reliable cleaner so easy. The booking process is seamless and my cleaner was professional and thorough!"
                  data-fr="J'étais sceptique au début, mais Turno a rendu la recherche d'un nettoyeur fiable si facile. Le processus de réservation est fluide et mon nettoyeur était professionnel et minutieux!"
                  className="testimonials-quote"
                >
                  {' '}
                  I was skeptical at first, but Turno made finding a reliable
                  cleaner so easy. The booking process is seamless and my
                  cleaner was professional and thorough!
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonials-author">
                  <img
                    alt="Sarah M."
                    src="https://images.pexels.com/photos/9462206/pexels-photo-9462206.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                    className="testimonials-avatar"
                  />
                  <div className="testimonials-author-info">
                    <div className="testimonials-author-name">
                      <span>Sarah M.</span>
                    </div>
                    <div
                      data-en="Homeowner, Montreal"
                      data-fr="Propriétaire, Montréal"
                      className="testimonials-author-role"
                    >
                      <span>
                        {' '}
                        Homeowner, Montreal
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonials-card">
                <div className="testimonials-stars">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p
                  data-en="As a cleaner, Turno has given me control over my schedule. I can accept jobs that fit my route and the payment system is always on time. Highly recommend!"
                  data-fr="En tant que nettoyeur, Turno m'a donné le contrôle de mon horaire. Je peux accepter des emplois qui correspondent à mon itinéraire et le système de paiement est toujours à l'heure. Je recommande vivement!"
                  className="testimonials-quote"
                >
                  {' '}
                  As a cleaner, Turno has given me control over my schedule. I
                  can accept jobs that fit my route and the payment system is
                  always on time. Highly recommend!
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonials-author">
                  <img
                    alt="Marie D."
                    src="https://images.pexels.com/photos/9462192/pexels-photo-9462192.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                    className="testimonials-avatar"
                  />
                  <div className="testimonials-author-info">
                    <div className="testimonials-author-name">
                      <span>Marie D.</span>
                    </div>
                    <div
                      data-en="Professional Cleaner"
                      data-fr="Nettoyeur professionnel"
                      className="testimonials-author-role"
                    >
                      <span>
                        {' '}
                        Professional Cleaner
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonials-badge-card">
                <div className="testimonials-badge-icon">
                  <svg
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
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
                </div>
                <h4
                  data-en="Background Verified"
                  data-fr="Vérification des antécédents"
                  className="testimonials-badge-title"
                >
                  {' '}
                  Background Verified
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h4>
                <p
                  data-en="All cleaners undergo comprehensive background checks for your peace of mind"
                  data-fr="Tous les nettoyeurs font l'objet de vérifications d'antécédents complètes pour votre tranquillité d'esprit"
                  className="testimonials-badge-desc"
                >
                  {' '}
                  All cleaners undergo comprehensive background checks for your
                  peace of mind
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="testimonials-col">
              <div className="testimonials-card">
                <div className="testimonials-stars">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p
                  data-en="Perfect for Airbnb turnover! I can post a job in minutes and always have someone ready to clean between guests. The before/after photos are a nice touch."
                  data-fr="Parfait pour le roulement Airbnb! Je peux publier une annonce en quelques minutes et avoir toujours quelqu'un prêt à nettoyer entre les invités. Les photos avant/après sont une belle touche."
                  className="testimonials-quote"
                >
                  {' '}
                  Perfect for Airbnb turnover! I can post a job in minutes and
                  always have someone ready to clean between guests. The
                  before/after photos are a nice touch.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonials-author">
                  <img
                    alt="David L."
                    src="https://images.pexels.com/photos/6205769/pexels-photo-6205769.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                    className="testimonials-avatar"
                  />
                  <div className="testimonials-author-info">
                    <div className="testimonials-author-name">
                      <span>David L.</span>
                    </div>
                    <div
                      data-en="Airbnb Host"
                      data-fr="Hôte Airbnb"
                      className="testimonials-author-role"
                    >
                      <span>
                        {' '}
                        Airbnb Host
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonials-badge-card">
                <div className="testimonials-badge-icon">
                  <svg
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2v20m5-17H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h4
                  data-en="Fully Insured"
                  data-fr="Entièrement assuré"
                  className="testimonials-badge-title"
                >
                  {' '}
                  Fully Insured
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h4>
                <p
                  data-en="Every job is protected with comprehensive insurance coverage"
                  data-fr="Chaque travail est protégé par une couverture d'assurance complète"
                  className="testimonials-badge-desc"
                >
                  {' '}
                  Every job is protected with comprehensive insurance coverage
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="testimonials-card">
                <div className="testimonials-stars">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p
                  data-en="Game changer for my cleaning business. I've tripled my income and have full control over which jobs I accept. The platform is intuitive and support is responsive."
                  data-fr="Un changement de jeu pour mon entreprise de nettoyage. J'ai triplé mes revenus et j'ai un contrôle total sur les emplois que j'accepte. La plateforme est intuitive et le support est réactif."
                  className="testimonials-quote"
                >
                  {' '}
                  Game changer for my cleaning business. I&apos;ve tripled my
                  income and have full control over which jobs I accept. The
                  platform is intuitive and support is responsive.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonials-author">
                  <img
                    alt="Jessica T."
                    src="https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                    className="testimonials-avatar"
                  />
                  <div className="testimonials-author-info">
                    <div className="testimonials-author-name">
                      <span>Jessica T.</span>
                    </div>
                    <div
                      data-en="Independent Cleaner"
                      data-fr="Nettoyeur indépendant"
                      className="testimonials-author-role"
                    >
                      <span>
                        {' '}
                        Independent Cleaner
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-container">
        <div className="gallery-header">
          <h2
            data-en="Results That Speak"
            data-fr="Des résultats qui parlent"
            className="section-title"
          >
            {' '}
            Results That Speak
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h2>
          <p
            data-en="See the transformation our professionals deliver"
            data-fr="Découvrez la transformation que nos professionnels offrent"
            className="section-subtitle"
          >
            {' '}
            See the transformation our professionals deliver
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
        </div>
        <div className="gallery-masonry">
          <div className="gallery-item gallery-tall">
            <img
              alt="Professional living room cleaning"
              src="https://images.pexels.com/photos/6195273/pexels-photo-6195273.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span
                data-en="Living Room Deep Clean"
                data-fr="Nettoyage en profondeur du salon"
                className="gallery-label"
              >
                {' '}
                Living Room Deep Clean
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div className="gallery-item">
            <img
              alt="Bathroom mirror cleaning"
              src="https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span
                data-en="Bathroom Refresh"
                data-fr="Rafraîchissement de la salle de bain"
                className="gallery-label"
              >
                {' '}
                Bathroom Refresh
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div className="gallery-item">
            <img
              alt="Kitchen counter cleaning"
              src="https://images.pexels.com/photos/6195111/pexels-photo-6195111.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span
                data-en="Kitchen Detailing"
                data-fr="Détaillage de cuisine"
                className="gallery-label"
              >
                {' '}
                Kitchen Detailing
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div className="gallery-item gallery-tall">
            <img
              alt="Floor vacuuming service"
              src="https://images.pexels.com/photos/6195290/pexels-photo-6195290.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span
                data-en="Floor Care"
                data-fr="Entretien des sols"
                className="gallery-label"
              >
                {' '}
                Floor Care
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div className="gallery-item">
            <img
              alt="Table wiping service"
              src="https://images.pexels.com/photos/4350222/pexels-photo-4350222.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span
                data-en="Surface Sanitization"
                data-fr="Désinfection des surfaces"
                className="gallery-label"
              >
                {' '}
                Surface Sanitization
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div className="gallery-item">
            <img
              alt="Toilet cleaning service"
              src="https://images.pexels.com/photos/4239036/pexels-photo-4239036.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span
                data-en="Deep Sanitization"
                data-fr="Désinfection en profondeur"
                className="gallery-label"
              >
                {' '}
                Deep Sanitization
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div className="gallery-item gallery-tall">
            <img
              alt="Professional mopping service"
              src="https://images.pexels.com/photos/6197109/pexels-photo-6197109.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span
                data-en="Floor Mopping"
                data-fr="Nettoyage des sols"
                className="gallery-label"
              >
                {' '}
                Floor Mopping
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div className="gallery-item">
            <img
              alt="Table cleaning in cafe"
              src="https://images.pexels.com/photos/4921570/pexels-photo-4921570.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span
                data-en="Commercial Spaces"
                data-fr="Espaces commerciaux"
                className="gallery-label"
              >
                {' '}
                Commercial Spaces
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div className="gallery-item">
            <img
              alt="Cleaning team arriving"
              src="https://images.pexels.com/photos/6196230/pexels-photo-6196230.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span
                data-en="Full House Service"
                data-fr="Service de maison complète"
                className="gallery-label"
              >
                {' '}
                Full House Service
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-container">
        <div className="pricing-bento">
          <div className="pricing-col-left">
            <div className="pricing-header-card">
              <h2
                data-en="Simple Pricing"
                data-fr="Tarification simple"
                className="section-title"
              >
                {' '}
                Simple Pricing
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <p
                data-en="Choose the plan that works for you"
                data-fr="Choisissez le plan qui vous convient"
                className="section-subtitle"
              >
                {' '}
                Choose the plan that works for you
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="pricing-info-list">
                <div className="pricing-info-item">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      rx="2"
                      fill="none"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></rect>
                  </svg>
                  <span
                    data-en="No hidden fees or charges"
                    data-fr="Aucun frais caché"
                  >
                    {' '}
                    No hidden fees or charges
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="pricing-info-item">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      rx="2"
                      fill="none"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></rect>
                  </svg>
                  <span
                    data-en="Cancel anytime, no contract"
                    data-fr="Annulez à tout moment, sans contrat"
                  >
                    {' '}
                    Cancel anytime, no contract
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="pricing-info-item">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      rx="2"
                      fill="none"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></rect>
                  </svg>
                  <span
                    data-en="Secure payment processing"
                    data-fr="Traitement sécurisé des paiements"
                  >
                    {' '}
                    Secure payment processing
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-col-right">
            <div className="pricing-card">
              <div
                data-en="Pay Per Job"
                data-fr="Payer par emploi"
                className="pricing-card-label"
              >
                <span>
                  {' '}
                  Pay Per Job
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="pricing-card-price">
                <span className="pricing-amount">$45</span>
                <span
                  data-en="per job"
                  data-fr="par emploi"
                  className="pricing-unit"
                >
                  {' '}
                  per job
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <p
                data-en="Perfect for occasional cleaning needs"
                data-fr="Parfait pour les besoins de nettoyage occasionnels"
                className="pricing-card-desc"
              >
                {' '}
                Perfect for occasional cleaning needs
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <ul className="pricing-features">
                <li className="pricing-feature">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      rx="2"
                      fill="none"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></rect>
                  </svg>
                  <span
                    data-en="Book when you need"
                    data-fr="Réservez quand vous voulez"
                  >
                    {' '}
                    Book when you need
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="pricing-feature">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      rx="2"
                      fill="none"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></rect>
                  </svg>
                  <span
                    data-en="No commitment required"
                    data-fr="Aucun engagement requis"
                  >
                    {' '}
                    No commitment required
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="pricing-feature">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      rx="2"
                      fill="none"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></rect>
                  </svg>
                  <span
                    data-en="Verified cleaners only"
                    data-fr="Nettoyeurs vérifiés seulement"
                  >
                    {' '}
                    Verified cleaners only
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="pricing-feature">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      rx="2"
                      fill="none"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></rect>
                  </svg>
                  <span
                    data-en="Insurance coverage"
                    data-fr="Couverture d'assurance"
                  >
                    {' '}
                    Insurance coverage
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
              <button
                data-en="Post a Job"
                data-fr="Publier une annonce"
                className="btn pricing-cta btn-lg btn-secondary"
              >
                {' '}
                Post a Job
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="pricing-card pricing-card-featured">
              <div
                data-en="Most Popular"
                data-fr="Plus populaire"
                className="pricing-card-badge"
              >
                <span>
                  {' '}
                  Most Popular
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div
                data-en="Subscription"
                data-fr="Abonnement"
                className="pricing-card-label"
              >
                <span>
                  {' '}
                  Subscription
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="pricing-card-price">
                <span className="pricing-amount">$160</span>
                <span
                  data-en="per month"
                  data-fr="par mois"
                  className="pricing-unit"
                >
                  {' '}
                  per month
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <p
                data-en="Save 15% with weekly or bi-weekly cleaning"
                data-fr="Économisez 15% avec le nettoyage hebdomadaire ou bihebdomadaire"
                className="pricing-card-desc"
              >
                {' '}
                Save 15% with weekly or bi-weekly cleaning
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <ul className="pricing-features">
                <li className="pricing-feature">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      rx="2"
                      fill="none"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></rect>
                  </svg>
                  <span
                    data-en="4 cleanings per month"
                    data-fr="4 nettoyages par mois"
                  >
                    {' '}
                    4 cleanings per month
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="pricing-feature">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      rx="2"
                      fill="none"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></rect>
                  </svg>
                  <span
                    data-en="Same cleaner guarantee"
                    data-fr="Garantie du même nettoyeur"
                  >
                    {' '}
                    Same cleaner guarantee
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="pricing-feature">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      rx="2"
                      fill="none"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></rect>
                  </svg>
                  <span
                    data-en="Priority scheduling"
                    data-fr="Planification prioritaire"
                  >
                    {' '}
                    Priority scheduling
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="pricing-feature">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      rx="2"
                      fill="none"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></rect>
                  </svg>
                  <span data-en="Premium support" data-fr="Support premium">
                    {' '}
                    Premium support
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
              <button
                data-en="Get Started"
                data-fr="Commencer"
                className="btn pricing-cta btn-lg btn-primary"
              >
                {' '}
                Get Started
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="showcase-container">
        <div className="showcase-wrapper">
          <div className="showcase-header">
            <h2
              data-en="Frequently Asked Questions"
              data-fr="Questions fréquemment posées"
              className="section-title"
            >
              {' '}
              Frequently Asked Questions
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p
              data-en="Everything you need to know about Turno"
              data-fr="Tout ce que vous devez savoir sur Turno"
              className="section-subtitle"
            >
              {' '}
              Everything you need to know about Turno
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="showcase-content">
            <div className="showcase-faq-panel">
              <details className="showcase-faq-item">
                <summary className="showcase-faq-question">
                  <span
                    data-en="How does Turno ensure cleaner quality?"
                    data-fr="Comment Turno assure-t-il la qualité des nettoyeurs?"
                  >
                    {' '}
                    How does Turno ensure cleaner quality?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 6v6l4 2"></path>
                      <circle r="10" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                </summary>
                <div className="showcase-faq-answer">
                  <p
                    data-en="All cleaners on Turno undergo comprehensive background checks, identity verification, and skills assessments before joining the platform. We also maintain a transparent review system where clients rate each job, ensuring only the best professionals continue to receive bookings."
                    data-fr="Tous les nettoyeurs sur Turno subissent des vérifications d'antécédents complètes, une vérification d'identité et des évaluations de compétences avant de rejoindre la plateforme. Nous maintenons également un système d'examen transparent où les clients évaluent chaque emploi, garantissant que seuls les meilleurs professionnels continuent de recevoir des réservations."
                  >
                    {' '}
                    All cleaners on Turno undergo comprehensive background
                    checks, identity verification, and skills assessments before
                    joining the platform. We also maintain a transparent review
                    system where clients rate each job, ensuring only the best
                    professionals continue to receive bookings.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </details>
              <details className="showcase-faq-item">
                <summary className="showcase-faq-question">
                  <span
                    data-en="What payment methods do you accept?"
                    data-fr="Quels modes de paiement acceptez-vous?"
                  >
                    {' '}
                    What payment methods do you accept?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 6v6l4 2"></path>
                      <circle r="10" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                </summary>
                <div className="showcase-faq-answer">
                  <p
                    data-en="We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and digital payment methods. Payment is processed securely through our platform after job completion, with funds held in escrow until you confirm satisfaction with the service."
                    data-fr="Nous acceptons toutes les principales cartes de crédit (Visa, Mastercard, American Express), les cartes de débit et les méthodes de paiement numériques. Le paiement est traité en toute sécurité via notre plateforme après l'achèvement du travail, les fonds étant détenus en dépôt fiduciaire jusqu'à ce que vous confirmiez la satisfaction du service."
                  >
                    {' '}
                    We accept all major credit cards (Visa, Mastercard, American
                    Express), debit cards, and digital payment methods. Payment
                    is processed securely through our platform after job
                    completion, with funds held in escrow until you confirm
                    satisfaction with the service.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </details>
              <details className="showcase-faq-item">
                <summary className="showcase-faq-question">
                  <span
                    data-en="Can I request the same cleaner for recurring jobs?"
                    data-fr="Puis-je demander le même nettoyeur pour des emplois récurrents?"
                  >
                    {' '}
                    Can I request the same cleaner for recurring jobs?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 6v6l4 2"></path>
                      <circle r="10" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                </summary>
                <div className="showcase-faq-answer">
                  <p
                    data-en="Yes! When you book a recurring cleaning subscription, we prioritize matching you with the same cleaner each time. This helps build familiarity and trust. If your preferred cleaner is unavailable, we'll match you with another highly-rated professional in your area."
                    data-fr="Oui! Lorsque vous réservez un abonnement de nettoyage récurrent, nous priorisons l'appariement avec le même nettoyeur à chaque fois. Cela aide à établir la familiarité et la confiance. Si votre nettoyeur préféré n'est pas disponible, nous vous mettrons en contact avec un autre professionnel très bien noté dans votre région."
                  >
                    {' '}
                    Yes! When you book a recurring cleaning subscription, we
                    prioritize matching you with the same cleaner each time.
                    This helps build familiarity and trust. If your preferred
                    cleaner is unavailable, we&apos;ll match you with another
                    highly-rated professional in your area.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </details>
              <details className="showcase-faq-item">
                <summary className="showcase-faq-question">
                  <span
                    data-en="What if I'm not satisfied with the service?"
                    data-fr="Que faire si je ne suis pas satisfait du service?"
                  >
                    {' '}
                    What if I&apos;m not satisfied with the service?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 6v6l4 2"></path>
                      <circle r="10" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                </summary>
                <div className="showcase-faq-answer">
                  <p
                    data-en="Your satisfaction is our priority. If you're not happy with the service, contact our support team within 24 hours of job completion. We'll arrange for the cleaner to return and address any issues at no extra charge, or provide a partial/full refund based on the situation."
                    data-fr="Votre satisfaction est notre priorité. Si vous n'êtes pas satisfait du service, contactez notre équipe de support dans les 24 heures suivant l'achèvement du travail. Nous organiserons le retour du nettoyeur pour résoudre les problèmes sans frais supplémentaires, ou fournirons un remboursement partiel/complet selon la situation."
                  >
                    {' '}
                    Your satisfaction is our priority. If you&apos;re not happy
                    with the service, contact our support team within 24 hours
                    of job completion. We&apos;ll arrange for the cleaner to
                    return and address any issues at no extra charge, or provide
                    a partial/full refund based on the situation.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </details>
              <details className="showcase-faq-item">
                <summary className="showcase-faq-question">
                  <span
                    data-en="How do cleaners get paid?"
                    data-fr="Comment les nettoyeurs sont-ils payés?"
                  >
                    {' '}
                    How do cleaners get paid?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 6v6l4 2"></path>
                      <circle r="10" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                </summary>
                <div className="showcase-faq-answer">
                  <p
                    data-en="Cleaners receive payment within 48 hours of job completion via direct deposit to their bank account. Our transparent pricing model ensures cleaners receive 80% of the job payment, with Turno retaining 20% as a platform fee to cover insurance, support, and payment processing."
                    data-fr="Les nettoyeurs reçoivent le paiement dans les 48 heures suivant l'achèvement du travail par dépôt direct sur leur compte bancaire. Notre modèle de tarification transparent garantit que les nettoyeurs reçoivent 80% du paiement du travail, Turno conservant 20% comme frais de plateforme pour couvrir l'assurance, le support et le traitement des paiements."
                  >
                    {' '}
                    Cleaners receive payment within 48 hours of job completion
                    via direct deposit to their bank account. Our transparent
                    pricing model ensures cleaners receive 80% of the job
                    payment, with Turno retaining 20% as a platform fee to cover
                    insurance, support, and payment processing.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </details>
              <details className="showcase-faq-item">
                <summary className="showcase-faq-question">
                  <span
                    data-en="Do I need to provide cleaning supplies?"
                    data-fr="Dois-je fournir des produits de nettoyage?"
                  >
                    {' '}
                    Do I need to provide cleaning supplies?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 6v6l4 2"></path>
                      <circle r="10" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                </summary>
                <div className="showcase-faq-answer">
                  <p
                    data-en="Most cleaners bring their own basic supplies and equipment. However, when posting a job, you can specify whether you'll provide supplies or if the cleaner should bring everything. If you have preferred products or specific requirements, just note that in the job description."
                    data-fr="La plupart des nettoyeurs apportent leurs propres fournitures et équipements de base. Cependant, lors de la publication d'une annonce, vous pouvez spécifier si vous fournirez des fournitures ou si le nettoyeur doit tout apporter. Si vous avez des produits préférés ou des exigences spécifiques, notez-le simplement dans la description du travail."
                  >
                    {' '}
                    Most cleaners bring their own basic supplies and equipment.
                    However, when posting a job, you can specify whether
                    you&apos;ll provide supplies or if the cleaner should bring
                    everything. If you have preferred products or specific
                    requirements, just note that in the job description.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </details>
            </div>
            <div className="showcase-image-collage">
              <div className="showcase-image-card showcase-image-back">
                <img
                  alt="Professional cleaning in action"
                  src="https://images.pexels.com/photos/6195273/pexels-photo-6195273.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
              <div className="showcase-image-front showcase-image-card">
                <img
                  alt="Happy cleaner professional"
                  src="https://images.pexels.com/photos/9462192/pexels-photo-9462192.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <div className="showcase-stat-badge">
                  <div className="showcase-stat-number">
                    <span>98%</span>
                  </div>
                  <div
                    data-en="Satisfaction Rate"
                    data-fr="Taux de satisfaction"
                    className="showcase-stat-label"
                  >
                    <span>
                      {' '}
                      Satisfaction Rate
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-content-wrapper">
          <div className="contact-layers">
            <div className="contact-layer contact-layer-back">
              <div className="contact-info-card">
                <div className="contact-info-header">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
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
                  <h3
                    data-en="Get in Touch"
                    data-fr="Entrer en contact"
                    className="contact-info-title"
                  >
                    {' '}
                    Get in Touch
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                </div>
                <p
                  data-en="Have questions? Our support team is here to help you find the perfect cleaning solution."
                  data-fr="Vous avez des questions? Notre équipe de support est là pour vous aider à trouver la solution de nettoyage parfaite."
                  className="contact-info-desc"
                >
                  {' '}
                  Have questions? Our support team is here to help you find the
                  perfect cleaning solution.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
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
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <span>support@turno.com</span>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
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
                    </div>
                    <span>1-800-TURNO-99</span>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
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
                          <path d="M12 6v6l4 2"></path>
                          <circle r="10" cx="12" cy="12"></circle>
                        </g>
                      </svg>
                    </div>
                    <span
                      data-en="Mon-Fri: 8am - 8pm EST"
                      data-fr="Lun-Ven: 8h - 20h EST"
                    >
                      {' '}
                      Mon-Fri: 8am - 8pm EST
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-layer contact-layer-front">
              <div className="contact-form-card">
                <h3
                  data-en="Send Us a Message"
                  data-fr="Envoyez-nous un message"
                  className="contact-form-title"
                >
                  {' '}
                  Send Us a Message
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <form
                  action="/contact"
                  method="POST"
                  data-form-id="b8e21206-d3f1-416a-8fab-9d762de23f30"
                  className="contact-form"
                >
                  <div className="contact-form-group">
                    <input
                      type="text"
                      id="contact-name"
                      name="textinput"
                      required="true"
                      placeholder=" "
                      data-form-field-id="contact-name"
                      className="contact-input"
                    />
                    <label
                      data-en="Your Name"
                      data-fr="Votre nom"
                      htmlFor="contact-name"
                      className="contact-label"
                    >
                      {' '}
                      Your Name
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </label>
                  </div>
                  <div className="contact-form-group">
                    <input
                      type="email"
                      id="contact-email"
                      name="textinput"
                      required="true"
                      placeholder=" "
                      data-form-field-id="contact-email"
                      className="contact-input"
                    />
                    <label
                      data-en="Email Address"
                      data-fr="Adresse e-mail"
                      htmlFor="contact-email"
                      className="contact-label"
                    >
                      {' '}
                      Email Address
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </label>
                  </div>
                  <div className="contact-form-group">
                    <input
                      type="tel"
                      id="contact-phone"
                      name="textinput"
                      placeholder=" "
                      data-form-field-id="contact-phone"
                      className="contact-input"
                    />
                    <label
                      data-en="Phone Number"
                      data-fr="Numéro de téléphone"
                      htmlFor="contact-phone"
                      className="contact-label"
                    >
                      {' '}
                      Phone Number
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </label>
                  </div>
                  <div className="contact-form-group">
                    <textarea
                      id="contact-message"
                      name="textarea"
                      rows="4"
                      required="true"
                      placeholder=" "
                      data-form-field-id="contact-message"
                      className="contact-textarea"
                    ></textarea>
                    <label
                      data-en="Your Message"
                      data-fr="Votre message"
                      htmlFor="contact-message"
                      className="contact-label"
                    >
                      {' '}
                      Your Message
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </label>
                  </div>
                  <button
                    id="thq_button_IOnM"
                    name="button"
                    type="submit"
                    data-en="Send Message"
                    data-fr="Envoyer le message"
                    data-form-field-id="thq_button_IOnM"
                    className="btn contact-submit btn-lg btn-primary"
                  >
                    {' '}
                    Send Message
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </form>
                <div className="contact-cta-links">
                  <a href="#" data-en="Login" data-fr="Connexion">
                    <div className="contact-link">
                      <span>
                        {' '}
                        Login
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                  <span className="contact-divider">|</span>
                  <a
                    href="#"
                    data-en="Sign Up as Client"
                    data-fr="S'inscrire en tant que client"
                  >
                    <div className="contact-link">
                      <span>
                        {' '}
                        Sign Up as Client
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                  <span className="contact-divider">|</span>
                  <a
                    href="#"
                    data-en="Join as Cleaner"
                    data-fr="Rejoindre en tant que nettoyeur"
                  >
                    <div className="contact-link">
                      <span>
                        {' '}
                        Join as Cleaner
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container4">
        <div className="home-container5">
          <Script
            html={`<style>
        @keyframes heroFloat {0%,100% {transform: translateY(0);}
50% {transform: translateY(-20px);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container6">
        <div className="home-container7">
          <Script
            html={`<script defer data-name="turno-language-switcher">
(function(){
  const initLanguageSwitcher = () => {
    let currentLang = "en"

    const langButtons = document.querySelectorAll(".hero-lang-btn")
    const translatableElements = document.querySelectorAll("[data-en]")

    const switchLanguage = (lang) => {
      currentLang = lang

      langButtons.forEach((btn) => {
        if (btn.dataset.lang === lang) {
          btn.classList.add("hero-lang-active")
        } else {
          btn.classList.remove("hero-lang-active")
        }
      })

      translatableElements.forEach((el) => {
        const text = el.getAttribute(\`data-\${lang}\`)
        if (text) {
          if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            el.placeholder = text
          } else if (el.hasAttribute("data-en") && el.hasAttribute("data-fr")) {
            el.textContent = text
          }
        }
      })
    }

    langButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang
        switchLanguage(lang)
      })
    })
  }

  initLanguageSwitcher()
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
