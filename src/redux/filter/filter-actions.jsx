import { FILTER } from "../action-types";
import { createAction } from "@reduxjs/toolkit";

// export const filter = (text) => ({
//   type: FILTER,
//   payload: text,
// });

export const filter = createAction(FILTER);