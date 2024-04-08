import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import React from 'react';
import {Result} from '../../../constants/Interfaces';
import ResultItem from './ResultItem';

interface ResultsListProps {
  results: Result[];
}

const ResultsList = ({results}: ResultsListProps) => {
  function renderResultItem(itemData: ListRenderItemInfo<Result>) {
    return <ResultItem {...itemData.item} />;
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

export default ResultsList;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
  },
});
