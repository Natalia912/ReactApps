import { useContext } from "react";
import { Context } from "../../Context";

import data from "../../Data";

import "./thirdStep.css"

function ThirdStep() {

  const {customerInfo, setCustomerInfo} = useContext(Context)
  const {isMonthly} = customerInfo
  const {addOns} = data

  const handleChange = (e) => {

    const isAlreadyChecked = customerInfo.addOns.some(item => item.addOnName === e.target.value)


    if (isAlreadyChecked) {
        const newArr = customerInfo.addOns.filter(item => item.addOnName !== e.target.value)
        setCustomerInfo(prev => ({...prev, addOns: newArr}))
      } else {
        const addOnInfo = addOns.filter(item => item.name === e.target.value)[0]
        const setPrice = isMonthly ? addOnInfo.monthlyPrice : addOnInfo.yearlyPrice
        setCustomerInfo(prev => (
          {
            ...prev, 
            addOns: [
              ...prev.addOns, 
              {
                addOnName: e.target.value,
                addOnPrice: setPrice
              }
            ]
          }
        ))
      }
  }


  const addOnsEl = addOns.map(addOn => (
    <label key={addOn.name} htmlFor={addOn.name} className="addOn">
      <input 
        type="checkbox" 
        value={addOn.name}
        checked={customerInfo.addOns?.some(item => item.addOnName === addOn.name)}
        name="addOn"
        id={addOn.name} 
        className="addOn--checkbox"
        onChange={e => handleChange(e)}
      />
      <div className="addOn--info">
        <h2 className="addOn--name">{addOn.name}</h2>
        <p className="addOn--description">{addOn.description}</p>
      </div>
          {
            isMonthly ?
            <p className="addOn--price">+${addOn.monthlyPrice}/mo</p> :
            <p className="addOn--price">+${addOn.yearlyPrice}/yr</p>
          }
    </label>
  ))


  return ( 
    <section className="second step container">
        <div className="step--info">
          <h1 className="step--title">Pick add-ons</h1>
          <p className="step--description">Add-ons help enhance your gaming experience.</p>
        </div>
        <form className="third--form">
          {addOnsEl}
        </form>
      </section>
  );
}

export default ThirdStep;