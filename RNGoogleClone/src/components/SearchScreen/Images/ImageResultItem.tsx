import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
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

const ImageResultItem = ({title, image, description}: ImageResultItemProps) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: image}} />
        </View>

        <View>
          <View style={styles.titleContainer}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={{uri: image}} />
            </View>
            <Text style={[styles.textBase, styles.title]}>{title}</Text>
          </View>

          <Text
            style={[styles.textBase, styles.description]}
            numberOfLines={1}
            ellipsizeMode="tail">
            {description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ImageResultItem;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'flex-start',
  },
  container: {
    marginHorizontal: 3,
    marginBottom: 10,
  },
  imageContainer: {
    width: deviceWidth / 2.1,
    height: deviceWidth / 2.1,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    marginBottom: 10,
  },
  logoContainer: {
    width: 12,
    height: 12,
    borderRadius: 2,
    overflow: 'hidden',
    marginRight: 3,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBase: {
    fontSize: 10,
  },
  title: {
    color: Colors.text600,
  },
  description: {
    color: Colors.text500,
    width: deviceWidth / 2.5,
  },
});
