import React from "react"

const PageTitle = ({ children, ...rest }) =>  {
     return (
     <h1 className = "Title" {...rest}> {children} </h1>
)}

export default PageTitle