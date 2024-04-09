import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import React from 'react';
import {Result} from '../../constants/Interfaces';

interface ResultsListProps {
  results: Result[];
  renderResultItem: (itemData: ListRenderItemInfo<Result>) => JSX.Element;
  nrColumns?: number;
}

const ResultsList = ({
  results,
  renderResultItem,
  nrColumns = 1,
}: ResultsListProps) => {
  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={results}
        keyExtractor={item => item.id}
        renderItem={renderResultItem}
        numColumns={nrColumns}
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
