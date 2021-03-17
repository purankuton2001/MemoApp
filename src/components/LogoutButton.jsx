import React from 'react';
import {
  Alert, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export default function LogoutButton() {
  const navigation = useNavigation();
  function handlePress() {
    firebase.auth().signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      })
      .catch(() => { Alert.alert('ログアウトに失敗しました。'); });
  }

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
      <Text style={styles.buttonText}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    lineHeight: 24,
  },
});
