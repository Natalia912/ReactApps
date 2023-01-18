import "./input.css"

function Input({ name, inputName, register, type, placeholder, errors, pattern}) {
  //prevent from losing on refresh (use local store)
  //add validation
  return ( 
    <label htmlFor={name} className="input--label">
      <span className="input--name">{inputName}</span>
      <input 
        className={`input--input ${errors ? "invalid-input" : null}`}
        type={type} 
        placeholder={placeholder} 
        id={name}
        {...register(name, {required: "This field is required", pattern: {value: pattern, message: "Invalid input"} })}
      />
      {errors?.type === "required" && <span className="input--required">This field is required</span>}
      {errors?.type === "pattern" && <span className="input--required">Invalid input</span>}
    </label>
  );
}

export default Input;