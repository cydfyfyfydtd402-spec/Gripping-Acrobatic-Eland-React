import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './client-dashboard-post-a-job-manage-jobs.css'

const ClientDashboardPostAJobManageJobs = (props) => {
  return (
    <div className="client-dashboard-post-a-job-manage-jobs-container1">
      <Helmet>
        <title>
          Client-Dashboard-Post-a-Job-Manage-Jobs - Gripping Acrobatic Eland
        </title>
        <meta
          property="og:title"
          content="Client-Dashboard-Post-a-Job-Manage-Jobs - Gripping Acrobatic Eland"
        />
        <link
          rel="canonical"
          href="https://www.cleanconnectmtl.com/client-dashboard-post-a-job-manage-jobs"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="dashboard-overview">
        <div className="dashboard-overview-hero">
          <div className="dashboard-overview-content">
            <div className="dashboard-overview-header">
              <div className="dashboard-overview-greeting">
                <h1 className="hero-title">Welcome back, Sarah</h1>
                <p className="section-content">
                  {' '}
                  Manage your cleaning jobs and track progress in real-time
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="dashboard-overview-language">
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
                <span className="dashboard-overview-lang-label">English</span>
              </div>
            </div>
            <div className="dashboard-overview-stats">
              <div className="dashboard-overview-stat-card">
                <div className="dashboard-overview-stat-icon">
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
                <div className="dashboard-overview-stat-info">
                  <span className="dashboard-overview-stat-value">12</span>
                  <span className="dashboard-overview-stat-label">
                    Active Jobs
                  </span>
                </div>
              </div>
              <div className="dashboard-overview-stat-card">
                <div className="dashboard-overview-stat-icon">
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
                <div className="dashboard-overview-stat-info">
                  <span className="dashboard-overview-stat-value">5</span>
                  <span className="dashboard-overview-stat-label">
                    This Week
                  </span>
                </div>
              </div>
              <div className="dashboard-overview-stat-card">
                <div className="dashboard-overview-stat-icon">
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
                <div className="dashboard-overview-stat-info">
                  <span className="dashboard-overview-stat-value">3</span>
                  <span className="dashboard-overview-stat-label">Pending</span>
                </div>
              </div>
              <div className="dashboard-overview-stat-card">
                <div className="dashboard-overview-stat-icon">
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
                </div>
                <div className="dashboard-overview-stat-info">
                  <span className="dashboard-overview-stat-value">47</span>
                  <span className="dashboard-overview-stat-label">
                    Completed
                  </span>
                </div>
              </div>
            </div>
            <div className="dashboard-overview-cta">
              <button className="btn btn-lg btn-primary dashboard-overview-post-btn">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 12h14m-7-7v14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>
                  {' '}
                  Post a Cleaning Job
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </button>
              <p className="dashboard-overview-cta-subtitle">
                {' '}
                Quick and easy 6-step process
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="dashboard-overview-visual">
            <img
              alt="Professional cleaning team ready to work"
              src="https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="dashboard-overview-image"
            />
            <div className="dashboard-overview-visual-overlay"></div>
          </div>
        </div>
      </div>
      <section className="post-job-wizard">
        <div className="post-job-wizard-container">
          <div className="post-job-wizard-intro">
            <h2 className="section-title">Post a Job in 6 Easy Steps</h2>
            <p className="section-content">
              {' '}
              Complete the wizard to publish your cleaning job and connect with
              verified professionals
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="post-job-wizard-grid">
            <div className="post-job-wizard-step">
              <div className="post-job-wizard-step-number">
                <span>1</span>
              </div>
              <div className="post-job-wizard-step-content">
                <h3 className="post-job-wizard-step-title">Property Details</h3>
                <p className="post-job-wizard-step-desc">
                  {' '}
                  Select property type, size, rooms, and bathrooms
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="post-job-wizard-step-fields">
                  <span className="post-job-wizard-field-tag">
                    Property type
                  </span>
                  <span className="post-job-wizard-field-tag">Size (m²)</span>
                  <span className="post-job-wizard-field-tag">Rooms</span>
                </div>
              </div>
            </div>
            <div className="post-job-wizard-step">
              <div className="post-job-wizard-step-number">
                <span>2</span>
              </div>
              <div className="post-job-wizard-step-content">
                <h3 className="post-job-wizard-step-title">
                  Address &amp; Access
                </h3>
                <p className="post-job-wizard-step-desc">
                  {' '}
                  Full address, access codes, parking information, and region
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="post-job-wizard-step-fields">
                  <span className="post-job-wizard-field-tag">
                    Street address
                  </span>
                  <span className="post-job-wizard-field-tag">City</span>
                  <span className="post-job-wizard-field-tag">Postal code</span>
                </div>
              </div>
            </div>
            <div className="post-job-wizard-step post-job-wizard-step-large">
              <div className="post-job-wizard-step-number">
                <span>3</span>
              </div>
              <div className="post-job-wizard-step-content">
                <h3 className="post-job-wizard-step-title">
                  Cleaning Type &amp; Extras
                </h3>
                <p className="post-job-wizard-step-desc">
                  {' '}
                  Choose service type and additional options like oven, fridge,
                  cabinets, or windows
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="post-job-wizard-step-options">
                  <div className="post-job-wizard-option-card">
                    <span className="post-job-wizard-option-label">
                      Regular Clean
                    </span>
                  </div>
                  <div className="post-job-wizard-option-card">
                    <span className="post-job-wizard-option-label">
                      Deep Clean
                    </span>
                  </div>
                  <div className="post-job-wizard-option-card">
                    <span className="post-job-wizard-option-label">
                      Move-Out
                    </span>
                  </div>
                  <div className="post-job-wizard-option-card">
                    <span className="post-job-wizard-option-label">
                      Airbnb Turnover
                    </span>
                  </div>
                  <div className="post-job-wizard-option-card">
                    <span className="post-job-wizard-option-label">
                      Windows
                    </span>
                  </div>
                  <div className="post-job-wizard-option-card">
                    <span className="post-job-wizard-option-label">Office</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-job-wizard-step">
              <div className="post-job-wizard-step-number">
                <span>4</span>
              </div>
              <div className="post-job-wizard-step-content">
                <h3 className="post-job-wizard-step-title">
                  Schedule &amp; Recurrence
                </h3>
                <p className="post-job-wizard-step-desc">
                  {' '}
                  Preferred date and time window, one-time or recurring schedule
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="post-job-wizard-step-fields">
                  <span className="post-job-wizard-field-tag">Date</span>
                  <span className="post-job-wizard-field-tag">Time window</span>
                  <span className="post-job-wizard-field-tag">Recurrence</span>
                </div>
              </div>
            </div>
            <div className="post-job-wizard-step">
              <div className="post-job-wizard-step-number">
                <span>5</span>
              </div>
              <div className="post-job-wizard-step-content">
                <h3 className="post-job-wizard-step-title">
                  Photos &amp; Notes
                </h3>
                <p className="post-job-wizard-step-desc">
                  {' '}
                  Upload before photos, add notes, specify pets or supplies
                  available
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="post-job-wizard-step-fields">
                  <span className="post-job-wizard-field-tag">
                    Photos (up to 10)
                  </span>
                  <span className="post-job-wizard-field-tag">
                    Special notes
                  </span>
                  <span className="post-job-wizard-field-tag">
                    Pets present?
                  </span>
                </div>
              </div>
            </div>
            <div className="post-job-wizard-step">
              <div className="post-job-wizard-step-number">
                <span>6</span>
              </div>
              <div className="post-job-wizard-step-content">
                <h3 className="post-job-wizard-step-title">
                  Budget &amp; Review
                </h3>
                <p className="post-job-wizard-step-desc">
                  {' '}
                  Set budget, add optional tip, review all details and publish
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="post-job-wizard-step-actions">
                  <button className="btn btn-primary">
                    Review &amp; Publish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="manage-jobs">
        <div className="manage-jobs-container">
          <div className="manage-jobs-header">
            <h2 className="section-title">Manage Jobs</h2>
            <div className="manage-jobs-filters">
              <div className="manage-jobs-search">
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
                    <path d="m21 21l-4.34-4.34"></path>
                    <circle r="8" cx="11" cy="11"></circle>
                  </g>
                </svg>
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="manage-jobs-search-input"
                />
              </div>
              <button className="btn manage-jobs-filter-btn btn-outline">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M2 5h20M6 12h12m-9 7h6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>
                  {' '}
                  Filters
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </button>
            </div>
          </div>
          <div className="manage-jobs-grid">
            <div className="manage-jobs-card">
              <img
                alt="Clean apartment interior"
                src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="manage-jobs-card-image"
              />
              <div className="manage-jobs-card-content">
                <div className="manage-jobs-card-header">
                  <span className="manage-jobs-card-badge manage-jobs-card-badge-accepted">
                    {' '}
                    Accepted
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="manage-jobs-card-type">Deep Clean</span>
                </div>
                <h3 className="manage-jobs-card-title">
                  Downtown Apartment Clean
                </h3>
                <div className="manage-jobs-card-details">
                  <div className="manage-jobs-card-detail">
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
                    <span>Jan 28, 2025</span>
                  </div>
                  <div className="manage-jobs-card-detail">
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
                    <span>09:00 - 13:00</span>
                  </div>
                  <div className="manage-jobs-card-detail">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>Downtown</span>
                  </div>
                </div>
                <div className="manage-jobs-card-cleaner">
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
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cx="12" cy="7"></circle>
                    </g>
                  </svg>
                  <span className="manage-jobs-card-cleaner-name">
                    Marie L.
                  </span>
                </div>
                <div className="manage-jobs-card-actions">
                  <button className="btn-sm btn btn-outline">
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
                        <path d="m21 21l-4.34-4.34"></path>
                        <circle r="8" cx="11" cy="11"></circle>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      View
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </button>
                  <button className="btn-sm btn btn-outline">
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
                        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      Edit
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
            <div className="manage-jobs-card">
              <img
                alt="Modern kitchen interior"
                src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="manage-jobs-card-image"
              />
              <div className="manage-jobs-card-content">
                <div className="manage-jobs-card-header">
                  <span className="manage-jobs-card-badge manage-jobs-card-badge-pending">
                    {' '}
                    Pending
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="manage-jobs-card-type">Regular Clean</span>
                </div>
                <h3 className="manage-jobs-card-title">
                  Modern Kitchen &amp; Living Room
                </h3>
                <div className="manage-jobs-card-details">
                  <div className="manage-jobs-card-detail">
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
                    <span>Jan 30, 2025</span>
                  </div>
                  <div className="manage-jobs-card-detail">
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
                    <span>14:00 - 17:00</span>
                  </div>
                  <div className="manage-jobs-card-detail">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>Westside</span>
                  </div>
                </div>
                <div className="manage-jobs-card-cleaner manage-jobs-card-cleaner-empty">
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
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cx="12" cy="7"></circle>
                    </g>
                  </svg>
                  <span className="manage-jobs-card-cleaner-name">
                    {' '}
                    Awaiting acceptance
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="manage-jobs-card-actions">
                  <button className="btn-sm btn btn-outline">
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
                        <path d="m21 21l-4.34-4.34"></path>
                        <circle r="8" cx="11" cy="11"></circle>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      View
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </button>
                  <button className="btn-sm btn btn-outline">
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
                        <rect
                          x="8"
                          y="8"
                          rx="2"
                          ry="2"
                          width="14"
                          height="14"
                        ></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      Duplicate
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
            <div className="manage-jobs-card">
              <img
                alt="Spacious living room"
                src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="manage-jobs-card-image"
              />
              <div className="manage-jobs-card-content">
                <div className="manage-jobs-card-header">
                  <span className="manage-jobs-card-badge manage-jobs-card-badge-progress">
                    {' '}
                    In Progress
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="manage-jobs-card-type">Move-Out</span>
                </div>
                <h3 className="manage-jobs-card-title">
                  Full House Move-Out Service
                </h3>
                <div className="manage-jobs-card-details">
                  <div className="manage-jobs-card-detail">
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
                    <span>Today</span>
                  </div>
                  <div className="manage-jobs-card-detail">
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
                    <span>08:00 - 15:00</span>
                  </div>
                  <div className="manage-jobs-card-detail">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>Northside</span>
                  </div>
                </div>
                <div className="manage-jobs-card-cleaner">
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
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cx="12" cy="7"></circle>
                    </g>
                  </svg>
                  <span className="manage-jobs-card-cleaner-name">
                    Thomas K.
                  </span>
                </div>
                <div className="manage-jobs-card-actions">
                  <button className="btn-sm btn btn-outline">
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
                        <path d="m21 21l-4.34-4.34"></path>
                        <circle r="8" cx="11" cy="11"></circle>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      View
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </button>
                  <button className="btn-sm btn btn-primary">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Message
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
            <div className="manage-jobs-card">
              <img
                alt="Cozy minimalist living room"
                src="https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="manage-jobs-card-image"
              />
              <div className="manage-jobs-card-content">
                <div className="manage-jobs-card-header">
                  <span className="manage-jobs-card-badge-completed manage-jobs-card-badge">
                    {' '}
                    Completed
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="manage-jobs-card-type">Airbnb Turnover</span>
                </div>
                <h3 className="manage-jobs-card-title">
                  Airbnb Quick Turnover
                </h3>
                <div className="manage-jobs-card-details">
                  <div className="manage-jobs-card-detail">
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
                    <span>Jan 25, 2025</span>
                  </div>
                  <div className="manage-jobs-card-detail">
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
                    <span>10:00 - 12:00</span>
                  </div>
                  <div className="manage-jobs-card-detail">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>Eastside</span>
                  </div>
                </div>
                <div className="manage-jobs-card-cleaner">
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
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cx="12" cy="7"></circle>
                    </g>
                  </svg>
                  <span className="manage-jobs-card-cleaner-name">
                    Sophie M.
                  </span>
                </div>
                <div className="manage-jobs-card-actions">
                  <button className="btn-sm btn btn-outline">
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
                        <path d="m21 21l-4.34-4.34"></path>
                        <circle r="8" cx="11" cy="11"></circle>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      View
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </button>
                  <button className="btn-sm btn btn-outline">
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
                        <rect
                          x="8"
                          y="8"
                          rx="2"
                          ry="2"
                          width="14"
                          height="14"
                        ></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      Duplicate
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
            <div className="manage-jobs-card">
              <img
                alt="Contemporary living room"
                src="https://images.pexels.com/photos/5243990/pexels-photo-5243990.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="manage-jobs-card-image"
              />
              <div className="manage-jobs-card-content">
                <div className="manage-jobs-card-header">
                  <span className="manage-jobs-card-badge manage-jobs-card-badge-pending">
                    {' '}
                    Pending
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="manage-jobs-card-type">Windows</span>
                </div>
                <h3 className="manage-jobs-card-title">
                  Window Cleaning Service
                </h3>
                <div className="manage-jobs-card-details">
                  <div className="manage-jobs-card-detail">
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
                    <span>Feb 2, 2025</span>
                  </div>
                  <div className="manage-jobs-card-detail">
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
                    <span>11:00 - 14:00</span>
                  </div>
                  <div className="manage-jobs-card-detail">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>Southside</span>
                  </div>
                </div>
                <div className="manage-jobs-card-cleaner manage-jobs-card-cleaner-empty">
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
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cx="12" cy="7"></circle>
                    </g>
                  </svg>
                  <span className="manage-jobs-card-cleaner-name">
                    {' '}
                    Awaiting acceptance
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="manage-jobs-card-actions">
                  <button className="btn-sm btn btn-outline">
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
                        <path d="m21 21l-4.34-4.34"></path>
                        <circle r="8" cx="11" cy="11"></circle>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      View
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </button>
                  <button className="btn-sm btn btn-outline">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Cancel
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
            <div className="manage-jobs-card">
              <img
                alt="Modern kitchen with wooden accents"
                src="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="manage-jobs-card-image"
              />
              <div className="manage-jobs-card-content">
                <div className="manage-jobs-card-header">
                  <span className="manage-jobs-card-badge manage-jobs-card-badge-accepted">
                    {' '}
                    Accepted
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="manage-jobs-card-type">Office</span>
                </div>
                <h3 className="manage-jobs-card-title">
                  Office Space Deep Clean
                </h3>
                <div className="manage-jobs-card-details">
                  <div className="manage-jobs-card-detail">
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
                    <span>Feb 5, 2025</span>
                  </div>
                  <div className="manage-jobs-card-detail">
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
                    <span>17:00 - 21:00</span>
                  </div>
                  <div className="manage-jobs-card-detail">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>Business District</span>
                  </div>
                </div>
                <div className="manage-jobs-card-cleaner">
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
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cx="12" cy="7"></circle>
                    </g>
                  </svg>
                  <span className="manage-jobs-card-cleaner-name">
                    Elena R.
                  </span>
                </div>
                <div className="manage-jobs-card-actions">
                  <button className="btn-sm btn btn-outline">
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
                        <path d="m21 21l-4.34-4.34"></path>
                        <circle r="8" cx="11" cy="11"></circle>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      View
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </button>
                  <button className="btn-sm btn btn-outline">
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
                        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      Edit
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
          </div>
        </div>
      </section>
      <div className="job-detail">
        <div className="job-detail-hero">
          <img
            alt="Bright minimalist living room"
            src="https://images.pexels.com/photos/34992757/pexels-photo-34992757.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="job-detail-hero-image"
          />
          <div className="job-detail-hero-overlay"></div>
          <div className="job-detail-hero-content">
            <div className="job-detail-hero-header">
              <h2 className="section-title">Downtown Apartment Clean</h2>
              <span className="job-detail-status-badge job-detail-status-accepted">
                {' '}
                Accepted
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <p className="job-detail-hero-type">
              {' '}
              Deep Clean • 3 Bedroom, 2 Bathroom • 120 m²
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
        </div>
        <div className="job-detail-content">
          <div className="job-detail-main">
            <div className="job-detail-section">
              <h3 className="job-detail-section-title">Job Details</h3>
              <div className="job-detail-info-grid">
                <div className="job-detail-info-item">
                  <span className="job-detail-info-label">Property Type</span>
                  <span className="job-detail-info-value">Apartment</span>
                </div>
                <div className="job-detail-info-item">
                  <span className="job-detail-info-label">Size</span>
                  <span className="job-detail-info-value">120 m²</span>
                </div>
                <div className="job-detail-info-item">
                  <span className="job-detail-info-label">Rooms</span>
                  <span className="job-detail-info-value">3 Bedrooms</span>
                </div>
                <div className="job-detail-info-item">
                  <span className="job-detail-info-label">Bathrooms</span>
                  <span className="job-detail-info-value">2</span>
                </div>
                <div className="job-detail-info-item">
                  <span className="job-detail-info-label">Cleaning Type</span>
                  <span className="job-detail-info-value">Deep Clean</span>
                </div>
                <div className="job-detail-info-item">
                  <span className="job-detail-info-label">Extras</span>
                  <span className="job-detail-info-value">
                    {' '}
                    Inside oven, Inside fridge, Windows
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="job-detail-section">
              <h3 className="job-detail-section-title">Schedule</h3>
              <div className="job-detail-schedule">
                <div className="job-detail-schedule-item">
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
                  <div className="job-detail-schedule-info">
                    <span className="job-detail-schedule-label">Date</span>
                    <span className="job-detail-schedule-value">
                      {' '}
                      Tuesday, January 28, 2025
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <div className="job-detail-schedule-item">
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
                  <div className="job-detail-schedule-info">
                    <span className="job-detail-schedule-label">
                      Time Window
                    </span>
                    <span className="job-detail-schedule-value">
                      09:00 AM - 01:00 PM
                    </span>
                  </div>
                </div>
                <div className="job-detail-schedule-item">
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
                  <div className="job-detail-schedule-info">
                    <span className="job-detail-schedule-label">
                      Recurrence
                    </span>
                    <span className="job-detail-schedule-value">One-time</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="job-detail-section">
              <h3 className="job-detail-section-title">Address &amp; Access</h3>
              <div className="job-detail-address">
                <div className="job-detail-address-info">
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
                  <div className="job-detail-address-text">
                    <span className="job-detail-address-street">
                      {' '}
                      1234 Main Street, Apt 5B
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="job-detail-address-city">
                      {' '}
                      Downtown, City Name, 12345
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <div className="job-detail-access-notes">
                  <span className="job-detail-access-label">Access Notes:</span>
                  <span className="job-detail-access-value">
                    {' '}
                    Building code: #5678. Parking available in visitor lot.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="job-detail-map-placeholder">
                  <span className="job-detail-map-text">Map View</span>
                </div>
              </div>
            </div>
            <div className="job-detail-section">
              <h3 className="job-detail-section-title">Photos</h3>
              <div className="job-detail-photos">
                <img
                  alt="Kitchen area"
                  src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="job-detail-photo"
                />
                <img
                  alt="Living room"
                  src="https://images.pexels.com/photos/7031616/pexels-photo-7031616.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="job-detail-photo"
                />
                <img
                  alt="Bathroom"
                  src="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="job-detail-photo"
                />
                <img
                  alt="Dining area"
                  src="https://images.pexels.com/photos/5570226/pexels-photo-5570226.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="job-detail-photo"
                />
              </div>
            </div>
            <div className="job-detail-section">
              <h3 className="job-detail-section-title">Special Instructions</h3>
              <p className="job-detail-instructions">
                {' '}
                Please use eco-friendly cleaning products. Pet-friendly home
                with one cat. Supplies are available under the kitchen sink.
                Please lock door when finished and leave keys in mailbox.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="job-detail-tags">
                <span className="job-detail-tag">Pets present</span>
                <span className="job-detail-tag">Supplies provided</span>
              </div>
            </div>
          </div>
          <div className="job-detail-sidebar">
            <div className="job-detail-cleaner-card">
              <h3 className="job-detail-sidebar-title">Assigned Cleaner</h3>
              <div className="job-detail-cleaner-profile">
                <div className="job-detail-cleaner-avatar">
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
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cx="12" cy="7"></circle>
                    </g>
                  </svg>
                </div>
                <div className="job-detail-cleaner-info">
                  <span className="job-detail-cleaner-name">Marie L.</span>
                  <div className="job-detail-cleaner-rating">
                    <span className="job-detail-cleaner-rating-value">4.9</span>
                    <span className="job-detail-cleaner-rating-count">
                      (127 reviews)
                    </span>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary job-detail-message-btn">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>
                  {' '}
                  Message Cleaner
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </button>
            </div>
            <div className="job-detail-timeline-card">
              <h3 className="job-detail-sidebar-title">Activity Timeline</h3>
              <div className="job-detail-timeline">
                <div className="job-detail-timeline-item">
                  <div className="job-detail-timeline-dot-active job-detail-timeline-dot"></div>
                  <div className="job-detail-timeline-content">
                    <span className="job-detail-timeline-title">
                      Job accepted
                    </span>
                    <span className="job-detail-timeline-date">
                      Jan 26, 10:45 AM
                    </span>
                  </div>
                </div>
                <div className="job-detail-timeline-item">
                  <div className="job-detail-timeline-dot"></div>
                  <div className="job-detail-timeline-content">
                    <span className="job-detail-timeline-title">
                      Job posted
                    </span>
                    <span className="job-detail-timeline-date">
                      Jan 26, 09:30 AM
                    </span>
                  </div>
                </div>
                <div className="job-detail-timeline-item">
                  <div className="job-detail-timeline-dot"></div>
                  <div className="job-detail-timeline-content">
                    <span className="job-detail-timeline-title">
                      Draft created
                    </span>
                    <span className="job-detail-timeline-date">
                      Jan 25, 04:15 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="job-detail-actions-card">
              <h3 className="job-detail-sidebar-title">Actions</h3>
              <div className="job-detail-action-buttons">
                <button className="btn btn-outline">
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
                      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                    </g>
                  </svg>
                  <span>
                    {' '}
                    Edit Job
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </button>
                <button className="btn btn-outline">
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
                      <rect
                        x="8"
                        y="8"
                        rx="2"
                        ry="2"
                        width="14"
                        height="14"
                      ></rect>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                    </g>
                  </svg>
                  <span>
                    {' '}
                    Duplicate Job
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </button>
                <button className="btn job-detail-cancel-btn btn-outline">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Cancel Job
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
        </div>
      </div>
      <div className="messaging-center">
        <div className="messaging-center-left">
          <div className="messaging-center-header">
            <h2 className="section-title">Messages</h2>
            <button className="btn-sm btn btn-primary">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14m-7-7v14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>
                {' '}
                New
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </button>
          </div>
          <div className="messaging-center-search">
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
                <path d="m21 21l-4.34-4.34"></path>
                <circle r="8" cx="11" cy="11"></circle>
              </g>
            </svg>
            <input
              type="text"
              placeholder="Search conversations..."
              className="messaging-center-search-input"
            />
          </div>
          <div className="messaging-center-conversations">
            <div className="messaging-center-conversation-active messaging-center-conversation">
              <div className="messaging-center-conversation-avatar">
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
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="12" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <div className="messaging-center-conversation-info">
                <div className="messaging-center-conversation-header">
                  <span className="messaging-center-conversation-name">
                    Marie L.
                  </span>
                  <span className="messaging-center-conversation-time">
                    2m ago
                  </span>
                </div>
                <p className="messaging-center-conversation-preview">
                  {' '}
                  I&apos;ll be there at 9 AM sharp. See you tomorrow!
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="messaging-center-conversation-badge">
                <span>2</span>
              </div>
            </div>
            <div className="messaging-center-conversation">
              <div className="messaging-center-conversation-avatar">
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
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="12" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <div className="messaging-center-conversation-info">
                <div className="messaging-center-conversation-header">
                  <span className="messaging-center-conversation-name">
                    Thomas K.
                  </span>
                  <span className="messaging-center-conversation-time">
                    1h ago
                  </span>
                </div>
                <p className="messaging-center-conversation-preview">
                  {' '}
                  Job completed! Uploaded photos for your review.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="messaging-center-conversation">
              <div className="messaging-center-conversation-avatar">
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
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="12" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <div className="messaging-center-conversation-info">
                <div className="messaging-center-conversation-header">
                  <span className="messaging-center-conversation-name">
                    Sophie M.
                  </span>
                  <span className="messaging-center-conversation-time">
                    3h ago
                  </span>
                </div>
                <p className="messaging-center-conversation-preview">
                  {' '}
                  Thank you for the great review!
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="messaging-center-conversation">
              <div className="messaging-center-conversation-avatar">
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
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="12" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <div className="messaging-center-conversation-info">
                <div className="messaging-center-conversation-header">
                  <span className="messaging-center-conversation-name">
                    Elena R.
                  </span>
                  <span className="messaging-center-conversation-time">
                    5h ago
                  </span>
                </div>
                <p className="messaging-center-conversation-preview">
                  {' '}
                  I&apos;ve accepted your office cleaning job.
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
        <div className="messaging-center-right">
          <div className="messaging-center-thread-header">
            <div className="messaging-center-thread-user">
              <div className="messaging-center-thread-avatar">
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
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="12" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <div className="messaging-center-thread-user-info">
                <span className="messaging-center-thread-name">Marie L.</span>
                <span className="messaging-center-thread-status">
                  Active now
                </span>
              </div>
            </div>
            <button className="btn-sm btn btn-outline">
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
              <span>
                {' '}
                View Job
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </button>
          </div>
          <div className="messaging-center-thread">
            <div className="messaging-center-message messaging-center-message-received">
              <div className="messaging-center-message-avatar">
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
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="12" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <div className="messaging-center-message-content">
                <p className="messaging-center-message-text">
                  {' '}
                  Hi! I&apos;ve accepted your cleaning job for tomorrow. Just
                  wanted to confirm the building access code is #5678?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <span className="messaging-center-message-time">10:15 AM</span>
              </div>
            </div>
            <div className="messaging-center-message messaging-center-message-sent">
              <div className="messaging-center-message-content">
                <p className="messaging-center-message-text">
                  {' '}
                  Yes, that&apos;s correct! The code is #5678. Please park in
                  the visitor lot on the north side of the building.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <span className="messaging-center-message-time">10:18 AM</span>
              </div>
            </div>
            <div className="messaging-center-message messaging-center-message-received">
              <div className="messaging-center-message-avatar">
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
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="12" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <div className="messaging-center-message-content">
                <p className="messaging-center-message-text">
                  {' '}
                  Perfect! I&apos;ll be there at 9 AM sharp. See you tomorrow!
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <span className="messaging-center-message-time">10:20 AM</span>
              </div>
            </div>
          </div>
          <div className="messaging-center-compose">
            <input
              type="text"
              placeholder="Type your message..."
              className="messaging-center-compose-input"
            />
            <button className="btn messaging-center-send-btn btn-primary">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>
                {' '}
                Send
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </button>
          </div>
          <div className="messaging-center-notifications">
            <div className="messaging-center-notification-icon">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="messaging-center-notification-badge">
                <span>3</span>
              </div>
            </div>
            <span className="messaging-center-notification-label">
              Notifications
            </span>
          </div>
        </div>
      </div>
      <div className="billing-dashboard">
        <div className="billing-dashboard-hero">
          <div className="billing-dashboard-summary">
            <h2 className="section-title">Billing Overview</h2>
            <div className="billing-dashboard-stats">
              <div className="billing-dashboard-stat">
                <span className="billing-dashboard-stat-label">
                  Total Spent
                </span>
                <span className="billing-dashboard-stat-value">$2,847</span>
              </div>
              <div className="billing-dashboard-stat">
                <span className="billing-dashboard-stat-label">Pending</span>
                <span className="billing-dashboard-stat-value">$189</span>
              </div>
              <div className="billing-dashboard-stat">
                <span className="billing-dashboard-stat-label">This Month</span>
                <span className="billing-dashboard-stat-value">$456</span>
              </div>
            </div>
            <button className="btn billing-dashboard-payment-btn btn-primary">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14m-7-7v14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>
                {' '}
                Add Payment Method
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </button>
          </div>
        </div>
        <div className="billing-dashboard-content">
          <div className="billing-dashboard-invoices">
            <div className="billing-dashboard-section-header">
              <h3 className="billing-dashboard-section-title">
                Recent Invoices
              </h3>
              <button className="btn-sm btn btn-outline">View All</button>
            </div>
            <div className="billing-dashboard-invoice-list">
              <div className="billing-dashboard-invoice">
                <div className="billing-dashboard-invoice-icon">
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
                <div className="billing-dashboard-invoice-info">
                  <span className="billing-dashboard-invoice-title">
                    {' '}
                    Downtown Apartment Clean
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="billing-dashboard-invoice-date">
                    Jan 28, 2025
                  </span>
                </div>
                <span className="billing-dashboard-invoice-amount">
                  $125.00
                </span>
                <span className="billing-dashboard-invoice-status billing-dashboard-invoice-paid">
                  {' '}
                  Paid
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <button className="btn-sm btn btn-outline">
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
                      <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <path d="m7 10l5 5l5-5"></path>
                    </g>
                  </svg>
                </button>
              </div>
              <div className="billing-dashboard-invoice">
                <div className="billing-dashboard-invoice-icon">
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
                <div className="billing-dashboard-invoice-info">
                  <span className="billing-dashboard-invoice-title">
                    {' '}
                    Airbnb Quick Turnover
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="billing-dashboard-invoice-date">
                    Jan 25, 2025
                  </span>
                </div>
                <span className="billing-dashboard-invoice-amount">$89.00</span>
                <span className="billing-dashboard-invoice-status billing-dashboard-invoice-paid">
                  {' '}
                  Paid
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <button className="btn-sm btn btn-outline">
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
                      <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <path d="m7 10l5 5l5-5"></path>
                    </g>
                  </svg>
                </button>
              </div>
              <div className="billing-dashboard-invoice">
                <div className="billing-dashboard-invoice-icon">
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
                <div className="billing-dashboard-invoice-info">
                  <span className="billing-dashboard-invoice-title">
                    {' '}
                    Full House Move-Out Service
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="billing-dashboard-invoice-date">
                    Jan 27, 2025
                  </span>
                </div>
                <span className="billing-dashboard-invoice-amount">
                  $189.00
                </span>
                <span className="billing-dashboard-invoice-status billing-dashboard-invoice-pending">
                  {' '}
                  Pending
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <button className="btn-sm btn btn-outline">
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
                      <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <path d="m7 10l5 5l5-5"></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="billing-dashboard-cards">
            <div className="billing-dashboard-card">
              <div className="billing-dashboard-card-header">
                <h4 className="billing-dashboard-card-title">
                  Payment Methods
                </h4>
                <button className="btn-sm btn btn-link">Manage</button>
              </div>
              <div className="billing-dashboard-payment-method">
                <div className="billing-dashboard-payment-icon">
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
                <div className="billing-dashboard-payment-info">
                  <span className="billing-dashboard-payment-name">
                    {' '}
                    Visa ending in 4242
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="billing-dashboard-payment-expiry">
                    Expires 12/25
                  </span>
                </div>
                <span className="billing-dashboard-payment-badge">Default</span>
              </div>
            </div>
            <div className="billing-dashboard-card">
              <div className="billing-dashboard-card-header">
                <h4 className="billing-dashboard-card-title">Export Options</h4>
              </div>
              <div className="billing-dashboard-export-buttons">
                <button className="btn btn-outline">
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
                      <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <path d="m7 10l5 5l5-5"></path>
                    </g>
                  </svg>
                  <span>
                    {' '}
                    Download PDF
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </button>
                <button className="btn btn-outline">
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
                      <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <path d="m7 10l5 5l5-5"></path>
                    </g>
                  </svg>
                  <span>
                    {' '}
                    Export CSV
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
        </div>
      </div>
      <div className="support-section">
        <div className="support-section-container">
          <div className="support-section-header">
            <h2 className="section-title">Support &amp; Resources</h2>
            <p className="section-content">
              {' '}
              Get help, find answers, and learn how to make the most of Turno
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="support-section-timeline">
            <div className="support-section-item support-section-item-left">
              <div className="support-section-content">
                <h3 className="support-section-item-title">
                  Frequently Asked Questions
                </h3>
                <details className="support-section-accordion">
                  <summary className="support-section-accordion-trigger">
                    <span>
                      {' '}
                      How do I post my first job?
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
                  <p className="support-section-accordion-content">
                    {' '}
                    Click the &quot;Post a Cleaning Job&quot; button from your
                    dashboard. Follow the 6-step wizard to enter property
                    details, address, cleaning type, schedule, photos, and
                    budget. Review everything and hit Publish!
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </details>
                <details className="support-section-accordion">
                  <summary className="support-section-accordion-trigger">
                    <span>
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
                  <p className="support-section-accordion-content">
                    {' '}
                    We accept all major credit cards (Visa, Mastercard, American
                    Express) and debit cards. Payments are processed securely
                    through our payment provider.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </details>
                <details className="support-section-accordion">
                  <summary className="support-section-accordion-trigger">
                    <span>
                      {' '}
                      Can I cancel or reschedule a job?
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
                  <p className="support-section-accordion-content">
                    {' '}
                    Yes, you can cancel or reschedule up to 24 hours before the
                    scheduled time. Go to the job detail page and use the action
                    buttons. Cancellations within 24 hours may incur a fee.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </details>
              </div>
              <div className="support-section-marker"></div>
            </div>
            <div className="support-section-item support-section-item-right">
              <div className="support-section-marker"></div>
              <div className="support-section-content">
                <h3 className="support-section-item-title">Contact Support</h3>
                <p className="section-content">
                  {' '}
                  Need help? Our support team is available Monday to Friday, 9
                  AM to 6 PM EST
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="support-section-contact-methods">
                  <div className="support-section-contact-method">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>Live Chat</span>
                  </div>
                  <div className="support-section-contact-method">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>support@turno.com</span>
                  </div>
                </div>
                <button className="btn btn-primary">Contact Support</button>
              </div>
            </div>
            <div className="support-section-item support-section-item-left">
              <div className="support-section-content">
                <h3 className="support-section-item-title">Empty State</h3>
                <div className="support-section-empty-state">
                  <div className="support-section-empty-icon">
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
                  <h4 className="support-section-empty-title">
                    No Active Jobs
                  </h4>
                  <p className="support-section-empty-description">
                    {' '}
                    You don&apos;t have any active cleaning jobs. Post your
                    first job to get started!
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <button className="btn btn-primary">
                    Post Your First Job
                  </button>
                </div>
              </div>
              <div className="support-section-marker"></div>
            </div>
            <div className="support-section-item support-section-item-right">
              <div className="support-section-marker"></div>
              <div className="support-section-content">
                <h3 className="support-section-item-title">Quick Links</h3>
                <div className="support-section-links">
                  <a href="#">
                    <div className="support-section-link">
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
                          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"></path>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path>
                        </g>
                      </svg>
                      <span>Help Center</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="support-section-link">
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
                          <rect
                            x="3"
                            y="3"
                            rx="2"
                            ry="2"
                            width="18"
                            height="18"
                          ></rect>
                          <circle r="2" cx="9" cy="9"></circle>
                          <path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                        </g>
                      </svg>
                      <span>Terms of Service</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="support-section-link">
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
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="support-section-link">
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
                          <rect
                            x="3"
                            y="4"
                            rx="2"
                            width="18"
                            height="18"
                          ></rect>
                          <path d="M3 10h18"></path>
                        </g>
                      </svg>
                      <span>Community Guidelines</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="client-dashboard-post-a-job-manage-jobs-container2">
        <div className="client-dashboard-post-a-job-manage-jobs-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
* {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="client-dashboard-post-a-job-manage-jobs-container4">
        <div className="client-dashboard-post-a-job-manage-jobs-container5">
          <Script
            html={`<script defer data-name="dashboard-interactions">
(function(){
  const accordions = document.querySelectorAll(".support-section-accordion")
  accordions.forEach((accordion) => {
    const trigger = accordion.querySelector(
      ".support-section-accordion-trigger"
    )
    trigger.addEventListener("click", () => {
      accordions.forEach((other) => {
        if (other !== accordion && other.hasAttribute("open")) {
          other.removeAttribute("open")
        }
      })
    })
  })

  const filterBtn = document.querySelector(".manage-jobs-filter-btn")
  if (filterBtn) {
    filterBtn.addEventListener("click", () => {
      alert("Filter panel would open here (UI placeholder)")
    })
  }

  const exportButtons = document.querySelectorAll(
    ".billing-dashboard-export-buttons .btn"
  )
  exportButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const btnText = btn.textContent.trim()
      alert(\`\${btnText} action triggered (UI placeholder)\`)
    })
  })

  const messageInput = document.querySelector(".messaging-center-compose-input")
  const sendBtn = document.querySelector(".messaging-center-send-btn")
  if (messageInput && sendBtn) {
    sendBtn.addEventListener("click", () => {
      if (messageInput.value.trim()) {
        alert("Message sent (UI placeholder)")
        messageInput.value = ""
      }
    })
    messageInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && messageInput.value.trim()) {
        alert("Message sent (UI placeholder)")
        messageInput.value = ""
      }
    })
  }

  const viewJobBtns = document.querySelectorAll(
    ".manage-jobs-card-actions .btn"
  )
  viewJobBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const action = btn.textContent.trim()
      alert(\`\${action} action triggered (UI placeholder)\`)
    })
  })

  const postJobBtn = document.querySelector(".dashboard-overview-post-btn")
  if (postJobBtn) {
    postJobBtn.addEventListener("click", () => {
      alert("Post a Job wizard would launch here (UI placeholder)")
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

export default ClientDashboardPostAJobManageJobs
