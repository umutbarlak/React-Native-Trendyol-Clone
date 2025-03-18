import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import appColors from '../../theme/colors';

const Button = props => {
  const {title, type} = props;
  return (
    <Pressable
      style={[styles.btn, type === 'flat' && styles.flatBtn]}
      {...props}>
      <Text style={[styles.title, type === 'flat' && styles.flatText]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: appColors.PRIMARY,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: appColors.PRIMARY,
  },
  flatBtn: {
    backgroundColor: appColors.PRIMARY,
  },
  flatText: {
    color: appColors.WHITE,
  },
});
