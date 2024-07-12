import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import { deleteContacts } from "../../redux/contactsSlicer";

import styles from "./ContactList.module.scss";

const ContactList = (storage) => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase()),
  );

  const handleDelete = (id) => {
    dispatch(deleteContacts(id));
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    localStorage.setItem(storage, JSON.stringify(updatedContacts));
  };

  return (
    <ul className={styles.list}>
      {filterContact.map((contact) => (
        <li key={contact.id} className={styles.item}>
          {contact.name}: {contact.number}
          <button
            className={styles.buttonItem}
            onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
