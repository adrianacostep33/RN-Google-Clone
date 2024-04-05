import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Footer from '../../components/SearchScreen/Footer';

const ResultsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ResultsScreen</Text>
      <Footer />
    </View>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
