import {StyleSheet, TextInput, Text, View} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../helpers/colors';

const Input = ({
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
  style,
  placeholderTextColor,
  textContainType,
  error,
}) => {
  return (
    <View>
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        style={[styles.input]}
        onChangeText={onChangeText}
        textContentType={textContainType}
      />
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: moderateScale(1),
    borderColor: COLORS.white,
    borderRadius: moderateScale(10),
    width: moderateScale(300),
    padding: moderateScale(10),
    color: COLORS.white,
    width: moderateScale(300),
    left: moderateScale(20),
    marginTop: moderateScale(10),
    top: moderateScale(50),
  },
  error: {
    color: COLORS.orangeyellow,
    top: moderateScale(30),
    left: moderateScale(22),
  },
});
