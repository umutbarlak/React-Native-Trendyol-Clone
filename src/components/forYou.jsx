import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Widget from './widget';
import {useDispatch, useSelector} from 'react-redux';
import Product from './product';
import {getProducts} from '../store/actions/productActions';

const ForYou = ({item}) => {
  const {forYouProducts} = useSelector(store => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getProducts({
        limit: 4,
        category: "women's clothing",
      }),
    );
  }, []);
  return (
    <View style={styles.container}>
      <Widget
        title={item.title}
        seeAll={item.seeAll}
        category="women's clothing"
      />
      <FlatList
        contentContainerStyle={{
          gap: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={forYouProducts}
        renderItem={({item}) => <Product product={item} />}
      />
    </View>
  );
};

export default ForYou;

const styles = StyleSheet.create({});
