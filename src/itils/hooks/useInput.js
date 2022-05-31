//use useReducer

import { useReducer } from "react";

function inputReduce(prevState,action){
    if(action.type === "INPUTS"){
        return{
            ...prevState,
            enteredValue: action.value,
        }
    }
    if(action.type === "INPUT_BLUR"){
        return{
            ...prevState,
            isTouched: action.value
        }
    }
}

export const useInput = (validateState) => {
  const [inputs, dispatchInputs] = useReducer(inputReduce, {
    enteredValue: "",
    isTouched: false,
  });

  const valueIsValid = validateState(inputs.enteredValue); // true || false
  const hasError = !valueIsValid && inputs.isTouched;

  const valueChangeHandler = (event) => {
      console.log(event.target.value);
    dispatchInputs({
      type: "INPUTS",
      value: event.target.value,
    });
  };
  const inputBlurHandler = (event) => {
    dispatchInputs({
      type: "INPUT_BLUR",
      value: true,
    });
  };

  return {
    value: inputs.enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

//use useState

// import { useState } from 'react';

// export const useInput = (validateState) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isTouched, setIsTouched] = useState(false);

//   const valueIsValid = validateState(enteredValue) // true || false
//   const hasError = !valueIsValid && isTouched

//   const valueChangeHandler = (event) => {
//       setEnteredValue(event.target.value)
//   }
//   const inputBlurHandler = (event) => {
//       setIsTouched(true)
//   }

//   return {
//       value: enteredValue,
//       isValid: valueIsValid,
//       hasError,
//       valueChangeHandler,
//       inputBlurHandler,
//   }
// };
