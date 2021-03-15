import React from 'react';
import {
  View, StyleSheet, TextInput, Text,
} from 'react-native';

import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function SignupScreen() {
  return (
    <View style={styles.container} behavior="height">
      <AppBar />
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput value="EmailAdress" style={styles.input} />
        <TextInput value="Password" style={styles.input} />
        <Button label="submit" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already regestered?</Text>
          <Text style={styles.footerLink}>Log in</Text>
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
