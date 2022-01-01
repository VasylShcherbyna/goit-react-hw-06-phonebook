import { filter } from "../filter/filter-actions";
import { createReducer } from "@reduxjs/toolkit";
// import { FILTER } from "../action-types";

// export const filterReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export const filterReducer = createReducer("", {
  [filter]: (state, action) => action.payload,
});