import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./redux/accountSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
  },
});

export default store;
