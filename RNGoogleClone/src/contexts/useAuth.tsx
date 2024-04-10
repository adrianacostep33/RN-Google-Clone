import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  userName: string | null;
  userImage: string | null;
  isAuthenticated: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

interface UserData {
  userName: string | null;
  userImage: string | null;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({
  userName: '',
  userImage: '',
  isAuthenticated: false,
  signInWithGoogle: async () => {},
  signOut: async () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<UserData>({
    userName: '',
    userImage: '',
    isAuthenticated: false,
  });

  GoogleSignin.configure({
    webClientId:
      '710446065353-mup4njohq428muahe7rc4gr3c821hs63.apps.googleusercontent.com',
  });

  const signInWithGoogle = async (): Promise<void> => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const userSignIn = await auth().signInWithCredential(googleCredential);

    if (!userSignIn) return;

    const userData = {
      userName: userSignIn.user.displayName,
      userImage: userSignIn.user.photoURL,
      isAuthenticated: true,
    };
    setUser(userData);

    await AsyncStorage.setItem('user', JSON.stringify(userData));
  };

  useEffect(() => {
    const loadUserFromStorage = async () => {
      try {
        const userJson = await AsyncStorage.getItem('user');

        if (userJson) {
          const storedUser = JSON.parse(userJson);
          setUser(storedUser);
        }
      } catch (error) {
        console.log('Error');
        console.error(error);
      }
    };

    loadUserFromStorage();
  }, []);

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      await auth().signOut();
      console.log('User signed out!');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const value = {
    userName: user.userName,
    userImage: user.userImage,
    isAuthenticated: user.isAuthenticated,
    signInWithGoogle: signInWithGoogle,
    signOut: signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
