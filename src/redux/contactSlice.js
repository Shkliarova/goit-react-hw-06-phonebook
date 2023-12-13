import { nanoid } from "nanoid"
import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ]},
    reducers: {
        addContact: {
            reducer(state, action) {
                const { contacts } = state;
                const { payload } = action;

                const isDuplicate = contacts.some(contact =>
                    contact.name.toLowerCase() === payload.name.toLowerCase() &&
                    contact.number === payload.number
                );
                 if(isDuplicate){
                    alert('This contact is already in your phonebook!');
                 }else{
                    state.contacts = [...state.contacts, action.payload];
                 }
        }, prepare(newContact) {
            return {
              payload: {
                ...newContact,
                id: nanoid(),
              }
            }
        }
        },
        deleteContacts (state, action) {
            state.contacts = state.contacts.filter(item => item.id !== action.payload);
        }
    }
})

export const contactsReducer = contactSlice.reducer;
export const {addContact, deleteContacts} = contactSlice.actions;