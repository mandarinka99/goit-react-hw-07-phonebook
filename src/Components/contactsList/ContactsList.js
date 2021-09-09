import s from "./ContactsList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getFilterContactsSelector } from '../../redux/contacts/contacts-selectors';
import {getContacts, deleteContact } from '../../redux/contacts/contacts-operation';
import { useEffect } from "react";

const ContactsList = () => {
  const filteredContacts = useSelector(getFilterContactsSelector)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch]);
  
  return (
    <div>
      <ul className={s.list}>
        {filteredContacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            {contact.name} {contact.number}{" "}
            <button
              className={s.button}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;