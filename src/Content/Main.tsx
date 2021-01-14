import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Logo } from '../components';
import { Header } from '../components';
import { SPACING } from '../Constants';
import houseImage from '../../assets/house.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: SPACING.s,
  },
  content: {
    flex: 1,
    paddingVertical: SPACING.m,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: SPACING.s,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Rubik-Medium',
    fontSize: 22,
  },
});

const Main: React.FunctionComponent = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header />
      <View style={styles.content}>
        <View style={styles.heading}>
          <Image style={styles.image} source={houseImage} />
          <Text style={styles.title}>Сім’я</Text>
        </View>
      </View>
    </View>
  );
};

export default Main;
