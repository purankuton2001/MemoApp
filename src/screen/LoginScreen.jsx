import React from 'react';
import {
  View, StyleSheet, TextInput, Text, TouchableOpacity,
} from 'react-native';

import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function LoginScreen() {
  return (
    <View style={styles.container} behavior="height">
      <AppBar />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput value="EmailAdress" style={styles.input} />
        <TextInput value="Password" style={styles.input} />
        <Button label="submit" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not regestered?</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Sign up here!</Text>
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