import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import React from 'react';
import {Result} from '../../../constants/Interfaces';
import NewsResultItem from './NewsResultItem';

interface ResultsListProps {
  results: Result[];
}

const NewsResultsList = ({results}: ResultsListProps) => {
  function renderResultItem(itemData: ListRenderItemInfo<Result>) {
    return <NewsResultItem {...itemData.item} />;
  }

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={results}
        keyExtractor={item => item.id}
        renderItem={renderResultItem}
      />
    </View>
  );
};

export default NewsResultsList;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // width: '100%',
  },
});
