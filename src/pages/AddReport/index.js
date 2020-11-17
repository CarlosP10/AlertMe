import {Text, View, ScrollView} from 'react-native';

import AddMapModule from './components/addMapModule';
import AddPicModule from './components/addPicModule';
import Footer from '@components/footer';
import {Input} from 'react-native-elements';
import Option from './components/option';
import styles from './styles/index';
import Geolocation from '@react-native-community/geolocation';
import React, {useState} from 'react';

export default class index extends React.Component {

  constructor() {
    super();
    this.state  = {
      ready: false,
      location: {lat:null, lng: null},
      error: null
  }
  }

  geoSuccess = (position) => {
      console.log(position)
  }

  geoError = (err) => {
    console.log(err)
    this.setState({ error: err.message})
  }

  getLocation = () => {
    let geoOptions = {
        enableHighAccuracy: true,
        timeOut: 60000,
        maximumAge: 60 * 60
    };

    Geolocation.getCurrentPosition(
        this.geoSuccess,
        this.geoError,
        geoOptions
    );
  }

  componentDidMount(){
      this.setState({ ready: false, error: null });
      this.getLocation()
  }

  render() {
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
          <AddMapModule />
          <AddPicModule />
        </View>
        </ScrollView>
        <Footer />
      </View>
    );
  }
  
};

