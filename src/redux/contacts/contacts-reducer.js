import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import {createContact, setContacts, deleteContact, filterChange, getContactsSuccess, deleteContactSuccess, createContactsSuccess, getContactsRequest, getContactsError, createContactsRequest, createContactsError, deleteContactRequest, deleteContactError} from './contacts-actions';

const items = createReducer([], {
  [createContactsSuccess]: (state, {payload}) => [...state, payload],
  [getContactsSuccess]: (_, {payload}) => [...payload],
  [deleteContactSuccess]: (state, {payload}) => state.filter(contact => contact.id !== payload)
});

const filter = createReducer('', {
  [filterChange]: (_, {payload}) => payload,
})

const loading = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [createContactsRequest]: () => true,
  [createContactsSuccess]: () => false,
  [createContactsError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading
});
