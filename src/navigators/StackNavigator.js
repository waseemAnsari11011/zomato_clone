import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrdersScreen from '../screens/MainScreens/OrdersScreen';
import MainTabNavigator from './MainTabNavigator';
import DrawerNavigator from './DrawerNavigator';
import Details from '../screens/MainScreens/Details';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={MainTabNavigator} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
