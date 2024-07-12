import React from "react";
import styles from "./ContactForm.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/selectors";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlicer";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    let isContact;

    contacts.forEach((person) => {
      if (form.name.value.toLowerCase() === person.name.toLowerCase()) {
        isContact = true;
      }
    });
    isContact
      ? alert(`${form.name.value} is already in contacts!`)
      : dispatch(
          addContact({
            id: nanoid(),
            name: form.name.value,
            phone: form.phone.value,
          }),
        );

    form.reset();
  };

  const numberId = nanoid();
  const nameId = nanoid();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name</label>
      <input
        id={nameId}
        type="text"
        name="name"
        pattern="^[a-zA-Z]+(([' \-][a-zA-Z ])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        required
      />
      <label htmlFor={numberId}>Phone number</label>
      <input
        id={numberId}
        type="tel"
        name="phone"
        required
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes,
        parentheses and can start with +"
        autoComplete="tel"
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
