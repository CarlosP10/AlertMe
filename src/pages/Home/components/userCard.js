import {Colors, PrimaryText} from '@common';
import {Image, Text, View} from 'react-native';

import {Icon} from 'react-native-elements';
import React from 'react';
import styles from '../styles/userCard';

const userCard = ({image, name, distance, description}) => {
  return (
    <View style={styles.backgroundView}>
      <View style={styles.rowView}>
        <View style={styles.centerView}>
          <Image source={image} style={styles.imageContainer} />
        </View>
        <View style={{justifyContent:'space-evenly'}}>
          <PrimaryText>{name}</PrimaryText>
          <View style={styles.rowView}>
            <Icon
              name="map-marker-alt"
              type="font-awesome-5"
              color={Colors.C6}
              size={20}
            />
            <PrimaryText style={{marginLeft: 5}}>{distance}</PrimaryText>
          </View>
          <PrimaryText>{description}</PrimaryText>
        </View>
      </View>
    </View>
  );
};

export default userCard;
