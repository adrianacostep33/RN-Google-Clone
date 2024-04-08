import {Image, StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {Colors} from '../../constants/Colors';
import SearchInput from '../../components/UI/SearchInput';
import {useFocusEffect} from '@react-navigation/native';
import {useSearchContext} from '../../contexts/SearchContext';
import {textIndexToArray} from '../../../utils/seedFunction';
const HomeScreen = () => {
  const {setInputValue} = useSearchContext();

  useFocusEffect(
    useCallback(() => {
      setInputValue('');
    }, [setInputValue]),
  );

  console.log(textIndexToArray('Netflix to release new documentary series'));

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/google-logo.png')}
      />
      <SearchInput inputStyle={styles.input} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
  },
  text: {
    color: Colors.text500,
  },
  image: {
    width: 140,
    height: 100,
    marginBottom: 15,
  },
  input: {
    height: 60,
    paddingHorizontal: 25,
    fontSize: 24,
  },
});
