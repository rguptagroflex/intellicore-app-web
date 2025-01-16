import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
const rootReducer = combineReducers({
  themeData: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
