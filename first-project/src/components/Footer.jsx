import React from "react"
import twitter from "../assets/TwitterIcon.png"
import facebook from "../assets/FacebookIcon.png"
import instagram from "../assets/InstagramIcon.png"
import github from "../assets/GitHubIcon.png"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer--links">
        <a href="#">
          <img src={twitter} alt="twitter icon" />
        </a>
        <a href="#">
          <img src={facebook} alt="facebook icon" />
        </a>
        <a href="#">
          <img src={instagram} alt="instagram icon" />
        </a>
        <a href="#">
          <img src={github} alt="github icon" />
        </a>
      </div>
    </footer>
  );
}
