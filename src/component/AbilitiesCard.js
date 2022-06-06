import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../helpers/colors';

const AbilitiesCard = ({abilities1, abilities2}) => {
  if (!abilities2) {
    return (
      <View>
        <Text style={styles.abilities}>Abilites</Text>
        <View style={styles.container}>
          <View style={styles.ability1ContainerOnly}>
            <Text style={styles.ability1Text}>{abilities1}</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={styles.abilities}>Abilites</Text>
        <View style={styles.container}>
          <View style={styles.ability1Container}>
            <Text style={styles.ability1Text}>{abilities1}</Text>
          </View>
          <View style={styles.ability2Container}>
            <Text style={styles.ability2Text}>{abilities2}</Text>
          </View>
        </View>
      </View>
    );
  }
};

export default AbilitiesCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(10),
    width: moderateScale(320),
    left: moderateScale(20),
    marginTop: moderateScale(20),
    height: moderateScale(112),
  },
  abilities: {
    fontSize: moderateScale(24),
    left: moderateScale(130),
    marginTop: moderateScale(16),
    color: COLORS.white,
  },
  ability1Container: {
    width: moderateScale(300),
    left: moderateScale(10),
    height: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: COLORS.silver,
    top: moderateScale(20),
  },
  ability1Text: {
    color: COLORS.black,
    fontSize: moderateScale(16),
  },
  ability2Container: {
    width: moderateScale(300),
    left: moderateScale(10),
    height: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: COLORS.silver,
    top: moderateScale(30),
  },
  ability2Text: {
    color: COLORS.black,
    fontSize: moderateScale(16),
  },
  ability1ContainerOnly: {
    width: moderateScale(300),
    left: moderateScale(10),
    height: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: COLORS.silver,
    top: moderateScale(40),
  },
});
