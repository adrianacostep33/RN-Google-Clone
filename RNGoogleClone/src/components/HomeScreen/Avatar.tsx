import React from 'react';
import {View, Image, StyleSheet, ImageSourcePropType} from 'react-native';

interface AvatarProps {
  source?: ImageSourcePropType;
}

const Avatar: React.FC<AvatarProps> = ({source}) => {
  const defaultSource: ImageSourcePropType = require('../../assets/icons/avatar.png');
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <Image source={source || defaultSource} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  container: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Avatar;
