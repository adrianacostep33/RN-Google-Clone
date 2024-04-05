import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../src/constants/Colors';

interface IconProps {
  focused: boolean;
  source: number;
  color: string;
  size: number;
}

export default function NavigationIcon({
  focused,
  source,
  color,
  size,
}: IconProps) {
  const styles = StyleSheet.create({
    icon: {
      width: size,
      height: size,
      tintColor: focused ? Colors.text600 : Colors.primary,
    },
  });
  return (
    <View>
      <Image source={source} style={styles.icon} tintColor={color} />
    </View>
  );
}
