import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import appColors from '../theme/colors';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory} from '../store/slices/categoriesSlice';

const CategoryItem = ({item}) => {
  const {selectedCategory} = useSelector(store => store.categories);
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => dispatch(setCategory(item))}
      style={[
        styles.cat,
        selectedCategory === item && styles.selectedContainer,
      ]}>
      <Text
        style={[styles.text, selectedCategory === item && styles.selectedText]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cat: {
    padding: 8,
    paddingHorizontal: 15,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: appColors.GRAY,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  selectedContainer: {
    backgroundColor: appColors.PRIMARY,
    borderColor: appColors.PRIMARY,
  },
  selectedText: {
    color: appColors.WHITE,
  },
});
