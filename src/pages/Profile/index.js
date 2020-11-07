import {Text, View} from 'react-native';

import Avatar from './components/avatar';
import Body from './components/body';
import React from 'react';
import styles from './styles/index';

const index = () => {
  return (
    <View style={styles.main}>
      <View style={[{flex: 1}, styles.centerView]}>
        <Text>Profile</Text>
        <Avatar image={require('@assets/img/profilePics/pic1.jpg')}/>
        <Body name='Carlos Paredes' location='SAN SALVADOR, SAN SALVADOR'/>
      </View>
      <Footer />
    </View>
  );
};

export default index;
