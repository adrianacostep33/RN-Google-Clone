import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
const HomeScreen = ({navigation}: any) => {
  function handleSearch() {
    navigation.push('SearchScreen');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
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
  text: {
    color: Colors.text,
  },
});
