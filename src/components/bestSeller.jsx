import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Widget from './widget';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../store/actions/productActions';
import Product from './product';

const BestSeller = ({item}) => {
  const {bestSellerProducts} = useSelector(store => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getProducts({
        limit: 4,
        category: "men's clothing",
      }),
    );
  }, []);
  return (
    <View style={styles.container}>
      <Widget
        title={item.title}
        seeAll={item.seeAll}
        category="men's clothing"
      />
      <FlatList
        contentContainerStyle={{
          gap: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={bestSellerProducts}
        renderItem={({item}) => <Product product={item} />}
      />
    </View>
  );
};

export default BestSeller;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});
