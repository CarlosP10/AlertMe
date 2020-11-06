import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '@common'

var {width, height} = Dimensions.get('window');
export default StyleSheet.create({
    main:{
        marginVertical:6,
        justifyContent:'flex-start'
    },
    viewRow:{
        flexDirection:'row',
        marginVertical:3,
    },
});
