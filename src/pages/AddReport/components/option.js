import {Colors, PrimaryText} from '@common';
import {Icon, Input} from 'react-native-elements';
import {Text, View} from 'react-native';

import React from 'react';
import styles from '@pages/SignIn/styles/inputFiled';

const option = ({iconName, title, children, typeIcon}) => {
  return (
    <View style={styles.main}>
      <View style={styles.viewRow}>
        <Icon
          name={iconName}
          type={typeIcon || 'font-awesome-5'}
          color={Colors.FONT1}
        />
        <PrimaryText style={styles.marginH}> {title}</PrimaryText>
      </View>
      <View>{children}</View>
    </View>
  );
};

export default option;
