import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '@common';

var {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-around',
  },
  centerView: {
    alignItems: 'center',
  },
  rowView: {
    flexDirection: 'row',
  },
  textBlue: {
    fontWeight: '500',
    color: Colors.BG_LIGHT_BLUE,
  },
});
