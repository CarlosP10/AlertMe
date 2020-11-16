import {Dimensions, Text, View} from 'react-native';

import Avatar from './components/avatar';
import Body from './components/body';
import Footer from '@components/footer';
import React, { useEffect, useState } from 'react'
import styles from './styles/index';
import * as authActions from '../../store/actions/auth'


import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { Button} from 'react-native-elements'
const index = () => {
  
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.main}>
      <View style={[{flex: 1}, styles.centerView]}>
        <Text>Profile</Text>
        <Avatar image={require('@assets/img/profilePics/pic1.jpg')}/>
        <Body name='Carlos Paredes' location='SAN SALVADOR, SAN SALVADOR'/>
        <Button
          title="Cerrar Sesión"
          buttonStyle={{ backgroundColor: '#EE450F',marginTop:20, width:Dimensions.get('window').width/1.5, alignSelf:'center', borderRadius:10, }}
          onPress={() => {
            navigation.replace('AuthRouter')
            dispatch(authActions.logout());

          }}
        />
      </View>
      
      <Footer />
    </View>
  );
};

export default index;
