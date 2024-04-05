import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import IconButton from './IconButton';

const Footer = () => {
  function onPressButton() {
    console.log('press');
  }
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={onPressButton} style={styles.button}>
        <IconButton
          size={20}
          source={require('../../assets/icons/left-arrow.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressButton} style={styles.button}>
        <IconButton
          size={20}
          source={require('../../assets/icons/right-arrow.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressButton} style={styles.button}>
        <IconButton
          size={20}
          source={require('../../assets/icons/upload.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressButton} style={styles.button}>
        <IconButton
          size={22}
          source={require('../../assets/icons/home-outlined.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressButton} style={styles.button}>
        <IconButton
          size={26}
          source={require('../../assets/icons/notifications.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background500,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    paddingBottom: 30,
    paddingTop: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
});

export default Footer;
