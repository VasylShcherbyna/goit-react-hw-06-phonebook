import { ADD_CONTACT, REMOVE_CONTACT } from "../action-types";
import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

// export const addContact = (name, number) => ({
//   type: ADD_CONTACT,
//   payload: { name, number, id: shortid.generate() },
// });
// export const removeContact = (id) => ({
//   type: REMOVE_CONTACT,
//   payload: id,
// });

export const addContact = createAction(ADD_CONTACT, (name, number) => ({
  payload: { name, number, id: shortid.generate() },
}));

export const removeContact = createAction(REMOVE_CONTACT);