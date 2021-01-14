import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import houseImage from '../../../assets/house.png';
import pinImage from '../../../assets/pin.png';
import presentImage from '../../../assets/present.png';
import { COLORS } from '../../Constants';

const IMAGE_SIZE = 18;
const BORDER = 15;

const styles = StyleSheet.create({
  imageCont: {
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: BORDER,
    padding: BORDER,
    margin: BORDER,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
});

type NavigationItemProps = {
  image: 'house' | 'pin' | 'present';
  choosen?: boolean;
  disabled?: boolean;
  onPress?: () => void;
};

const NavigationItem: React.FunctionComponent<NavigationItemProps> = ({
  image,
  choosen,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.imageCont,
        choosen
          ? null
          : { backgroundColor: COLORS.light, borderColor: COLORS.light },
      ]}
    >
      <Image
        style={styles.image}
        source={
          image === 'house'
            ? houseImage
            : image === 'pin'
            ? pinImage
            : presentImage
        }
      />
    </TouchableOpacity>
  );
};

NavigationItem.defaultProps = {
  choosen: false,
  disabled: false,
};

export default NavigationItem;
