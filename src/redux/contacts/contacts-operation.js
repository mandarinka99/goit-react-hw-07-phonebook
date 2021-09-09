import axios from 'axios';
import { createContactsError, createContactsRequest, createContactsSuccess, deleteContactError, deleteContactRequest, deleteContactSuccess, getContactsError, getContactsRequest, getContactsSuccess } from './contacts-actions';
import { v4 as uuidv4 } from 'uuid';

axios.defaults.baseURL = 'http://localhost:3000';

export const getContacts = () => async dispatch => {
  dispatch(getContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(getContactsSuccess(data));
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};

export const createContact = ({name, number}) => dispatch => {
  dispatch(createContactsRequest());
  const contact = {
    id: uuidv4(),
    name,
    number,
  }
  axios
    .post(`/contacts`, contact)
    .then(() => dispatch(createContactsSuccess(contact)))
    .catch(error => dispatch(createContactsError(error)));
};