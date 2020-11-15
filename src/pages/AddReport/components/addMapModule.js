import { Text, View, StyleSheet } from 'react-native'

import Option from './option';
import {PrimaryText} from '@common'
import React, { PROVIDER_GOOGLE } from 'react'
import styles from '../styles/addMap';

import MapView from 'react-native-maps'

const addMapModule = () => {
    return (
        <View style={styles.mapContainer}>
            <Option
            iconName="location-outline"
            title=" Agregar Localización"
            typeIcon="ionicon">
          </Option>
          
          <View style={styles.mapView}>
          <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.09,
              longitudeDelta: 0.035
          }}>

          </MapView>
          </View>

        </View>
    )
}


export default addMapModule
