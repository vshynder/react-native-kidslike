import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { AuthStackProps } from '../NavigationHelper';
import OnBoarding from './OnBoarding';
import Signin from './Signin';
import Signup from './Signup';

const AuthStackNavigator = createStackNavigator<AuthStackProps>();

const AuthStack = () => {
  return (
    <AuthStackNavigator.Navigator headerMode="none">
      <AuthStackNavigator.Screen name="Onboarding" component={OnBoarding} />
      <AuthStackNavigator.Screen name="Signin" component={Signin} />
      <AuthStackNavigator.Screen name="Signup" component={Signup} />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthStack;
