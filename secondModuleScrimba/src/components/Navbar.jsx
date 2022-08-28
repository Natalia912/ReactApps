import React from "react";
import Globe from "../../public/assets/icons8-globe-26.png"


function Navbar() {
  return (
    <nav>
      <img src={Globe} alt="globus" className="globe" />
      <p className="nav--title">my travel journal.</p>
    </nav>
  );
}

export default Navbar