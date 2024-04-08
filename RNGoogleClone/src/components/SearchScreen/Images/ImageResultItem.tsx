import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/Colors';

interface ImageResultItemProps {
  children?: React.ReactNode;
  title?: string;
  url?: string;
  image?: string;
  name?: string;
  description?: string;
}

const ImageResultItem = ({title}: ImageResultItemProps) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ImageResultItem;

const styles = StyleSheet.create({
  title: {
    color: Colors.text500,
  },
});
