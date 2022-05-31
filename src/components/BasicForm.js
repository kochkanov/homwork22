import { useEffect, useReducer} from "react";

const reducerName = (prevState, action) => {
  if (action.type === "NAME") {
    let Val = false;
    if (action.value.trim() === "") {
      Val = true;
    } else {
      Val = false;
    }
    return {
      ...prevState,
      name: action.value,
      isValidName: Val,
    };
  }

  if (action.type === "LAST") {
    let valid = false;
    if (action.value.trim() === "") {
      valid = true;
    } else {
      valid = false;
    }
    return {
      ...prevState,
      lastName: action.value,
      isValidLastName: valid,
    };
  }


  if (action.type === "EMAIL") {
    let valid3=false
    if(!action.value.includes("@")){
      valid3=true
    }else{
      valid3=false
    }
    return {
      ...prevState,
      valueOfEmail: action.value,
      isEmailValid: valid3
    };
  }

  if(action.type==="BTN"){
    return{
      ...prevState,
      button: action.value,

    }
  }
  return prevState;


};

const BasicForm = (props) => {
  // const [formSubmit,setFormSubmit] = useState(false)
  const [firstName, dispatchName] = useReducer(reducerName, {
    name: "",
    isValidName: false,
    lastName: "",
    isValidLastName: false,
    valueOfEmail: "",
      isEmailValid: false,
      button:false,

  });

  const nameChangeHandler = (e) => {
    dispatchName({
      type: "NAME",
      value: e.target.value,
    });
  };

  const lastNameChangeHandler = (e) => {
    dispatchName({
      type: "LAST",
      value: e.target.value,
    });
  };

  const validateOfEmail = (e) => {
    dispatchName({
      type: "EMAIL",
      value: e.target.value,
   
    });
  };
   useEffect(()=>{
     if(!firstName.isValidName  && !firstName.isEmailValid && !firstName.isValidLastName && 
       firstName.name !== "" && firstName.lastName!== "" && firstName.valueOfEmail !== ""){
       console.log('fg');
       dispatchName({
         type:"BTN", value: true
       })
     }else{
       console.log('hi');
      dispatchName({
        type:"BTN", value: false
      })

     }
   },[firstName.isValidName, firstName.isEmailValid, firstName.isValidLastName])
  // let formIsValid = false;
  // if (enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
  //   formIsValid = true;
  // }

  let valid = firstName.isValidName ? "form-control invalid" : "form-control";
  let valid2 = firstName.isValidLastName ? "form-control invalid" : "form-control";
  let valid3 = firstName.isEmailValid ? "form-control invalid" : "form-control";
  // let valid = firstName.isValidLastName
  //   ? "form-control invalid"
  //   : "form-control";

  return (
    <form>
      <div className="control-group">
        <div className={valid}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" onChange={nameChangeHandler} value={firstName.name}/>
          {/* {firstName.isValidName && <p>try again</p>} */}
        </div>
        <div className={valid2}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={lastNameChangeHandler} value={firstName.lastName}/>
        </div>
      </div>
      <div className={valid3}>
        <label htmlFor="email">E-Mail Address</label>
        <input type="text" id="email" onChange={validateOfEmail} value={firstName.valueOfEmail}/>
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!firstName.button}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
