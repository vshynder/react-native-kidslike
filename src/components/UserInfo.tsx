import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const UserInfo: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>UserInfo</Text>
    </View>
  );
};

export default UserInfo;
