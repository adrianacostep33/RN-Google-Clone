import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BooksScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BooksScreen</Text>
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
