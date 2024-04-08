import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import NavigationIcon from '../HomeScreen/NavigationIcon';
import {Colors} from '../../constants/Colors';

interface IconButtonProps {
  source: number;
  size: number;
  onPress?: () => void;
  disabled?: boolean;
}

const IconButton = ({source, size, onPress, disabled}: IconButtonProps) => {
  return (
    <Pressable
      onPress={!disabled ? onPress : () => {}}
      style={disabled && styles.disabled}>
      <NavigationIcon color={Colors.text600} size={size} source={source} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.6,
  },
});
