import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/Colors';

interface ResultItemProps {
  children?: React.ReactNode;
  title?: string;
  url?: string;
  image?: string;
  name?: string;
  description?: string;
}

const ResultItem = ({
  children,
  title,
  url,
  image,
  name,
  description,
}: ResultItemProps) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: image}} />
          </View>

          <View>
            <Text style={[styles.textBase, styles.title]}>{title}</Text>
            <Text style={[styles.textBase, styles.url]}>{url}</Text>
          </View>
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={[styles.textBase, styles.description]}>{description}</Text>
        {children}
      </View>
    </View>
  );
};

export default ResultItem;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'flex-start',
    backgroundColor: Colors.background600,
    marginVertical: 2,
    borderTopColor: Colors.border,
    borderTopWidth: 0.2,
    borderBottomColor: Colors.border,
    borderBottomWidth: 0.4,
  },
  container: {
    margin: 10,
  },
  mainContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBase: {
    color: Colors.text500,
  },
  title: {
    fontSize: 14,
  },
  url: {
    fontSize: 12,
  },
  imageContainer: {
    width: 26,
    height: 26,
    borderRadius: 13,
    overflow: 'hidden',
    marginRight: 10,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
  },
});
