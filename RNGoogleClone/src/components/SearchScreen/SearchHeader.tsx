import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import Input from '../UI/Input';

const SearchHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Input />
      </View>
    </SafeAreaView>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background600,
  },
  searchContainer: {
    marginTop: '5%',
  },
});
