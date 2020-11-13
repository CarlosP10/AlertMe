import {Avatar, Icon} from 'react-native-elements';
import {Text, TouchableOpacity, View} from 'react-native';

import {Colors} from '@common';
import React from 'react';
import styles from '../styles/avatar';

const avatar = ({onPress, image}) => {
  return (
    <View>
      <View>
        <Avatar
        
          rounded
          source={image}
          
          size={150}
          
          // icon={{
          //   name: 'pencil-outline',
          //   type: 'ionicon',
          //   color: Colors.C5,
          //   size: 15,
          // }}
          // showAccessory
          
          accessory={{style: {backgroundColor: "orange"}}}
        />
        {/* <TouchableOpacity style={styles.iconView} onPress={() => onPress()}>
          <Icon
            name="pencil-outline"
            type="ionicon"
            color={Colors.C5}
            reverse
            style={styles.iconStyle}
            size={15}
            reverseColor={Colors.WHITE}
          />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default avatar;
