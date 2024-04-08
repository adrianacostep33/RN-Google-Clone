import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import IconButton from './IconButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useNextPagesContext} from '../../contexts/NextPagesContext';

const Footer = () => {
  const {nextPages, setNextPages} = useNextPagesContext();

  const {name} = useRoute();

  const navigation = useNavigation();

  function handlePressedBack() {
    setNextPages(previous => [...previous, name]);
    navigation.goBack();
  }

  function handlePressedHome() {
    navigation.navigate('HomeScreen' as never);
  }

  function handlePressedNotifications() {
    navigation.navigate('Notifications' as never);
  }

  function handlePressedNext() {
    if (nextPages?.length === 0) return;

    const nextPage = nextPages[nextPages.length - 1];
    setNextPages(prev => prev.slice(0, prev.length - 1));

    navigation.navigate(nextPage as never);
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
        onPress={handlePressedNext}
        disabled={nextPages.length === 0}
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
