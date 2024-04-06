import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/Colors';

interface ResultItemProps {
  children?: React.ReactNode;
  title: string;
}

const ResultItem = ({children, title}: ResultItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

export default ResultItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: Colors.text500,
  },
});
