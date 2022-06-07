import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../helpers/colors';

const Button = ({
  onPress,
  text,
  backgroundColor,
  height,
  width,
  top,
  left,
  borderRadius,
  marginTop,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: moderateScale(marginTop),
        backgroundColor: backgroundColor,
        width: moderateScale(width),
        top: moderateScale(top),
        left: moderateScale(left),
        height: moderateScale(height),
        borderRadius: moderateScale(borderRadius),
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
