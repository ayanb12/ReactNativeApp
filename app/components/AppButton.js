import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../config/colors';

const AppButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 195,
    paddingVertical: 18,
    borderRadius: 10,
    backgroundColor: colors.button,
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 20,
    textTransform: 'uppercase',
  },
});

export default AppButton;
