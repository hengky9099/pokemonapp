import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../helpers/colors';

const Card = ({number, name, type1, type2, image, item, navigation}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', {cardData: name})}>
        <Text style={styles.number}>#001</Text>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.type1}>
          <Text>Fire</Text>
        </View>
        <View style={styles.type2}>
          <Text>Ground</Text>
        </View>

        <View style={styles.imagebackground}>
          <Image
            source={require('../assets/image/003.png')}
            style={styles.image}
          />
          <View style={styles.imagebackgroundcircle}></View>
          <View style={styles.imagebackgroundsquare}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(Card);

const styles = StyleSheet.create({
  card: {
    borderRadius: moderateScale(10),
    backgroundColor: COLORS.greenblue,
    width: moderateScale(330),
    height: moderateScale(90),
    marginLeft: moderateScale(10),
    marginTop: moderateScale(10),
  },
  imagebackground: {
    top: moderateScale(-82),
    left: moderateScale(10),
  },
  imagebackgroundcircle: {
    backgroundColor: COLORS.greenbackground,
    borderRadius: moderateScale(60),
    width: moderateScale(90),
    height: moderateScale(90),
    top: moderateScale(-19),
    left: moderateScale(208),
  },
  imagebackgroundsquare: {
    backgroundColor: COLORS.greenbackground,
    width: moderateScale(80),
    height: moderateScale(92),
    left: moderateScale(240),
    top: moderateScale(-110),
    borderRadius: moderateScale(10),
  },
  number: {
    fontSize: moderateScale(16),
    left: moderateScale(30),
    top: moderateScale(14),
  },
  name: {
    fontSize: moderateScale(20),
    left: moderateScale(90),
    top: moderateScale(-10),
  },
  type1: {
    width: moderateScale(100),
    height: moderateScale(26),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.grey,
    borderColor: COLORS.darkgrey,
    left: moderateScale(10),
    top: moderateScale(4),
  },
  type2: {
    width: moderateScale(100),
    height: moderateScale(26),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.grey,
    borderColor: COLORS.darkgrey,
    left: moderateScale(116),
    top: moderateScale(-22),
  },
  image: {
    position: 'absolute',
    width: moderateScale(100),
    height: moderateScale(100),
    left: moderateScale(220),
    top: moderateScale(-26),
    zIndex: 1,
  },
});
