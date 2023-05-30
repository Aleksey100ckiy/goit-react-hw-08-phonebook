import styled from "styled-components";

export const FormFieldSt = styled.label`
display: flex;
gap: 12px;
flex-direction: column;
width: 450px;
margin: 20px 15px;

`;

export const ButtonSt = styled.button`
border-radius: 4px;
align-self: center;
margin: 30px 50px;
background-color: #59b8bd;
color: #ffffff;

:hover{
   background-color: #57c253;
   scale: 1.2; 
}
    
:focus{
   background-color: #59b8bd; 
   scale: 1.2;
}
    

`;