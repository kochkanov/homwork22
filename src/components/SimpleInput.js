// import { useState, useRef } from "react";

// import React, { useState } from react;
import { useInput } from "../itils/hooks/useInput";

const SimpleInput = (props) => {
  // alias
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurChangeHandler
  }  = useInput((value) => value.trim() !== "");
    
  
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurChangeHandler
  }  =useInput((value)=>value.includes("@"))

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurChangeHandler
  }  =useInput((value)=>value.length >=6)



  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid  ) {
      return;
    }
  };
  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';


  const passwordInputClasses = passwordInputHasError
    ? 'form-control invalid'
    : 'form-control';


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurChangeHandler}
        />
        {nameInputHasError && <p>Name must not be empty</p>}
        </div>
        <div className={emailInputClasses}>
             <label htmlFor='name'>Your email</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurChangeHandler}
        />
         {passwordInputHasError && <p>Name must not be empty</p>}

        </div>


        <div className={passwordInputClasses}>
             <label htmlFor='name'>Your password</label>
        <input
          type='password'
          id='password'
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurChangeHandler}
        />
         {passwordInputHasError && <p>Name must not be empty</p>}

        </div>
        
       
      
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default SimpleInput;





// const SimpleInput = (props) => {
//   const [enteredName, setEnteredName] = useState("");
//   const [isValid, setIsValid] = useState(false);
//   const [enteredNameTouched, setEnteredNameTouched] = useState(false);
//   const inputNameRef = useRef();

//   const nameInputChangeHandler = (event) => {
//     setEnteredName(event.target.value);
//     if (!enteredName.includes("@")) {
//       setIsValid(true);
//       setEnteredNameTouched(true);
//     }
//     console.log(enteredName);
//   };

//   const nameInputBlurHandler = (event) => {
//     setEnteredNameTouched(true);

//     if (!enteredName.trim() === "") {
//       setIsValid(true);
//       return;
//     }
//     if (!enteredName.includes("@")) {
//       setIsValid(true);
//       return;
//     }
//     setEnteredNameTouched(false);
//   };

//   const formSubmissionHandler = (event) => {
//     event.preventDefault();

//     if (enteredName.trim() === "" || !enteredName.includes("@")) {
//       setIsValid(true);
//       return;
//     }
//     setIsValid(false);
//     const enteredRefName = inputNameRef.current.value;
//     console.log(enteredRefName);
//   };


//   const nameInputIsValid = isValid && enteredNameTouched;
//   const nameInputClasses = nameInputIsValid
//     ? "form-control invalid"
//     : "form-control";

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           value={enteredName}
//           ref={inputNameRef}
//           type="text"
//           id="name"
//           onChange={nameInputChangeHandler}
//           onBlur={nameInputBlurHandler}
//         />
//         {nameInputIsValid && <p>Name must not be empty</p>}
//       </div>
//       <div className="form-actions">
//         <button >Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;





// import React, { useRef, useState } from “react”;
// const SimpleInput = (props) => {
//   const [enteredName, setEnteredName] = useState(“”);
//   const [enteredNameTouched, setEnteredNameTouched] = useState(false)
//   const enteredNameIsValid = enteredName.trim() !== ‘’ 
//   const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
//   const nameInputChangeHandler = (event) => {
//     setEnteredName(event.target.value);
//   };
//   const nameInputBlurHandler = () => {
//     setEnteredNameTouched(true)
//   }
//   const formSubmissionHandler = (event) => {
//     event.preventDefault();
//     setEnteredNameTouched(true)
//     if(nameInputIsInvalid) {
//       return
//     }
//     setEnteredNameTouched(false)
//   };
//   const nameInputClasses =  nameInputIsInvalid ? ‘form-control invalid’ : ‘form-control’
//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor=“name”>Your Name</label>
//         <input
//           type=“text”
//           id=“name”
//           value={enteredName}
//           onChange={nameInputChangeHandler}
//           onBlur={nameInputBlurHandler}
//         />
//         {nameInputIsInvalid && <p>Name must not be empty</p>}
//       </div>
//       <div className=“form-actions”>
//         <button disabled={true}>Submit</button>
//       </div>
//     </form>
//   );
// };
// export default SimpleInput;