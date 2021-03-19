import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput, KeyboardAvoidingView, Alert,
} from 'react-native';
import firebase from 'firebase';
import { shape, string } from 'prop-types';
import CircleButton from '../components/CircleButton';

export default function MemoEditScreen(props) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [body, setBody] = useState(bodyText);
  function handlePress() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      ref.set({
        bodyText: body,
        updatedAt: new Date(),
      })
        .then(navigation.goBack())
        .catch(() => { Alert.alert('メモの保存に失敗しました'); });
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput
          value={body}
          multiline
          style={styles.input}
          onChangeText={(text) => { setBody(text); }}
        />
      </View>
      <CircleButton onPress={handlePress} name="check" />
    </KeyboardAvoidingView>
  );
}

MemoEditScreen.propTypes = {
  route: shape({
    params: shape({
      id: string,
      bodyText: string,
    }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 19,
    flex: 1,
  },
  input: {
    lineHeight: 24,
    fontSize: 16,
    flex: 1,
    textAlignVertical: 'top',
  },
});
