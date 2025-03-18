import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {useEffect} from 'react';
import Product from '../components/product';
import appColors from '../theme/colors';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../store/actions/productActions';
import Categories from '../components/categories';
import Loading from '../components/ui/loading';
import {appStyles} from '../styles/appStyles';

const Products = ({route}) => {
  const {products, pending} = useSelector(store => store.products);
  const {selectedCategory} = useSelector(store => store.categories);
  const dispatch = useDispatch();
  const category = route?.params?.category;
  useEffect(() => {
    dispatch(
      getProducts({category: selectedCategory ? selectedCategory : category}),
    );
  }, [selectedCategory, category]);

  return (
    <SafeAreaView style={appStyles.container}>
      {pending ? (
        <Loading />
      ) : (
        <FlatList
          ListHeaderComponent={<Categories />}
          style={{padding: 10}}
          columnWrapperStyle={{marginVertical: 5}}
          data={products}
          renderItem={({item}) => <Product product={item} />}
          numColumns={2}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.WHITE,
  },
});
