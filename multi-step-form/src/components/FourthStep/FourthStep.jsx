import { useContext } from "react";
import { Context } from "../../Context";

import "./fourthStep.css"

function FourthStep() {
  const {customerInfo, setCurrentStep} = useContext(Context)

  const billingType = customerInfo.isMonthly ? "/mo" : "/yr"
  let totalCost = customerInfo.plan.planPrice

  const goBack = () => {
    setCurrentStep(2)
  }
  
  for (const item of customerInfo.addOns) {
    totalCost += item.addOnPrice
  }

  const addOnsEl = customerInfo.addOns.map(item => (
    <li className="finishing--addOn" key={item.addOnName}>
      <p className="finishing--addOnName">{item.addOnName}</p>
      <p className="finishing--addOnPrice">+${item.addOnPrice}{billingType}</p>
    </li>
  ))

  return (  
    <section className="fourth step container">
      <div className="step--info">
        <h1 className="step--title">Finishing up</h1>
        <p className="step--description">Double-check everything looks OK before confirming.</p>
      </div>
      <div className="finishing">

        <div className="finishing--services">
          <div className="finishing--plan">
            <div className="finishing--plan-details">
              <p className="finishing--plan-name">{customerInfo.plan.planName} ({customerInfo.isMonthly ? "Monthly" : "Yearly"})</p>
              <button className="change-plan" onClick={goBack}>Change</button>
            </div>
            <div className="finishing--plan-price">${customerInfo.plan.planPrice}{billingType}</div>
          </div>
          {customerInfo.addOns.length > 0 && <hr className="divider" />}
          <ul className="finishing--addOns">
            {addOnsEl}
          </ul>
        </div>

        <div className="finishing--total">
          <p className="total">Total ({customerInfo.isMonthly ? "per month" : "per year"})</p>
          <p className="total--price">${totalCost}{billingType}</p>
        </div>

      </div>
    </section>
  );
}

export default FourthStep;