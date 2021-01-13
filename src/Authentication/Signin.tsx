import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Logo } from '../components';
import Link from '../components/Link';
import { COLORS, SPACING } from '../Constants';
import { AuthStackProps } from '../NavigationHelper';
import SigninForm from './components/SigninForm';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

type SigninProps = {
  navigation: StackNavigationProp<AuthStackProps, 'Signin'>;
};

const Signin: React.FunctionComponent<SigninProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <SigninForm />
      <View>
        <Button
          label="Увійти за допомогою Google"
          onPress={() => true}
          color={COLORS.red}
          borderColor={COLORS.red}
        />
        <Button
          label="Увійти за допомогою Facebook"
          onPress={() => true}
          color={COLORS.blue}
          borderColor={COLORS.blue}
        />
      </View>
      <Link
        title="Немає аккаунту?"
        action="Зареєструватись"
        onPress={() => navigation.navigate('Signup')}
      />
    </SafeAreaView>
  );
};

export default Signin;
