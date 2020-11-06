import {Colors, PrimaryText} from '@common';
import {Text, TouchableOpacity, View} from 'react-native';

import ButtonW from '@components/buttonWidth';
import InputComponent from './components/inputField';
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
        iconName="mail-outline"
        typeIcon="ionicons"
        title="Correo electronico"
      />
      <InputComponent
        iconName="lock-outline"
        typeIcon="ionicons"
        title="Contraseña"
      />
      <ButtonW text="Ingresar" onPress={()=> navigation.navigate('HomeRouter')} />
      <TouchableOpacity style={styles.centerView}>
        <PrimaryText>Olvidaste tu contraseña?</PrimaryText>
      </TouchableOpacity>

      <View style={styles.centerView}>
        <View style={styles.rowView}>
          <PrimaryText>¿No posees una cuenta?</PrimaryText>
          <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
            <PrimaryText style={styles.textBlue}> Registrate ahora</PrimaryText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default index;
