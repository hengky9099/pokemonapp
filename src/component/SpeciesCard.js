import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../helpers/colors';

const SpeciesCard = ({desc, height, weight}) => {
  const trimDesc = desc => {
    return desc.split('\n').join(' ');
  };

  return (
    <View>
      <Text style={styles.species}>Species</Text>
      <View style={styles.containerSpecies}>
        <View style={styles.cardspecies}>
          <Text style={styles.desc}>{trimDesc(desc)}</Text>
        </View>
        <View style={styles.heightContainer}>
          <Text style={styles.heightTitle}>Height</Text>
          <Text style={styles.heightText}>{height} m</Text>
        </View>
        <View style={styles.weightContainer}>
          <Text style={styles.weightTitle}>Weight</Text>
          <Text style={styles.weightText}>{weight} kg</Text>
        </View>
      </View>
    </View>
  );
};

export default SpeciesCard;

const styles = StyleSheet.create({
  species: {
    fontSize: moderateScale(24),
    left: moderateScale(130),
    marginTop: moderateScale(10),
    color: COLORS.white,
  },
  containerSpecies: {
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(10),
    width: moderateScale(320),
    left: moderateScale(20),
    marginTop: moderateScale(20),
    height: moderateScale(230),
  },
  cardspecies: {
    borderColor: COLORS.silver,
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1),
    width: moderateScale(284),
    left: moderateScale(16),
    marginTop: moderateScale(20),
    height: moderateScale(80),
  },
  desc: {
    width: moderateScale(278),
    left: moderateScale(4),
  },
  heightContainer: {
    borderRadius: moderateScale(10),
    height: moderateScale(100),
    width: moderateScale(130),
    borderColor: COLORS.silver,
    borderWidth: moderateScale(1),
    top: moderateScale(10),
    left: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  heightTitle: {
    color: COLORS.black,
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    top: moderateScale(-10),
  },
  heightText: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: COLORS.black,
  },
  weightContainer: {
    borderRadius: moderateScale(10),
    height: moderateScale(100),
    width: moderateScale(130),
    borderColor: COLORS.silver,
    borderWidth: moderateScale(1),
    top: moderateScale(-90),
    left: moderateScale(170),
    justifyContent: 'center',
    alignItems: 'center',
  },
  weightTitle: {
    color: COLORS.black,
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    top: moderateScale(-10),
  },
  weightText: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: COLORS.black,
  },
});
