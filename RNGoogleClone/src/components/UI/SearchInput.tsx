import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import {useSearchContext} from '../../contexts/SearchContext';
import {useNavigation, useRoute} from '@react-navigation/native';
import Avatar from './Avatar';
import {useAuth} from '../../contexts/useAuth';

interface InputProps {
  inputStyle?: ViewStyle;
}

const SearchInput = ({inputStyle}: InputProps) => {
  const {inputValue, setInputValue} = useSearchContext();
  const {userImage} = useAuth();
  const navigation = useNavigation();
  const route = useRoute();

  const isHomeScreen = route.name === 'Home';

  function handleSubmit() {
    if (!inputValue) return;
    navigation.navigate('SearchScreen' as never);
  }

  function handlePressedLogo() {
    navigation.navigate('HomeScreen' as never);
  }

  return (
    <View style={styles.container}>
      {!isHomeScreen && (
        <Pressable onPress={handlePressedLogo} style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/icons/google-logo-color.png')}
          />
        </Pressable>
      )}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder="Search"
        placeholderTextColor={Colors.gray500}
        value={inputValue}
        onChangeText={setInputValue}
        onSubmitEditing={handleSubmit}
      />
      <Image
        tintColor={Colors.text500}
        style={styles.microphone}
        source={require('../../assets/icons/microphone.png')}
      />
      {isHomeScreen && (
        <Image
          tintColor={Colors.text500}
          style={styles.camera}
          source={require('../../assets/icons/camera.png')}
        />
      )}
      {!isHomeScreen &&
        (userImage ? (
          <Avatar style={styles.avatar} source={{uri: userImage}} />
        ) : (
          <Avatar style={styles.avatar} />
        ))}
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
  },
  input: {
    backgroundColor: Colors.gray600,
    width: '90%',
    height: 60,
    borderRadius: 30,
    color: Colors.gray500,
  },
  microphone: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 80,
  },
  camera: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 40,
  },
  logoContainer: {
    zIndex: 2,
    justifyContent: 'center',
    position: 'absolute',
    left: 30,
  },
  logo: {
    width: 28,
    height: 28,
    zIndex: 1,
  },
  avatar: {
    position: 'absolute',
    right: 30,
    zIndex: 1,
  },
});
