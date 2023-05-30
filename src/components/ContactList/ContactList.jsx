import React from "react";
import { HederSecRowSt, ContactsListSt, ContactItemSt, ButtonSt } from "./ContactList.styled";

const ContactList = ({ contactsList, onDelete }) => {
    return (
        <div>
            <HederSecRowSt>Contacts</HederSecRowSt>
            <ContactsListSt>{contactsList.map(cont => (<ContactItemSt key={cont.id}>{cont.name} : {cont.number } <ButtonSt onClick={() => onDelete(cont.id)} type="button">Delete</ButtonSt></ContactItemSt>)
                )}
            </ContactsListSt>
        </div>
        
        
    )
};

export default ContactList;
