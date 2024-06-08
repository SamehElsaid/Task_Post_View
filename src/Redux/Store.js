import { configureStore } from "@reduxjs/toolkit";
import posts from "./postSlice/postSlice";
import postById from "./postSlice/postByIdSlice";
const store = configureStore({
  reducer: {
    posts,
    postById,
  },
});
export default store;
