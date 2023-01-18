import { useContext } from "react"

import { Context } from "../../Context"

import FirstStep from "../FirstStep/FirstStep"
import SecondStep from "../SecondStep/SecondStep"
import ThirdStep from "../ThirdStep/ThirdStep"
import FourthStep from "../FourthStep/FourthStep"
import Buttons from "../Buttons/Buttons"
import Successful from "../Successful/Successful"

import "./mainForm.css"

function MainForm() {
  const {currentStep, isConfirmed} = useContext(Context)
  const currentStepDisplay = () => {
    switch (currentStep) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3: 
        return <ThirdStep />
      case 4: 
        return <FourthStep />
      default: 
        return <FirstStep />
    }
  }
  return ( 
    <section className="mainForm">
      {!isConfirmed && currentStepDisplay()}
      {!isConfirmed && <Buttons />}
      {isConfirmed && <Successful />}
    </section>
  );
}

export default MainForm;