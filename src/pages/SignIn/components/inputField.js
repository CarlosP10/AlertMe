import {Colors, PrimaryText} from '@common';
import {Icon, Input} from 'react-native-elements';
import {Text, View} from 'react-native';

import React from 'react';
import styles from '../styles/inputFiled';

const inputField = ({iconName, title, isPass, typeIcon}) => {
  return (
    <View style={styles.main}>
      <View style={styles.viewRow}>
        <Icon
          name={iconName}
          type={typeIcon || 'font-awesome-5'}
          color={Colors.FONT2}
        />
        <PrimaryText style={styles.marginH}>{title}</PrimaryText>
      </View>
      <View>
        <Input />
        {isPass ? <Icon /> : null}
      </View>
    </View>
  );
};

export default inputField;
