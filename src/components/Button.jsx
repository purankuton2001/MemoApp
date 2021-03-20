import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { func, shape, string } from 'prop-types';

export default function Button(props) {
  const { label, onPress, style } = props;
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  label: string.isRequired,
  onPress: func,
  style: shape(),
};

Button.defaultProps = {
  onPress: null,
  style: null,
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
