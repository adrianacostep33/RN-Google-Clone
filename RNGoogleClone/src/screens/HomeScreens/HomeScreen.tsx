/* eslint-disable react/no-unstable-nested-components */
import {Image, StyleSheet, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Colors} from '../../constants/Colors';
import SearchInput from '../../components/UI/SearchInput';
import {useFocusEffect} from '@react-navigation/native';
import {useSearchContext} from '../../contexts/SearchContext';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import HeaderWrapper from '../../components/HomeScreen/HeaderWrapper';
import Avatar from '../../components/UI/Avatar';
import Button from '../../components/UI/Button';

const HomeScreen = ({navigation}: any) => {
  const {setInputValue} = useSearchContext();
  const [userImage, setUserImage] = useState<string>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => {
        return (
          <HeaderWrapper>
            {userImage ? (
              <Avatar source={{uri: userImage}} />
            ) : (
              <View style={styles.buttonContainer}>
                <Button title="Sign In" onPress={signInWIthGoogle} />
              </View>
            )}
          </HeaderWrapper>
        );
      },
    });
  }, [navigation, userImage]);

  GoogleSignin.configure({
    webClientId:
      '710446065353-mup4njohq428muahe7rc4gr3c821hs63.apps.googleusercontent.com',
  });

  useFocusEffect(
    useCallback(() => {
      setInputValue('');
    }, [setInputValue]),
  );

  async function signInWIthGoogle() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in.then(re => {
      console.log(re.additionalUserInfo?.profile?.picture);
      setUserImage(re.additionalUserInfo?.profile?.picture);
    });
  }

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
