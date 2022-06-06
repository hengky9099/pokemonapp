import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../helpers/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.red,
    height: moderateScale(1500),
  },
  terms: {
    color: COLORS.white,
    fontWeight: 'bold',
    top: moderateScale(108),
    left: moderateScale(80),
    fontSize: moderateScale(14),
  },
  privacy: {
    color: COLORS.white,
    fontWeight: 'bold',
    top: moderateScale(90),
    left: moderateScale(220),
    fontSize: moderateScale(14),
  },
});

export default styles;
