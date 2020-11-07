import {Text, TouchableOpacity, View} from 'react-native';

import {Colors} from '@common';
import {Icon} from 'react-native-elements';
import React from 'react';
import styles from '../styles/addPic';

var {width, height} = Dimensions.get('window');
const addPic = ({onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.main}>
        <Icon
          name="add-outline"
          type="ionicons"
          size={width * 0.085}
          color={Colors.C3}
        />
      </View>
    </TouchableOpacity>
  );
};

export default addPic;
