import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../helpers/colors';

const Button = ({onPress, text, backgroundColor, height, width, top, left}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        width: moderateScale(width),
        top: moderateScale(top),
        left: moderateScale(left),
        height: moderateScale(height),
        borderRadius: moderateScale(14),
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: COLORS.red,
          fontSize: moderateScale(16),
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
