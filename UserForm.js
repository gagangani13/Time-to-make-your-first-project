import React, { Fragment, useRef, useState } from 'react'
import ErrorModel from './ErrorModel'
import "./Form.css"
const UserForm = (props) => {

    const nameInputRef=useRef('')
    const ageInputRef=useRef('')
    const collegeInputRef=useRef('')
    const[isError,setIsError]=useState()
    
    function errorMessage() {
        setIsError()        
    }
    function submitDetails(e) {
        e.preventDefault();
        console.log(nameInputRef.current.value);
        const details={Name:nameInputRef.current.value, Age:ageInputRef.current.value, College:collegeInputRef.current.value ,id:Math.random().toString()}
        if(details.Name&&details.Age&& details.College){
            props.onSubmittedDetails(details)
            nameInputRef.current.value=''
            ageInputRef.current.value=''
            collegeInputRef.current.value=''
        }
        else if(nameInputRef.current.value.trim().length===0 ||ageInputRef.current.value.trim().length===0 ||collegeInputRef.current.value.trim().length===0){
            let notFound=''
            if(nameInputRef.current.value.trim().length===0){
                notFound+='"Username" '
            }
            if(ageInputRef.current.value.trim().length===0){
                notFound+='"Age" '
            }
            if(collegeInputRef.current.value.trim().length===0){
                notFound+='"College" '
            }
            setIsError({title:'Invalid Input',
            message:`Please enter a valid ${notFound}`})
        }  
    }
    return (
        <Fragment>
            {isError&&<ErrorModel title={isError.title} message={isError.message} onErrorMessage={errorMessage}/>}
            <form onSubmit={submitDetails}>
                <div class='formInput'>
                    <label  for='userName'>Username</label>
                    <input  type='text' id='userName' ref={nameInputRef}/>
                </div>
                <div class='formInput'>
                    <label  for='age'>Age(Years)</label>
                    <input  type='number' id='age' min='1' ref={ageInputRef}/>
                </div>
                <div class='formInput'>
                    <label  for='college'>College</label>
                    <input  type='text' id='college' ref={collegeInputRef}/>
                </div>
                <button type='submit'>SUBMIT</button>
            </form>
        </Fragment>
    )
}

export default UserForm
