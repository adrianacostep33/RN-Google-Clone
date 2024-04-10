import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
  ViewStyle,
} from 'react-native';

interface AvatarProps {
  style?: ViewStyle;
  source?: ImageSourcePropType;
}

const Avatar: React.FC<AvatarProps> = ({source, style}) => {
  const defaultSource: ImageSourcePropType = require('../../assets/icons/avatar.png');
  return (
    <View style={[styles.rootContainer, style]}>
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
    width: 35,
    height: 35,
    overflow: 'hidden',
    borderRadius: 17.5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Avatar;
