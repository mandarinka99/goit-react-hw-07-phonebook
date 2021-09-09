import { createSelector } from "@reduxjs/toolkit";

export const getContactsSelector = (state) => state.contacts.items;
export const getFilterSelector = (state) => state.contacts.filter;

export const getFilterContactsSelector = createSelector(
  [getContactsSelector, getFilterSelector],
  (contacts, filter) => {
    let filteredContacts = contacts;
    if (filter) {
      filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filteredContacts;
    } else {
      return contacts;
    }
  }
);

// const filtredContacts = (contacts, filter) => {
//   let newFilter = contacts;
//   if (filter) {
//     newFilter = contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// }
