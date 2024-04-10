import {StyleSheet, View, Modal, Dimensions, Image} from 'react-native';
import React from 'react';
import Button from './Button';
import {Colors} from '../../constants/Colors';
import IconButton from '../SearchScreen/IconButton';
import {BlurView} from '@react-native-community/blur';
import {useAuth} from '../../contexts/useAuth';

interface ModalProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: (status: boolean) => void;
}

const ModalDropdown = ({isDropdownOpen, setIsDropdownOpen}: ModalProps) => {
  const {isAuthenticated, signOut, signInWithGoogle} = useAuth();

  const handleSignOut = () => {
    signOut();
    setIsDropdownOpen(false);
  };

  const handleSignIn = () => {
    signInWithGoogle();
    setIsDropdownOpen(false);
  };

  return (
    <Modal
      visible={isDropdownOpen}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setIsDropdownOpen(false)}>
      <BlurView
        style={StyleSheet.absoluteFill}
        blurType="dark"
        blurAmount={0}
        reducedTransparencyFallbackColor="white">
        <View style={styles.modalContainer}>
          <View style={styles.logoContainer}>
            <View style={styles.closeButtonContainer}>
              <IconButton
                source={require('../../assets/icons/close.png')}
                size={24}
                onPress={() => setIsDropdownOpen(false)}
              />
            </View>
            <Image
              style={styles.image}
              source={require('../../assets/images/google-logo.png')}
            />
          </View>
          {isAuthenticated ? (
            <View style={styles.modalContent}>
              <Button title="Logout" onPress={handleSignOut} />
            </View>
          ) : (
            <View style={styles.modalContent}>
              <Button title="Sign In" onPress={handleSignIn} />
            </View>
          )}
        </View>
      </BlurView>
    </Modal>
  );
};

export default ModalDropdown;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    top: 0.3 * deviceWidth,
    right: 20,
    left: 20,
    borderRadius: 10,
    backgroundColor: Colors.background500,
  },
  modalContent: {
    backgroundColor: Colors.background500,
    padding: 20,
    // width: '100%',
    borderRadius: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeButtonContainer: {
    position: 'absolute',
    right: 160,
  },
  image: {
    width: 80,
    height: 60,
  },
});
