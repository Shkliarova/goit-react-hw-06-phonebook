import { ContactForm } from "../ContactForm/ContactForm"
import { ContactList } from "../ContactList/ContactList"
import { Filter } from "../Filter/Filter"
import { AppWrapper } from "./App.styled"
import { useDispatch, useSelector } from "react-redux"
import { addContact, deleteContacts } from "../../redux/contactSlice"
import { updateFilter } from "../../redux/filterSlice"

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts)

    return(
      <AppWrapper>
        <h1>Phonebook</h1>
        <ContactForm onAdd={(newContact)=>dispatch(addContact(newContact))}/>
        <h2>Contacts</h2>
        <Filter onUpdate={(newFilter)=>dispatch(updateFilter(newFilter))}/>
        {contacts.length>0 && <ContactList onDelete={(contactId)=>dispatch(deleteContacts(contactId))}/>}
      </AppWrapper>
    )
  }