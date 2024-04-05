import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ImagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ImagesScreen</Text>
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
