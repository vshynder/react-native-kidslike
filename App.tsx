import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack, ContentStack } from './src';
import { createStackNavigator } from '@react-navigation/stack';
import { AppStackProps } from './src/NavigationHelper';

const AppStackNavigation = createStackNavigator<AppStackProps>();

const App: React.FunctionComponent = () => {
  const [fontsLoaded] = useFonts({
    'Rubik-Regular': require('./assets/rubik-v11-latin/rubik-v11-latin-regular.ttf'),
    'Rubik-Medium': require('./assets/rubik-v11-latin/rubik-v11-latin-500.ttf'),
    'Rubik-Black': require('./assets/rubik-v11-latin/rubik-v11-latin-900.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <AppStackNavigation.Navigator headerMode="none">
        <AppStackNavigation.Screen name="Auth" component={AuthStack} />
        <AppStackNavigation.Screen name="Content" component={ContentStack} />
      </AppStackNavigation.Navigator>
    </NavigationContainer>
  );
};

export default App;
