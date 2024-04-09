import {ListRenderItemInfo, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Footer from '../../components/SearchScreen/Footer';
import {useSearchContext} from '../../contexts/SearchContext';
import {Result} from '../../constants/Interfaces';
import search from '../../utils/http/search';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import NewsResultItem from '../../components/SearchScreen/News/NewsResultItem';
import ResultsList from '../../components/SearchScreen/ResultsList';

const NewsScreen = () => {
  const {inputValue} = useSearchContext();
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<Result[]>([]);

  function renderResultItem(itemData: ListRenderItemInfo<Result>) {
    return <NewsResultItem {...itemData.item} />;
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await search('news', inputValue.split(/\s+/));

      setLoading(false);
      setResults(data);
    };
    fetchData();
  }, [inputValue]);

  return (
    <View style={styles.container}>
      <Text>NewsScreen</Text>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ResultsList renderResultItem={renderResultItem} results={results} />
      )}
      <Footer />
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 60,
  },
});
