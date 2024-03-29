import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput, KeyboardAvoidingView, Alert,
} from 'react-native';

import firebase from 'firebase';
import CircleButton from '../components/CircleButton';

export default function MemoCreateScreen(props) {
  const [bodyText, setBodyText] = useState('');
  function handlePress() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memos`);
      ref.add({
        bodyText,
        updatedAt: new Date(),
      })
        .catch(() => {
          Alert.alert('メモの作成に失敗しました');
        });
      navigation.goBack();
    }
  }
  const { navigation } = props;
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(text) => {
            setBodyText(text);
          }}
          autoFocus
        />
      </View>
      <CircleButton onPress={handlePress} name="check" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 19,
    lineHeight: 24,
    fontSize: 16,
    flex: 1,
    textAlignVertical: 'top',
  },
});
