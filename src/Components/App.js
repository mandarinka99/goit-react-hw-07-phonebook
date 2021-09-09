import React from "react";
import { useSelector } from "react-redux";
import { getLoading } from "../redux/contacts/contacts-selectors";
import ContactsList from "./contactsList/ContactsList";
import Container from "./container/Container";
import CreateContactForm from "./createContactForm/CreateContactForm";
import FilterContacts from "./filterContacts/FilterContacts";
import Spiner from "./spiner/Spiner";


const App = () => {
  const loading = useSelector(getLoading);
  return (
    <Container>
        <h1>Phonebook</h1>
        <CreateContactForm/>
        <h2>Contacts</h2>
        <FilterContacts/>
        <ContactsList 
        />
        {loading && <Spiner/>}
      </Container>
  );
}

export default App;

