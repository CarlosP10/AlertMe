import {Alert, Button, Text, View} from 'react-native';
import React, {PROVIDER_GOOGLE, useState} from 'react';

import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';
import Option from './option';
import {PrimaryText} from '@common';
import styles from '../styles/addMap';

const addMapModule = () => {
  const [error, setError] = useState('');
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        setError('');
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (e) => {
        setError(e.message), console.log(e);
      },
    );
  };

  return (
    <View style={styles.mapContainer}>
      <Option
        iconName="location-outline"
        title=" Agregar Localización"
        typeIcon="ionicon"></Option>

      <View>
        <Button title="Get Current Position" onPress={getPosition} />
        {error ? (
          <Text>Error retrieving current position</Text>
        ) : (
          <>
            <Text>Latitude: {position.latitude}</Text>
            <Text>Longitude: {position.longitude}</Text>
          </>
        )}
      </View>
      <View style={styles.mapView}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: position.latitude,
            longitude: position.longitude,
            //   latitudeDelta: 0.09,
            //   longitudeDelta: 0.035
          }}></MapView>
      </View>
    </View>
  );
};

export default addMapModule;
