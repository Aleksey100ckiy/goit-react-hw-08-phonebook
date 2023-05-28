import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';
import { fetchContacts, addContact, deleteContact } from 'redux/contacts/operations';
// import { ContactList } from '../components/ContactList/ContactList' 
// add from App
import { FormField } from 'components/FormField/FormField';
import ContactList from '../components/ContactList/ContactList';
import FindField from 'components/FindField/FindField';
import { selectContact, selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';



export default function Contacts() {
  const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);


    const contacts = useSelector(selectContact);
    const filterEl = useSelector(selectFilter); 
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterEl.toLowerCase()));

    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
    const handleSubmit = event => {
    // event.preventDefault();
     dispatch(addContact(event));
     console.log(event);
    event.resetForm();
    };
    
    const handleFilterChanging = event => {
    event.preventDefault();
    dispatch(setFilter(event.target.value)) 
    }
    
    const handleDel = (id) => dispatch(deleteContact(id))
    
  return (
    <>
      <Helmet>
        <title>Your contacts</title>
          </Helmet>
          {/* <div>{isLoading && 'Request in progress...'}</div> */}
      <FormField contArr={contacts} onSubmit={handleSubmit}></FormField> 
       <FindField value={filterEl} onChange={handleFilterChanging}></FindField>
        {(contacts.length > 0) ? <ContactList onDelete={handleDel} contactsList={ (filteredContacts) ? filteredContacts : null} ></ContactList> :
        <p>Contacts</p>}
    </>
  );
}


    // <TaskEditor />
    //   <div>{isLoading && 'Request in progress...'}</div>
    //   <ContactList />

//     import {  useEffect } from "react";

// import { FormField } from './FormField/FormField'
// import ContactList from "./ContactList/ContactList";
// import FindField from "./FindField/FindField";
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchContacts, addContact, deleteContact } from "redux/operations";
// import {selectContact, selectFilter } from "../redux/selectors"

// import { setFilter } from 'redux/filterSlice';




// export default function App () {
//   const dispatch = useDispatch();

//   const contacts = useSelector(selectContact);
//   const filterEl = useSelector(selectFilter); 
//   const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterEl.toLowerCase()));

  
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const handleSubmit = event => {
//     // event.preventDefault();
//      dispatch(addContact(event));
//      console.log(event);
//     event.resetForm();
//   };


//   const handleFilterChanging = event => {
//     event.preventDefault();
//     dispatch(setFilter(event.target.value))

    
//   }

  
//   const handleDel = (id) => dispatch(deleteContact(id)) 

// return (<div>
//   <FormField contArr={contacts} onSubmit={handleSubmit}></FormField> 
//        <FindField value={filterEl} onChange={handleFilterChanging}></FindField>
//         {(contacts.length > 0) ? <ContactList onDelete={handleDel} contactsList={ (filteredContacts) ? filteredContacts : null} ></ContactList> :
//         <p>Contacts</p>}
//       </div>
  
// )
// }