import {createAsyncThunk} from '@reduxjs/toolkit';
import {CATEGORY, PRODUCTS} from '../../services/url';
import {getAllProducts} from '../../services/verb';

const getProducts = createAsyncThunk('products/getProducts', async params => {
  const url = params.category ? `${CATEGORY}/${params.category}` : PRODUCTS;
  const response = await getAllProducts(url, params);
  return response;
});

const getProduct = createAsyncThunk('products/getProduct', async id => {
  const response = await getAllProducts(`${PRODUCTS}/${id}`);
  return response;
});

export {getProducts, getProduct};
