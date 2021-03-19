import React, { useEffect, useState } from 'react';
import {
  Text, View, StyleSheet, ScrollView, Alert,
} from 'react-native';
import firebase from 'firebase';
import { shape, string } from 'prop-types';
import CircleButton from '../components/CircleButton';

import { dateToString } from '../utils';

export default function MemoDetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
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
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} numberOfLines={1}>{memo && memo.bodyText}</Text>
        <Text style={styles.memoDate}>{memo && dateToString(memo.updatedAt)}</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          {memo && memo.bodyText}
        </Text>
      </ScrollView>
      <CircleButton onPress={() => { navigation.navigate('MemoEdit'); }} name="pencil" style={{ top: 60, bottom: 'auto' }} />
    </View>
  );
}

MemoDetailScreen.propTypes = {
  route: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  memoHeader: {
    paddingVertical: 24,
    paddingHorizontal: 19,
    justifyContent: 'center',
    backgroundColor: '#467FD3',
    height: 96,
  },
  memoTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 32,
  },
  memoDate: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 19,
  },
  memoText: {
    lineHeight: 24,
    fontSize: 16,
  },
});
