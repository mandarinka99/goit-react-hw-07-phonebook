import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import {createContact, setContacts, deleteContact, filterChange, getContactsSuccess, deleteContactSuccess, createContactsSuccess} from './contacts-actions';

const items = createReducer([], {
  [createContactsSuccess]: (state, {payload}) => [...state, payload],
  [getContactsSuccess]: (_, {payload}) => [...payload],
  [deleteContactSuccess]: (state, {payload}) => state.filter(contact => contact.id !== payload)
});

const filter = createReducer('', {
  [filterChange]: (_, {payload}) => payload,
})

export default combineReducers({
  items,
  filter,
});
