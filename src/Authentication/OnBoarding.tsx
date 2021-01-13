import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { Logo, Button } from '../components';
import { COLORS, SPACING } from '../Constants';
import { AuthStackProps } from '../NavigationHelper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FF8626',
  },
  title: {
    fontFamily: 'Rubik-Black',
    fontSize: 22,
    textAlign: 'center',
    color: COLORS.light,
    paddingHorizontal: SPACING.s,
    marginTop: SPACING.l,
  },
  body: {
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.light,
    paddingHorizontal: SPACING.s,
    marginTop: SPACING.s,
  },
});

type OnBoardingProps = {
  navigation: StackNavigationProp<AuthStackProps, 'Onboarding'>;
};

const OnBoarding: React.FunctionComponent<OnBoardingProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Logo variant="white" />
      <Text style={styles.title}>Мотивуйте дитину вдосконалювати себе!</Text>
      <Text style={styles.body}>
        Вкажіть звички та задачі, які буде виконувати ваша дитина (наприклад
        читати 20 сторінок книжки в день), мотивуйте подарунками виконувати їх і
        очікуйте результату!
      </Text>
      <View>
        <Button
          label="Вхід"
          onPress={() => navigation.navigate('Signin')}
          color={COLORS.light}
        />
        <Button
          label="Зареєструватися"
          onPress={() => navigation.navigate('Signup')}
          color={COLORS.orange}
          backgroundColor="white"
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
