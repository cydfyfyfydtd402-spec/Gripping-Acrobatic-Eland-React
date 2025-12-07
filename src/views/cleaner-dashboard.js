import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './cleaner-dashboard.css'

const CleanerDashboard = (props) => {
  return (
    <div className="cleaner-dashboard-container1">
      <Helmet>
        <title>Cleaner-Dashboard - Gripping Acrobatic Eland</title>
        <meta
          property="og:title"
          content="Cleaner-Dashboard - Gripping Acrobatic Eland"
        />
        <link
          rel="canonical"
          href="https://www.cleanconnectmtl.com/cleaner-dashboard"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="cleaner-dashboard-container2">
        <div className="cleaner-dashboard-container3">
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
      <div className="dashboard-hero">
        <div className="dashboard-hero-wrapper">
          <div className="dashboard-hero-content">
            <div className="dashboard-hero-left">
              <div className="dashboard-hero-profile">
                <div className="dashboard-hero-avatar">
                  <img
                    alt="Cleaner profile"
                    src="https://images.pexels.com/photos/6195130/pexels-photo-6195130.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="dashboard-hero-info">
                  <h1 className="hero-title">Welcome back, Sarah</h1>
                  <div className="dashboard-hero-status">
                    <div className="dashboard-hero-badge dashboard-hero-badge-verified">
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
                      <span>Verified Cleaner</span>
                    </div>
                    <div className="dashboard-hero-rating">
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
                      <span>4.9</span>
                      <span className="dashboard-hero-rating-count">
                        (127 reviews)
                      </span>
                    </div>
                  </div>
                  <p className="dashboard-hero-location">
                    Active in Downtown &amp; West End
                  </p>
                </div>
              </div>
            </div>
            <div className="dashboard-hero-right">
              <div className="dashboard-hero-stats">
                <div className="dashboard-hero-stat-card">
                  <div className="dashboard-hero-stat-icon">
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
                  <div className="dashboard-hero-stat-content">
                    <p className="dashboard-hero-stat-label">
                      This Week Earnings
                    </p>
                    <p className="dashboard-hero-stat-value">$847.50</p>
                    <p className="dashboard-hero-stat-trend-up dashboard-hero-stat-trend">
                      {' '}
                      +12% from last week
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className="dashboard-hero-stat-card">
                  <div className="dashboard-hero-stat-icon">
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
                  <div className="dashboard-hero-stat-content">
                    <p className="dashboard-hero-stat-label">Jobs This Week</p>
                    <p className="dashboard-hero-stat-value">23</p>
                    <p className="dashboard-hero-stat-trend">
                      8 completed, 15 scheduled
                    </p>
                  </div>
                </div>
                <div className="dashboard-hero-stat-card">
                  <div className="dashboard-hero-stat-icon">
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
                  <div className="dashboard-hero-stat-content">
                    <p className="dashboard-hero-stat-label">New Matches</p>
                    <p className="dashboard-hero-stat-value">12</p>
                    <p className="dashboard-hero-stat-trend">
                      Jobs in your area
                    </p>
                  </div>
                </div>
              </div>
              <div className="dashboard-hero-actions">
                <button className="btn btn-lg btn-primary">
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
                  <span>Update Availability</span>
                </button>
                <button className="btn btn-lg btn-secondary">
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
                  <span>View Matches</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="verification-timeline">
        <div className="verification-timeline-wrapper">
          <div className="verification-timeline-header">
            <h2 className="section-title">Verification Progress</h2>
            <div className="verification-timeline-progress-bar">
              <div className="verification-timeline-progress-fill"></div>
            </div>
            <p className="verification-timeline-progress-text">
              3 of 5 steps completed
            </p>
          </div>
          <div className="verification-timeline-line"></div>
          <div className="verification-timeline-content">
            <div className="verification-timeline-item-completed verification-timeline-item verification-timeline-item-left">
              <div className="verification-timeline-marker">
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
              <div className="verification-timeline-card">
                <div className="verification-timeline-step">
                  <span>Step 1</span>
                </div>
                <h3 className="verification-timeline-title">Profile Photo</h3>
                <p className="verification-timeline-description">
                  {' '}
                  Upload a clear, professional photo of yourself
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="verification-timeline-status">
                  <span className="verification-timeline-badge verification-timeline-badge-completed">
                    {' '}
                    Completed
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="verification-timeline-preview">
                  <img
                    alt="Profile photo preview"
                    src="https://images.pexels.com/photos/6195130/pexels-photo-6195130.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
              </div>
            </div>
            <div className="verification-timeline-item-completed verification-timeline-item verification-timeline-item-right">
              <div className="verification-timeline-marker">
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
              <div className="verification-timeline-card">
                <div className="verification-timeline-step">
                  <span>Step 2</span>
                </div>
                <h3 className="verification-timeline-title">Government ID</h3>
                <p className="verification-timeline-description">
                  {' '}
                  Valid driver&apos;s license or passport for identity
                  verification
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="verification-timeline-status">
                  <span className="verification-timeline-badge verification-timeline-badge-completed">
                    {' '}
                    Verified
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <p className="verification-timeline-info">
                  Verified on Dec 15, 2024
                </p>
              </div>
            </div>
            <div className="verification-timeline-item-completed verification-timeline-item verification-timeline-item-left">
              <div className="verification-timeline-marker">
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
              <div className="verification-timeline-card">
                <div className="verification-timeline-step">
                  <span>Step 3</span>
                </div>
                <h3 className="verification-timeline-title">
                  Background Check
                </h3>
                <p className="verification-timeline-description">
                  {' '}
                  Consent for standard background screening
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="verification-timeline-status">
                  <span className="verification-timeline-badge verification-timeline-badge-completed">
                    {' '}
                    Cleared
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <p className="verification-timeline-info">
                  Background check passed
                </p>
              </div>
            </div>
            <div className="verification-timeline-item-active verification-timeline-item verification-timeline-item-right">
              <div className="verification-timeline-marker">
                <span>4</span>
              </div>
              <div className="verification-timeline-card">
                <div className="verification-timeline-step">
                  <span>Step 4</span>
                </div>
                <h3 className="verification-timeline-title">Service Areas</h3>
                <p className="verification-timeline-description">
                  {' '}
                  Select regions and neighborhoods where you want to work
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="verification-timeline-status">
                  <span className="verification-timeline-badge-pending verification-timeline-badge">
                    {' '}
                    Action Required
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <button className="btn btn-primary">
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
                  <span>Select Areas</span>
                </button>
              </div>
            </div>
            <div className="verification-timeline-item-pending verification-timeline-item verification-timeline-item-left">
              <div className="verification-timeline-marker">
                <span>5</span>
              </div>
              <div className="verification-timeline-card">
                <div className="verification-timeline-step">
                  <span>Step 5</span>
                </div>
                <h3 className="verification-timeline-title">
                  Bank Information
                </h3>
                <p className="verification-timeline-description">
                  {' '}
                  Add your bank account details for secure payouts
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="verification-timeline-status">
                  <span className="verification-timeline-badge-pending verification-timeline-badge">
                    {' '}
                    Pending
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <p className="verification-timeline-info">
                  {' '}
                  Complete previous steps first
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="verification-timeline-callout">
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 13h.01M12 6v3M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <div className="verification-timeline-callout-content">
              <h4>Complete verification to unlock full access</h4>
              <p>
                {' '}
                Finish all steps to start accepting jobs and receiving payouts.
                If you need help, check our FAQ or contact support.
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
      <div className="availability-calendar">
        <div className="availability-calendar-wrapper">
          <div className="availability-calendar-container">
            <div className="availability-calendar-sidebar">
              <h2 className="section-title">Your Availability</h2>
              <p className="availability-calendar-description">
                {' '}
                Set your weekly schedule and let clients know when you&apos;re
                ready to work
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="availability-calendar-controls">
                <div className="availability-calendar-toggle">
                  <label className="availability-calendar-toggle-label">
                    <input type="checkbox" checked="true" />
                    <span className="cleaner-dashboard-availability-calendar-toggle-slider"></span>
                    <span>Available This Week</span>
                  </label>
                </div>
                <div className="availability-calendar-mode">
                  <h4>Travel Buffer</h4>
                  <select className="availability-calendar-select">
                    <option value="15">15 minutes</option>
                    <option value="30" selected="true">
                      30 minutes
                    </option>
                    <option value="45">45 minutes</option>
                    <option value="60">60 minutes</option>
                  </select>
                </div>
                <div className="availability-calendar-vacation">
                  <h4>Vacation Dates</h4>
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
                        <path d="M8 2v4m8-4v4"></path>
                        <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                        <path d="M3 10h18"></path>
                      </g>
                    </svg>
                    <span>Set Vacation</span>
                  </button>
                  <div className="availability-calendar-vacation-list">
                    <div className="availability-calendar-vacation-item">
                      <span>Dec 24 - Dec 26, 2024</span>
                      <button className="availability-calendar-vacation-remove">
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary">Save Changes</button>
            </div>
            <div className="availability-calendar-grid">
              <div className="availability-calendar-header">
                <div className="availability-calendar-header-cell">
                  <span>Time</span>
                </div>
                <div className="availability-calendar-header-cell">
                  <span>Monday</span>
                </div>
                <div className="availability-calendar-header-cell">
                  <span>Tuesday</span>
                </div>
                <div className="availability-calendar-header-cell">
                  <span>Wednesday</span>
                </div>
                <div className="availability-calendar-header-cell">
                  <span>Thursday</span>
                </div>
                <div className="availability-calendar-header-cell">
                  <span>Friday</span>
                </div>
                <div className="availability-calendar-header-cell">
                  <span>Saturday</span>
                </div>
                <div className="availability-calendar-header-cell">
                  <span>Sunday</span>
                </div>
              </div>
              <div className="availability-calendar-body">
                <div className="availability-calendar-row">
                  <div className="availability-calendar-time">
                    <span>8:00 AM</span>
                  </div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell"></div>
                  <div className="availability-calendar-cell"></div>
                </div>
                <div className="availability-calendar-row">
                  <div className="availability-calendar-time">
                    <span>10:00 AM</span>
                  </div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell"></div>
                </div>
                <div className="availability-calendar-row">
                  <div className="availability-calendar-time">
                    <span>12:00 PM</span>
                  </div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                </div>
                <div className="availability-calendar-row">
                  <div className="availability-calendar-time">
                    <span>2:00 PM</span>
                  </div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                </div>
                <div className="availability-calendar-row">
                  <div className="availability-calendar-time">
                    <span>4:00 PM</span>
                  </div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell availability-calendar-cell-available"></div>
                  <div className="availability-calendar-cell"></div>
                  <div className="availability-calendar-cell"></div>
                </div>
                <div className="availability-calendar-row">
                  <div className="availability-calendar-time">
                    <span>6:00 PM</span>
                  </div>
                  <div className="availability-calendar-cell"></div>
                  <div className="availability-calendar-cell"></div>
                  <div className="availability-calendar-cell"></div>
                  <div className="availability-calendar-cell"></div>
                  <div className="availability-calendar-cell"></div>
                  <div className="availability-calendar-cell"></div>
                  <div className="availability-calendar-cell"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="job-feed">
        <div className="job-feed-wrapper">
          <div className="job-feed-header">
            <h2 className="section-title">Matched Jobs Near You</h2>
            <div className="job-feed-filters">
              <select className="job-feed-select">
                <option>All Job Types</option>
                <option>Regular Cleaning</option>
                <option>Deep Clean</option>
                <option>Airbnb Turnover</option>
                <option>Move-Out</option>
              </select>
              <select className="job-feed-select">
                <option>Next 7 Days</option>
                <option>Today</option>
                <option>This Week</option>
                <option>Next 2 Weeks</option>
              </select>
            </div>
          </div>
          <div className="job-feed-cards">
            <div className="job-feed-card">
              <div className="job-feed-card-header">
                <div className="job-feed-card-type">
                  <span className="job-feed-card-badge">Regular Cleaning</span>
                </div>
                <div className="job-feed-card-distance">
                  <span>2.3 km away</span>
                </div>
              </div>
              <div className="job-feed-card-image">
                <img
                  alt="Modern apartment kitchen"
                  src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="job-feed-card-content">
                <h3 className="job-feed-card-title">2-Bedroom Apartment</h3>
                <div className="job-feed-card-details">
                  <div className="job-feed-card-detail">
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
                    <span>Tomorrow, Dec 20</span>
                  </div>
                  <div className="job-feed-card-detail">
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
                    <span>10:00 AM - 1:00 PM</span>
                  </div>
                </div>
                <div className="job-feed-card-info">
                  <div className="job-feed-card-info-item">
                    <span className="job-feed-card-info-label">
                      Estimated Duration
                    </span>
                    <span className="job-feed-card-info-value">3 hours</span>
                  </div>
                  <div className="job-feed-card-info-item">
                    <span className="job-feed-card-info-label">Pay Rate</span>
                    <span className="job-feed-card-pay job-feed-card-info-value">
                      {' '}
                      $85.00
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <p className="job-feed-card-description">
                  {' '}
                  Standard cleaning with kitchen and bathrooms. Supplies
                  provided. Pet-friendly home.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="job-feed-card-actions">
                <button className="btn btn-outline">View Details</button>
                <button className="btn btn-primary">Accept Job</button>
              </div>
            </div>
            <div className="job-feed-card">
              <div className="job-feed-card-header">
                <div className="job-feed-card-type">
                  <span className="job-feed-card-badge-premium job-feed-card-badge">
                    {' '}
                    Deep Clean
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="job-feed-card-distance">
                  <span>1.8 km away</span>
                </div>
              </div>
              <div className="job-feed-card-image">
                <img
                  alt="Spacious living room"
                  src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="job-feed-card-content">
                <h3 className="job-feed-card-title">3-Bedroom House</h3>
                <div className="job-feed-card-details">
                  <div className="job-feed-card-detail">
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
                    <span>Dec 21, Friday</span>
                  </div>
                  <div className="job-feed-card-detail">
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
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                </div>
                <div className="job-feed-card-info">
                  <div className="job-feed-card-info-item">
                    <span className="job-feed-card-info-label">
                      Estimated Duration
                    </span>
                    <span className="job-feed-card-info-value">5 hours</span>
                  </div>
                  <div className="job-feed-card-info-item">
                    <span className="job-feed-card-info-label">Pay Rate</span>
                    <span className="job-feed-card-pay job-feed-card-info-value">
                      {' '}
                      $165.00
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <p className="job-feed-card-description">
                  {' '}
                  Deep clean including oven, fridge interior, baseboards. All
                  cleaning products included.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="job-feed-card-actions">
                <button className="btn btn-outline">View Details</button>
                <button className="btn btn-primary">Accept Job</button>
              </div>
            </div>
            <div className="job-feed-card">
              <div className="job-feed-card-header">
                <div className="job-feed-card-type">
                  <span className="job-feed-card-badge">Airbnb Turnover</span>
                </div>
                <div className="job-feed-card-distance">
                  <span>3.1 km away</span>
                </div>
              </div>
              <div className="job-feed-card-image">
                <img
                  alt="Cozy apartment"
                  src="https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="job-feed-card-content">
                <h3 className="job-feed-card-title">Studio Apartment</h3>
                <div className="job-feed-card-details">
                  <div className="job-feed-card-detail">
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
                    <span>Today, 3:00 PM</span>
                  </div>
                  <div className="job-feed-card-detail">
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
                    <span>3:00 PM - 5:00 PM</span>
                  </div>
                </div>
                <div className="job-feed-card-info">
                  <div className="job-feed-card-info-item">
                    <span className="job-feed-card-info-label">
                      Estimated Duration
                    </span>
                    <span className="job-feed-card-info-value">2 hours</span>
                  </div>
                  <div className="job-feed-card-info-item">
                    <span className="job-feed-card-info-label">Pay Rate</span>
                    <span className="job-feed-card-pay job-feed-card-info-value">
                      {' '}
                      $60.00
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <p className="job-feed-card-description">
                  {' '}
                  Quick turnover between guests. Linens provided. Access code
                  will be sent.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="job-feed-card-actions">
                <button className="btn btn-outline">View Details</button>
                <button className="btn btn-primary">Accept Job</button>
              </div>
            </div>
            <div className="job-feed-card">
              <div className="job-feed-card-header">
                <div className="job-feed-card-type">
                  <span className="job-feed-card-badge">Move-Out Clean</span>
                </div>
                <div className="job-feed-card-distance">
                  <span>4.2 km away</span>
                </div>
              </div>
              <div className="job-feed-card-image">
                <img
                  alt="Empty apartment kitchen"
                  src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="job-feed-card-content">
                <h3 className="job-feed-card-title">2-Bedroom Condo</h3>
                <div className="job-feed-card-details">
                  <div className="job-feed-card-detail">
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
                    <span>Dec 22, Saturday</span>
                  </div>
                  <div className="job-feed-card-detail">
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
                    <span>8:00 AM - 12:00 PM</span>
                  </div>
                </div>
                <div className="job-feed-card-info">
                  <div className="job-feed-card-info-item">
                    <span className="job-feed-card-info-label">
                      Estimated Duration
                    </span>
                    <span className="job-feed-card-info-value">4 hours</span>
                  </div>
                  <div className="job-feed-card-info-item">
                    <span className="job-feed-card-info-label">Pay Rate</span>
                    <span className="job-feed-card-pay job-feed-card-info-value">
                      {' '}
                      $125.00
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <p className="job-feed-card-description">
                  {' '}
                  Complete move-out clean for deposit return. Includes
                  appliances and windows.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="job-feed-card-actions">
                <button className="btn btn-outline">View Details</button>
                <button className="btn btn-primary">Accept Job</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="today-schedule">
        <div className="today-schedule-wrapper">
          <div className="today-schedule-container">
            <div className="today-schedule-sidebar">
              <h2 className="section-title">Today&apos;s Schedule</h2>
              <p className="today-schedule-date">Thursday, December 19, 2024</p>
              <div className="today-schedule-summary">
                <div className="today-schedule-summary-item">
                  <span className="today-schedule-summary-value">4</span>
                  <span className="today-schedule-summary-label">
                    Jobs Today
                  </span>
                </div>
                <div className="today-schedule-summary-item">
                  <span className="today-schedule-summary-value">$340</span>
                  <span className="today-schedule-summary-label">
                    Expected Earnings
                  </span>
                </div>
              </div>
              <div className="today-schedule-loading">
                <div className="today-schedule-skeleton"></div>
                <div className="today-schedule-skeleton"></div>
                <div className="today-schedule-skeleton"></div>
              </div>
            </div>
            <div className="today-schedule-timeline">
              <div className="today-schedule-job">
                <div className="today-schedule-job-time">
                  <span className="today-schedule-job-hour">8:00 AM</span>
                  <span className="today-schedule-job-duration">2.5 hrs</span>
                </div>
                <div className="today-schedule-job-card">
                  <div className="today-schedule-job-header">
                    <h3 className="today-schedule-job-title">
                      Downtown Apartment
                    </h3>
                    <span className="today-schedule-job-badge-completed today-schedule-job-badge">
                      {' '}
                      Completed
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="today-schedule-job-details">
                    <div className="today-schedule-job-detail">
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
                      <span>1247 Main St, Apt 302</span>
                    </div>
                    <div className="today-schedule-job-pay">
                      <span>$85.00</span>
                    </div>
                  </div>
                  <div className="today-schedule-job-actions">
                    <button className="btn-sm btn btn-outline">
                      View Receipt
                    </button>
                  </div>
                </div>
              </div>
              <div className="today-schedule-job">
                <div className="today-schedule-job-time">
                  <span className="today-schedule-job-hour">11:00 AM</span>
                  <span className="today-schedule-job-duration">3 hrs</span>
                </div>
                <div className="today-schedule-job-card today-schedule-job-card-active">
                  <div className="today-schedule-job-header">
                    <h3 className="today-schedule-job-title">West End House</h3>
                    <span className="today-schedule-job-badge today-schedule-job-badge-progress">
                      {' '}
                      In Progress
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="today-schedule-job-details">
                    <div className="today-schedule-job-detail">
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
                      <span>856 Oak Avenue</span>
                    </div>
                    <div className="today-schedule-job-pay">
                      <span>$105.00</span>
                    </div>
                  </div>
                  <div className="today-schedule-job-progress">
                    <div className="today-schedule-job-progress-bar">
                      <div className="today-schedule-job-progress-fill"></div>
                    </div>
                    <span className="today-schedule-job-progress-text">
                      {' '}
                      45 minutes remaining
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="today-schedule-job-actions">
                    <button className="btn-sm btn btn-outline">
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
                      <span>Message</span>
                    </button>
                    <button className="btn-sm btn btn-primary">
                      Mark Complete
                    </button>
                  </div>
                </div>
              </div>
              <div className="today-schedule-job">
                <div className="today-schedule-job-time">
                  <span className="today-schedule-job-hour">2:30 PM</span>
                  <span className="today-schedule-job-duration">2 hrs</span>
                </div>
                <div className="today-schedule-job-card">
                  <div className="today-schedule-job-header">
                    <h3 className="today-schedule-job-title">Airbnb Studio</h3>
                    <span className="today-schedule-job-badge today-schedule-job-badge-upcoming">
                      {' '}
                      Upcoming
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="today-schedule-job-details">
                    <div className="today-schedule-job-detail">
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
                      <span>442 Elm Street, #12</span>
                    </div>
                    <div className="today-schedule-job-pay">
                      <span>$60.00</span>
                    </div>
                  </div>
                  <div className="today-schedule-job-actions">
                    <button className="btn-sm btn btn-outline">Navigate</button>
                    <button className="btn-sm btn btn-secondary">
                      Mark Started
                    </button>
                  </div>
                </div>
              </div>
              <div className="today-schedule-job">
                <div className="today-schedule-job-time">
                  <span className="today-schedule-job-hour">5:00 PM</span>
                  <span className="today-schedule-job-duration">2.5 hrs</span>
                </div>
                <div className="today-schedule-job-card">
                  <div className="today-schedule-job-header">
                    <h3 className="today-schedule-job-title">
                      Condo Deep Clean
                    </h3>
                    <span className="today-schedule-job-badge today-schedule-job-badge-upcoming">
                      {' '}
                      Upcoming
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="today-schedule-job-details">
                    <div className="today-schedule-job-detail">
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
                      <span>2190 Park Boulevard</span>
                    </div>
                    <div className="today-schedule-job-pay">
                      <span>$90.00</span>
                    </div>
                  </div>
                  <div className="today-schedule-job-actions">
                    <button className="btn-sm btn btn-outline">Navigate</button>
                    <button className="btn-sm btn btn-secondary">
                      Mark Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="job-details">
        <div className="job-details-wrapper">
          <div className="job-details-container">
            <div className="job-details-sidebar">
              <h2 className="section-title">Job Details</h2>
              <div className="job-details-summary">
                <h3 className="job-details-property">3-Bedroom House</h3>
                <span className="job-details-badge">Deep Clean</span>
                <div className="job-details-info-grid">
                  <div className="job-details-info-item">
                    <span className="job-details-info-label">Date</span>
                    <span className="job-details-info-value">Dec 21, 2024</span>
                  </div>
                  <div className="job-details-info-item">
                    <span className="job-details-info-label">Time</span>
                    <span className="job-details-info-value">
                      9:00 AM - 2:00 PM
                    </span>
                  </div>
                  <div className="job-details-info-item">
                    <span className="job-details-info-label">Duration</span>
                    <span className="job-details-info-value">5 hours</span>
                  </div>
                  <div className="job-details-info-item">
                    <span className="job-details-info-label">Pay</span>
                    <span className="job-details-pay job-details-info-value">
                      {' '}
                      $165.00
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="job-details-map">
                <div className="job-details-map-placeholder">
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
                  <p>Map Preview</p>
                </div>
                <div className="job-details-address">
                  <p>856 Oak Avenue</p>
                  <p>Downtown, City 12345</p>
                  <p>1.8 km from your location</p>
                </div>
              </div>
              <div className="job-details-actions">
                <button className="btn btn-primary">Accept This Job</button>
                <button className="btn btn-outline">
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
                  <span>Message Client</span>
                </button>
              </div>
            </div>
            <div className="job-details-main">
              <details open="true" className="job-details-section">
                <summary className="job-details-section-header">
                  <h4>Cleaning Checklist</h4>
                  <span className="job-details-section-count">
                    0 of 12 completed
                  </span>
                </summary>
                <div className="job-details-checklist">
                  <label className="job-details-checklist-item">
                    <input type="checkbox" />
                    <span>Kitchen: Clean countertops, sink, and stovetop</span>
                  </label>
                  <label className="job-details-checklist-item">
                    <input type="checkbox" />
                    <span>Kitchen: Clean inside oven and microwave</span>
                  </label>
                  <label className="job-details-checklist-item">
                    <input type="checkbox" />
                    <span>Kitchen: Clean inside refrigerator</span>
                  </label>
                  <label className="job-details-checklist-item">
                    <input type="checkbox" />
                    <span>Bathrooms: Clean toilets, sinks, and showers</span>
                  </label>
                  <label className="job-details-checklist-item">
                    <input type="checkbox" />
                    <span>Bathrooms: Clean mirrors and fixtures</span>
                  </label>
                  <label className="job-details-checklist-item">
                    <input type="checkbox" />
                    <span>Living areas: Vacuum all carpets and rugs</span>
                  </label>
                  <label className="job-details-checklist-item">
                    <input type="checkbox" />
                    <span>Living areas: Dust all surfaces and furniture</span>
                  </label>
                  <label className="job-details-checklist-item">
                    <input type="checkbox" />
                    <span>Bedrooms: Change bed linens</span>
                  </label>
                  <label className="job-details-checklist-item">
                    <input type="checkbox" />
                    <span>Bedrooms: Organize and tidy closets</span>
                  </label>
                  <label className="job-details-checklist-item">
                    <input type="checkbox" />
                    <span>All rooms: Clean baseboards</span>
                  </label>
                  <label className="job-details-checklist-item">
                    <input type="checkbox" />
                    <span>Windows: Clean interior windows</span>
                  </label>
                  <label className="job-details-checklist-item">
                    <input type="checkbox" />
                    <span>Final: Take out all trash and recycling</span>
                  </label>
                </div>
              </details>
              <details className="job-details-section">
                <summary className="job-details-section-header">
                  <h4>Access Instructions</h4>
                </summary>
                <div className="job-details-content">
                  <p>
                    Building has secure entry. Use code #4582 to enter main
                    door.
                  </p>
                  <p>Unit is on 2nd floor, apartment 2B on the right.</p>
                  <p>
                    {' '}
                    Key will be under the welcome mat. Please lock up when
                    finished and return key to same location.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <p>Free visitor parking available in lot behind building.</p>
                </div>
              </details>
              <details className="job-details-section">
                <summary className="job-details-section-header">
                  <h4>Special Notes</h4>
                </summary>
                <div className="job-details-content">
                  <p>
                    {' '}
                    All cleaning supplies and equipment are provided in the
                    kitchen closet.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <p>
                    {' '}
                    Please note: There is a friendly cat named Whiskers. He is
                    shy and will likely hide, but please be careful not to let
                    him out.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <p>Linens for bed changes are in the hallway closet.</p>
                  <p>
                    {' '}
                    Client prefers eco-friendly products - these are marked in
                    green.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </details>
              <details className="job-details-section">
                <summary className="job-details-section-header">
                  <h4>Photo Upload</h4>
                </summary>
                <div className="job-details-upload">
                  <div className="job-details-upload-section">
                    <h5>Before Photos</h5>
                    <div className="job-details-upload-area">
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
                      <p>Drop images here or click to upload</p>
                      <span>Up to 10 photos, max 5MB each</span>
                    </div>
                  </div>
                  <div className="job-details-upload-section">
                    <h5>After Photos</h5>
                    <div className="job-details-upload-area">
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
                      <p>Drop images here or click to upload</p>
                      <span>Upload after completing the job</span>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
      <div className="earnings-summary">
        <div className="earnings-summary-wrapper">
          <div className="earnings-summary-container">
            <div className="earnings-summary-sidebar">
              <h2 className="section-title">Earnings &amp; Payouts</h2>
              <p className="earnings-summary-description">
                {' '}
                Track your earnings and manage payout settings
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="earnings-summary-total">
                <span className="earnings-summary-label">Total Earnings</span>
                <span className="earnings-summary-amount">$4,287.50</span>
                <span className="earnings-summary-period">Last 30 days</span>
              </div>
              <div className="earnings-summary-breakdown">
                <div className="earnings-summary-breakdown-item">
                  <span className="earnings-summary-breakdown-label">
                    Completed Jobs
                  </span>
                  <span className="earnings-summary-breakdown-value">87</span>
                </div>
                <div className="earnings-summary-breakdown-item">
                  <span className="earnings-summary-breakdown-label">
                    {' '}
                    Average per Job
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="earnings-summary-breakdown-value">
                    $49.28
                  </span>
                </div>
                <div className="earnings-summary-breakdown-item">
                  <span className="earnings-summary-breakdown-label">
                    Total Hours
                  </span>
                  <span className="earnings-summary-breakdown-value">
                    218.5
                  </span>
                </div>
              </div>
            </div>
            <div className="earnings-summary-main">
              <div className="earnings-summary-payout-card">
                <div className="earnings-summary-payout-header">
                  <h3>Next Payout</h3>
                  <span className="earnings-summary-payout-badge">
                    Scheduled
                  </span>
                </div>
                <div className="earnings-summary-payout-amount">
                  <span>$847.50</span>
                </div>
                <div className="earnings-summary-payout-date">
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
                  <span>December 22, 2024</span>
                </div>
                <p className="earnings-summary-payout-info">
                  {' '}
                  Funds will be deposited to your bank account ending in
                  ••••4892
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="earnings-summary-recent">
                <h3>Recent Payouts</h3>
                <div className="earnings-summary-recent-list">
                  <div className="earnings-summary-recent-item">
                    <div className="earnings-summary-recent-info">
                      <span className="earnings-summary-recent-date">
                        Dec 15, 2024
                      </span>
                      <span className="earnings-summary-recent-jobs">
                        23 jobs
                      </span>
                    </div>
                    <span className="earnings-summary-recent-amount">
                      $1,145.00
                    </span>
                  </div>
                  <div className="earnings-summary-recent-item">
                    <div className="earnings-summary-recent-info">
                      <span className="earnings-summary-recent-date">
                        Dec 8, 2024
                      </span>
                      <span className="earnings-summary-recent-jobs">
                        19 jobs
                      </span>
                    </div>
                    <span className="earnings-summary-recent-amount">
                      $892.50
                    </span>
                  </div>
                  <div className="earnings-summary-recent-item">
                    <div className="earnings-summary-recent-info">
                      <span className="earnings-summary-recent-date">
                        Dec 1, 2024
                      </span>
                      <span className="earnings-summary-recent-jobs">
                        21 jobs
                      </span>
                    </div>
                    <span className="earnings-summary-recent-amount">
                      $1,023.00
                    </span>
                  </div>
                  <div className="earnings-summary-recent-item">
                    <div className="earnings-summary-recent-info">
                      <span className="earnings-summary-recent-date">
                        Nov 24, 2024
                      </span>
                      <span className="earnings-summary-recent-jobs">
                        18 jobs
                      </span>
                    </div>
                    <span className="earnings-summary-recent-amount">
                      $847.50
                    </span>
                  </div>
                </div>
              </div>
              <div className="earnings-summary-actions">
                <button className="btn btn-outline">
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
                  <span>Bank Details</span>
                </button>
                <button className="btn btn-outline">View All Payouts</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="messages-help">
        <div className="messages-help-wrapper">
          <div className="messages-help-header">
            <h2 className="section-title">Messages &amp; Support</h2>
          </div>
          <div className="messages-help-content">
            <div className="messages-help-messages messages-help-card">
              <div className="messages-help-card-header">
                <h3>Recent Conversations</h3>
                <span className="messages-help-badge">3 Unread</span>
              </div>
              <div className="messages-help-thread-list">
                <div className="messages-help-thread-unread messages-help-thread">
                  <div className="messages-help-thread-avatar">
                    <img
                      alt="Client"
                      src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                  </div>
                  <div className="messages-help-thread-content">
                    <div className="messages-help-thread-header">
                      <span className="messages-help-thread-name">
                        David Chen
                      </span>
                      <span className="messages-help-thread-time">2m ago</span>
                    </div>
                    <p className="messages-help-thread-preview">
                      {' '}
                      Thanks for the great cleaning! The place looks amazing.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className="messages-help-thread-unread messages-help-thread">
                  <div className="messages-help-thread-avatar">
                    <img
                      alt="Client"
                      src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                  </div>
                  <div className="messages-help-thread-content">
                    <div className="messages-help-thread-header">
                      <span className="messages-help-thread-name">
                        Emma Wilson
                      </span>
                      <span className="messages-help-thread-time">1h ago</span>
                    </div>
                    <p className="messages-help-thread-preview">
                      {' '}
                      Quick question about tomorrow&apos;s appointment...
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className="messages-help-thread">
                  <div className="messages-help-thread-avatar">
                    <img
                      alt="Client"
                      src="https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                  </div>
                  <div className="messages-help-thread-content">
                    <div className="messages-help-thread-header">
                      <span className="messages-help-thread-name">
                        Michael Rodriguez
                      </span>
                      <span className="messages-help-thread-time">3h ago</span>
                    </div>
                    <p className="messages-help-thread-preview">
                      {' '}
                      I&apos;ll leave the key under the mat as discussed.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className="messages-help-thread-unread messages-help-thread">
                  <div className="messages-help-thread-avatar">
                    <img
                      alt="Client"
                      src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                  </div>
                  <div className="messages-help-thread-content">
                    <div className="messages-help-thread-header">
                      <span className="messages-help-thread-name">
                        Sarah Johnson
                      </span>
                      <span className="messages-help-thread-time">5h ago</span>
                    </div>
                    <p className="messages-help-thread-preview">
                      {' '}
                      Can we reschedule for Friday instead?
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <button className="btn btn-outline">View All Messages</button>
            </div>
            <div className="messages-help-support messages-help-card">
              <div className="messages-help-card-header">
                <h3>Help &amp; Resources</h3>
              </div>
              <div className="messages-help-support-list">
                <a href="#">
                  <div className="messages-help-support-item">
                    <div className="messages-help-support-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 13h.01M12 6v3M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="messages-help-support-content">
                      <h4>Getting Started Guide</h4>
                      <p>Learn the basics of accepting and completing jobs</p>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="messages-help-support-item">
                    <div className="messages-help-support-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 13h.01M12 6v3M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="messages-help-support-content">
                      <h4>Cancellation Policy</h4>
                      <p>Understand when and how to cancel accepted jobs</p>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="messages-help-support-item">
                    <div className="messages-help-support-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 13h.01M12 6v3M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="messages-help-support-content">
                      <h4>Payment &amp; Earnings</h4>
                      <p>How payouts work and when to expect payment</p>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="messages-help-support-item">
                    <div className="messages-help-support-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 13h.01M12 6v3M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="messages-help-support-content">
                      <h4>Safety Guidelines</h4>
                      <p>Best practices for safe and professional service</p>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="messages-help-support-item">
                    <div className="messages-help-support-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 13h.01M12 6v3M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="messages-help-support-content">
                      <h4>Dispute Resolution</h4>
                      <p>How to handle issues or disagreements with clients</p>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="messages-help-support-item">
                    <div className="messages-help-support-icon">
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
                    </div>
                    <div className="messages-help-support-content">
                      <h4>Contact Support</h4>
                      <p>Need help? Our team is here to assist you</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cleaner-dashboard-container4">
        <div className="cleaner-dashboard-container5">
          <Script
            html={`<style>
        @keyframes pulse {0%,100% {box-shadow: 0 0 0 0
        color-mix(in srgb, var(--color-accent) 40%, transparent);}
50% {box-shadow: 0 0 0 12px
        color-mix(in srgb, var(--color-accent) 0%, transparent);}}@keyframes skeleton-loading {0% {background-position: 200% 0;}
100% {background-position: -200% 0;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="cleaner-dashboard-container6">
        <div className="cleaner-dashboard-container7">
          <Script
            html={`<script defer data-name="cleaner-dashboard-interactions">
(function(){
  const checkboxes = document.querySelectorAll(
    '.job-details-checklist-item input[type="checkbox"]'
  )
  const countDisplay = document.querySelector(".job-details-section-count")

  if (checkboxes.length > 0 && countDisplay) {
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const completed = Array.from(checkboxes).filter(
          (cb) => cb.checked
        ).length
        const total = checkboxes.length
        countDisplay.textContent = \`\${completed} of \${total} completed\`
      })
    })
  }

  const availabilityCells = document.querySelectorAll(
    ".availability-calendar-cell"
  )
  availabilityCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      cell.classList.toggle("availability-calendar-cell-available")
    })
  })

  const languageToggle = document.createElement("div")
  languageToggle.className = "language-toggle"
  languageToggle.innerHTML =
    '<button class="language-toggle-btn" data-lang="en">EN</button><button class="language-toggle-btn" data-lang="fr">FR</button>'
  languageToggle.style.cssText =
    "position:fixed;top:20px;right:20px;z-index:1000;display:flex;gap:8px;"
  document.body.appendChild(languageToggle)

  const langButtons = document.querySelectorAll(".language-toggle-btn")
  langButtons.forEach((btn) => {
    btn.style.cssText =
      "padding:8px 16px;background:var(--color-surface-elevated);border:2px solid var(--color-border);border-radius:var(--border-radius-md);color:var(--color-on-surface);cursor:pointer;font-weight:var(--font-weight-medium);transition:all 0.2s ease;"
    btn.addEventListener("click", () => {
      langButtons.forEach((b) => (b.style.borderColor = "var(--color-border)"))
      btn.style.borderColor = "var(--color-primary)"
    })
  })
  langButtons[0].style.borderColor = "var(--color-primary)"
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default CleanerDashboard
