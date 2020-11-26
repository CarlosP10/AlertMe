import { Button, Text, View } from "react-native";
import React, { useState } from "react";

import Geolocation from "@react-native-community/geolocation";

const CurrentPosition = () => {
  const [error, setError] = useState("");
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0
  });

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        setError("");
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        });
      },
      e => {setError(e.message), console.log(e)}
    );
  };

  return (
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
  );
};

export default CurrentPosition;