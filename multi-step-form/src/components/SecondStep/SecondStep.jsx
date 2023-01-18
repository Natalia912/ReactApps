import { useContext} from "react";
import { Context } from "../../Context";
import data from "../../Data";

import "./secondStep.css"

function SecondStep() {
  
  const {customerInfo, setCustomerInfo, setCurrentStep} = useContext(Context)
  const {isMonthly} = customerInfo
  const {plans, addOns} = data

  const onSubmit = () => {
    setCurrentStep(3)
  } 

  const changePlan = (event) => {

    const currentPlan = plans.filter(plan => plan.name === event.target.value)
    const currentPlanPrice = isMonthly ? currentPlan[0].monthlyPrice : currentPlan[0].yearlyPrice

    setCustomerInfo(prev => (
      {
        ...prev, 
        plan: {
          planName: event.target.value,
          planPrice: currentPlanPrice
        }}))
  }

  const plansEl = plans.map(plan => (
    <label key={plan.name} htmlFor={plan.name} className={`plan ${plan.name === customerInfo.plan.planName ? "active-plan" : null}`}>
      <input 
        type="radio" 
        id={plan.name} 
        className="plan--checkbox"
        name="plan"
        value={plan.name}
        checked={plan.name === customerInfo.plan.planName}
        onChange={e => changePlan(e)}
      />
      <div className="plan--info">
        <img src={plan.img} alt={`${plan.name} plan`} className="plan--pic" />
        <div className="plan--description">
          <h2 className="plan--name">{plan.name}</h2>
          {
            isMonthly ?
            <p className="plan--price">${plan.monthlyPrice}/mo</p> :
            <p className="plan--price">${plan.yearlyPrice}/yr</p>
          }
  
          {!isMonthly && <p className="plan--sale">2 months free</p>}
          
        </div>
      </div>
    </label>
  ))

  const changeBilling = (event) => {
    event.preventDefault()
    const currentPlan = customerInfo.plan.planName;
    const currentPlanInfo = plans.filter(plan => plan.name === currentPlan)[0]
    const changedPrice = !isMonthly ? currentPlanInfo.monthlyPrice : currentPlanInfo.yearlyPrice

    const currentAddOns = customerInfo.addOns

    let newAddons = []
    if (currentAddOns.length > 0) {
      for (const item of currentAddOns) {
        const theAddOnInfo = addOns.filter(info => info.name === item.addOnName)
        newAddons.push({addOnName: item.addOnName, addOnPrice: !isMonthly ? theAddOnInfo[0].monthlyPrice : theAddOnInfo[0].yearlyPrice})
      }
    }

    setCustomerInfo(prev => (
      {
        ...prev, 
        isMonthly: !prev.isMonthly,
        plan: {
          ...prev.plan,
          planPrice: changedPrice
        },
        addOns: newAddons
      }
      ))
  }

  return ( 
    <section className="second step container">
      <div className="step--info">
        <h1 className="step--title">Select your plan</h1>
        <p className="step--description">You have the option of monthly or yearly billing.</p>
      </div>
      <form onSubmit={onSubmit} className="second--form" id="second--form">
        <div className="plans">
          {plansEl} 
        </div>
        <div className="second--billing">
          <span className={`billing-option ${isMonthly && "active-billing"}`}>Monthly</span>
          <button className="billing-btn" onClick={(e) => changeBilling(e)}>
            <div className={`switch ${!isMonthly && "switch--right"}`}></div>
          </button>
          <span className={`billing-option ${!isMonthly && "active-billing"}`}>Yearly</span>
        </div>
      </form>
    </section>
  );
}

export default SecondStep;