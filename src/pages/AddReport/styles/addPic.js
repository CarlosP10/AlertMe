import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '@common';

var {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  main: {
    borderRadius: 15,
    width: width * 0.2,
    height: width * 0.2,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    margin:3,
  },
//   ADD PIC MODULE
  rowView:{
      flexDirection:'row',
  },
  container: {
    width: width * 1,
    height: width * 0.3,
    marginTop: height * 0.07,
    marginBottom: height * 0.07
  }
});
