import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogoutButton from '../components/LogoutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <MemoList />
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
