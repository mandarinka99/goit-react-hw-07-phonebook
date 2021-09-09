import { createAction } from '@reduxjs/toolkit';

export const createContactsRequest = createAction('contacts/createContactsRequest');
export const createContactsSuccess = createAction('contacts/createContactsSuccess');
export const createContactsError = createAction('contacts/createContactsError');

// export const setContacts = createAction('contacts/set');

export const getContactsRequest = createAction('contacts/getContactsRequest');
export const getContactsSuccess = createAction('contacts/getContactsSuccess');
export const getContactsError = createAction('contacts/getContactsError');

export const deleteContactRequest = createAction('contacts/deleteContactsRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactsSuccess');
export const deleteContactError = createAction('contacts/deleteContactsError');

export const filterChange = createAction('contacts/filter');
