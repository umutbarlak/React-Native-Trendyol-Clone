import {configureStore} from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import categoriesSlice from './slices/categoriesSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
    categories: categoriesSlice,
  },
});
