import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import userReducer from "./userSlice";
import compareReducer from "./compareDetailSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist:['user','compare']
};
const reducers = combineReducers({
  user: userReducer,
  compare : compareReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
