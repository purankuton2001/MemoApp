import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput, Text, TouchableOpacity, Alert,
} from 'react-native';
import firebase from 'firebase';
import Button from '../components/Button';
import { translateError } from '../utils';

export default function SignupScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handlePress() {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      })
      .catch((error) => {
        const errMsg = translateError(error.code);
        Alert.alert(errMsg.title, errMsg.description);
      });
  }

  return (
    <View style={styles.container} behavior="height">
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          value={email}
          style={styles.input}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          value={password}
          style={styles.input}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <Button
          onPress={handlePress}
          label="submit"
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already regestered?</Text>
          <TouchableOpacity onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          }}
          >
            <Text style={styles.footerLink}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 19,
    flex: 1,
  },
  title: {
    lineHeight: 32,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    height: 48,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    color: '#DDDDDD',
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    lineHeight: 24,
    fontSize: 14,
    marginRight: 8,
  },
  footerLink: {
    color: '#467FD3',
    fontSize: 14,
    lineHeight: 24,
  },
});
