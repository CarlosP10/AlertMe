import {Text, View} from 'react-native';

import {PrimaryText} from '@common';
import React from 'react';
import styles from '../styles/body'

const body = ({name, location}) => {
  return (
    <View>
      <PrimaryText style={styles.marginView}>{name}</PrimaryText>
      <PrimaryText style={styles.marginView}>{location}</PrimaryText>
    </View>
  );
};

export default body;
