import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DETAIL, PRODUCTS, PROFILE, TAB_MAIN} from '../utils/route';
import Profile from '../screen/profile';
import Main from './tabNavigation';
import MessageIcon from '../assets/icons/messageIcon';
import NotificationIcon from '../assets/icons/notificationIcon';
import Products from '../screen/products';
import Detail from '../screen/detail';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TAB_MAIN}
        component={Main}
      />
      <Stack.Screen name={PRODUCTS} component={Products} />
      <Stack.Screen name={DETAIL} component={Detail} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
