import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Footer from '../../components/SearchScreen/Footer';

const FinanceScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FinanceScreen</Text>
      <Footer />
    </View>
  );
};

export default FinanceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
