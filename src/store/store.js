import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './slics/slice';
import userReducer from './slics/UserSlice';

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    user: userReducer, 
  },
});

export default store;
