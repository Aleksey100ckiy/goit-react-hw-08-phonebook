import React from "react";
import { InputSt } from "./FindFied.styled";


const FindField = ({value ,onChange}) => {
    return (<div>
        <InputSt type="text" onChange={onChange} value={value} placeholder="To find contact by name" />
            </div>
        
    );}
export default FindField;
