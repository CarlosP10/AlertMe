import {Avatar, Icon} from 'react-native-elements';
import {ColorPropType, Text, TouchableOpacity, View} from 'react-native';

import {Colors} from '@common';
import React from 'react';
import styles from '../styles/avatar';

const avatar = ({onPress, image}) => {
  return (
    <View>
      <View>
        <Avatar rounded source={image} size={50} />
        <TouchableOpacity style={styles.iconView} onPress={() => onPress()}>
          <Icon
            name="pencil-outline"
            type="ionicons"
            color={Colors.C5}
            reverse
            size={25}
            reverseColor={Colors.WHITE}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default avatar;
