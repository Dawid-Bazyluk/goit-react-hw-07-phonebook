import React from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsLoading, selectError } from "../redux/selectors";
import { fetchContacts } from "../redux/contactsSlicer";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList></ContactList>
      {!!isLoading && !error && <b style={{ fontSize: 40 }}>Loading...</b>}
    </div>
  );
};
export default App;
