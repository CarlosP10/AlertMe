import {TouchableOpacity, View} from 'react-native';

import HomeIcon from '@assets/icons/footer/home.svg'
import {Icon} from 'react-native-elements';
import PlusCircleIcon from '@assets/icons/footer/plus-circle.svg'
import React from 'react';
import UserIcon from '@assets/icons/footer/user.svg'
import styles from './styles/footer';
import {useNavigation} from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.actionsContainer}>
        <TouchableOpacity>
          <HomeIcon  />
        </TouchableOpacity>
        <TouchableOpacity>
          <PlusCircleIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <UserIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
 