import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import blogDataSlice from "./BlogState";

const store = configureStore({
  reducer: {
    blogState: blogDataSlice,
  },
});
export const useAppDispatch = () => useDispatch();
export default store;
