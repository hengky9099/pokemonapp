import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../helpers/colors';

const styles = StyleSheet.create({
  container: {
    color: COLORS.white,
    height: moderateScale(1500),
  },
});

export default styles;
