import {useState} from "react"
import {createContext } from "react";

const Context = createContext();

function ContextProvider({children}) {
  const [currentStep, setCurrentStep] = useState(1)

  const [isConfirmed, setIsConfirmed] = useState(false)

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    plan: {planName: "Arcade", planPrice: 9},
    addOns: [],
    isMonthly: true
  })

  return (
    <Context.Provider value={
      {
        currentStep,
        setCurrentStep,
        customerInfo,
        setCustomerInfo,
        isConfirmed, 
        setIsConfirmed
      }
    }>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context};