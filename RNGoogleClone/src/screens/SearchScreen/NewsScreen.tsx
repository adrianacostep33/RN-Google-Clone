import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NewsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>NewsScreen</Text>
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
