import {createSlice} from '@reduxjs/toolkit';
import {getProduct, getProducts} from '../actions/productActions';

const initialState = {
  products: [],
  product: {},
  pendingDetail: false,
  forYouProducts: [],
  bestSellerProducts: [],
  pending: false,
  error: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.pending = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.pending = false;
        state.products = action.payload;
        if (action.meta.arg.category == "women's clothing") {
          state.forYouProducts = action.payload;
        }
        if (action.meta.arg.category == "men's clothing") {
          state.bestSellerProducts = action.payload;
        }
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      })
      .addCase(getProduct.pending, state => {
        state.pendingDetail = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.pendingDetail = false;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.pendingDetail = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
