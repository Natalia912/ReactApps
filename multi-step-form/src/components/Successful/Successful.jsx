import Done from "../../assets/images/icon-thank-you.svg"

import "./successful.css"

function Successful() {
  return ( 
    <section className="success step container">
      <img src={Done} alt="checkmark" className="success--img" />
      <h1 className="success--header">Thank You!</h1>
      <p className="success--description">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
    </section>
  );
}

export default Successful;