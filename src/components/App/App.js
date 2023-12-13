import { ContactForm } from "../ContactForm/ContactForm"
import { ContactList } from "../ContactList/ContactList"
import { Filter } from "../Filter/Filter"
import { AppWrapper } from "./App.styled"
import { useDispatch, useSelector } from "react-redux"
import { addContact } from "../../redux/contactSlice"

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

    return(
      <AppWrapper>
        <h1>Phonebook</h1>
        <ContactForm onAdd={(newContact)=>dispatch(addContact(newContact))}/>
        <h2>Contacts</h2>
        <Filter />
        {contacts.length>0 && <ContactList />}
      </AppWrapper>
    )
  }