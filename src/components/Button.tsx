import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { COLORS, SPACING } from '../Constants';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.s / 2,
    paddingHorizontal: SPACING.s,
    borderWidth: 1,
    borderRadius: 20,
    width: width - SPACING.l * 2,
    marginVertical: SPACING.s,
  },
  label: {
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
});

type ButtonProps = {
  label: string;
  onPress: () => void;
  color: string;
  backgroundColor?: 'transparent' | 'orange' | 'white';
  borderColor?: string;
  disabled?: boolean;
};

const Button: React.FunctionComponent<ButtonProps> = ({
  label,
  onPress,
  color,
  backgroundColor,
  borderColor,
  disabled,
}) => {
  const bgColor =
    backgroundColor === 'transparent'
      ? 'transparent'
      : backgroundColor === 'orange'
      ? COLORS.orange
      : COLORS.light;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, { backgroundColor: bgColor, borderColor }]}
      onPress={onPress}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  backgroundColor: 'transparent',
  borderColor: 'white',
  disabled: false,
};

export default Button;
