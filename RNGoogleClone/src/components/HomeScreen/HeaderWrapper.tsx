import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

interface HeaderWrapperProps {
  children?: React.ReactNode;
}

const HeaderWrapper = ({children}: HeaderWrapperProps) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* {title && <Text style={styles.title}>{title}</Text>} */}
        {children}
      </View>
    </SafeAreaView>
  );
};

export default HeaderWrapper;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background600,
    height: 200,
  },
  title: {
    color: Colors.text500,
  },
});
