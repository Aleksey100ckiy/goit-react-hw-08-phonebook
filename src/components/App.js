// import {  useEffect } from "react";

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

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
