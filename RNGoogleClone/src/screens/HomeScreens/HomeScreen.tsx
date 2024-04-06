import {Button, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import Input from '../../components/UI/Input';
const HomeScreen = ({navigation}: any) => {
  function handleSearch() {
    navigation.push('SearchScreen');
  }

  return (
    // <KeyboardAvoidingView
    //   style={styles.screen}
    //   behavior="position"
    //   keyboardVerticalOffset={5}>
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/google-logo.png')}
      />
      <Input />
      <Button title="Search" onPress={handleSearch} />
    </View>
    // </KeyboardAvoidingView>
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
});
