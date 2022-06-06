import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../helpers/colors';

const DetailCard = ({name, photo, number, type1, type2, backgroundColor}) => {
  if (!type2) {
    return (
      <View style={styles.containerCard}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.number}>#{number}</Text>
        <View style={styles.type1only}>
          <Text>{type1}</Text>
        </View>
        <View style={styles.type2only}>
          <Text></Text>
        </View>
        <View style={styles.imagebackground}>
          <Image
            source={{
              uri: `${photo}`,
            }}
            style={styles.photo}
          />
          <View style={styles.imagebackgroundcircle}></View>
          <View style={styles.imagebackgroundsquare}></View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.containerCard}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.number}>#{number}</Text>
        <View style={styles.type1}>
          <Text>{type1}</Text>
        </View>
        <View style={styles.type2}>
          <Text>{type2}</Text>
        </View>
        <View style={styles.imagebackground}>
          <Image
            source={{
              uri: `${photo}`,
            }}
            style={styles.photo}
          />
          <View style={styles.imagebackgroundcircle}></View>
          <View style={styles.imagebackgroundsquare}></View>
        </View>
      </View>
    );
  }
};

export default DetailCard;

const styles = StyleSheet.create({
  containerCard: {
    borderRadius: moderateScale(10),
    backgroundColor: COLORS.white,
    width: moderateScale(320),
    height: moderateScale(120),
    left: moderateScale(20),
    marginTop: moderateScale(30),
    // top: moderateScale(20),
  },
  photo: {
    zIndex: 1,
    left: moderateScale(190),
    top: moderateScale(110),
    height: moderateScale(140),
    width: moderateScale(140),
  },
  imagebackground: {
    top: moderateScale(-230),
  },

  imagebackgroundcircle: {
    // backgroundColor: COLORS.greenbackground,
    borderRadius: moderateScale(60),
    width: moderateScale(122),
    height: moderateScale(122),
    top: moderateScale(-22),
    left: moderateScale(180),
  },
  imagebackgroundsquare: {
    // backgroundColor: COLORS.greenbackground,
    width: moderateScale(80),
    height: moderateScale(122),
    left: moderateScale(240),
    top: moderateScale(-144),
    borderRadius: moderateScale(10),
  },
  name: {
    fontSize: moderateScale(20),
    left: moderateScale(80),
    top: moderateScale(20),
  },
  number: {
    fontSize: moderateScale(24),
    top: moderateScale(-10),
    left: moderateScale(20),
  },
  type1only: {
    width: moderateScale(150),
    height: moderateScale(26),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.grey,
    borderColor: COLORS.darkgrey,
    left: moderateScale(20),
    top: moderateScale(4),
  },
  type2only: {
    height: moderateScale(26),
  },
  type1: {
    width: moderateScale(80),
    height: moderateScale(26),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.grey,
    borderColor: COLORS.darkgrey,
    left: moderateScale(6),
    top: moderateScale(4),
  },
  type2: {
    width: moderateScale(80),
    height: moderateScale(26),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.grey,
    borderColor: COLORS.darkgrey,
    left: moderateScale(96),
    top: moderateScale(-22),
  },
});
