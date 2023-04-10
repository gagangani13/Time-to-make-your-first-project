import React, { useState } from 'react'
// import SubmittedDetails from './SubmittedDetails'
const UserForm = (props) => {
    const[oldName,updateName]=useState('')
    const[oldAge,updateAge]=useState('')
    function updatingName(e) {
        updateName(e.target.value)
    }
    function updatingAge(e) {
        updateAge(e.target.value)
    }

    function submitDetails(e) {
        e.preventDefault();
        const details={Name:oldName,Age:oldAge}
        if(oldName&&oldAge){
            props.onSubmittedDetails(details)
        }else if(!oldName && !oldAge){
            alert('Please fill the details')
        }else if(!oldAge){
            alert('Please enter the Age')
        }else{
            alert('Please enter the Username')
        }   
    }
    return (
        <form onSubmit={submitDetails}>
            <label>Username</label>
            <input type='text' value={oldName} onChange={updatingName}/>
            <label>Age(Years)</label>
            <input type='number' min='1' value={oldAge} onChange={updatingAge}/>
            <button type='submit'>SUBMIT</button>
        </form>
    )
}

export default UserForm
