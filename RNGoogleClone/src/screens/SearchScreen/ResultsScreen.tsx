import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ResultsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ResultsScreen</Text>
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
