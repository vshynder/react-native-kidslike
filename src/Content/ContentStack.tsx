import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ContentStackProps } from '../NavigationHelper';
import Main from './Main';
import Tasks from './Tasks';
import Presents from './Presents';

const ContentStackNavigation = createStackNavigator<ContentStackProps>();

const ContentStack: React.FunctionComponent = () => {
  return (
    <ContentStackNavigation.Navigator headerMode="none">
      <ContentStackNavigation.Screen name="Main" component={Main} />
      <ContentStackNavigation.Screen name="Tasks" component={Tasks} />
      <ContentStackNavigation.Screen name="Presents" component={Presents} />
    </ContentStackNavigation.Navigator>
  );
};

export default ContentStack;
