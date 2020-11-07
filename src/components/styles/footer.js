import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '@common';

var {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: '100%',
    maxHeight: 'auto',
    zIndex: 0,
    paddingBottom:10,
    paddingTop:10,
    backgroundColor:Colors.WHITE,
  },
  actionsContainer: {
    paddingVertical: 0,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
