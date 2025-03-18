import {createAsyncThunk} from '@reduxjs/toolkit';
import {CATEGORIES} from '../../services/url';
import {getCategories} from '../../services/verb';

const getAllCategories = createAsyncThunk(
  'categories/getCategories',
  async params => {
    const response = await getCategories(CATEGORIES, params);
    return response;
  },
);

export {getAllCategories};
