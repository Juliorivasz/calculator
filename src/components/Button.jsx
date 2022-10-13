import React from "react";
import "../css/Button.css";

function Button(props) {

  const isOperator = (valor) => {
    return isNaN(valor) && (valor !== ".") && (valor !== "=");
  };

    return (
      <div 
        className={`button-container ${isOperator(props.children) ? "operador" : "" }`.trimEnd()}
        onClick={() => props.driveClick(props.children)} >
        {props.children}
      </div>
    );
}

export default Button;