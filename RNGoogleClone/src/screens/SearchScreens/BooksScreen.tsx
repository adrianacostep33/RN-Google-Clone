import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Footer from '../../components/SearchScreen/Footer';

const BooksScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BooksScreen</Text>
      <Footer />
    </View>
  );
};

export default BooksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
