import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '@common';

var {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor:Colors.C3,
  },
  iconView: {
    
    position: 'absolute',
    justifyContent: 'center',
    
    alignItems: 'center',
  },
  iconStyle:{
    
    justifyContent: 'center',
    marginBottom: -3,
    marginLeft: -5,
    alignItems: 'center',
  },
  centerView: {
    alignItems: 'center',
  },
});
