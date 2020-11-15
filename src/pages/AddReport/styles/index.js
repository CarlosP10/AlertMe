import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '@common';

var {width, height} = Dimensions.get('window');
export default StyleSheet.create({
    main:{
        flex:1,
        // backgroundColor:Colors.C3,
    },
    centerView: {
        alignItems: 'center',
    },
    container: {
        width: width * 0.9
    }
});
