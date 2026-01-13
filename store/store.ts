import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import uiReducer from "./reducers/uiReducer";
import optionReducer from "./reducers/optionReducer";
import introReducer from "./reducers/introReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    option: optionReducer,
    intro: introReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
