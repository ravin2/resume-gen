import React from "react";
import SubHeading from "./SubHeading";

function WorkDetails(props) {
    const mystyle = {

    }
    return <div>
        <SubHeading text = "Work Details" />
        <span>company : {props.details.details.details.company}</span><br />
        <span>role : {props.details.details.details.role}</span><br />
        <span>responsibilities : {props.details.details.details.responsibilities}</span><br />
        <span>Work Start Date : {props.details.details.details.workstart}</span><br />
        <span>Work End Date: {props.details.details.details.workend}</span>
    </div>
}

export default WorkDetails;