import {Client} from './instance';

export const getAllProducts = async (URL, params) => {
  console.log(params);

  const response = await Client.get(URL, {params});

  return response.data;
};

export const getCategories = async (URL, {params}) => {
  const response = await Client.get(URL, params);

  return response.data;
};
