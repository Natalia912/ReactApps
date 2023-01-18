import { useContext } from "react";
import { useForm } from "react-hook-form";
import {Context} from "../../Context"
import Input from "../../assets/ui/Input/Input"
import "./firstStep.css"

function FirstStep() {

  const {customerInfo, setCustomerInfo, setCurrentStep} = useContext(Context)
  const {name, email, phone} = customerInfo

  const {register, handleSubmit, formState: { errors }} = useForm({
    defaultValues: {
      name: name,
      email: email,
      phone: phone
    }
  })

  const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const onSubmit = data => {
    setCustomerInfo(prev => ({...prev, ...data}))
    setCurrentStep(2)
}

  return ( 
    <section className="first step container">
      <div className="step--info">
        <h1 className="step--title">Personal Info</h1>
        <p className="step--description">Please provide your name, email address, and phone number.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="first--form" id="first--form">
        <Input 
          name="name" 
          inputName="Name"
          register={register}
          errors={errors.name}
          type="text"
          placeholder="e.g. Stephen King"
        />
        <Input 
          name="email" 
          inputName="Email Address" 
          register={register}
          errors={errors.email}
          type="email"
          placeholder="e.g. stephenking@lorem.com" 
          pattern={emailPattern} 
        />
        <Input 
          name="phone" 
          inputName="Phone Number" 
          register={register}
          errors={errors.phone}
          type="tel"
          placeholder="e.g. +1 234 567 890"
          pattern={phonePattern} 
        />
      </form>
    </section>
  );
}

export default FirstStep;