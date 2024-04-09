import React, {useEffect, useState} from 'react';
import {ListRenderItemInfo, StyleSheet, Text, View} from 'react-native';
import Footer from '../../components/SearchScreen/Footer';
import {Result} from '../../constants/Interfaces';
import {useSearchContext} from '../../contexts/SearchContext';
import search from '../../utils/http/search';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import ImageResultItem from '../../components/SearchScreen/Images/ImageResultItem';
import ResultsList from '../../components/SearchScreen/ResultsList';

const ImagesScreen = () => {
  const {inputValue} = useSearchContext();
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<Result[]>([]);

  function renderResultItem(itemData: ListRenderItemInfo<Result>) {
    return <ImageResultItem {...itemData.item} />;
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await search('images', inputValue.split(/\s+/));

      setLoading(false);
      setResults(data);
    };
    fetchData();
  }, [inputValue]);

  return (
    <View style={styles.container}>
      <Text>ImagesScreen</Text>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ResultsList
          renderResultItem={renderResultItem}
          results={results}
          nrColumns={2}
        />
      )}
      <Footer />
    </View>
  );
};

export default ImagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 60,
  },
});
