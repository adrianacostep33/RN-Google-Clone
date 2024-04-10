import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
  ViewStyle,
  Pressable,
} from 'react-native';
import {Colors} from '../../constants/Colors';
import {useAuth} from '../../contexts/useAuth';

interface AvatarProps {
  style?: ViewStyle;
  source?: ImageSourcePropType;
  onPress?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({source, style, onPress}) => {
  const {userImage} = useAuth();
  const defaultSource: ImageSourcePropType = require('../../assets/icons/user.png');
  return (
    <Pressable onPress={onPress} style={style}>
      <View style={styles.rootContainer}>
        <View style={styles.container}>
          {userImage ? (
            <Image source={source} style={styles.loggedImage} />
          ) : (
            <Image
              source={defaultSource}
              style={styles.unloggedImage}
              tintColor={Colors.primary}
            />
          )}
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
  loggedImage: {
    width: '100%',
    height: '100%',
    color: Colors.primary,
  },
  unloggedImage: {
    width: '90%',
    height: '90%',
    color: Colors.primary,
  },
});

export default Avatar;
