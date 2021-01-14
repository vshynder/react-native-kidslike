import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import { COLORS, SPACING } from '../../Constants';
import { ContentStackProps } from '../../NavigationHelper';
import Logo from '../Logo';
import UserInfo from '../UserInfo';
import NavigationItem from './NavigationItem';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  row: {
    width: width - SPACING.s * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  navigation: {
    justifyContent: 'center',
  },
});

const Header: React.FunctionComponent = () => {
  const navigation = useNavigation<
    StackNavigationProp<ContentStackProps, 'Main'>
  >();
  const route = useRoute();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.row}>
        <Logo />
        <UserInfo />
      </View>
      <View style={[styles.row, styles.navigation]}>
        <NavigationItem
          onPress={() => navigation.navigate('Main')}
          image="house"
          choosen={route.name === 'Main'}
          disabled={route.name === 'Main'}
        />
        <NavigationItem
          onPress={() => navigation.navigate('Tasks')}
          image="pin"
          choosen={route.name === 'Tasks'}
          disabled={route.name === 'Tasks'}
        />
        <NavigationItem
          onPress={() => navigation.navigate('Presents')}
          image="present"
          choosen={route.name === 'Presents'}
          disabled={route.name === 'Presents'}
        />
      </View>
    </View>
  );
};

export default Header;
