import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./reducers/textReducer";

export const store = configureStore({
  reducer: {
    prompt: textReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
