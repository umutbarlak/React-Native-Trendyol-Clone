import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CART, FAVORİTE, HOME, PROFILE, TRENDYOL_GO} from '../utils/route';
import Home from '../screen/home';
import TrendyolGo from '../screen/trendyolGo';
import Favorites from '../screen/favorites';
import Cart from '../screen/cart';
import Profile from '../screen/profile';
import HomeIcon from '../assets/icons/homeIcon';
import TrendyolGoIcon from '../assets/icons/trendyolGoIcon';
import FavoritesIcon from '../assets/icons/favoritesIcon';
import CartIcon from '../assets/icons/cartIcon';
import ProfileIcon from '../assets/icons/profileIcon';
import {Text, View} from 'react-native';
import MessageIcon from '../assets/icons/messageIcon';
import NotificationIcon from '../assets/icons/notificationIcon';
import appColors from '../theme/colors';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerRight: () => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginRight: 10,
            }}>
            <MessageIcon color={appColors.GRAY} />
            <NotificationIcon color={appColors.GRAY} />
          </View>
        ),
        tabBarActiveTintColor: appColors.PRIMARY,
        tabBarIcon: ({color, focused, size}) => {
          switch (route.name) {
            case HOME:
              return (
                <HomeIcon
                  color={focused ? appColors.PRIMARY : appColors.GRAY}
                  size={size}
                />
              );
            case TRENDYOL_GO:
              return (
                <TrendyolGoIcon
                  color={focused ? appColors.PRIMARY : appColors.GRAY}
                  size={size}
                />
              );
            case FAVORİTE:
              return (
                <FavoritesIcon
                  color={focused ? appColors.PRIMARY : appColors.GRAY}
                  size={size}
                />
              );
            case CART:
              return (
                <CartIcon
                  color={focused ? appColors.PRIMARY : appColors.GRAY}
                  size={size}
                />
              );
            case PROFILE:
              return (
                <ProfileIcon
                  color={focused ? appColors.PRIMARY : appColors.GRAY}
                  size={size}
                />
              );

            default:
              break;
          }
        },
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={TRENDYOL_GO} component={TrendyolGo} />
      <Tab.Screen name={FAVORİTE} component={Favorites} />
      <Tab.Screen name={CART} component={Cart} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default Main;
