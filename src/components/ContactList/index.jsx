import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, selectFilter } from "../../redux/selectors";
import { deleteContact } from "../../redux/contactsSlicer";

import styles from "./ContactList.module.scss";

const ContactList = ({ storage }) => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.status.toLowerCase()),
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    localStorage.setItem(storage, JSON.stringify(updatedContacts));
  };

  return (
    <ul className={styles.list}>
      {filterContact.map((contact) => (
        <li key={contact.id} className={styles.item}>
          {contact.name}: {contact.phone}
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
