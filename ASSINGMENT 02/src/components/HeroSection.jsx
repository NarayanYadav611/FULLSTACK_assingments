import { useState } from 'react'
import Button from './Button'
import './HeroSection.css'

function HeroSection() {
  const [selectedAudience, setSelectedAudience] = useState('Business')

  const toggleOptions = ['Personal', 'Business']

  return (
    <main className="hero-section" id="top">
      <div className="hero-container">
        {/* Audience Segmented Toggle */}
        <div
          className="segmented-control"
          role="group"
          aria-label="Target audience selector"
        >
          {toggleOptions.map((option) => {
            const isSelected = selectedAudience === option
            return (
              <button
                key={option}
                type="button"
                className={`segmented-btn ${isSelected ? 'active' : ''}`}
                aria-pressed={isSelected}
                onClick={() => setSelectedAudience(option)}
              >
                {option}
              </button>
            )
          })}
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">PayPal Open</h1>

        {/* Subheading */}
        <p className="hero-subheading">One platform for your business needs</p>

        {/* Description */}
        <p className="hero-description">
          PayPal Open unifies your PayPal business solutions to help you get
          paid, get growing, and get ahead.
        </p>

        {/* Hero Action Buttons */}
        <div className="hero-cta-group">
          <Button variant="primary" size="lg" className="hero-cta-btn">
            Sign Up
          </Button>
          <Button variant="secondary" size="lg" className="hero-cta-btn">
            Contact Sales
          </Button>
        </div>
      </div>
    </main>
  )
}

export default HeroSection
