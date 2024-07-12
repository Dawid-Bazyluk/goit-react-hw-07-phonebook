import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, selectFilter } from "../../redux/selectors";
import { deleteContact } from "../../redux/contactsSlicer";

import styles from "./ContactList.module.scss";

const ContactList = ({ storage }) => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterStatus = filterValue.status;
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterStatus.toLowerCase()),
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id)).then(() => {
      localStorage.setItem(storage, JSON.stringify(contacts));
    });
  };

  const listItems =
    filteredContacts.length === 0
      ? ""
      : filteredContacts.map((item) => {
          return (
            <li key={item.id} id={item.id} className={styles.item}>
              {item.name}: {item.phone}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          );
        });

  return <ul className={styles.list}>{listItems}</ul>;
};

export default ContactList;
