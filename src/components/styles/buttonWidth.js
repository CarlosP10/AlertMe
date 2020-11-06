import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '@common';

var {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  main: {
    marginHorizontal: 7,
    marginVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    width: width * 0.8,
    height: height * 0.09,
    marginVertical: 3,
    backgroundColor: Colors.BG_LIGHT_BLUE,
  },
  textStyle: {
    color: Colors.WHITE,
  },
});
