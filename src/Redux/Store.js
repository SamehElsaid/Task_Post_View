import { configureStore } from "@reduxjs/toolkit";
import posts from "./postSlice/postSlice";
import postById from "./postSlice/postByIdSlice";
import comments from "./commentSlice/commentSlice";
const store = configureStore({
  reducer: {
    posts,
    postById,
    comments,
  },
});
export default store;
