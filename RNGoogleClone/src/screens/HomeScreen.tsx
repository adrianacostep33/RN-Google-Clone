import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}: any) => {
  function handleSearch() {
    navigation.push('Search');
  }

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
