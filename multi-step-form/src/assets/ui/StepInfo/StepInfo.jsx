import "./stepInfo.css"

function StepInfo({step, info}) {
  return ( 
    <div className="step-info">
      <p className="step-info--step">Step {step}</p>
      <p className="step-info--info">{info}</p>
    </div>
  );
}

export default StepInfo;