import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Footer from '../../components/SearchScreen/Footer';
import {useSearchContext} from '../../contexts/SearchContext';
import {Result} from '../../constants/Interfaces';
import newsSearch from '../../../utils/http/newsSearch';
import NewsResultsList from '../../components/SearchScreen/News/NewsResultList';

const NewsScreen = () => {
  const {inputValue} = useSearchContext();

  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await newsSearch(inputValue.split(/\s+/));

      setLoading(false);
      setResults(data);
    };
    fetchData();
  }, [inputValue]);

  return (
    <View style={styles.container}>
      <Text>NewsScreen</Text>
      <NewsResultsList results={results} />
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
