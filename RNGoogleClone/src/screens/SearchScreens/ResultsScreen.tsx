import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Footer from '../../components/SearchScreen/Footer';
import {Result} from '../../constants/Interfaces';

import firestore from '@react-native-firebase/firestore';

const ResultsScreen = () => {
  // const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('results')
      .onSnapshot(querySnapshot => {
        const results: Result[] = [];

        querySnapshot.forEach(documentSnapshot => {
          results.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });

        console.log(results);

        setResults(results);
        // setLoading(false);
      });

    return () => subscriber();
  }, []);

  console.log({results});

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
