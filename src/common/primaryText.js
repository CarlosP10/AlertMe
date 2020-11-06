import React from 'react';
import {Text} from 'react-native';

const PrimaryText = ({
  onPress,
  numberOfLines,
  onTextLayout,
  style,
  children,
}) => {
  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      onTextLayout={onTextLayout}
      style={[style]}
      ellipsizeMode="tail">
      {children}
    </Text>
  );
};

export default PrimaryText;
