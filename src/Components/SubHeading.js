import React from "react";
function SubHeading(props) {
    const mystyle = {
        borderBottom: "2px solid black"
    }
    return <div style = {mystyle}>
        <h3>{props.text}</h3>
    </div>
}
export default SubHeading;