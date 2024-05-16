import { configureStore } from "@reduxjs/toolkit";
import userInfo from "../reducer/userInfo"
export default configureStore({
  reducer: {
    counter: userInfo
  },
});
