import { useContext } from "react"

import { Context } from "../../Context"

import "./buttons.css"

function Buttons() {

  const {currentStep, setCurrentStep, customerInfo, setIsConfirmed} = useContext(Context)

  const stepBack = () => {setCurrentStep(prev => prev - 1)}
  const stepForward = () => {setCurrentStep(prev => prev + 1)}
  const handleSubmit = () => {
    console.log(customerInfo)
    setIsConfirmed(true)
  }

  return ( 
    <div className="buttons">
      {currentStep !== 1 && <button className="go-back" onClick={stepBack}>Go Back</button>}
      {currentStep === 1 && <button type="submit" form="first--form" className="next-step right">Next Step</button>}
      {currentStep === 2 && <button type="button" onClick={stepForward} className="next-step right">Next Step</button>}
      {currentStep === 3 && <button type="button" onClick={stepForward} className="next-step right">Next Step</button>}
      {currentStep === 4 && <button className="confirm right" onClick={handleSubmit}>Confirm</button>}
    </div>
  );
}

export default Buttons;