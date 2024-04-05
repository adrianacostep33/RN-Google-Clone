import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

interface TopTabLabel {
  focused?: boolean;
  label: string;
}

const TopTabLabel = ({label, focused}: TopTabLabel) => {
  return (
    <View style={[styles.container, focused && styles.focusedContainer]}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default TopTabLabel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  focusedContainer: {
    backgroundColor: Colors.primary100,
    borderRadius: 10,
  },
  label: {
    color: Colors.text500,
    fontSize: 14,
    paddingVertical: 0,
    paddingHorizontal: 4,
    flexWrap: 'nowrap',
  },
});
