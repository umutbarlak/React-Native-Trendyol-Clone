import {createSlice} from '@reduxjs/toolkit';
import {getAllCategories} from '../actions/categoriesActions';

const initialState = {
  categories: [],
  pending: false,
  selectedCategory: '',
  error: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCategories.pending, state => {
        state.pending = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        (state.pending = false), (state.categories = action.payload);
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        (state.pending = false), (state.error = action.payload);
      });
  },
});
export const {setCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;
