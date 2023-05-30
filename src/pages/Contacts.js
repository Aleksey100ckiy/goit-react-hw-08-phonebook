import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchContacts, addContact, deleteContact } from 'redux/contacts/operations';

import { FormField } from 'components/FormField/FormField';
import  ContactList  from '../components/ContactList/ContactList';
import  FindField  from 'components/FindField/FindField';
import { selectContact, selectFilter, } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';



export default function Contacts() {
  const dispatch = useDispatch();
 
    const contacts = useSelector(selectContact);
    const filterEl = useSelector(selectFilter); 
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterEl.toLowerCase()));

    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch], contacts, filterEl);
    
    const handleSubmit = event => {
     dispatch(addContact(event));
     console.log(event);
    // event.reset();
    };
    
    const handleFilterChanging = event => {
    // event.preventDefault();
    dispatch(setFilter(event.target.value)) 
    }
    
    const handleDel = (id) => dispatch(deleteContact(id))
    
  return (
    <>
      <Helmet>
        <title>Your contacts</title>
          </Helmet>
      <FormField contArr={contacts} onSubmit={handleSubmit}></FormField> 
       <FindField value={filterEl} onChange={handleFilterChanging}></FindField>
        {(contacts.length > 0) ? <ContactList onDelete={handleDel} contactsList={ (filteredContacts) ? filteredContacts : null} ></ContactList> :
        <p>Contacts</p>}
    </>
  );
}

