import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';

function SignupSection(p: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function saveUser() {
    if (!name || !email || !password) {
      Alert.alert('Message', 'Please fill all fields');
      return;
    }
    firestore()
      .collection('Users')
      .where('email', '==', email.toLowerCase())
      .get()
      .then(ds => {
        if (ds.size > 0) {
          Alert.alert('Message', 'Email already registered');
        } else {
          firestore()
            .collection('Users')
            .add({
              name: name,
              email: email.toLowerCase(),
              password: password,
            })
            .then(() => {
              Alert.alert('Success', 'Account created successfully');
              p.ss_stack.navigate('Login');
            })
            .catch(() => {
              Alert.alert('Error', 'Failed to create account');
            });
        }
      })
      .catch(() => {
        Alert.alert('Error', 'Error connecting to database');
      });
  }

  const stack = p.ss_stack;
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={sty.formContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={sty.inputBox}>
        <Icon name="person-outline" size={20} color="#555" />
        <TextInput
          placeholder="Name"
          placeholderTextColor="#555"
          style={sty.input}
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={[sty.inputBox, { marginTop: 15 }]}>
        <Icon name="mail-outline" size={20} color="#555" />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#555"
          style={sty.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </View>

      <View style={[sty.inputBox, { marginTop: 15 }]}>
        <Icon name="lock-closed-outline" size={20} color="#555" />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#555"
          secureTextEntry
          style={sty.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <SignUpButton onPress={saveUser} />
      <BottomSection bs_stack={stack} />
    </KeyboardAwareScrollView>
  );
}

function SignUpButton({ onPress }: { onPress: () => void }) {
  return (
    <View style={sty.signUpRow}>
      <Text style={sty.signUpText}>Sign Up</Text>
      <TouchableOpacity activeOpacity={0.7} style={sty.signUpBtn} onPress={onPress}>
        <Icon name="arrow-forward" size={26} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

function BottomSection(p: any) {
  const stack = p.bs_stack;
  function gotoSignIn() {
    stack.navigate('Login');
  }
  return (
    <View style={sty.bottomRow}>
      <TouchableOpacity onPress={gotoSignIn}>
        <Text style={[sty.bottomText, { fontWeight: '600' }]}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const SignupScreen = (ss_props: any) => {
  const stack = ss_props.navigation;
  return (
    <View style={sty.container}>
      <Image
        style={{...sty.background,opacity: 0.3}}
        source={require('../../assets/img/register.jpg')}
        resizeMode="cover"
      />
      <Text style={sty.title}>{'Create\nAccount'}</Text>
      <SignupSection ss_stack={stack} />
    </View>
  );
};

export default SignupScreen;

const sty = StyleSheet.create({
  container: { flex: 1 },
  background: { width: '100%', height: '100%', position: 'absolute' },
  title: {
    fontSize: 40,
    color: '#000',
    fontWeight: '600',
    marginTop: 100,
    marginLeft: 30,
    
  },
  formContainer: { marginTop: 150 },
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
  input: { flex: 1, fontSize: 18, marginLeft: 10, color: '#000' },
  signUpRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 40,
    justifyContent: 'space-between',
  },
  signUpText: { fontSize: 26, fontWeight: '700', color: '#000' },
  signUpBtn: {
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
    marginTop: 120,
    marginRight: 40,
    justifyContent: 'flex-end',
  },
  bottomText: { fontSize: 15, color: '#000',fontWeight:'bold' },
});