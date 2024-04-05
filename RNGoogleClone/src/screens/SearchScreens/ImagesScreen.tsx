import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Footer from '../../components/SearchScreen/Footer';

const ImagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ImagesScreen</Text>
      <Footer />
    </View>
  );
};

export default ImagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
