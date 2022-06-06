import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import {webClientId} from '../../helpers/api';
import styles from './styles';
import {COLORS} from '../../helpers/colors';

const Index = ({navigation}) => {
  GoogleSignin.configure({
    webClientId: webClientId,
  });

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo/logo.png')}
        style={styles.logo}
      />
      <GoogleSigninButton
        style={styles.googleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={() => onGoogleButtonPress().then(() => console.log('hellow'))}
      />
      <TouchableOpacity
        style={styles.emailButton}
        onPress={() => {
          navigation.navigate('Register');
        }}>
        <Icon
          style={styles.emailButtonIcon}
          name="email"
          size={24}
          color={COLORS.white}
        />
        <Text style={styles.emailButtonText}>Sign in with Email</Text>
      </TouchableOpacity>
      <Text style={styles.term}>
        By continuing, you are indicating that you accept {'\n'} our
        <TouchableOpacity style={styles.termsAndPolicys}>
          <Text style={styles.termAndPolicy}> Terms of Service </Text>
        </TouchableOpacity>{' '}
        and{' '}
        <TouchableOpacity style={styles.termsAndPolicys}>
          <Text style={styles.termAndPolicy}> Privacy Policy </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default Index;
