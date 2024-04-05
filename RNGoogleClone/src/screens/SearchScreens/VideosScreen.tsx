import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Footer from '../../components/SearchScreen/Footer';

const VideosScreen = () => {
  return (
    <View style={styles.container}>
      <Text>VideosScreen</Text>
      <Footer />
    </View>
  );
};

export default VideosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
