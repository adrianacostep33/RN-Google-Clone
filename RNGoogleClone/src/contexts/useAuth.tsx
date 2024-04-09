import {Text, View} from 'react-native';
import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const useAuth = () => {
  GoogleSignin.configure({
    webClientId:
      '710446065353-mup4njohq428muahe7rc4gr3c821hs63.apps.googleusercontent.com',
  });

  return (
    <View>
      <Text>useAuth</Text>
    </View>
  );
};

export default useAuth;
