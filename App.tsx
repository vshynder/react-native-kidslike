import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './src';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

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
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
