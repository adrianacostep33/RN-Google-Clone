import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Footer from '../../components/SearchScreen/Footer';
import {Result} from '../../constants/Interfaces';
import {useSearchContext} from '../../contexts/SearchContext';
import search from '../../../utils/http/search';

const ResultsScreen = () => {
  const {inputValue} = useSearchContext();

  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await search(inputValue);
      setResults(data);
      setLoading(false);
    };
    fetchData();
  }, [inputValue]);

  return (
    <View style={styles.container}>
      <Text>ResultsScreen</Text>
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
