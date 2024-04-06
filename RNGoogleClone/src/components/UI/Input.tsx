import {Image, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

const Input = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={Colors.gray500}
      />
      <Image
        tintColor={Colors.text500}
        style={styles.microphone}
        source={require('../../assets/icons/microphone.png')}
      />
      <Image
        tintColor={Colors.text500}
        style={styles.camera}
        source={require('../../assets/icons/camera.png')}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
  },
  input: {
    backgroundColor: Colors.gray600,
    width: '90%',
    height: 60,
    borderRadius: 30,
    fontSize: 24,
    paddingHorizontal: 25,
  },
  microphone: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 80,
  },
  camera: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 40,
  },
});
