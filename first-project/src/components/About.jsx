import React from "react"

export default function About() {
  return (
    <section className="main-section container">
      <div className="about">
        <h2 className="main--title">About</h2>
        <p className="main--text">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className="interests">
        <h2 className="main--title">Interests</h2>
        <p className="main--text">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </section>
  );
}
