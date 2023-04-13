
import React, { Fragment, useEffect, useState } from "react";
import ErrorModel from "./ErrorModel";
import "./Form.css";
const UserForm = (props) => {
  const [isValid, setIsValid] = useState(false);
  
    const[isError,setIsError]=useState()
    const[oldName,updateName]=useState('')
    const[oldAge,updateAge]=useState('')
    const[oldCollege,updateCollege]=useState('')

    useEffect(()=>{
        setIsValid(oldName.trim().length!==0 && oldAge.trim().length!==0 && oldCollege.trim().length!==0)
    },[oldName,oldAge,oldCollege])
    function updatingName(e) {
        updateName(e.target.value)
    }
    function updatingAge(e) {
        updateAge(e.target.value)
    }
    function updatingCollege(e) {
        updateCollege(e.target.value)
    }
    function errorMessage() {
        setIsError()        
    }
    function submitDetails(e) {
        e.preventDefault();
        const details={Name:oldName,Age:oldAge,College: oldCollege,id:Math.random().toString()}
        if(oldName&&oldAge&&oldCollege){
            props.onSubmittedDetails(details)
            updateAge('')
            updateName('')
            updateCollege('')
        }else if(oldName.trim().length===0 || oldAge.trim().length===0 || oldCollege.trim().length===0){
            let notFound = "";
            if (oldName.trim().length===0) {
                notFound += '"Username" ';
            }
            if (oldAge.trim().length===0) {
                notFound += '"Age" ';
            }
            if (oldCollege.trim().length===0) {
                notFound += '"College" ';
            }
            setIsError({
                title: "Invalid Input",
                message: `Please enter a valid ${notFound}`,
              })
            }      
    }

  return (
    <Fragment>
      {isError && (
        <ErrorModel
          title={isError.title}
          message={isError.message}
          onErrorMessage={errorMessage}
        />
      )}
      <form onSubmit={submitDetails}>
        <div class="formInput">
          <label for="userName">Username</label>
          <input type="text" id="userName" value={oldName} onChange={updatingName} />
        </div>
        <div class="formInput">
          <label for="age">Age(Years)</label>
          <input type="number" id="age" min="1" value={oldAge} onChange={updatingAge} />
        </div>
        <div class="formInput">
          <label for="college">College</label>
          <input type="text" id="college" value={oldCollege} onChange={updatingCollege} />
        </div>
        <button type="submit" className={`btn${isValid ? "" : "Invalid"} `}>
          SUBMIT
        </button>
      </form>
    </Fragment>
  );
};

export default UserForm;
