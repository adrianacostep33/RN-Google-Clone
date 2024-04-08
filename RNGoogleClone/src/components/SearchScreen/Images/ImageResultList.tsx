import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import React from 'react';
import {Result} from '../../../constants/Interfaces';
import ImageResultItem from './ImageResultItem';

interface ResultsListProps {
  imageResults: Result[];
}

const ImageResultsList = ({imageResults}: ResultsListProps) => {
  function renderResultItem(itemData: ListRenderItemInfo<Result>) {
    return <ImageResultItem {...itemData.item} />;
  }

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={imageResults}
        keyExtractor={item => item.id}
        renderItem={renderResultItem}
        numColumns={2}
      />
    </View>
  );
};

export default ImageResultsList;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
  },
});
