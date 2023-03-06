import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import AuthNavigator from './AuthNavigator';
import StackNavigator from './StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootNavigator = () => {
  const {isAuthenticated} = useSelector(state => state.auth);

  return (
    <NavigationContainer>
      {isAuthenticated ? <StackNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
