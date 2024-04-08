import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Footer from '../../components/SearchScreen/Footer';
import {Result} from '../../constants/Interfaces';
import {useSearchContext} from '../../contexts/SearchContext';
import imagesSearch from '../../../utils/http/imagesSearch';
import ImageResultsList from '../../components/SearchScreen/Images/ImageResultList';

const ImagesScreen = () => {
  const {inputValue} = useSearchContext();

  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await imagesSearch(inputValue.split(/\s+/));
      setLoading(false);
      setResults(data);
    };
    fetchData();
  }, [inputValue]);


  return (
    <View style={styles.container}>
      <Text>ImagesScreen</Text>
      <ImageResultsList imageResults={results} />
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
