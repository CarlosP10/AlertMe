import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '@common';

var {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  main: {
    width: width * 0.01,
    height: width * 0.01,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    margin:3,
  },
//   ADD PIC MODULE
  rowView:{
      flexDirection:'row',
  },
});
