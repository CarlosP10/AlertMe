import {Colors, PrimaryText} from '@common';
import {Text, TouchableOpacity, View} from 'react-native';

import ButtonW from '@components/buttonWidth'
import InputComponent from './components/inputField';
import React from 'react';

const index = () => {
  return (
    <View>
      <Text>LOGO</Text>
      <InputComponent
        iconName="mail-outline"
        typeIcon="ionicons"
        title="Correo electronico"
      />
      <InputComponent
        iconName="lock-closed-outline"
        typeIcon="ionicons"
        title="Contraseña"
      />
      <ButtonW text='Ingresar'/>
      <TouchableOpacity>
          <PrimaryText>Olvidaste tu contraseña?</PrimaryText>
      </TouchableOpacity>

      <View>
          <PrimaryText>¿No posees una cuenta?</PrimaryText>
          <TouchableOpacity>
          <PrimaryText>Registrate ahora</PrimaryText>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;
