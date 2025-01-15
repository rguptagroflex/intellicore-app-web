import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeFeature";
const rootReducer = combineReducers({
  themeData: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
