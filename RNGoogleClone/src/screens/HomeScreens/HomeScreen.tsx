/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import {Image, StyleSheet, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Colors} from '../../constants/Colors';
import SearchInput from '../../components/UI/SearchInput';
import {useFocusEffect} from '@react-navigation/native';
import {useSearchContext} from '../../contexts/SearchContext';
import HeaderWrapper from '../../components/HomeScreen/HeaderWrapper';
import Avatar from '../../components/UI/Avatar';
import Button from '../../components/UI/Button';
import {useAuth} from '../../contexts/useAuth';
import ModalDropdown from '../../components/UI/ModalDropdown';

const HomeScreen = ({navigation}: any) => {
  const {setInputValue} = useSearchContext();
  const {userImage, signInWithGoogle, signOut} = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = () => {
    signOut();
    setIsDropdownOpen(false);
  };

  console.log({userImage});

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => {
        return (
          <HeaderWrapper>
            {userImage ? (
              <View>
                <Avatar
                  source={{uri: userImage}}
                  onPress={() => setIsDropdownOpen(true)}
                />
                <ModalDropdown
                  isDropdownOpen={isDropdownOpen}
                  setIsDropdownOpen={setIsDropdownOpen}
                  onPress={handleSignOut}
                />
              </View>
            ) : (
              <View style={styles.buttonContainer}>
                <Button title="Sign In" onPress={signInWithGoogle} />
              </View>
            )}
          </HeaderWrapper>
        );
      },
    });
  }, [navigation, userImage, signInWithGoogle, isDropdownOpen]);

  useFocusEffect(
    useCallback(() => {
      setInputValue('');
    }, [setInputValue]),
  );

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
  buttonContainer: {
    alignItems: 'flex-end',
  },
  imageContainer: {
    width: 30,
    height: 30,
  },
  imageUser: {
    width: '100%',
    height: '100%',
  },
});
