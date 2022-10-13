import React from "react";
import "../css/Clear.css";

const Clear = (props) => (
    <div className="clear"
    onClick={props.driveClear}>
        {props.children}
    </div>
);

export default Clear;