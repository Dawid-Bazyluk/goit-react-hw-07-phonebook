import { createAction, createReducer } from "@reduxjs/toolkit";

export const addContacts = createAction("contact/addContacts");
export const deleteContacts = createAction("contact/deleteContacts");

const initialState = JSON.parse(localStorage.getItem("newContacts")) || [];

export const contactsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addContacts, (state, action) => {
      state.push(action.payload);
      localStorage.setItem("newContacts", JSON.stringify(state));
    })
    .addCase(deleteContacts, (state, action) => {
      const filteredContacts = state.filter(
        (contact) => contact.id !== action.payload,
      );
      localStorage.setItem("newContacts", JSON.stringify(filteredContacts));
      return filteredContacts;
    });
});

export default contactsReducer;
