import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container1">
      <Helmet>
        <title>About - Gripping Acrobatic Eland</title>
        <meta property="og:title" content="About - Gripping Acrobatic Eland" />
        <link rel="canonical" href="https://www.cleanconnectmtl.com/about" />
      </Helmet>
      <Navigation></Navigation>
      <div className="about-container2">
        <div className="about-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.hero-title, .hero-subtitle, .hero-cta-group {
  animation: none;
  opacity: 1;
  transform: none;
}
.timeline-milestone {
  animation: none;
  opacity: 1;
  transform: none;
}
.faq-answer {
  animation: none;
}
.mission-hero-cell, .mission-value-cell, .team-card, .coverage-stat-item, .testimonial-card, .cta-final-column {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <section className="hero-section">
        <video
          src="https://videos.pexels.com/video-files/8756813/8756813-hd_1080_2048_25fps.mp4"
          loop="true"
          muted="true"
          autoPlay="true"
          playsInline="true"
          className="hero-video"
        ></video>
        <div className="hero-overlay"></div>
        <div className="about-hero-container">
          <div className="hero-content">
            <h1 className="hero-title about-hero-title">
              {' '}
              Revolutionizing Clean Spaces Through Trust and Technology
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <p className="about-hero-subtitle hero-subtitle">
              {' '}
              Connecting homeowners with verified cleaning professionals across
              your region. Built on transparency, powered by excellence.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="about-hero-cta-group">
              <button className="btn btn-lg btn-primary">
                Explore Our Services
              </button>
              <button className="btn btn-lg btn-outline">
                Become a Cleaner
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-header">
            <h2 className="section-title">Our Mission &amp; Core Values</h2>
            <p className="section-subtitle">
              {' '}
              We&apos;re building more than a marketplace—we&apos;re creating a
              community where quality meets convenience, and trust is the
              foundation.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="mission-bento">
            <div className="mission-hero-cell">
              <div className="mission-hero-content">
                <h3 className="mission-hero-title">
                  Excellence in Every Clean
                </h3>
                <p className="mission-hero-text">
                  {' '}
                  At Turno, we believe every space deserves professional care.
                  Our platform connects you with thoroughly vetted cleaning
                  professionals who share our commitment to quality,
                  reliability, and customer satisfaction. We&apos;re
                  transforming the cleaning industry one job at a time.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="mission-stats">
                  <div className="mission-stat-item">
                    <div className="mission-stat-number">
                      <span>10,000+</span>
                    </div>
                    <div className="mission-stat-label">
                      <span>Verified Cleaners</span>
                    </div>
                  </div>
                  <div className="mission-stat-item">
                    <div className="mission-stat-number">
                      <span>98%</span>
                    </div>
                    <div className="mission-stat-label">
                      <span>Satisfaction Rate</span>
                    </div>
                  </div>
                  <div className="mission-stat-item">
                    <div className="mission-stat-number">
                      <span>500K+</span>
                    </div>
                    <div className="mission-stat-label">
                      <span>Jobs Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mission-value-cell mission-value-trust">
              <div className="mission-value-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
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
              <h4 className="mission-value-title">Trust &amp; Safety</h4>
              <p className="mission-value-text">
                {' '}
                Every cleaner undergoes rigorous background checks,
                verification, and training to ensure your peace of mind.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="mission-value-cell mission-value-care">
              <div className="mission-value-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h4 className="mission-value-title">Customer Care</h4>
              <p className="mission-value-text">
                {' '}
                Your satisfaction is our priority. We provide 24/7 support and
                guarantee quality on every job.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="mission-value-cell mission-value-pay">
              <div className="mission-value-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
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
              <h4 className="mission-value-title">Fair Pay</h4>
              <p className="mission-value-text">
                {' '}
                Transparent pricing with no hidden fees. Cleaners receive
                competitive compensation and timely payments.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="mission-value-cell mission-value-sustain">
              <div className="mission-value-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </g>
                </svg>
              </div>
              <h4 className="mission-value-title">Sustainability</h4>
              <p className="mission-value-text">
                {' '}
                We promote eco-friendly cleaning practices and sustainable
                solutions for a healthier planet.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="timeline-section">
        <div className="about-timeline-container">
          <div className="about-timeline-header">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              {' '}
              From humble beginnings to serving thousands of homes and
              businesses across the region.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="about-timeline-track">
            <div className="timeline-milestone">
              <div className="timeline-milestone-date">
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
                <span>January 2020</span>
              </div>
              <div className="timeline-milestone-content">
                <h3 className="timeline-milestone-title">Company Founded</h3>
                <p className="timeline-milestone-text">
                  {' '}
                  Turno was born from a simple vision: connecting people who
                  need cleaning services with professionals who deliver
                  exceptional results. Started in a small office with just three
                  team members.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="timeline-milestone">
              <div className="timeline-milestone-date">
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
                <span>June 2020</span>
              </div>
              <div className="timeline-milestone-content">
                <h3 className="timeline-milestone-title">
                  Verification System Launched
                </h3>
                <p className="timeline-milestone-text">
                  {' '}
                  Implemented comprehensive background checks and verification
                  process to ensure every cleaner meets our rigorous safety and
                  quality standards. This became the foundation of trust on our
                  platform.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="timeline-milestone">
              <div className="timeline-milestone-date">
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
                <span>March 2021</span>
              </div>
              <div className="timeline-milestone-content">
                <h3 className="timeline-milestone-title">Platform Goes Live</h3>
                <p className="timeline-milestone-text">
                  {' '}
                  Officially launched our web and mobile platforms, making it
                  easy for clients to post jobs and cleaners to find work.
                  Completed first 1,000 jobs in the initial three months.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="timeline-milestone">
              <div className="timeline-milestone-date">
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
                <span>September 2022</span>
              </div>
              <div className="timeline-milestone-content">
                <h3 className="timeline-milestone-title">Regional Expansion</h3>
                <p className="timeline-milestone-text">
                  {' '}
                  Expanded service coverage to 15 major cities and surrounding
                  areas. Onboarded 5,000+ verified cleaners to meet growing
                  demand across diverse markets.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="timeline-milestone">
              <div className="timeline-milestone-date">
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
                <span>April 2024</span>
              </div>
              <div className="timeline-milestone-content">
                <h3 className="timeline-milestone-title">Coverage Milestone</h3>
                <p className="timeline-milestone-text">
                  {' '}
                  Achieved nationwide coverage with 10,000+ verified cleaners
                  serving over 50 regions. Celebrated 500,000 successful jobs
                  completed with a 98% satisfaction rate.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="timeline-milestone-future timeline-milestone">
              <div className="timeline-milestone-date">
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
                <span>2025 &amp; Beyond</span>
              </div>
              <div className="timeline-milestone-content">
                <h3 className="timeline-milestone-title">
                  The Future of Clean
                </h3>
                <p className="timeline-milestone-text">
                  {' '}
                  Continuing innovation with AI-powered matching, expanded
                  service offerings, international expansion, and enhanced
                  cleaner benefits. Join us as we shape the future of
                  professional cleaning.
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
      </section>
      <section className="team-section">
        <div className="team-header">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            {' '}
            The passionate people behind Turno, dedicated to transforming the
            cleaning industry.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
        </div>
        <div className="team-masonry">
          <div className="team-card-tall team-card">
            <img
              alt="Sarah Chen"
              src="https://images.pexels.com/photos/9462614/pexels-photo-9462614.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
              className="team-card-image"
            />
            <div className="team-card-content">
              <h3 className="team-card-name">Sarah Chen</h3>
              <p className="team-card-role">Chief Executive Officer</p>
              <p className="team-card-bio">
                {' '}
                Former tech executive with 15 years experience scaling
                platforms. Sarah founded Turno to bring transparency and trust
                to the cleaning services industry.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="team-card">
            <img
              alt="Marcus Johnson"
              src="https://images.pexels.com/photos/6200780/pexels-photo-6200780.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
              className="team-card-image"
            />
            <div className="team-card-content">
              <h3 className="team-card-name">Marcus Johnson</h3>
              <p className="team-card-role">Chief Operations Officer</p>
              <p className="team-card-bio">
                {' '}
                Operations expert specializing in marketplace logistics and
                quality assurance systems.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="team-card team-card-wide">
            <img
              alt="Elena Rodriguez"
              src="https://images.pexels.com/photos/8774360/pexels-photo-8774360.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
              className="team-card-image"
            />
            <div className="team-card-content">
              <h3 className="team-card-name">Elena Rodriguez</h3>
              <p className="team-card-role">Head of Cleaner Success</p>
              <p className="team-card-bio">
                {' '}
                Dedicated to empowering cleaners with training, resources, and
                career growth opportunities. Elena ensures every professional on
                our platform thrives.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="team-card">
            <img
              alt="David Park"
              src="https://images.pexels.com/photos/9462733/pexels-photo-9462733.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
              className="team-card-image"
            />
            <div className="team-card-content">
              <h3 className="team-card-name">David Park</h3>
              <p className="team-card-role">Chief Technology Officer</p>
              <p className="team-card-bio">
                {' '}
                Software architect building scalable, secure systems that power
                seamless connections.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="team-card-tall team-card">
            <img
              alt="Amanda Foster"
              src="https://images.pexels.com/photos/6196222/pexels-photo-6196222.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
              className="team-card-image"
            />
            <div className="team-card-content">
              <h3 className="team-card-name">Amanda Foster</h3>
              <p className="team-card-role">Head of Customer Experience</p>
              <p className="team-card-bio">
                {' '}
                Customer advocate with a passion for exceptional service. Amanda
                leads our support team to deliver world-class experiences for
                every client.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="team-card">
            <img
              alt="James Wilson"
              src="https://images.pexels.com/photos/9462188/pexels-photo-9462188.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
              className="team-card-image"
            />
            <div className="team-card-content">
              <h3 className="team-card-name">James Wilson</h3>
              <p className="team-card-role">Safety &amp; Compliance Director</p>
              <p className="team-card-bio">
                {' '}
                Ensures rigorous verification standards and maintains platform
                safety protocols.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="team-card team-card-wide">
            <img
              alt="Maya Patel"
              src="https://images.pexels.com/photos/6195131/pexels-photo-6195131.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
              className="team-card-image"
            />
            <div className="team-card-content">
              <h3 className="team-card-name">Maya Patel</h3>
              <p className="team-card-role">Marketing Director</p>
              <p className="team-card-bio">
                {' '}
                Creative strategist connecting our brand with communities
                nationwide. Maya&apos;s campaigns highlight the real stories
                behind every clean home.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="team-card">
            <img
              alt="Chris Martinez"
              src="https://images.pexels.com/photos/6196678/pexels-photo-6196678.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
              className="team-card-image"
            />
            <div className="team-card-content">
              <h3 className="team-card-name">Chris Martinez</h3>
              <p className="team-card-role">Product Manager</p>
              <p className="team-card-bio">
                {' '}
                Drives product innovation and user-centric design for both
                mobile and web platforms.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="coverage-section">
        <div className="coverage-container">
          <div className="coverage-content">
            <div className="coverage-text">
              <h2 className="section-title">Where We Serve</h2>
              <p className="section-subtitle">
                {' '}
                Turno connects clients and cleaners across major metropolitan
                areas and surrounding regions.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="coverage-stats-list">
                <div className="coverage-stat-item">
                  <div className="coverage-stat-icon">
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
                  <div className="coverage-stat-info">
                    <div className="coverage-stat-number">
                      <span>50+</span>
                    </div>
                    <div className="coverage-stat-label">
                      <span>Regions Served</span>
                    </div>
                  </div>
                </div>
                <div className="coverage-stat-item">
                  <div className="coverage-stat-icon">
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle r="4" cx="9" cy="7"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="coverage-stat-info">
                    <div className="coverage-stat-number">
                      <span>10,000+</span>
                    </div>
                    <div className="coverage-stat-label">
                      <span>Active Cleaners</span>
                    </div>
                  </div>
                </div>
                <div className="coverage-stat-item">
                  <div className="coverage-stat-icon">
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
                  <div className="coverage-stat-info">
                    <div className="coverage-stat-number">
                      <span>500K+</span>
                    </div>
                    <div className="coverage-stat-label">
                      <span>Jobs Completed</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="coverage-expansion">
                <h3 className="coverage-expansion-title">Expanding Soon</h3>
                <p className="coverage-expansion-text">
                  {' '}
                  We&apos;re constantly growing our service areas. Don&apos;t
                  see your region? Request coverage and be the first to know
                  when Turno arrives in your area.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button className="btn btn-secondary">Request Coverage</button>
              </div>
            </div>
            <div className="coverage-map">
              <div className="coverage-map-placeholder">
                <svg
                  width="64"
                  xmlns="http://www.w3.org/2000/svg"
                  height="64"
                  viewBox="0 0 24 24"
                  className="coverage-map-icon"
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
                <p className="coverage-map-text">
                  {' '}
                  Interactive coverage map displaying active service regions
                  across North America
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="coverage-regions">
                <div className="coverage-region-badge">
                  <span>New York Metro</span>
                </div>
                <div className="coverage-region-badge">
                  <span>Los Angeles</span>
                </div>
                <div className="coverage-region-badge">
                  <span>Chicago</span>
                </div>
                <div className="coverage-region-badge">
                  <span>San Francisco Bay</span>
                </div>
                <div className="coverage-region-badge">
                  <span>Boston</span>
                </div>
                <div className="coverage-region-badge">
                  <span>Seattle</span>
                </div>
                <div className="coverage-region-badge">
                  <span>Miami</span>
                </div>
                <div className="coverage-region-badge">
                  <span>Dallas</span>
                </div>
                <div className="coverage-region-badge">
                  <span>+42 More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="about-testimonials-container">
          <div className="testimonials-header">
            <h2 className="section-title">What People Say About Us</h2>
            <p className="section-subtitle">
              {' '}
              Real stories from clients and cleaners who trust Turno every day.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="about-testimonials-masonry">
            <div className="testimonial-card">
              <div className="testimonial-rating">
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
              <p className="testimonial-text">
                {' '}
                &quot;Turno has been a game-changer for my Airbnb business. I
                can schedule turnover cleanings with confidence, and the
                cleaners are always professional and thorough. The platform
                makes everything so easy!&quot;
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonial-author">
                <div className="testimonial-author-info">
                  <div className="testimonial-author-name">
                    <span>Jennifer Martinez</span>
                  </div>
                  <div className="testimonial-author-role">
                    <span>Airbnb Host</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card-highlight testimonial-card">
              <div className="testimonial-badge">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
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
              <div className="testimonial-rating">
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
              <p className="testimonial-text">
                {' '}
                &quot;I&apos;ve been cleaning professionally for 8 years, and
                Turno has given me the flexibility I always wanted. I can choose
                jobs near my home, set my own schedule, and the pay is always on
                time. The verification process made me feel valued and
                safe.&quot;
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonial-author">
                <div className="testimonial-author-info">
                  <div className="testimonial-author-name">
                    <span>Maria Santos</span>
                  </div>
                  <div className="testimonial-author-role">
                    <span>Professional Cleaner</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
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
              <p className="testimonial-text">
                {' '}
                &quot;As a busy professional, I needed a reliable cleaning
                service for my condo. Turno connected me with an amazing cleaner
                who understands exactly what I need. Booking is seamless!&quot;
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonial-author">
                <div className="testimonial-author-info">
                  <div className="testimonial-author-name">
                    <span>Robert Chang</span>
                  </div>
                  <div className="testimonial-author-role">
                    <span>Condo Owner</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-badge">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
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
              <div className="testimonial-rating">
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
              <p className="testimonial-text">
                {' '}
                &quot;The transparency and fair pay model drew me to Turno. I
                know exactly what I&apos;m earning before accepting a job, and
                clients appreciate my attention to detail. This platform treats
                cleaners with respect.&quot;
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonial-author">
                <div className="testimonial-author-info">
                  <div className="testimonial-author-name">
                    <span>Lisa Thompson</span>
                  </div>
                  <div className="testimonial-author-role">
                    <span>Professional Cleaner</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card-trust testimonial-card">
              <div className="testimonial-trust-header">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
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
                <h3 className="testimonial-trust-title">Trust &amp; Safety</h3>
              </div>
              <div className="testimonial-trust-list">
                <div className="testimonial-trust-item">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
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
                  <span>Comprehensive Background Checks</span>
                </div>
                <div className="testimonial-trust-item">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
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
                  <span>Secure Payment Processing</span>
                </div>
                <div className="testimonial-trust-item">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
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
                  <span>ID Verification Required</span>
                </div>
                <div className="testimonial-trust-item">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
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
                  <span>24/7 Customer Support</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
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
              <p className="testimonial-text">
                {' '}
                &quot;I manage multiple properties and Turno has simplified my
                life. The cleaners are reliable, the pricing is transparent, and
                I can track everything from one dashboard. Highly
                recommend!&quot;
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonial-author">
                <div className="testimonial-author-info">
                  <div className="testimonial-author-name">
                    <span>David Kim</span>
                  </div>
                  <div className="testimonial-author-role">
                    <span>Property Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="faq-content-wrapper">
          <div className="faq-intro">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              {' '}
              Find answers to common questions about safety, verification, and
              our platform.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="faq-accordion">
            <details className="faq-item">
              <summary className="faq-question">
                <span>How does Turno verify cleaners?</span>
              </summary>
              <div className="faq-answer">
                <p className="section-content">
                  {' '}
                  Every cleaner goes through a comprehensive verification
                  process including background checks, ID verification, and
                  reference validation. We verify employment history, conduct
                  criminal background screenings, and ensure all cleaners meet
                  our professional standards before they can accept jobs on the
                  platform.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">
                <span>
                  {' '}
                  Is payment secure on the platform?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </summary>
              <div className="faq-answer">
                <p className="section-content">
                  {' '}
                  Yes, all payments are processed through our secure payment
                  gateway with bank-level encryption. Clients pay through the
                  platform, and cleaners receive payment within 24-48 hours
                  after job completion. We never share your financial
                  information with other users.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">
                <span>
                  {' '}
                  What happens if I need to cancel a job?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </summary>
              <div className="faq-answer">
                <p className="section-content">
                  {' '}
                  We understand that plans change. You can cancel a job up to 24
                  hours before the scheduled time without penalty. Cancellations
                  within 24 hours may incur a small fee to compensate the
                  cleaner for their reserved time. Emergency cancellations are
                  handled case-by-case by our support team.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">
                <span>
                  {' '}
                  How do you ensure quality of service?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </summary>
              <div className="faq-answer">
                <p className="section-content">
                  {' '}
                  Quality is our priority. Clients rate cleaners after each job,
                  and we monitor these ratings closely. Cleaners with
                  consistently low ratings receive additional training or may be
                  removed from the platform. We also have a satisfaction
                  guarantee—if you&apos;re not happy with the service,
                  we&apos;ll make it right.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">
                <span>
                  {' '}
                  What if something gets damaged during cleaning?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </summary>
              <div className="faq-answer">
                <p className="section-content">
                  {' '}
                  All cleaners on Turno are covered by our insurance policy for
                  accidental damage. Report any incidents within 24 hours
                  through the platform, and our claims team will work with you
                  to resolve the issue fairly and quickly.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">
                <span>
                  {' '}
                  Can I request the same cleaner for recurring jobs?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </summary>
              <div className="faq-answer">
                <p className="section-content">
                  {' '}
                  Absolutely! Once you find a cleaner you love, you can request
                  them for all your future jobs. Many of our clients build
                  long-term relationships with their preferred cleaners through
                  our recurring booking feature.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </details>
          </div>
          <div className="faq-contact-teaser">
            <div className="faq-contact-icon">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle r="4" cx="9" cy="7"></circle>
                </g>
              </svg>
            </div>
            <h3 className="faq-contact-title">Still have questions?</h3>
            <p className="faq-contact-text">
              {' '}
              Our support team is here to help you 24/7. Get in touch and
              we&apos;ll respond within an hour.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <button className="btn btn-primary">Contact Support</button>
          </div>
        </div>
      </section>
      <section className="cta-final-section">
        <div className="cta-final-wrapper">
          <div className="cta-final-content">
            <h2 className="section-title">Ready to Join Turno?</h2>
            <p className="section-subtitle">
              {' '}
              Whether you&apos;re looking for professional cleaning services or
              want to start earning as a cleaner, Turno makes it easy.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="cta-final-columns">
              <div className="cta-final-column">
                <div className="cta-final-icon">
                  <svg
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle r="4" cx="9" cy="7"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="cta-final-column-title">For Clients</h3>
                <p className="cta-final-column-text">
                  {' '}
                  Post your cleaning job in minutes and connect with verified
                  professionals in your area.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button className="btn btn-lg btn-primary">Post a Job</button>
              </div>
              <div className="cta-final-column">
                <div className="cta-final-icon">
                  <svg
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
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
                <h3 className="cta-final-column-title">For Cleaners</h3>
                <p className="cta-final-column-text">
                  {' '}
                  Set your schedule, choose your jobs, and earn competitive pay
                  with fair, transparent pricing.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <button className="btn btn-lg btn-secondary">
                  Become a Cleaner
                </button>
              </div>
            </div>
          </div>
          <div className="cta-final-image">
            <img
              alt="Modern office space"
              src="https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <div className="about-container4">
        <div className="about-container5">
          <Script
            html={`<style>
        @keyframes heroFadeUp {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes timelineFadeIn {to {opacity: 1;
transform: translateX(0);}}@keyframes faqSlideDown {from {opacity: 0;
transform: translateY(-10px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="about-container6">
        <div className="about-container7">
          <Script
            html={`<script defer data-name="about-interactions">
(function(){
  const heroVideo = document.querySelector(".hero-video")
  if (heroVideo) {
    heroVideo.play().catch(() => {})
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }

  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateX(0)"
      }
    })
  }, observerOptions)

  const timelineMilestones = document.querySelectorAll(".timeline-milestone")
  timelineMilestones.forEach((milestone) => {
    animateOnScroll.observe(milestone)
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

export default About
