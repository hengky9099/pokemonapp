import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../helpers/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  flatlistcontainer: {
    flexGrow: 1,
  },
  loader: {
    marginTop: moderateScale(20),
  },
  navbar: {
    height: moderateScale(60),
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    top: moderateScale(-10),
    left: moderateScale(-10),
    width: moderateScale(400),
  },
  textNavbar: {
    fontSize: moderateScale(18),
    top: moderateScale(30),
    left: moderateScale(30),
    color: COLORS.black,
    fontWeight: 'bold',
  },
  button: {
    borderWidth: moderateScale(1),
    backgroundColor: 'red',
  },
});

export default styles;
