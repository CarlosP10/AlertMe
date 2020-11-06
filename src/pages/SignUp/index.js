import {Colors, PrimaryText} from '@common';
import {Text, TouchableOpacity, View} from 'react-native';

import ButtonW from '@components/buttonWidth';
import InputComponent from '@pages/SignIn/components/inputField';
import React from 'react';
import styles from './styles/index';
import { useNavigation } from '@react-navigation/native';

const index = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.centerView}>
        <Text>LOGO</Text>
      </View>
      <InputComponent
        iconName="person-outline"
        typeIcon="ionicons"
        title="Nombre"
      />
      <InputComponent
        iconName="mail-outline"
        typeIcon="ionicons"
        title="Correo electronico"
      />
      <InputComponent
        iconName="lock-outline"
        typeIcon="ionicons"
        title="Contraseña"
      />
      <ButtonW text="Crear cuenta" onPress={()=> navigation.navigate('HomeRouter')} />

      <View style={styles.centerView}>
        <View style={styles.rowView}>
        <PrimaryText>¿Ya tienes una cuenta?</PrimaryText>
          <TouchableOpacity onPress={()=> navigation.navigate('SignIn')}>
            <PrimaryText style={styles.textBlue}> Ingresa</PrimaryText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default index;
