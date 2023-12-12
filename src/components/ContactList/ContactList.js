import { deleteContacts } from "../../redux/contactSlice";
import { ContactsList, DeleteButton } from "./ContactList.styled"
import { useDispatch, useSelector } from "react-redux";

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter.filter);

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()))

    return(
        <ContactsList>
            {filteredContacts.map(item => 
            <li key={item.id}>
                {item.name}: <i>{item.number}</i>
                <DeleteButton onClick={()=>dispatch(deleteContacts(item.id))}>delete</DeleteButton>
            </li>)}
        </ContactsList>
    )
}