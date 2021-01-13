import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Logo } from '../components';
import Link from '../components/Link';
import { COLORS, SPACING } from '../Constants';
import { AuthStackProps } from '../NavigationHelper';
import SignupForm from './components/SignupForm';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

type SignupProps = {
  navigation: StackNavigationProp<AuthStackProps, 'Signup'>;
};

const Signup: React.FunctionComponent<SignupProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <SignupForm />
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
        title="Уже є аккаунт?"
        action="Увійти"
        onPress={() => navigation.navigate('Signin')}
      />
    </SafeAreaView>
  );
};

export default Signup;
