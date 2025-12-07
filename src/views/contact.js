import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container10">
      <Helmet>
        <title>Contact - Gripping Acrobatic Eland</title>
        <meta
          property="og:title"
          content="Contact - Gripping Acrobatic Eland"
        />
        <link rel="canonical" href="https://www.cleanconnectmtl.com/contact" />
      </Helmet>
      <Navigation></Navigation>
      <div className="contact-container11">
        <div className="contact-container12">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <section id="main-content" className="hero-intro">
        <div className="hero-intro-container">
          <div className="hero-intro-content">
            <div className="hero-intro-text">
              <h1 className="hero-title">
                <span data-lang="en">Get in Touch</span>
                <span data-lang="fr" className="contact-text101">
                  Contactez-nous
                </span>
              </h1>
              <p className="hero-subtitle">
                <span data-lang="en">
                  {' '}
                  Our dedicated team is here to help you with any questions
                  about bookings, platform features, or support needs. We
                  typically respond within 24 hours.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span data-lang="fr" className="contact-text103">
                  {' '}
                  Notre équipe dévouée est là pour vous aider avec toutes vos
                  questions sur les réservations, les fonctionnalités de la
                  plateforme ou les besoins d&apos;assistance. Nous répondons
                  généralement dans les 24 heures.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <div className="hero-intro-actions">
                <button className="btn btn-primary hero-intro-cta">
                  <span data-lang="en">Submit an Inquiry</span>
                  <span data-lang="fr" className="contact-text105">
                    {' '}
                    Soumettre une demande
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </button>
                <div className="hero-intro-quick-links">
                  <a href="#contact-form">
                    <div className="hero-intro-link">
                      <span data-lang="en">Contact Form</span>
                      <span data-lang="fr" className="contact-text107">
                        {' '}
                        Formulaire de contact
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                  <span className="hero-intro-separator">•</span>
                  <a href="#location-info">
                    <div className="hero-intro-link">
                      <span data-lang="en">Visit Us</span>
                      <span data-lang="fr" className="contact-text109">
                        {' '}
                        Nous rendre visite
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                  <span className="hero-intro-separator">•</span>
                  <a href="#urgent-support">
                    <div className="hero-intro-link">
                      <span data-lang="en">Urgent Support</span>
                      <span data-lang="fr" className="contact-text111">
                        Support urgent
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="hero-intro-language">
                <div className="language-switcher">
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
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
                    </g>
                  </svg>
                  <button data-language="en" className="active language-btn">
                    {' '}
                    English
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <span className="language-divider">/</span>
                  <button data-language="fr" className="language-btn">
                    Français
                  </button>
                </div>
              </div>
            </div>
            <div className="hero-intro-feature">
              <div className="hero-intro-image-wrapper">
                <img
                  alt="Customer service representative ready to assist"
                  src="https://images.pexels.com/photos/7709255/pexels-photo-7709255.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="eager"
                  className="hero-intro-image"
                />
                <div className="hero-intro-badge">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                  <div className="hero-intro-badge-text">
                    <span data-lang="en">Secure &amp; Private</span>
                    <span data-lang="fr" className="contact-text113">
                      Sécurisé &amp; Privé
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact-form" className="contact-form-section">
        <div className="contact-form-wrapper">
          <div className="contact-form-header">
            <h2 className="section-title">
              <span data-lang="en">Send Us a Message</span>
              <span data-lang="fr" className="contact-text115">
                {' '}
                Envoyez-nous un message
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h2>
            <p className="section-subtitle">
              <span data-lang="en">
                {' '}
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span data-lang="fr" className="contact-text117">
                {' '}
                Remplissez le formulaire ci-dessous et nous vous répondrons dans
                les plus brefs délais.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
          </div>
          <form
            action="/submit-contact"
            method="POST"
            enctype="multipart/form-data"
            data-form-id="0bf1d5af-496a-49e8-94fa-8b7c9eeca0e4"
            className="contact-contact-form"
          >
            <div className="contact-form-grid">
              <div className="contact-contact-form-group">
                <input
                  type="text"
                  id="contact-name"
                  name="true"
                  required="true"
                  data-form-field-id="contact-name"
                  className="contact-form-input"
                />
                <label htmlFor="contact-name" className="contact-form-label">
                  <span data-lang="en">Full Name</span>
                  <span data-lang="fr" className="contact-text119">
                    Nom complet
                  </span>
                  <span className="contact-contact-form-required1">*</span>
                </label>
                <span className="contact-form-error">
                  <span data-lang="en">This field is invalid or missing.</span>
                  <span data-lang="fr" className="contact-text121">
                    {' '}
                    Ce champ est invalide ou manquant.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="contact-contact-form-group">
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required="true"
                  data-form-field-id="contact-email"
                  className="contact-form-input"
                />
                <label htmlFor="contact-email" className="contact-form-label">
                  <span data-lang="en">Email Address</span>
                  <span data-lang="fr" className="contact-text123">
                    Adresse e-mail
                  </span>
                  <span className="contact-contact-form-required2">*</span>
                </label>
                <span className="contact-form-helper">
                  <span data-lang="en">
                    {' '}
                    We&apos;ll never share your email with anyone else.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span data-lang="fr" className="contact-text125">
                    {' '}
                    Nous ne partagerons jamais votre e-mail avec qui que ce
                    soit.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="contact-form-error">
                  <span data-lang="en">
                    Please enter a valid email address.
                  </span>
                  <span data-lang="fr" className="contact-text127">
                    {' '}
                    Veuillez entrer une adresse e-mail valide.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="contact-contact-form-group">
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  data-form-field-id="contact-phone"
                  className="contact-form-input"
                />
                <label htmlFor="contact-phone" className="contact-form-label">
                  <span data-lang="en">Phone Number</span>
                  <span data-lang="fr" className="contact-text129">
                    {' '}
                    Numéro de téléphone
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </label>
                <span className="contact-form-helper">
                  <span data-lang="en">
                    {' '}
                    Optional. Include country code for international calls.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span data-lang="fr" className="contact-text131">
                    {' '}
                    Optionnel. Incluez l&apos;indicatif du pays pour les appels
                    internationaux.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="contact-contact-form-group">
                <select
                  id="contact-subject"
                  name="subject"
                  required="true"
                  data-form-field-id="contact-subject"
                  className="contact-form-select contact-form-input"
                >
                  <option value="true" disabled="true" selected="true"></option>
                  <option
                    value="general"
                    data-lang-en="General Inquiry"
                    data-lang-fr="Demande générale"
                  >
                    {' '}
                    General Inquiry
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </option>
                  <option
                    value="booking"
                    data-lang-en="Booking Support"
                    data-lang-fr="Support de réservation"
                  >
                    {' '}
                    Booking Support
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </option>
                  <option
                    value="billing"
                    data-lang-en="Billing Question"
                    data-lang-fr="Question de facturation"
                  >
                    {' '}
                    Billing Question
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </option>
                  <option
                    value="technical"
                    data-lang-en="Technical Issue"
                    data-lang-fr="Problème technique"
                  >
                    {' '}
                    Technical Issue
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </option>
                  <option
                    value="partnership"
                    data-lang-en="Partnership Opportunity"
                    data-lang-fr="Opportunité de partenariat"
                  >
                    {' '}
                    Partnership Opportunity
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </option>
                </select>
                <label htmlFor="contact-subject" className="contact-form-label">
                  <span data-lang="en">Subject</span>
                  <span data-lang="fr" className="contact-text133">
                    Sujet
                  </span>
                  <span className="contact-contact-form-required3">*</span>
                </label>
                <span className="contact-form-error">
                  <span data-lang="en">Please select a subject.</span>
                  <span data-lang="fr" className="contact-text135">
                    {' '}
                    Veuillez sélectionner un sujet.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="contact-form-group-full contact-contact-form-group">
                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  required="true"
                  maxlength="1000"
                  data-form-field-id="contact-message"
                  className="contact-form-textarea contact-form-input"
                ></textarea>
                <label htmlFor="contact-message" className="contact-form-label">
                  <span data-lang="en">Message</span>
                  <span data-lang="fr" className="contact-text137">
                    Message
                  </span>
                  <span className="contact-contact-form-required4">*</span>
                </label>
                <span className="contact-form-helper">
                  <span data-lang="en">
                    {' '}
                    Please provide as much detail as possible. Maximum 1000
                    characters.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span data-lang="fr" className="contact-text139">
                    {' '}
                    Veuillez fournir autant de détails que possible. Maximum
                    1000 caractères.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="contact-form-counter">
                  <span className="contact-contact-form-counter-current">
                    0
                  </span>
                  <span>
                    {' '}
                    / 1000
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="contact-form-error">
                  <span data-lang="en">
                    {' '}
                    Message is required and must be less than 1000 characters.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span data-lang="fr" className="contact-text142">
                    {' '}
                    Le message est requis et doit contenir moins de 1000
                    caractères.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="contact-form-group-full contact-contact-form-group">
                <div className="contact-form-upload">
                  <input
                    type="file"
                    id="contact-attachments"
                    name="attachments"
                    accept="image/*,.pdf,.doc,.docx"
                    multiple="true"
                    data-form-field-id="contact-attachments"
                    className="contact-form-file-input"
                  />
                  <label
                    htmlFor="contact-attachments"
                    className="contact-form-file-label"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 3v12m5-7l-5-5l-5 5m14 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span data-lang="en">Upload Attachments (Optional)</span>
                    <span data-lang="fr" className="contact-text144">
                      {' '}
                      Télécharger des pièces jointes (Optionnel)
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </label>
                  <span className="contact-form-helper">
                    <span data-lang="en">
                      {' '}
                      Max 10 files. Supported formats: Images, PDF, DOC, DOCX.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span data-lang="fr" className="contact-text146">
                      {' '}
                      Max 10 fichiers. Formats pris en charge : Images, PDF,
                      DOC, DOCX.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <div className="contact-form-file-list"></div>
                </div>
              </div>
            </div>
            <div className="contact-form-actions">
              <button
                id="thq_button_0XX3"
                name="button"
                type="submit"
                data-form-field-id="thq_button_0XX3"
                className="btn btn-lg contact-form-submit btn-primary"
              >
                <span data-lang="en">Send Message</span>
                <span data-lang="fr" className="contact-text148">
                  Envoyer le message
                </span>
              </button>
              <button
                id="thq_button_r8I7"
                name="button"
                type="reset"
                data-form-field-id="thq_button_r8I7"
                className="btn btn-outline contact-form-reset"
              >
                <span data-lang="en">Clear Form</span>
                <span data-lang="fr" className="contact-text150">
                  {' '}
                  Effacer le formulaire
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </button>
            </div>
          </form>
          <div className="contact-form-toast contact-form-toast-success">
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 6L9 17l-5-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span data-lang="en">
              {' '}
              Message sent successfully! We&apos;ll get back to you soon.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span data-lang="fr" className="contact-text152">
              {' '}
              Message envoyé avec succès ! Nous vous répondrons bientôt.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="contact-form-toast contact-form-toast-error">
            <span data-lang="en">Something went wrong. Please try again.</span>
            <span data-lang="fr" className="contact-text154">
              {' '}
              Une erreur est survenue. Réessayez.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
      </section>
      <section id="location-info" className="location-info">
        <div className="location-info-wrapper">
          <div className="location-info-hero">
            <div className="location-info-hero-overlay">
              <h2 className="section-title">
                <span data-lang="en">Visit Our Office</span>
                <span data-lang="fr" className="contact-text156">
                  Visitez notre bureau
                </span>
              </h2>
              <p className="section-content">
                <span data-lang="en">
                  {' '}
                  We&apos;re located in the heart of the city with easy access
                  to public transportation.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span data-lang="fr" className="contact-text158">
                  {' '}
                  Nous sommes situés au cœur de la ville avec un accès facile
                  aux transports en commun.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <img
              alt="Turno office building"
              src="https://images.pexels.com/photos/3993876/pexels-photo-3993876.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
              className="location-info-hero-image"
            />
          </div>
          <div className="location-info-bento">
            <div className="location-info-card-address location-info-card">
              <div className="location-info-card-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="location-info-card-title">
                <span data-lang="en">Main Office</span>
                <span data-lang="fr" className="contact-text160">
                  Bureau principal
                </span>
              </h3>
              <p className="location-info-card-text">
                <span>
                  {' '}
                  123 Innovation Boulevard
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  {' '}
                  Suite 456
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  {' '}
                  Montreal, QC H3A 1B7
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  {' '}
                  Canada
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="location-info-card-phone location-info-card">
              <div className="location-info-card-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
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
              <h3 className="location-info-card-title">
                <span data-lang="en">Phone</span>
                <span data-lang="fr" className="contact-text166">
                  Téléphone
                </span>
              </h3>
              <p className="location-info-card-text">
                <a href="tel:+15145551234">
                  <div>
                    <span>+1 (514) 555-1234</span>
                  </div>
                </a>
                <br></br>
                <span data-lang="en">Toll-free:</span>
                <span data-lang="fr" className="contact-text169">
                  Sans frais :
                </span>
                <a href="tel:+18005551234">
                  <div>
                    <span>1-800-555-1234</span>
                  </div>
                </a>
              </p>
            </div>
            <div className="location-info-card-email location-info-card">
              <div className="location-info-card-icon">
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
                    <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                  </g>
                </svg>
              </div>
              <h3 className="location-info-card-title">
                <span data-lang="en">Email</span>
                <span data-lang="fr" className="contact-text172">
                  Courriel
                </span>
              </h3>
              <p className="location-info-card-text">
                <span data-lang="en">General:</span>
                <span data-lang="fr" className="contact-text174">
                  Général :
                </span>
                <a href="mailto:contact@turno.com?subject=">
                  <div>
                    <span>contact@turno.com</span>
                  </div>
                </a>
                <br></br>
                <span data-lang="en">Support:</span>
                <span data-lang="fr" className="contact-text177">
                  Support :
                </span>
                <a href="mailto:support@turno.com?subject=">
                  <div>
                    <span>support@turno.com</span>
                  </div>
                </a>
              </p>
            </div>
            <div className="location-info-card-hours location-info-card">
              <div className="location-info-card-icon">
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
              </div>
              <h3 className="location-info-card-title">
                <span data-lang="en">Operating Hours</span>
                <span data-lang="fr" className="contact-text180">
                  Heures d&apos;ouverture
                </span>
              </h3>
              <p className="location-info-card-text">
                <span data-lang="en">Monday - Friday: 9:00 AM - 6:00 PM</span>
                <span data-lang="fr" className="contact-text182">
                  {' '}
                  Lundi - Vendredi : 9h00 - 18h00
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span data-lang="en">Saturday: 10:00 AM - 4:00 PM</span>
                <span data-lang="fr" className="contact-text184">
                  {' '}
                  Samedi : 10h00 - 16h00
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span data-lang="en">Sunday: Closed</span>
                <span data-lang="fr" className="contact-text186">
                  Dimanche : Fermé
                </span>
              </p>
            </div>
            <div className="location-info-card-coverage location-info-card">
              <div className="location-info-card-icon">
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
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
                  </g>
                </svg>
              </div>
              <h3 className="location-info-card-title">
                <span data-lang="en">Service Coverage</span>
                <span data-lang="fr" className="contact-text188">
                  {' '}
                  Couverture de service
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </h3>
              <p className="location-info-card-text">
                <span data-lang="en">
                  {' '}
                  We serve Montreal, Laval, Longueuil, and surrounding areas
                  within a 50km radius.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span data-lang="fr" className="contact-text190">
                  {' '}
                  Nous desservons Montréal, Laval, Longueuil et les environs
                  dans un rayon de 50 km.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="location-info-card-security location-info-card">
              <div className="location-info-card-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
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
              <h3 className="location-info-card-title">
                <span data-lang="en">Privacy &amp; Security</span>
                <span data-lang="fr" className="contact-text192">
                  {' '}
                  Confidentialité et sécurité
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </h3>
              <p className="location-info-card-text">
                <span data-lang="en">
                  {' '}
                  Your data is protected with enterprise-grade security. We
                  never share your information without consent.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span data-lang="fr" className="contact-text194">
                  {' '}
                  Vos données sont protégées par une sécurité de niveau
                  entreprise. Nous ne partageons jamais vos informations sans
                  consentement.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="map-section">
        <div className="map-section-container">
          <div className="map-section-header">
            <h2 className="section-title">
              <span data-lang="en">Find Us on the Map</span>
              <span data-lang="fr" className="contact-text196">
                {' '}
                Trouvez-nous sur la carte
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h2>
            <p className="section-subtitle">
              <span data-lang="en">
                {' '}
                Get directions to our office for in-person consultations or
                meetings.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span data-lang="fr" className="contact-text198">
                {' '}
                Obtenez des directions vers notre bureau pour des consultations
                ou des réunions en personne.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
          </div>
          <div className="map-section-bento">
            <div className="map-section-main">
              <div className="map-section-search">
                <input
                  type="text"
                  placeholder="Search address..."
                  className="map-section-search-input"
                />
                <button className="map-section-search-btn">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span data-lang="en">Search</span>
                  <span data-lang="fr" className="contact-text200">
                    Rechercher
                  </span>
                </button>
              </div>
              <div className="map-section-placeholder">
                <img
                  alt="Office location map placeholder"
                  src="https://images.pexels.com/photos/1033829/pexels-photo-1033829.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                  className="map-section-placeholder-image"
                />
                <div className="map-section-pin">
                  <svg
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="map-section-details">
              <h3 className="map-section-details-title">
                <span data-lang="en">Location Details</span>
                <span data-lang="fr" className="contact-text202">
                  {' '}
                  Détails de l&apos;emplacement
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </h3>
              <div className="map-section-info">
                <div className="map-section-info-item">
                  <strong>
                    <span data-lang="en">Coordinates</span>
                    <span data-lang="fr" className="contact-text205">
                      Coordonnées
                    </span>
                  </strong>
                  <p>45.5017° N, 73.5673° W</p>
                </div>
                <div className="map-section-info-item">
                  <strong>
                    <span data-lang="en">Accessibility</span>
                    <span data-lang="fr" className="contact-text209">
                      Accessibilité
                    </span>
                  </strong>
                  <p>
                    <span data-lang="en">
                      {' '}
                      Wheelchair accessible entrance, elevator to all floors,
                      accessible parking available.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span data-lang="fr" className="contact-text212">
                      {' '}
                      Entrée accessible en fauteuil roulant, ascenseur à tous
                      les étages, stationnement accessible disponible.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                </div>
                <div className="map-section-info-item">
                  <strong>
                    <span data-lang="en">Parking</span>
                    <span data-lang="fr" className="contact-text215">
                      Stationnement
                    </span>
                  </strong>
                  <p>
                    <span data-lang="en">
                      {' '}
                      Underground parking available. Visitor passes available at
                      reception.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span data-lang="fr" className="contact-text218">
                      {' '}
                      Stationnement souterrain disponible. Laissez-passer pour
                      visiteurs disponibles à la réception.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=123+Innovation+Boulevard+Montreal"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div
                  rel="noopener noreferrer"
                  target="_blank"
                  className="btn map-section-directions btn-outline"
                >
                  <span data-lang="en">Get Directions</span>
                  <span data-lang="fr" className="contact-text220">
                    Obtenir l&apos;itinéraire
                  </span>
                </div>
              </a>
            </div>
            <div className="map-section-transit">
              <h3 className="map-section-transit-title">
                <span data-lang="en">Public Transit</span>
                <span data-lang="fr" className="contact-text222">
                  Transport en commun
                </span>
              </h3>
              <ul className="map-section-transit-list">
                <li>
                  <strong>
                    <span data-lang="en">Metro</span>
                    <span data-lang="fr" className="contact-text225">
                      Métro
                    </span>
                  </strong>
                  <span data-lang="en">
                    {' '}
                    5 min walk from McGill Station (Green Line)
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span data-lang="fr" className="contact-text227">
                    {' '}
                    5 min à pied de la station McGill (Ligne verte)
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <strong>
                    <span data-lang="en">Bus</span>
                    <span data-lang="fr" className="contact-text230">
                      Bus
                    </span>
                  </strong>
                  <span data-lang="en">
                    Routes 24, 165 stop directly outside
                  </span>
                  <span data-lang="fr" className="contact-text232">
                    {' '}
                    Les lignes 24, 165 s&apos;arrêtent directement à
                    l&apos;extérieur
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <strong>
                    <span data-lang="en">Bike</span>
                    <span data-lang="fr" className="contact-text235">
                      Vélo
                    </span>
                  </strong>
                  <span data-lang="en">BIXI station across the street</span>
                  <span data-lang="fr" className="contact-text237">
                    {' '}
                    Station BIXI de l&apos;autre côté de la rue
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
        </div>
      </section>
      <section className="contact-faq-section">
        <div className="faq-section-wrapper">
          <div className="faq-section-sidebar">
            <h2 className="section-title">
              <span data-lang="en">Frequently Asked Questions</span>
              <span data-lang="fr" className="contact-text239">
                {' '}
                Questions fréquemment posées
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h2>
            <p className="section-content">
              <span data-lang="en">
                {' '}
                Quick answers to common questions about bookings, billing,
                cleaner verification, and platform features.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span data-lang="fr" className="contact-text241">
                {' '}
                Réponses rapides aux questions courantes sur les réservations,
                la facturation, la vérification des nettoyeurs et les
                fonctionnalités de la plateforme.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
            <a href="/faq">
              <div className="btn faq-section-link btn-outline">
                <span data-lang="en">View Full FAQ</span>
                <span data-lang="fr" className="contact-text243">
                  Voir la FAQ complète
                </span>
              </div>
            </a>
          </div>
          <div className="faq-section-content">
            <details className="contact-faq-item">
              <summary className="faq-summary">
                <span data-lang="en">How do I book a cleaning service?</span>
                <span data-lang="fr" className="contact-text245">
                  {' '}
                  Comment réserver un service de nettoyage ?
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
                  className="faq-icon"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="contact-faq-answer">
                <p>
                  <span data-lang="en">
                    {' '}
                    Simply create an account, post a cleaning job with your
                    property details, preferred date and time, and wait for
                    verified cleaners to accept your request. You can review
                    cleaner profiles and ratings before confirming.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span data-lang="fr" className="contact-text248">
                    {' '}
                    Il vous suffit de créer un compte, de publier une annonce de
                    nettoyage avec les détails de votre propriété, la date et
                    l&apos;heure préférées, et d&apos;attendre que les
                    nettoyeurs vérifiés acceptent votre demande. Vous pouvez
                    consulter les profils et les évaluations des nettoyeurs
                    avant de confirmer.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
              </div>
            </details>
            <details className="contact-faq-item">
              <summary className="faq-summary">
                <span data-lang="en">How are cleaners verified?</span>
                <span data-lang="fr" className="contact-text250">
                  {' '}
                  Comment les nettoyeurs sont-ils vérifiés ?
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
                  className="faq-icon"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="contact-faq-answer">
                <p>
                  <span data-lang="en">
                    {' '}
                    All cleaners must pass a comprehensive verification process
                    including identity verification, background checks,
                    reference verification, and skills assessment. We also
                    monitor ratings and reviews to maintain high quality
                    standards.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span data-lang="fr" className="contact-text253">
                    {' '}
                    Tous les nettoyeurs doivent passer un processus de
                    vérification complet comprenant la vérification
                    d&apos;identité, les vérifications d&apos;antécédents, la
                    vérification des références et l&apos;évaluation des
                    compétences. Nous surveillons également les évaluations et
                    les avis pour maintenir des normes de qualité élevées.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
              </div>
            </details>
            <details className="contact-faq-item">
              <summary className="faq-summary">
                <span data-lang="en">What payment methods do you accept?</span>
                <span data-lang="fr" className="contact-text255">
                  {' '}
                  Quelles méthodes de paiement acceptez-vous ?
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
                  className="faq-icon"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="contact-faq-answer">
                <p>
                  <span data-lang="en">
                    {' '}
                    We accept all major credit cards (Visa, Mastercard, American
                    Express), debit cards, and electronic bank transfers.
                    Payment is securely processed through our encrypted platform
                    after the cleaning is completed to your satisfaction.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span data-lang="fr" className="contact-text258">
                    {' '}
                    Nous acceptons toutes les principales cartes de crédit
                    (Visa, Mastercard, American Express), les cartes de débit et
                    les virements bancaires électroniques. Le paiement est
                    traité en toute sécurité via notre plateforme cryptée une
                    fois le nettoyage terminé à votre satisfaction.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
              </div>
            </details>
            <details className="contact-faq-item">
              <summary className="faq-summary">
                <span data-lang="en">
                  Can I cancel or reschedule a booking?
                </span>
                <span data-lang="fr" className="contact-text260">
                  {' '}
                  Puis-je annuler ou reprogrammer une réservation ?
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
                  className="faq-icon"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="contact-faq-answer">
                <p>
                  <span data-lang="en">
                    {' '}
                    Yes, you can cancel or reschedule up to 24 hours before the
                    scheduled time with no penalty. Cancellations within 24
                    hours may incur a small fee. To reschedule, simply contact
                    the cleaner through our messaging system or update the
                    booking in your dashboard.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span data-lang="fr" className="contact-text263">
                    {' '}
                    Oui, vous pouvez annuler ou reprogrammer jusqu&apos;à 24
                    heures avant l&apos;heure prévue sans pénalité. Les
                    annulations dans les 24 heures peuvent entraîner des frais
                    minimes. Pour reprogrammer, contactez simplement le
                    nettoyeur via notre système de messagerie ou mettez à jour
                    la réservation dans votre tableau de bord.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
              </div>
            </details>
            <details className="contact-faq-item">
              <summary className="faq-summary">
                <span data-lang="en">
                  {' '}
                  What if I&apos;m not satisfied with the service?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span data-lang="fr" className="contact-text265">
                  {' '}
                  Que faire si je ne suis pas satisfait du service ?
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
                  className="faq-icon"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="contact-faq-answer">
                <p>
                  <span data-lang="en">
                    {' '}
                    Your satisfaction is our priority. If you&apos;re not
                    completely satisfied, contact us within 24 hours of service
                    completion. We&apos;ll work with the cleaner to address any
                    issues or arrange a re-clean at no additional cost. We also
                    offer a satisfaction guarantee for eligible bookings.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span data-lang="fr" className="contact-text268">
                    {' '}
                    Votre satisfaction est notre priorité. Si vous n&apos;êtes
                    pas entièrement satisfait, contactez-nous dans les 24 heures
                    suivant la fin du service. Nous travaillerons avec le
                    nettoyeur pour résoudre tout problème ou organiser un
                    nouveau nettoyage sans frais supplémentaires. Nous offrons
                    également une garantie de satisfaction pour les réservations
                    éligibles.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
              </div>
            </details>
            <details className="contact-faq-item">
              <summary className="faq-summary">
                <span data-lang="en">
                  Do cleaners bring their own supplies?
                </span>
                <span data-lang="fr" className="contact-text270">
                  {' '}
                  Les nettoyeurs apportent-ils leurs propres fournitures ?
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
                  className="faq-icon"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="contact-faq-answer">
                <p>
                  <span data-lang="en">
                    {' '}
                    Most professional cleaners bring their own equipment and
                    eco-friendly supplies. However, you can specify in your job
                    posting whether you prefer them to use your supplies or if
                    you have specific product preferences. This can be discussed
                    during the booking process.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span data-lang="fr" className="contact-text273">
                    {' '}
                    La plupart des nettoyeurs professionnels apportent leur
                    propre équipement et des produits écologiques. Cependant,
                    vous pouvez spécifier dans votre annonce si vous préférez
                    qu&apos;ils utilisent vos fournitures ou si vous avez des
                    préférences de produits spécifiques. Cela peut être discuté
                    pendant le processus de réservation.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section id="urgent-support" className="urgent-support-cta">
        <div className="urgent-support-container">
          <div className="urgent-support-feature">
            <div className="urgent-support-badge">
              <span data-lang="en">24/7 Support Available</span>
              <span data-lang="fr" className="contact-text275">
                {' '}
                Support 24/7 disponible
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <h2 className="section-title">
              <span data-lang="en">Need Urgent Assistance?</span>
              <span data-lang="fr" className="contact-text277">
                {' '}
                Besoin d&apos;aide urgente ?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h2>
            <p className="section-content">
              <span data-lang="en">
                {' '}
                Our support team is here to help you immediately with any urgent
                issues or questions.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span data-lang="fr" className="contact-text279">
                {' '}
                Notre équipe d&apos;assistance est là pour vous aider
                immédiatement avec tout problème ou question urgente.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
          </div>
          <div className="urgent-support-actions">
            <div className="urgent-support-option">
              <div className="urgent-support-option-icon">
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
                    <path d="M16.5 10c3.038 0 5.5 2.015 5.5 4.5c0 1.397-.778 2.645-2 3.47V20l-1.964-1.178A6.7 6.7 0 0 1 16.5 19c-3.038 0-5.5-2.015-5.5-4.5s2.462-4.5 5.5-4.5"></path>
                    <path d="M11.197 15.698c-.69.196-1.43.302-2.197.302a8 8 0 0 1-2.612-.432L4 17v-2.801C2.763 13.117 2 11.635 2 10c0-3.314 3.134-6 7-6c3.782 0 6.863 2.57 7 5.785v.233M10 8h.01M7 8h.01M15 14h.01M18 14h.01"></path>
                  </g>
                </svg>
              </div>
              <h3 className="urgent-support-option-title">
                <span data-lang="en">Live Chat</span>
                <span data-lang="fr" className="contact-text281">
                  Chat en direct
                </span>
              </h3>
              <p className="urgent-support-option-text">
                <span data-lang="en">Instant responses from our team</span>
                <span data-lang="fr" className="contact-text283">
                  {' '}
                  Réponses instantanées de notre équipe
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <button className="btn btn-primary urgent-support-btn">
                <span data-lang="en">Start Chat</span>
                <span data-lang="fr" className="contact-text285">
                  Démarrer le chat
                </span>
              </button>
            </div>
            <div className="urgent-support-option">
              <div className="urgent-support-option-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
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
              <h3 className="urgent-support-option-title">
                <span data-lang="en">Request Call-Back</span>
                <span data-lang="fr" className="contact-text287">
                  Demander un rappel
                </span>
              </h3>
              <p className="urgent-support-option-text">
                <span data-lang="en">
                  We&apos;ll call you within 15 minutes
                </span>
                <span data-lang="fr" className="contact-text289">
                  {' '}
                  Nous vous appellerons dans les 15 minutes
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <button className="btn btn-secondary urgent-support-btn">
                <span data-lang="en">Request Call</span>
                <span data-lang="fr" className="contact-text291">
                  Demander un appel
                </span>
              </button>
            </div>
            <div className="urgent-support-option">
              <div className="urgent-support-option-icon">
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
                    <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                  </g>
                </svg>
              </div>
              <h3 className="urgent-support-option-title">
                <span data-lang="en">Submit a Ticket</span>
                <span data-lang="fr" className="contact-text293">
                  Soumettre un ticket
                </span>
              </h3>
              <p className="urgent-support-option-text">
                <span data-lang="en">Detailed support with tracking</span>
                <span data-lang="fr" className="contact-text295">
                  {' '}
                  Support détaillé avec suivi
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <button className="btn btn-outline urgent-support-btn">
                <span data-lang="en">Create Ticket</span>
                <span data-lang="fr" className="contact-text297">
                  Créer un ticket
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-container17">
        <div className="contact-container18">
          <Script
            html={`<style>
        @keyframes slideInUp {from {transform: translateY(100px);
opacity: 0;}
to {transform: translateY(0);
opacity: 1;}}@keyframes pulse {0%,100% {transform: translate(-50%, -50%) scale(1);}
50% {transform: translate(-50%, -50%) scale(1.1);}}@keyframes fadeIn {from {opacity: 0;
transform: translateY(-10px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes float {0%,100% {transform: translate(0, 0) rotate(0deg);}
50% {transform: translate(-30px, 30px) rotate(5deg);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="contact-container19">
        <div className="contact-container20">
          <Script
            html={`<script defer data-name="contact-page-functionality">
(function(){
  const currentLanguage = { value: "en" }

  function switchLanguage(lang) {
    currentLanguage.value = lang

    document.querySelectorAll("[data-lang]").forEach((el) => {
      el.style.display = el.getAttribute("data-lang") === lang ? "" : "none"
    })

    document.querySelectorAll(".language-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-language") === lang)
    })

    document.querySelectorAll("select option").forEach((option) => {
      const enText = option.getAttribute("data-lang-en")
      const frText = option.getAttribute("data-lang-fr")
      if (enText && frText) {
        option.textContent = lang === "en" ? enText : frText
      }
    })

    const searchInput = document.querySelector(".map-section-search-input")
    if (searchInput) {
      searchInput.placeholder =
        lang === "en" ? "Search address..." : "Rechercher une adresse..."
    }
  }

  document.querySelectorAll(".language-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-language")
      switchLanguage(lang)
    })
  })

  switchLanguage("en")

  const form = document.querySelector(".contact-form")
  const messageTextarea = document.getElementById("contact-message")
  const counterCurrent = document.querySelector(".contact-form-counter-current")

  if (messageTextarea && counterCurrent) {
    messageTextarea.addEventListener("input", () => {
      counterCurrent.textContent = messageTextarea.value.length
    })
  }

  const fileInput = document.getElementById("contact-attachments")
  const fileList = document.querySelector(".contact-form-file-list")

  if (fileInput && fileList) {
    fileInput.addEventListener("change", (e) => {
      fileList.innerHTML = ""
      Array.from(e.target.files).forEach((file) => {
        const item = document.createElement("div")
        item.textContent = file.name
        item.style.padding = "var(--spacing-xs) var(--spacing-sm)"
        item.style.background = "var(--color-surface-elevated)"
        item.style.borderRadius = "var(--border-radius-sm)"
        item.style.fontSize = "var(--font-size-sm)"
        fileList.appendChild(item)
      })
    })
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      const isValid = form.checkValidity()

      if (isValid) {
        const successToast = document.querySelector(
          ".contact-form-toast-success"
        )
        successToast.classList.add("show")
        setTimeout(() => {
          successToast.classList.remove("show")
        }, 5000)

        form.reset()
        if (counterCurrent) counterCurrent.textContent = "0"
        if (fileList) fileList.innerHTML = ""
      } else {
        const errorToast = document.querySelector(".contact-form-toast-error")
        errorToast.classList.add("show")
        setTimeout(() => {
          errorToast.classList.remove("show")
        }, 5000)
      }
    })
  }

  document.querySelector(".hero-intro-cta")?.addEventListener("click", () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" })
  })

  document.querySelectorAll(".urgent-support-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const optionTitle = btn
        .closest(".urgent-support-option")
        .querySelector(".urgent-support-option-title")
        .textContent.trim()
      console.log(\`Initiating: \${optionTitle}\`)
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Contact
