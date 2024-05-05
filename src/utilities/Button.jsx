import React from "react";
import '../style/button.css';

const buttonType = {
    primary : "primary",
    secondary : "secondary",
};

const Button = ({ children, type, variant, ...rest}) => {
    return (
    <button className={`button--${buttonType[variant]}`} type={ type ==="submit"?"submit":"button"}  {...rest}>
     <div > {children}</div>
     </button>)

}

const DropdownButton = ({children, id, value, onChange}) => {
 return (
    <select className="dropdown_button" id={id} value={value} onChange={onChange}>
      {children}
    </select>
 )}

export { DropdownButton}
export default Button