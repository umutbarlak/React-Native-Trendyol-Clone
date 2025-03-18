import {FlatList, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {CATEGORIES} from '../services/url';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCategories} from '../store/actions/categoriesActions';
import CategoryItem from './categoryItem';

const Categories = () => {
  const {categories} = useSelector(store => store.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories(CATEGORIES));
  }, []);
  return (
    <FlatList
      style={{marginBottom: 5}}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={categories}
      renderItem={({item}) => <CategoryItem item={item} />}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
