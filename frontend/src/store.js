import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./Counter/couterSlice"
export default configureStore({
  reducer: {
    count:counterReducer,
  },
})