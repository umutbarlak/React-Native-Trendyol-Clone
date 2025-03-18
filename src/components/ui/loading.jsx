import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Loading = () => {
  return <ActivityIndicator size={'large'} style={styles.loading} />;
};

export default Loading;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
  },
});
