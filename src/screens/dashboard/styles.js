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
});

export default styles;
