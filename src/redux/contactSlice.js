import { nanoid } from "nanoid"

const initialState = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}]
};

export const contactsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'contacts/add':
            return{
                ...state,
                contacts: [...state.contacts, action.payload],
            }
        case 'contacts/delete':
            return{
                ...state,
                contacts: state.contacts.filter(item => item.id !== action.payload),
            }
        default:
            return state;
    }
}

export const addContact = newContact => {
    return{
        type: 'contacts/add',
        payload: {
            ...newContact,
            id: nanoid()
        }
    }
  }

  export const deleteContacts = contactId => {
    return{
        type: 'contacts/delete',
        payload: contactId,
    }
  }