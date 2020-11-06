import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '@common';

var {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  centerView: {
    alignItems: 'center',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imageContainer: {
    borderRadius: 15,
    width: width * 0.22,
    height: width * 0.22,
  },
  backgroundView: {
    backgroundColor: Colors.WHITE,
    marginVertical:10,
    justifyContent:'center',
    width: width * 0.85,
    borderRadius: 15,
    height: height * 0.16,
    padding: 10,
  },
});
