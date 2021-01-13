import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../Constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Rubik-Regular',
    fontSize: 12,
    color: COLORS.grey,
  },
  action: {
    textDecorationLine: 'underline',
  },
});

type LinkProps = {
  title: string;
  action: string;
  onPress: () => void;
};

const Link: React.FunctionComponent<LinkProps> = ({
  title,
  action,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title} </Text>
        <Text style={[styles.title, styles.action]}>{action}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Link;
