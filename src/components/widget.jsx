import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTS} from '../utils/route';
import appColors from '../theme/colors';
import {useDispatch} from '../../node_modules/react-redux/src/hooks/useDispatch';
import {setCategory} from '../store/slices/categoriesSlice';

const Widget = ({title, seeAll, category}) => {
  const navigaiton = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {seeAll && (
        <TouchableOpacity
          onPress={() => {
            navigaiton.navigate(PRODUCTS, {category: category});
            dispatch(setCategory(category));
          }}>
          <Text style={styles.seeAll}>Tümünü Gör</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Widget;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
  },
  seeAll: {
    fontWeight: '500',
    fontSize: 14,
    color: appColors.PRIMARY,
  },
});
