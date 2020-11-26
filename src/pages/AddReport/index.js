import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import AddMapModule from './components/addMapModule';
import AddPicModule from './components/addPicModule';
import CurrentPosition from './components/currentPos';
import Footer from '@components/footer';
import Geolocation from '@react-native-community/geolocation';
import {Input} from 'react-native-elements';
import Option from './components/option';
import styles from './styles/index';

const index = () => {
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={[{flex: 1}, styles.centerView]}>
          <Text>Home</Text>
          <View style={styles.container}>
            <Option
              iconName="pencil-outline"
              title=" Acontecimiento"
              typeIcon="ionicon">
              <Input placeholder="Ingrese el suceso" />
            </Option>
          </View>
          <View>
            <CurrentPosition />
          </View>
          <AddMapModule />
          <AddPicModule />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default index;
