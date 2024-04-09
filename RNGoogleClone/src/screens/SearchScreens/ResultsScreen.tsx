import React, {useEffect, useState} from 'react';
import {ListRenderItemInfo, StyleSheet, View} from 'react-native';
import Footer from '../../components/SearchScreen/Footer';
import {Result} from '../../constants/Interfaces';
import {useSearchContext} from '../../contexts/SearchContext';
import search from '../../utils/http/search';
import ResultsList from '../../components/SearchScreen/ResultsList';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import ResultItem from '../../components/SearchScreen/Results/ResultItem';

const ResultsScreen = () => {
  const {inputValue} = useSearchContext();
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<Result[]>([]);

  function renderResultItem(itemData: ListRenderItemInfo<Result>) {
    return <ResultItem {...itemData.item} />;
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await search('default', inputValue.split(/\s+/));

      setLoading(false);
      setResults(data);
    };
    fetchData();
  }, [inputValue]);

  return (
    <View style={styles.container}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ResultsList renderResultItem={renderResultItem} results={results} />
      )}
      <Footer />
    </View>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 60,
  },
});
