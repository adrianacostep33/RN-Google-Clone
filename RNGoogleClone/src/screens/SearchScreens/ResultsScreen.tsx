import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Footer from '../../components/SearchScreen/Footer';
import {Result} from '../../constants/Interfaces';
import {useSearchContext} from '../../contexts/SearchContext';
import search from '../../../utils/http/search';
import ResultsList from '../../components/SearchScreen/Results.tsx/ResultsList';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

const ResultsScreen = () => {
  const {inputValue} = useSearchContext();

  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await search(inputValue);
      setLoading(false);
      setResults(data);
    };
    fetchData();
  }, [inputValue]);

  return (
    <View style={styles.container}>
      {loading ? <LoadingSpinner /> : <ResultsList results={results} />}
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
  },
});
