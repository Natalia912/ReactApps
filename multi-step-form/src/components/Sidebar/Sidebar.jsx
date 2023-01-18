import {useContext} from "react"
import {Context} from "../../Context"

import { FakeButton } from "../../assets/ui/StepButton/StepButton";
import StepInfo from "../../assets/ui/StepInfo/StepInfo";

import "./sidebar.css"

function Sidebar() {
  const {currentStep} = useContext(Context)
  return ( 
    <section className="sidebar">
      <div className="sidebar--steps">
        <div className="sidebar--step">
          <FakeButton currentStep={currentStep} >
            1
          </FakeButton>
          <StepInfo step="1" info="your info" />
        </div>
        
        <div className="sidebar--step">
          <FakeButton currentStep={currentStep} >
            2
          </FakeButton>
          <StepInfo step="2" info="select plan" />
        </div>
        <div className="sidebar--step">
          <FakeButton currentStep={currentStep} >
            3
          </FakeButton>
          <StepInfo step="3" info="add-ons" />
        </div>
        <div className="sidebar--step">
          <FakeButton currentStep={currentStep} >
            4
          </FakeButton>
          <StepInfo step="4" info="summary" />
        </div>
      </div>
    </section>
  );
}

export default Sidebar;