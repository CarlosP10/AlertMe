import {Dimensions, StyleSheet} from 'react-native';

var {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: '100%',
    maxHeight: 'auto',
    zIndex: 0,
    marginBottom:10,
  },
  actionsContainer: {
    paddingVertical: 0,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
