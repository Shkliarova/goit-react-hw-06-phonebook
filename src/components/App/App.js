import { ContactForm } from "../ContactForm/ContactForm"
import { ContactList } from "../ContactList/ContactList"
import { Filter } from "../Filter/Filter"
import { AppWrapper } from "./App.styled"
import { useSelector } from "react-redux"

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);

    return(
      <AppWrapper>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {contacts.length>0 && <ContactList />}
      </AppWrapper>
    )
  }