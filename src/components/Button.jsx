import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { string } from 'prop-types';

export default function Button(props) {
  const { label } = props;
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{label}</Text>
    </View>
  );
}

Button.propTypes = {
  label: string.isRequired,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467FD3',
    height: 48,
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 32,
  },
});
