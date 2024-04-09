import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button = ({title, onPress}: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: Colors.background600,
    fontSize: 12,
  },
});
