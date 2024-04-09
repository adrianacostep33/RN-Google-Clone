import {
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/Colors';

interface NewsResultItemProps {
  children?: React.ReactNode;
  title?: string;
  url?: string;
  image?: string;
  name?: string;
  description?: string;
  imageContent?: string;
}

const NewsResultItem = ({
  title,
  url,
  image,
  description,
  imageContent,
}: NewsResultItemProps) => {
  function handleResultPressed() {
    if (!url) return;
    Linking.openURL(url);
  }

  return (
    <Pressable onPress={handleResultPressed}>
      <View style={styles.rootContainer}>
        <View style={styles.container}>
          <View>
            <View style={styles.detailsContent}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: image}} />
              </View>
              <Text style={styles.title}>{title}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
          </View>

          <View style={styles.imageContentContainer}>
            <Image style={styles.imageContent} source={{uri: imageContent}} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default NewsResultItem;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'flex-start',
    backgroundColor: Colors.background600,
    marginVertical: 3,
    borderTopColor: Colors.border,
    borderTopWidth: 0.2,
    borderBottomColor: Colors.border,
    borderBottomWidth: 0.4,
  },
  container: {
    flexDirection: 'row',
    margin: 10,
  },
  detailsContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    color: Colors.text500,
  },
  imageContainer: {
    width: 15,
    height: 15,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 5,
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  description: {
    fontSize: 16,
    color: Colors.primary,
    width: (70 / 100) * deviceWidth,
  },
  imageContentContainer: {
    width: 80,
    height: 80,
    borderRadius: 5,
    overflow: 'hidden',
  },
  imageContent: {
    width: '100%',
    height: '100%',
  },
});
