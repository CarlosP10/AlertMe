import {Text, View} from 'react-native';

import Footer from '@components/footer';
import React from 'react';
import ScrollComponent from '@components/scrollComponent';
import UserCard from './components/userCard';
import styles from './styles/index';

const index = () => {
  return (
    <View style={{flex: 1}}>
      <View style={[{flex: 1}, styles.centerView]}>
        <Text>Home</Text>
        <ScrollComponent>
          <View>
            <UserCard
              image={require('@assets/img/profilePics/pic1.jpg')}
              name="Carlos Paredes"
              distance="3.5 km - 4:10 pm"
              description="Asalto en carro"
            />
            <UserCard
              image={require('@assets/img/profilePics/pic2.jpg')}
              name="Carlos Paredes"
              distance="3.5 km - 4:10 pm"
              description="Asalto en carro"
            />
            <UserCard
              image={require('@assets/img/profilePics/pic3.jpg')}
              name="Carlos Paredes"
              distance="3.5 km - 4:10 pm"
              description="Asalto en carro"
            />
            <UserCard
              image={require('@assets/img/profilePics/pic1.jpg')}
              name="Carlos Paredes"
              distance="3.5 km - 4:10 pm"
              description="Asalto en carro"
            />
          </View>
        </ScrollComponent>
      </View>

      <Footer />
    </View>
  );
};

export default index;
