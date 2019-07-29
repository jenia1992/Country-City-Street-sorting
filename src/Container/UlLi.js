import React from "react"
const UlLi = (props) => {
    return(
        <li 
        className={props.className} 
        id={props.id}
        onClick={props.click}
        >{props.id}
        </li>
      
    ) 
  };
export default UlLi;