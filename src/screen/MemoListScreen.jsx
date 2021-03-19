import React, { useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import firebase from 'firebase';
import { useState } from 'react/cjs/react.development';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogoutButton from '../components/LogoutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userMemos = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          });
        });
        setMemos(userMemos);
      }, (error) => {
        console.log(error.code);
        Alert.alert('メモの読み込みに失敗しました。');
      });
    }
    return unsubscribe;
  },
  []);

  return (
    <View style={styles.container}>
      <MemoList memos={memos} />
      <CircleButton onPress={() => { navigation.navigate('MemoCreate'); }} name="plus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
