import s from "./ContactsList.module.css";
import { useSelector, useDispatch } from "react-redux";
import {getContactsSelector, getFilterSelector} from '../../redux/contacts/contacts-selectors';
import {getContacts, deleteContact} from '../../redux/contacts/contacts-operation';
import { useEffect } from "react";

const ContactsList = () => {
  const contacts = useSelector(getContactsSelector);
  const filter = useSelector(getFilterSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch]);

  let newFilter = contacts;
  if (filter) {
    newFilter = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  
  return (
    <div>
      <ul className={s.list}>
        {newFilter.map((contact) => (
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