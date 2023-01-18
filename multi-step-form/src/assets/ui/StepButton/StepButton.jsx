import "./stepButton.css"

function FakeButton({children, currentStep}) {

  const activeBtn = currentStep === Number(children) ? "active-step-btn" : null
  return ( 
    <p 
      className={`step-btn ${activeBtn}`}>
      {children}
    </p>
  );
}

export {FakeButton};