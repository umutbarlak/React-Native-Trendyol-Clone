import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {screenHeight, screenWidth} from '../utils/constant';
import appColors from '../theme/colors';
import StarIcon from '../assets/icons/starIcon';
import HeartIcon from '../assets/icons/heartIcon';
import {convertPrice} from '../utils/functions';
import {useNavigation} from '@react-navigation/native';
import {DETAIL} from '../utils/route';

const Product = ({product}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(DETAIL, {id: product.id})}
      style={styles.container}>
      <Image style={styles.image} source={{uri: product.image}} />
      <Text numberOfLines={2} style={styles.title}>
        {product.title}
      </Text>
      <View style={styles.body}>
        <Text>{convertPrice(product.price)}</Text>
        <View style={styles.rating}>
          <StarIcon color={appColors.YELLOW} />
          <Text>{product.rating.rate}</Text>
        </View>
      </View>
      <HeartIcon style={styles.heart} color={appColors.SOFTGRAY} />
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    width: screenWidth / 2 - 20,
    borderWidth: 1,
    borderColor: appColors.SOFTGRAY,
    margin: 'auto',
    padding: 5,
    backgroundColor: appColors.WHITE,
    borderRadius: 10,
    position: 'relative',
  },
  image: {
    width: screenWidth / 2 - 40,
    height: screenHeight * 0.15,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontWeight: '500',
    marginVertical: 10,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heart: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});
