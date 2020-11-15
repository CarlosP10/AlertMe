import {Dimensions, StyleSheet} from 'react-native';


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
  mapContainer: {
    borderRadius: 15,
    width: width * 0.9,
    height: height * 0.5,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  mapView: {
    alignSelf: 'center',
    width: '100%',
    height: height * 0.5,
    borderRadius: 15,
    overflow: 'hidden'
  }
});
