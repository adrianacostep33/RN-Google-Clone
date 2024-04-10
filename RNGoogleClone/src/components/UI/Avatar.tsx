import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
  ViewStyle,
  Pressable,
} from 'react-native';

interface AvatarProps {
  style?: ViewStyle;
  source?: ImageSourcePropType;
  onPress?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({source, style, onPress}) => {
  const defaultSource: ImageSourcePropType = require('../../assets/icons/avatar.png');
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.rootContainer, style]}>
        <View style={styles.container}>
          <Image source={source || defaultSource} style={styles.image} />
        </View>
      </View>
    </Pressable>
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
