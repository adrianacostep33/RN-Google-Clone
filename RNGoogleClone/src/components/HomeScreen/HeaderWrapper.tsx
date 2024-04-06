import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

interface HeaderWrapperProps {
  children?: React.ReactNode;
}

const HeaderWrapper = ({children}: HeaderWrapperProps) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default HeaderWrapper;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    height: 50,
    paddingHorizontal: 10,
  },
  title: {
    color: Colors.text500,
  },
});
