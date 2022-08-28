import React from 'react'
import photo from '../assets/photo.png'
import email from '../assets/email.png'
import linkedIn from '../assets/linkedin.png'

export default function Intro() {
  return (
    <section className="intro-section">
      <img src={photo} alt="a profile of woman" />
      <div className="intro--info container">
        <h1 className="intro--name">Laura Smith</h1>
        <p className="intro--position">Frontend Developer</p>
        <p className="intro-site">laurasmith.website</p>
        <div className="intro-links">
          <a href="#" className="email">
            <img src={email} alt="email icon" />
            <span>Email</span>
          </a>
          <a href="#" className="linkedIn">
            <img src={linkedIn} alt="LinkedIn icon" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}