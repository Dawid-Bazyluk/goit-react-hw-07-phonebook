import { createAction, createReducer } from "@reduxjs/toolkit";

export const filterContacts = createAction("contact/filterContacts");

const initialState = "";

const filterReducer = createReducer(initialState, (builder) => {
  builder.addCase(filterContacts, (state, action) => {
    return action.payload;
  });
});

export default filterReducer;
