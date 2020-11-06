import {Colors, PrimaryText} from '@common';
import {Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import styles from './styles/buttonWidth'

const buttonWidth = ({text, onPress}) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.buttonView} onPress={() => onPress()}>
        <PrimaryText style={styles.textStyle}>{text}</PrimaryText>
      </TouchableOpacity>
    </View>
  );
};

export default buttonWidth;
