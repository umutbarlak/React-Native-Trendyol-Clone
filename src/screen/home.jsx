import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import data from '../assets/widget.json';
import Categories from '../components/categories';
import Introduction from '../components/introduction';
import BestSeller from '../components/bestSeller';
import ForYou from '../components/forYou';
import {appStyles} from '../styles/appStyles';

const Home = () => {
  const widgetItem = ({item}) => {
    switch (item.name) {
      case 'introduction':
        return <Introduction item={item} />;
      case 'bestSeller':
        return <BestSeller item={item} />;
      case 'forYou':
        return <ForYou item={item} />;
      default:
        break;
    }
  };
  return (
    <View style={appStyles.container}>
      <FlatList data={data} renderItem={widgetItem} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
