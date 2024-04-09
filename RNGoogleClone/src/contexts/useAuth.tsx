import React, {ReactNode, createContext, useContext, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

interface AuthContextType {
  userImage: string | null;
  signInWithGoogle: () => Promise<void>;
  //   signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps): JSX.Element => {
  const [userImage, setUserImage] = useState<string | null>(null);

  GoogleSignin.configure({
    webClientId:
      '710446065353-mup4njohq428muahe7rc4gr3c821hs63.apps.googleusercontent.com',
  });

  const signInWithGoogle = async (): Promise<void> => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const userSignIn = await auth().signInWithCredential(googleCredential);

    setUserImage(userSignIn.additionalUserInfo?.profile?.picture || null);
  };

  //   const signOut = async (): Promise<void> => {
  //     await auth().signOut();
  //     setUserImage(null);
  //   };

  return (
    <AuthContext.Provider value={{userImage, signInWithGoogle}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
