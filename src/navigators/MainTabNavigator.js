import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/MainScreens/HomeScreen';
import ProfileScreen from '../screens/MainScreens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OrdersScreen from '../screens/MainScreens/OrdersScreen';
import DrawerNavigator from './DrawerNavigator';
import {useDispatch, useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  console.log('cart items-->', cartItems.length);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Order') {
            iconName = focused ? 'cart' : 'cart-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={DrawerNavigator} />
      <Tab.Screen
        name="Order"
        component={OrdersScreen}
        options={{
          tabBarBadge: cartItems.length === 0 ? null : cartItems.length,
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
