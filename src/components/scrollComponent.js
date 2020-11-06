import {ScrollView, StyleSheet, View} from 'react-native';

import React from 'react';

const scrollComponent = ({children, horizontal}) => {
  return (
    <View style={styles.margin}>
      {horizontal ? (
        <ScrollView
          horizontal
          style={styles.margin}
          showsHorizontalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <ScrollView style={styles.margin} showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      )}
    </View>
  );
};

export default scrollComponent;

const styles = StyleSheet.create({
  margin: {
    margin: 2,
    marginVertical: 3,
  },
});
