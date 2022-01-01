import { createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact } from "./contacts-actions";
// import { ADD_CONTACT, REMOVE_CONTACT } from "../action-types";

// export const contactsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       let duplicate = state.find((contact) => contact.name === payload.name);
//       if (duplicate) {
//         alert("Такой контакт уже существует!");
//         return state;
//       } else {
//         return [...state, payload];
//       }
//     case REMOVE_CONTACT:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

export const contactsReducer = createReducer([], {
  [addContact]: (state, { payload }) => {
    let duplicate = state.find((contact) => contact.name === payload.name);
    if (duplicate) {
      alert("Такой контакт уже существует!");
      return state;
    } else {
      return [...state, payload];
    }
  },
  [removeContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});