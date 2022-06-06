import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../helpers/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.red,
    height: moderateScale(1500),
  },
  logo: {
    height: moderateScale(300),
    width: moderateScale(300),
    left: moderateScale(24),
    top: moderateScale(100),
  },
  googleButton: {
    width: moderateScale(260),
    height: moderateScale(50),
    left: moderateScale(48),
    top: moderateScale(160),
  },
  emailButton: {
    width: moderateScale(254),
    left: moderateScale(50),
    top: moderateScale(170),
    borderColor: COLORS.white,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(6),
    height: moderateScale(46),
  },
  emailButtonIcon: {
    top: moderateScale(8),
    left: moderateScale(10),
  },
  emailButtonText: {
    left: moderateScale(80),
    color: COLORS.white,
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    top: moderateScale(-12),
  },
  term: {
    color: COLORS.white,
    top: moderateScale(200),
    // left: moderateScale(26),
    textAlign: 'center',
  },
  termAndPolicy: {
    color: COLORS.white,
    fontWeight: 'bold',
    top: moderateScale(4),
  },
});

export default styles;
