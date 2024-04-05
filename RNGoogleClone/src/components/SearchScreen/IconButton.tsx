import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import NavigationIcon from '../HomeScreen/NavigationIcon';
import {Colors} from '../../constants/Colors';

interface IconButtonProps {
  source: number;
  size: number;
  onPress?: () => void;
}

const IconButton = ({source, size, onPress}: IconButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <NavigationIcon color={Colors.text600} size={size} source={source} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
