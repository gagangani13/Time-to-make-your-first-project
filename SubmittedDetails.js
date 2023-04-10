import React, { useState } from "react";
import UserForm from "./UserForm";
const SubmittedDetails = (props) => {  
    
  const [oldDetails, updateDetails] = useState([]);
  function InSubmittedDetails(details) {
    return updateDetails([details, ...oldDetails]);
  }
  return (
    <div>
      <UserForm onSubmittedDetails={InSubmittedDetails} />
      {oldDetails.map((item) => {
        return <div>{item.Name + "  " + item.Age}</div>;
      })}
    </div>
  );
};

export default SubmittedDetails;
