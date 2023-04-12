import React, { Fragment, useState } from 'react'
import ErrorModel from './ErrorModel'
import "./Form.css"
const UserForm = (props) => {
    const[isError,setIsError]=useState()
    const[oldName,updateName]=useState('')
    const[oldAge,updateAge]=useState('')
    function updatingName(e) {
        updateName(e.target.value)
    }
    function updatingAge(e) {
        updateAge(e.target.value)
    }
    function errorMessage() {
        setIsError()        
    }
    function submitDetails(e) {
        e.preventDefault();
        const details={Name:oldName,Age:oldAge,id:Math.random().toString()}
        if(oldName&&oldAge){
            props.onSubmittedDetails(details)
            updateAge('')
            updateName('')
        }else if(oldName.trim().length===0 && oldAge.trim().length===0){
            setIsError({title:'Invalid Input',
            message:'Enter a valid Username and Age'})
        }else if(oldAge.trim().length===0){
            setIsError({title:'Invalid Input',
            message:'Enter a valid Age greater than 0'})
        }else{
            setIsError({title:'Invalid Input',
            message:'Enter a valid Username'})
        }   
    }
    return (
        <Fragment>
            {isError&&<ErrorModel title={isError.title} message={isError.message} onErrorMessage={errorMessage}/>}
            <form onSubmit={submitDetails}>
                <div class='formInput'>
                    <label  for='userName'>Username</label>
                    <input  type='text' id='userName' value={oldName} onChange={updatingName}/>
                </div>
                <div class='formInput'>
                    <label  for='age'>Age(Years)</label>
                    <input  type='number' id='age' min='1' value={oldAge} onChange={updatingAge}/>
                </div>
                <button type='submit'>SUBMIT</button>
            </form>
        </Fragment>
    )
}

export default UserForm
