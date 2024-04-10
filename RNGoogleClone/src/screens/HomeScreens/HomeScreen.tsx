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
import {useAuth} from '../../contexts/useAuth';
import ModalDropdown from '../../components/UI/ModalDropdown';

const HomeScreen = ({navigation}: any) => {
  const {setInputValue} = useSearchContext();
  const {userImage} = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => {
        return (
          <HeaderWrapper>
            <View>
              {userImage ? (
                <Avatar
                  source={{uri: userImage}}
                  onPress={() => setIsDropdownOpen(true)}
                />
              ) : (
                <Avatar onPress={() => setIsDropdownOpen(true)} />
              )}
              <ModalDropdown
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
              />
            </View>
          </HeaderWrapper>
        );
      },
    });
  }, [navigation, userImage, isDropdownOpen]);

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
