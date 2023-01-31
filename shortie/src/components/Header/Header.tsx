import { useState } from 'react';
import Button from '../../ui/Button/Button';

import './header.css';

function Header() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="navbar container">
      <p className="navbar-header">Shortie</p>

      <nav className={`navbar-nav ${isShown ? 'isActive' : ''}`}>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="#">Features</a>
          </li>
          <li className="nav-item">
            <a href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a href="#">Resources</a>
          </li>
        </ul>
        <hr className="nav-divider" />
        <ul className="nav-items">
          <li className="nav-item">
            <a href="#">Login</a>
          </li>
          <li className="nav-item">
            <Button class="rounded">Sign Up</Button>
          </li>
        </ul>
      </nav>

      <button className="hamburger" onClick={() => setIsShown((prev) => !prev)}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
    </div>
  );
}

export default Header;
