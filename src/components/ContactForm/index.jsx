import React from "react";
import styles from "./ContactForm.module.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/selectors";
import { nanoid } from "nanoid";
import { addContacts } from "../../redux/contactsSlicer";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  


  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const contact = {
      name: form.name.value,
      number: form.number.value,
      id: nanoid(),
    };

    let isContact;
    contacts.forEach(person => {
      if (contact.name.toLowerCase() === person.name.toLowerCase()) {
        isContact = true;
      }
    });
    isContact
      ? alert(`${contact.name} is already in contacts!`)
      : dispatch(addContacts(contact));

    form.reset();
  }

  
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor={"name"}>Name</label>
      <input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Z]+(([' \-][a-zA-Z ])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        required
        
      />
      <label htmlFor="number">Phone number</label>
      <input
        id="number"
        type="number"
        name="number"
        required
        title="Phone number must be digits and can contain spaces, dashes,
        parentheses and can start with +"
        
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
ContactForm.propTypes = {
  addContact: PropTypes.func,
};
export default ContactForm;
