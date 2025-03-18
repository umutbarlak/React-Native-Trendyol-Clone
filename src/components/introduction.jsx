import {Image, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {screenWidth} from '../utils/constant';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTS} from '../utils/route';
import {setCategory} from '../store/slices/categoriesSlice';
import {useDispatch} from 'react-redux';

const Introduction = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate(PRODUCTS);
        dispatch(setCategory(''));
      }}
      style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/image/intro.webp')}
      />
    </Pressable>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  image: {
    width: screenWidth - 20,
    height: (screenWidth - 20) / 2,

    resizeMode: 'contain',
  },
});
