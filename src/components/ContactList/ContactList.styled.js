import styled from "styled-components";

export const HederSecRowSt = styled.h2`
display: inline-block;
margin: 15px 50px;

`;

export const ContactsListSt = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 10px;
`;

export const ContactItemSt = styled.li`
padding: 6px;
border: 1px solid;
border-radius: 3px;
width: 600px;
display: flex;
justify-content: space-between; 
`;

export const ButtonSt = styled.button`
background-color: #ceddde;
border-radius: 3px;

:hover{
    background-color:#f55b74;
}
:focus{
    background-color:#f55b74;
}

`; 