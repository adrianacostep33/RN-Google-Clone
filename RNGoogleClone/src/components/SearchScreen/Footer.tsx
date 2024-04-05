import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import IconButton from './IconButton';
import {useNavigation} from '@react-navigation/native';

// interface FooterProps {
//   goBack: () => void;
// }

const Footer = () => {
  const navigation = useNavigation();

  function handlePressedBack() {
    navigation.goBack();
  }

  function handlePressedHome() {
    navigation.navigate('HomeScreen' as never);
  }

  function handlePressedNotifications() {
    navigation.navigate('Notifications' as never);
  }

  return (
    <View style={[styles.container]}>
      <IconButton
        size={20}
        source={require('../../assets/icons/left-arrow.png')}
        onPress={handlePressedBack}
      />

      <IconButton
        size={20}
        source={require('../../assets/icons/right-arrow.png')}
      />

      <IconButton size={20} source={require('../../assets/icons/upload.png')} />

      <IconButton
        size={22}
        source={require('../../assets/icons/home-outlined.png')}
        onPress={handlePressedHome}
      />

      <IconButton
        size={26}
        source={require('../../assets/icons/notifications.png')}
        onPress={handlePressedNotifications}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.background500,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    paddingBottom: 30,
    paddingTop: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Footer;
