import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './services.css'

const Services = (props) => {
  return (
    <div className="services-container1">
      <Helmet>
        <title>Services - Gripping Acrobatic Eland</title>
        <meta
          property="og:title"
          content="Services - Gripping Acrobatic Eland"
        />
        <link rel="canonical" href="https://www.cleanconnectmtl.com/services" />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-services">
        <div className="hero-services-container">
          <div className="hero-services-content">
            <div className="hero-services-text">
              <h1 className="hero-title">
                {' '}
                Professional Cleaning Services for Every Need
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
              <p className="hero-subtitle">
                {' '}
                Book trusted cleaners on your schedule. From apartments to
                offices, we have the perfect cleaning solution for you.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="hero-services-filter-bar">
                <div className="hero-services-filter-group">
                  <label
                    htmlFor="propertyType"
                    className="hero-services-filter-label"
                  >
                    {' '}
                    Property Type
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </label>
                  <select
                    id="propertyType"
                    className="hero-services-filter-select"
                  >
                    <option value="true">All Types</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="condo">Condo</option>
                    <option value="office">Office</option>
                  </select>
                </div>
                <div className="hero-services-filter-group">
                  <label
                    htmlFor="serviceType"
                    className="hero-services-filter-label"
                  >
                    {' '}
                    Service Level
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </label>
                  <select
                    id="serviceType"
                    className="hero-services-filter-select"
                  >
                    <option value="true">All Services</option>
                    <option value="regular">Regular Clean</option>
                    <option value="deep">Deep Clean</option>
                  </select>
                </div>
                <div className="hero-services-filter-group">
                  <label
                    htmlFor="locationRadius"
                    className="hero-services-filter-label"
                  >
                    {' '}
                    Location Radius
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </label>
                  <select
                    id="locationRadius"
                    className="hero-services-filter-select"
                  >
                    <option value="5">5 km</option>
                    <option value="10">10 km</option>
                    <option value="20">20 km</option>
                    <option value="50">50 km</option>
                  </select>
                </div>
              </div>
              <div className="hero-services-cta-group">
                <button className="btn btn-lg btn-primary">
                  Post a Cleaning Job
                </button>
                <button className="btn btn-lg btn-secondary">
                  Become a Cleaner
                </button>
              </div>
            </div>
            <div className="hero-services-feature">
              <div className="hero-services-feature-card">
                <img
                  alt="Professional cleaner vacuuming modern living room"
                  src="https://images.pexels.com/photos/6195275/pexels-photo-6195275.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="eager"
                  className="hero-services-feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-grid">
        <div className="services-grid-wrapper">
          <div className="services-grid-sidebar">
            <h2 className="section-title">Our Services</h2>
            <p className="section-content">
              {' '}
              Choose from our comprehensive range of professional cleaning
              services tailored to your specific needs. Each service includes
              background-checked cleaners and satisfaction guarantee.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="services-grid-stats">
              <div className="services-grid-stat-item">
                <div className="services-grid-stat-number">
                  <span>8</span>
                </div>
                <div className="services-grid-stat-label">
                  <span>Service Types</span>
                </div>
              </div>
              <div className="services-grid-stat-item">
                <div className="services-grid-stat-number">
                  <span>2-6</span>
                </div>
                <div className="services-grid-stat-label">
                  <span>Hours Duration</span>
                </div>
              </div>
            </div>
          </div>
          <div className="services-grid-main">
            <div className="services-grid-tiles">
              <div className="services-grid-tile">
                <div className="services-grid-tile-icon">
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
                <h3 className="services-grid-tile-title">Apartment Cleaning</h3>
                <p className="services-grid-tile-description">
                  {' '}
                  Complete cleaning service for apartments including kitchen,
                  bathroom, living areas, and bedrooms.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="services-grid-tile-meta">
                  <div className="services-grid-tile-duration">
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
                    <span>2-3 hours</span>
                  </div>
                </div>
                <button className="btn btn-outline">Choose Service</button>
              </div>
              <div className="services-grid-tile">
                <div className="services-grid-tile-icon">
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
                <h3 className="services-grid-tile-title">House Cleaning</h3>
                <p className="services-grid-tile-description">
                  {' '}
                  Full-service house cleaning covering all rooms, floors, and
                  living spaces with attention to detail.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="services-grid-tile-meta">
                  <div className="services-grid-tile-duration">
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
                    <span>4-6 hours</span>
                  </div>
                </div>
                <button className="btn btn-outline">Choose Service</button>
              </div>
              <div className="services-grid-tile">
                <div className="services-grid-tile-icon">
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
                      <path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                      <rect x="4" y="2" rx="2" width="16" height="20"></rect>
                    </g>
                  </svg>
                </div>
                <h3 className="services-grid-tile-title">Condo Cleaning</h3>
                <p className="services-grid-tile-description">
                  {' '}
                  Specialized cleaning for condos with shared spaces and private
                  units requiring flexible access.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="services-grid-tile-meta">
                  <div className="services-grid-tile-duration">
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
                    <span>2-4 hours</span>
                  </div>
                </div>
                <button className="btn btn-outline">Choose Service</button>
              </div>
              <div className="services-grid-tile">
                <div className="services-grid-tile-icon">
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
                      <path d="m15.5 7.5l2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4m2-2l-9.6 9.6"></path>
                      <circle r="5.5" cx="7.5" cy="15.5"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="services-grid-tile-title">Airbnb Turnover</h3>
                <p className="services-grid-tile-description">
                  {' '}
                  Fast and thorough cleaning between guest stays, including
                  linen change and inspection.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="services-grid-tile-meta">
                  <div className="services-grid-tile-duration">
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
                    <span>2-3 hours</span>
                  </div>
                </div>
                <button className="btn btn-outline">Choose Service</button>
              </div>
              <div className="services-grid-tile">
                <div className="services-grid-tile-icon">
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
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                      <circle r="2" cx="4" cy="20"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="services-grid-tile-title">Deep Clean</h3>
                <p className="services-grid-tile-description">
                  {' '}
                  Intensive cleaning service covering every corner, inside
                  appliances, cabinets, and hard-to-reach areas.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="services-grid-tile-meta">
                  <div className="services-grid-tile-duration">
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
                    <span>5-8 hours</span>
                  </div>
                </div>
                <button className="btn btn-outline">Choose Service</button>
              </div>
              <div className="services-grid-tile">
                <div className="services-grid-tile-icon">
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
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                      <circle r="2" cx="17" cy="18"></circle>
                      <circle r="2" cx="7" cy="18"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="services-grid-tile-title">Move-Out Cleaning</h3>
                <p className="services-grid-tile-description">
                  {' '}
                  Comprehensive end-of-lease cleaning ensuring property is ready
                  for inspection and deposit return.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="services-grid-tile-meta">
                  <div className="services-grid-tile-duration">
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
                    <span>4-6 hours</span>
                  </div>
                </div>
                <button className="btn btn-outline">Choose Service</button>
              </div>
              <div className="services-grid-tile">
                <div className="services-grid-tile-icon">
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
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      <path d="M10 4v4M2 8h20M6 4v4"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="services-grid-tile-title">Window Cleaning</h3>
                <p className="services-grid-tile-description">
                  {' '}
                  Professional window cleaning service for interior and exterior
                  glass surfaces with streak-free finish.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="services-grid-tile-meta">
                  <div className="services-grid-tile-duration">
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
                    <span>1-3 hours</span>
                  </div>
                </div>
                <button className="btn btn-outline">Choose Service</button>
              </div>
              <div className="services-grid-tile">
                <div className="services-grid-tile-icon">
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
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      <rect x="2" y="6" rx="2" width="20" height="14"></rect>
                    </g>
                  </svg>
                </div>
                <h3 className="services-grid-tile-title">Office Cleaning</h3>
                <p className="services-grid-tile-description">
                  {' '}
                  Commercial cleaning for offices, workspaces, meeting rooms,
                  and common areas with flexible scheduling.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="services-grid-tile-meta">
                  <div className="services-grid-tile-duration">
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
                    <span>3-5 hours</span>
                  </div>
                </div>
                <button className="btn btn-outline">Choose Service</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features-filters">
        <div className="features-filters-wrapper">
          <div className="features-filters-sidebar">
            <h2 className="section-title">Refine Your Search</h2>
            <p className="section-content">
              {' '}
              Use our advanced filters to find the perfect cleaning service that
              matches your exact requirements and budget.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="features-filters-main">
            <div className="features-filters-controls">
              <div className="features-filters-section">
                <h3 className="features-filters-section-title">
                  Popular Filters
                </h3>
                <div className="features-filters-chips">
                  <button className="features-filters-chip features-filters-chip-active">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
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
                    <span>Most Popular</span>
                  </button>
                  <button className="features-filters-chip">
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
                    <span>Quick Service</span>
                  </button>
                  <button className="features-filters-chip">
                    <span>Budget Friendly</span>
                  </button>
                  <button className="features-filters-chip">
                    <span>Premium Quality</span>
                  </button>
                </div>
              </div>
              <div className="features-filters-section">
                <h3 className="features-filters-section-title">Room Count</h3>
                <div className="features-filters-toggles">
                  <label className="features-filters-toggle">
                    <input type="checkbox" />
                    <span className="services-features-filters-toggle-label10">
                      Studio
                    </span>
                  </label>
                  <label className="features-filters-toggle">
                    <input type="checkbox" />
                    <span className="services-features-filters-toggle-label11">
                      1-2 Bedrooms
                    </span>
                  </label>
                  <label className="features-filters-toggle">
                    <input type="checkbox" checked="true" />
                    <span className="services-features-filters-toggle-label12">
                      3-4 Bedrooms
                    </span>
                  </label>
                  <label className="features-filters-toggle">
                    <input type="checkbox" />
                    <span className="services-features-filters-toggle-label13">
                      5+ Bedrooms
                    </span>
                  </label>
                </div>
              </div>
              <div className="features-filters-section">
                <h3 className="features-filters-section-title">
                  Property Size
                </h3>
                <div className="features-filters-toggles">
                  <label className="features-filters-toggle">
                    <input type="checkbox" />
                    <span className="services-features-filters-toggle-label14">
                      Small (0-75 m²)
                    </span>
                  </label>
                  <label className="features-filters-toggle">
                    <input type="checkbox" checked="true" />
                    <span className="services-features-filters-toggle-label15">
                      {' '}
                      Medium (75-150 m²)
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </label>
                  <label className="features-filters-toggle">
                    <input type="checkbox" />
                    <span className="services-features-filters-toggle-label16">
                      Large (150+ m²)
                    </span>
                  </label>
                </div>
              </div>
              <div className="features-filters-section">
                <h3 className="features-filters-section-title">Price Range</h3>
                <div className="features-filters-range">
                  <input
                    type="range"
                    id="priceRange"
                    max="500"
                    min="50"
                    value="200"
                    className="features-filters-slider"
                  />
                  <div className="features-filters-range-labels">
                    <span>$50</span>
                    <span id="priceValue">$200</span>
                    <span>$500</span>
                  </div>
                </div>
              </div>
              <div className="features-filters-section">
                <h3 className="features-filters-section-title">
                  Additional Options
                </h3>
                <div className="features-filters-toggles">
                  <label className="features-filters-toggle">
                    <input type="checkbox" />
                    <span className="services-features-filters-toggle-label17">
                      Pet-Friendly
                    </span>
                  </label>
                  <label className="features-filters-toggle">
                    <input type="checkbox" />
                    <span className="services-features-filters-toggle-label18">
                      Eco Products
                    </span>
                  </label>
                  <label className="features-filters-toggle">
                    <input type="checkbox" />
                    <span className="services-features-filters-toggle-label19">
                      {' '}
                      Same Day Available
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </label>
                </div>
              </div>
              <div className="features-filters-actions">
                <button className="btn btn-primary">Apply Filters</button>
                <button className="btn btn-outline">Reset All</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="showcase-detail">
        <div className="showcase-detail-container">
          <div className="showcase-detail-backdrop"></div>
          <div className="showcase-detail-layers">
            <div className="showcase-detail-card-back showcase-detail-card">
              <img
                alt="Professional cleaning team ready"
                src="https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
                className="showcase-detail-image"
              />
            </div>
            <div className="showcase-detail-card-front showcase-detail-card">
              <div className="showcase-detail-content">
                <div className="showcase-detail-header">
                  <div className="showcase-detail-badge">
                    <span>Featured Service</span>
                  </div>
                  <h2 className="section-title">Deep Cleaning Service</h2>
                  <p className="section-content">
                    {' '}
                    Our most comprehensive cleaning package designed to refresh
                    and sanitize every corner of your space with meticulous
                    attention to detail.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="showcase-detail-body">
                  <div className="showcase-detail-feature-group">
                    <h3 className="showcase-detail-subtitle">
                      What&apos;s Included
                    </h3>
                    <div className="showcase-detail-checklist">
                      <div className="showcase-detail-check-item">
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
                        <span>All standard cleaning tasks plus extras</span>
                      </div>
                      <div className="showcase-detail-check-item">
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
                        <span>Inside appliances (oven, fridge, microwave)</span>
                      </div>
                      <div className="showcase-detail-check-item">
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
                        <span>Cabinet interiors and baseboards</span>
                      </div>
                      <div className="showcase-detail-check-item">
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
                        <span>Window sills and frames</span>
                      </div>
                      <div className="showcase-detail-check-item">
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
                        <span>Light fixtures and ceiling fans</span>
                      </div>
                      <div className="showcase-detail-check-item">
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
                        <span>Behind and under furniture</span>
                      </div>
                    </div>
                  </div>
                  <div className="showcase-detail-feature-group">
                    <h3 className="showcase-detail-subtitle">Common Add-ons</h3>
                    <div className="showcase-detail-extras">
                      <span className="showcase-detail-extra-tag">
                        {' '}
                        Carpet Steam Clean (+$50)
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="showcase-detail-extra-tag">
                        {' '}
                        Upholstery Clean (+$40)
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="showcase-detail-extra-tag">
                        {' '}
                        Laundry Service (+$30)
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="showcase-detail-meta-row">
                    <div className="showcase-detail-meta-item">
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
                      <div className="showcase-detail-meta-text">
                        <div className="showcase-detail-meta-label">
                          <span>Duration</span>
                        </div>
                        <div className="showcase-detail-meta-value">
                          <span>5-8 hours</span>
                        </div>
                      </div>
                    </div>
                    <div className="showcase-detail-meta-item">
                      <div className="showcase-detail-meta-text">
                        <div className="showcase-detail-meta-label">
                          <span>Starting Price</span>
                        </div>
                        <div className="showcase-detail-meta-value">
                          <span>$180</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="showcase-detail-footer">
                  <button className="btn btn-lg btn-primary">
                    Post Deep Clean Job
                  </button>
                  <button className="btn btn-link">
                    View Sample Checklist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-showcase">
        <div className="gallery-showcase-container">
          <div className="gallery-showcase-header">
            <h2 className="section-title">Real Results From Our Cleaners</h2>
            <p className="section-content">
              {' '}
              See the transformation our professional cleaning services deliver.
              Every job is completed with the highest standards of quality and
              attention to detail.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="gallery-showcase-grid">
            <div className="gallery-showcase-item gallery-showcase-item-tall">
              <img
                alt="Before and after living room cleaning"
                src="https://images.pexels.com/photos/6195275/pexels-photo-6195275.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
                className="gallery-showcase-image"
              />
              <div className="gallery-showcase-overlay">
                <span className="gallery-showcase-label">
                  Living Room Deep Clean
                </span>
              </div>
            </div>
            <div className="gallery-showcase-item">
              <img
                alt="Kitchen cabinet cleaning detail"
                src="https://images.pexels.com/photos/4239032/pexels-photo-4239032.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
                className="gallery-showcase-image"
              />
              <div className="gallery-showcase-overlay">
                <span className="gallery-showcase-label">
                  Kitchen Detailing
                </span>
              </div>
            </div>
            <div className="gallery-showcase-item">
              <img
                alt="Post-party cleanup service"
                src="https://images.pexels.com/photos/4684377/pexels-photo-4684377.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
                className="gallery-showcase-image"
              />
              <div className="gallery-showcase-overlay">
                <span className="gallery-showcase-label">
                  Post-Event Cleanup
                </span>
              </div>
            </div>
            <div className="gallery-showcase-item gallery-showcase-item-wide">
              <img
                alt="Professional vacuum cleaning"
                src="https://images.pexels.com/photos/6195273/pexels-photo-6195273.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
                className="gallery-showcase-image"
              />
              <div className="gallery-showcase-overlay">
                <span className="gallery-showcase-label">
                  Carpet &amp; Floor Care
                </span>
              </div>
            </div>
            <div className="gallery-showcase-item">
              <img
                alt="Professional cleaner with service van"
                src="https://images.pexels.com/photos/6196229/pexels-photo-6196229.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
                className="gallery-showcase-image"
              />
              <div className="gallery-showcase-overlay">
                <span className="gallery-showcase-label">
                  Mobile Service Team
                </span>
              </div>
            </div>
            <div className="gallery-showcase-item gallery-showcase-item-tall">
              <img
                alt="Commercial space cleaning"
                src="https://images.pexels.com/photos/4921570/pexels-photo-4921570.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
                className="gallery-showcase-image"
              />
              <div className="gallery-showcase-overlay">
                <span className="gallery-showcase-label">
                  Office Sanitization
                </span>
              </div>
            </div>
            <div className="gallery-showcase-item">
              <img
                alt="Home cleaning after party"
                src="https://images.pexels.com/photos/4684375/pexels-photo-4684375.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
                className="gallery-showcase-image"
              />
              <div className="gallery-showcase-overlay">
                <span className="gallery-showcase-label">
                  Full Home Refresh
                </span>
              </div>
            </div>
            <div className="gallery-showcase-item">
              <img
                alt="Car interior detailing service"
                src="https://images.pexels.com/photos/6873193/pexels-photo-6873193.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
                className="gallery-showcase-image"
              />
              <div className="gallery-showcase-overlay">
                <span className="gallery-showcase-label">
                  Vehicle Detailing
                </span>
              </div>
            </div>
            <div className="gallery-showcase-item gallery-showcase-item-wide">
              <img
                alt="Cleaning team ready for service"
                src="https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
                className="gallery-showcase-image"
              />
              <div className="gallery-showcase-overlay">
                <span className="gallery-showcase-label">
                  Professional Team
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing-faq">
        <div className="pricing-faq-wrapper">
          <div className="pricing-faq-sidebar">
            <h2 className="section-title">Transparent Pricing</h2>
            <p className="section-content">
              {' '}
              Our pricing is straightforward with no hidden fees. Choose the
              service level that fits your needs and budget.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="pricing-faq-tiers">
              <div className="pricing-faq-tier">
                <div className="pricing-faq-tier-name">
                  <span>Regular Clean</span>
                </div>
                <div className="pricing-faq-tier-price">
                  <span>From $80</span>
                </div>
                <p className="pricing-faq-tier-desc">
                  {' '}
                  Weekly or bi-weekly maintenance cleaning
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="pricing-faq-tier-featured pricing-faq-tier">
                <div className="pricing-faq-tier-badge">
                  <span>Most Popular</span>
                </div>
                <div className="pricing-faq-tier-name">
                  <span>Deep Clean</span>
                </div>
                <div className="pricing-faq-tier-price">
                  <span>From $180</span>
                </div>
                <p className="pricing-faq-tier-desc">
                  {' '}
                  Comprehensive cleaning with all extras
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="pricing-faq-tier">
                <div className="pricing-faq-tier-name">
                  <span>Move-Out</span>
                </div>
                <div className="pricing-faq-tier-price">
                  <span>From $220</span>
                </div>
                <p className="pricing-faq-tier-desc">
                  End-of-lease ready inspection
                </p>
              </div>
            </div>
            <button className="btn btn-secondary">View Full Pricing</button>
          </div>
          <div className="pricing-faq-main">
            <h3 className="pricing-faq-heading">Frequently Asked Questions</h3>
            <div className="pricing-faq-accordion">
              <details className="pricing-faq-item">
                <summary className="pricing-faq-question">
                  <span>
                    What&apos;s included in a regular cleaning service?
                  </span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7l7 7l-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </summary>
                <div className="pricing-faq-answer">
                  <p className="section-content">
                    {' '}
                    Regular cleaning includes dusting all surfaces, vacuuming
                    and mopping floors, bathroom sanitization, kitchen cleaning
                    (counters, stovetop, sink), trash removal, and making beds.
                    It&apos;s perfect for maintaining a clean home on a weekly
                    or bi-weekly schedule.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </details>
              <details className="pricing-faq-item">
                <summary className="pricing-faq-question">
                  <span>How far in advance should I schedule a cleaning?</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7l7 7l-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </summary>
                <div className="pricing-faq-answer">
                  <p className="section-content">
                    {' '}
                    We recommend booking at least 48 hours in advance for
                    regular cleanings. For deep cleans or move-out services, 3-5
                    days notice is preferred. However, we often have same-day
                    availability for urgent requests depending on your location
                    and cleaner availability.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </details>
              <details className="pricing-faq-item">
                <summary className="pricing-faq-question">
                  <span>Do I need to provide cleaning supplies?</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7l7 7l-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </summary>
                <div className="pricing-faq-answer">
                  <p className="section-content">
                    {' '}
                    No, all our cleaners come fully equipped with
                    professional-grade supplies and equipment. If you have
                    specific products you prefer (eco-friendly, hypoallergenic,
                    etc.), you can note this in your job posting and cleaners
                    can accommodate your preferences.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </details>
              <details className="pricing-faq-item">
                <summary className="pricing-faq-question">
                  <span>What if I have pets at home?</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7l7 7l-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </summary>
                <div className="pricing-faq-answer">
                  <p className="section-content">
                    {' '}
                    Many of our cleaners are comfortable working in homes with
                    pets. Simply indicate that you have pets when posting your
                    job, and specify any special requirements (such as keeping
                    pets in a separate room during cleaning). Pet-friendly
                    cleaners will be matched to your request.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </details>
              <details className="pricing-faq-item">
                <summary className="pricing-faq-question">
                  <span>How do I provide access if I&apos;m not home?</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7l7 7l-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </summary>
                <div className="pricing-faq-answer">
                  <p className="section-content">
                    {' '}
                    You can provide access instructions when posting your job.
                    Common methods include leaving a key with a doorman,
                    providing a lockbox code, sharing a digital door code, or
                    arranging for a neighbor to let the cleaner in. All cleaners
                    are background-checked and insured for your peace of mind.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </details>
              <details className="pricing-faq-item">
                <summary className="pricing-faq-question">
                  <span>What&apos;s your cancellation policy?</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7l7 7l-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </summary>
                <div className="pricing-faq-answer">
                  <p className="section-content">
                    {' '}
                    You can cancel or reschedule up to 24 hours before your
                    appointment without penalty. Cancellations made less than 24
                    hours in advance may incur a cancellation fee to compensate
                    the cleaner for their reserved time. Emergency situations
                    are handled on a case-by-case basis.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-showcase">
        <div className="testimonials-showcase-container">
          <div className="testimonials-showcase-header">
            <h2 className="section-title">
              Trusted by Thousands of Happy Customers
            </h2>
            <p className="section-content">
              {' '}
              Join our community of satisfied clients who trust Turno for their
              cleaning needs
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="testimonials-showcase-bento">
            <div className="testimonials-showcase-card-hero testimonials-showcase-card">
              <div className="testimonials-showcase-quote-mark">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
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
              <p className="testimonials-showcase-text">
                {' '}
                The deep clean service transformed my apartment before guests
                arrived. The cleaner was professional, thorough, and even
                cleaned areas I didn&apos;t expect. Absolutely worth every penny
                and I&apos;ve already booked them for monthly service.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonials-showcase-author">
                <div className="testimonials-showcase-author-info">
                  <div className="testimonials-showcase-author-name">
                    <span>Sarah Mitchell</span>
                  </div>
                  <div className="testimonials-showcase-author-role">
                    <span>
                      {' '}
                      Apartment Owner, Montreal
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <div className="testimonials-showcase-rating">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
              </div>
            </div>
            <div className="testimonials-showcase-card">
              <p className="testimonials-showcase-text">
                {' '}
                Perfect for my Airbnb turnovers. Fast, reliable, and they never
                miss a detail. My guests always comment on how spotless the
                place is.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonials-showcase-author">
                <div className="testimonials-showcase-author-info">
                  <div className="testimonials-showcase-author-name">
                    <span>Marcus Chen</span>
                  </div>
                  <div className="testimonials-showcase-author-role">
                    <span>Airbnb Host</span>
                  </div>
                </div>
                <div className="testimonials-showcase-rating">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
              </div>
            </div>
            <div className="testimonials-showcase-card">
              <p className="testimonials-showcase-text">
                {' '}
                The move-out cleaning saved my deposit. The landlord was
                impressed with the condition of the apartment. Highly recommend!
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonials-showcase-author">
                <div className="testimonials-showcase-author-info">
                  <div className="testimonials-showcase-author-name">
                    <span>Jessica Laurent</span>
                  </div>
                  <div className="testimonials-showcase-author-role">
                    <span>Former Tenant</span>
                  </div>
                </div>
                <div className="testimonials-showcase-rating">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
              </div>
            </div>
            <div className="testimonials-showcase-card testimonials-showcase-card-badge">
              <div className="testimonials-showcase-trust-badge">
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
                <div className="testimonials-showcase-badge-content">
                  <div className="testimonials-showcase-badge-title">
                    <span>
                      {' '}
                      Background Checked
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="testimonials-showcase-badge-subtitle">
                    <span>
                      {' '}
                      All cleaners verified
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
            <div className="testimonials-showcase-card testimonials-showcase-card-badge">
              <div className="testimonials-showcase-trust-badge">
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
                <div className="testimonials-showcase-badge-content">
                  <div className="testimonials-showcase-badge-title">
                    <span>
                      {' '}
                      Satisfaction Guaranteed
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="testimonials-showcase-badge-subtitle">
                    <span>
                      {' '}
                      100% quality promise
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
            <div className="testimonials-showcase-card">
              <p className="testimonials-showcase-text">
                {' '}
                Our office has never looked better. The team respects our
                schedule and cleans after hours without disrupting our work.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonials-showcase-author">
                <div className="testimonials-showcase-author-info">
                  <div className="testimonials-showcase-author-name">
                    <span>David Thompson</span>
                  </div>
                  <div className="testimonials-showcase-author-role">
                    <span>Office Manager</span>
                  </div>
                </div>
                <div className="testimonials-showcase-rating">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="services-container2">
        <div className="services-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.hero-services-feature-card, .services-grid-tile, .features-filters-chip, .showcase-detail-card, .gallery-showcase-item, .gallery-showcase-image, .gallery-showcase-overlay, .pricing-faq-tier, .pricing-faq-item, .pricing-faq-question svg, .testimonials-showcase-card {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="services-container4">
        <div className="services-container5">
          <Script
            html={`<script defer data-name="services-interactions">
(function(){
  const priceRangeSlider = document.getElementById("priceRange")
  const priceValueDisplay = document.getElementById("priceValue")

  if (priceRangeSlider && priceValueDisplay) {
    priceRangeSlider.addEventListener("input", (e) => {
      priceValueDisplay.textContent = \`\$\${e.target.value}\`
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Services
