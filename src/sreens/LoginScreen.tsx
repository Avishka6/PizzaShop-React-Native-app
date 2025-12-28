import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';

function LoginFields(p: any) {
  const stack = p.lf_stack;
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.formContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.inputBox}>
        <Icon name="mail-outline" size={20} color="#555" />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#555"
          onChangeText={setUserEmail}
          style={styles.input}
        />
      </View>

      <View style={[styles.inputBox, styles.inputBoxSpacing]}>
        <Icon name="lock-closed-outline" size={20} color="#555" />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#555"
          onChangeText={setUserPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <SignInButton
        u_email={userEmail}
        u_password={userPassword}
        sib_stack={stack}
      />
      <BottomSection bs_stack={stack} />
    </KeyboardAwareScrollView>
  );
}

function SignInButton(p: any) {
  const u_email = p.u_email;
  const u_password = p.u_password;

  function gotoHome() {
    firestore()
      .collection('Users')
      .where('email', '==', u_email.toLowerCase())
      .get()
      .then(ds => {
        if (ds.size === 1) {
          const dt = ds.docs[0].data();
          if (dt.password === u_password) {
            p.sib_stack.navigate('Home');
          } else {
            Alert.alert(
              'Message',
              'Invalid Credentials, Please enter valid email and password',
            );
          }
        } else {
          Alert.alert('Message', 'Cannot find user with this email');
        }
      })
      .catch(() => {
        Alert.alert('Message', 'Error connecting to database');
      });
  }

  return (
    <View style={styles.signInRow}>
      <Text style={styles.signInText}>Sign In</Text>
      <TouchableOpacity onPress={gotoHome}>
        <View style={styles.signInBtn}>
          <Icon name="arrow-forward" size={26} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

function BottomSection(p: any) {
  const stack = p.bs_stack;

  function gotoSignUp() {
    stack.navigate('Signup');
  }
  return (
    <View style={styles.bottomRow}>
      <Text style={styles.bottomText}>Forgot Password?</Text>
      <TouchableOpacity onPress={gotoSignUp}>
        <Text style={[styles.bottomText]}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const LoginScreen = (ls_props: any) => {
  const stack = ls_props.navigation;
  return (
    <View style={styles.container}>
      <Image
        style={{...styles.background,opacity: 0.3}}
        source={require('../../assets/img/login.jpg')}
        resizeMode="cover"
      />

      <Text style={styles.title}>{'Welcome to\nPizzaShop'}</Text>
      <LoginFields lf_stack={stack} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  title: {
    fontSize: 40,
    color: '#000',
    fontWeight: '600',
    marginTop: 100,
    marginLeft: 30,
  },
  formContainer: {
    marginTop: 150,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    marginHorizontal: 40,
    paddingHorizontal: 15,
    elevation: 3,
  },
  inputBoxSpacing: {
    marginTop: 15,
  },
  input: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
    color: '#000',
  },
  signInRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 40,
    justifyContent: 'space-between',
  },
  signInText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#000',
  },
  signInBtn: {
    width: 55,
    height: 55,
    backgroundColor: '#367cfe',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  bottomRow: {
    flexDirection: 'row',
    marginTop: 180,
    marginHorizontal: 40,
    justifyContent: 'space-between',
  },
  bottomText: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
});