import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProduct} from '../store/actions/productActions';
import Loading from '../components/ui/loading';
import {appStyles} from '../styles/appStyles';
import {screenHeight, screenWidth} from '../utils/constant';
import appColors from '../theme/colors';
import StarIcon from '../assets/icons/starIcon';
import Button from '../components/ui/button';
import {convertPrice} from '../utils/functions';

const Detail = ({route}) => {
  const {product, pendingDetail} = useSelector(store => store.products);
  const id = route?.params?.id;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: appColors.WHITE}}>
      <View style={appStyles.container}>
        {pendingDetail ? (
          <Loading />
        ) : (
          <View style={{flex: 1}}>
            <ScrollView style={styles.innerContainer}>
              <Image style={styles.image} source={{uri: product.image}} />
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.cat}>{product.category}</Text>
              <View style={styles.rating}>
                <StarIcon width={21} color={appColors.YELLOW} />
                <Text style={styles.rate}>{product.rating?.rate}</Text>
              </View>
              <Text style={styles.desc}>{product.description}</Text>
            </ScrollView>
            <View style={styles.footer}>
              <View>
                <Text style={styles.price}>{convertPrice(product.price)}</Text>
                <Text style={styles.cargo}>Kargo Bedava</Text>
              </View>
              <View style={styles.buttons}>
                <Button title="Şimdi Al" type="outline" />
                <Button title="Sepete Ekle" type="flat" />
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  innerContainer: {
    position: 'relative',
  },
  image: {
    width: screenWidth - 20,
    height: screenHeight * 0.2,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    marginVertical: 10,
  },
  desc: {
    fontSize: 14,
  },
  cat: {
    color: appColors.GRAY,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginVertical: 5,
  },
  rate: {
    fontSize: 15,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  price: {
    fontSize: 17,
    fontWeight: '700',
    color: appColors.PRIMARY,
  },
  cargo: {fontSize: 13, fontWeight: '300', color: appColors.GREEN},
});
