import React, { useState } from "react";
import UserForm from "./UserForm";
import "./Form.css"
const SubmittedDetails = (props) => {  
    
  const [oldDetails, updateDetails] = useState([]);
  function InSubmittedDetails(details) {
    return updateDetails([details, ...oldDetails]);
  }
  function deleting(e) {
    const deleteId=e.target.id
    updateDetails(oldDetails.filter((item)=>{
      return item.id!==deleteId;
    }))
  }
  return (
    <div className="container">
      <UserForm onSubmittedDetails={InSubmittedDetails} />
      <div className="container2">
        {oldDetails.map((item) => {
          return <span className="screen" id={item.id} onClick={deleting}>{item.Name + "  " + item.Age+" years"}</span>;
        })}
      </div> 
    </div>
  );
};

export default SubmittedDetails;
