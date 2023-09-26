import { configureStore } from '@reduxjs/toolkit'
import  authSlice  from './auth/authSlice';
import searchTutorsSlice from './SearchTutors/searchTutorsSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        searchTutors: searchTutorsSlice
      
    },
  
})