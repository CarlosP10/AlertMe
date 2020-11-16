import {Colors, PrimaryText} from '@common';
import {Text, TouchableOpacity, View, ActivityIndicator, Alert } from 'react-native';

import ButtonW from '@components/buttonWidth';
import InputComponent from '@pages/SignIn/components/inputField';
import React, { useEffect, useState, useReducer, useCallback } from 'react';
import styles from './styles/index';
import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux';
import * as authActions from '../../store/actions/auth'
import Input from '../../components/Input';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
  return state;
};

const index = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState();
  const navigation = useNavigation();

  const dispatch = useDispatch();


  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
      nombre: '',
    },
    inputValidities: {
      email: false,
      password: false,
      nombre: false,
    },
    formIsValid: false
  });

  useEffect(() => {
    if (error) {
      Alert.alert('An error Ocurred!', error.message, [{ text: 'Okay' }])
    }

  }, [error]);

  const authHandler = async () => {
    let action;
    action = authActions.signup(formState.inputValues.email, formState.inputValues.password);
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      navigation.navigate('HomeRouter')
    } catch (err) {
      setError(err)
      setIsLoading(false);
    }

  }

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );


  return (
    <View style={styles.main}>
      <View style={styles.centerView}>
        <Text>LOGO</Text>
      </View>
      
      <View style={{marginHorizontal:25}}>
      <Input
          id='nombre'
          label='Name'
          keyboardType='default'
          required
          errorText='Please enter a valid name.'
          onInputChange={inputChangeHandler}
          initialValue="" />
        <Input
          id='email'
          label='E-Mail'
          keyboardType='email-address'
          required
          email
          autoCapitalize='none'
          errorText='Please enter a valid email address.'
          onInputChange={inputChangeHandler}
          initialValue="" />
        <Input
          id='password'
          label='Password'
          keyboardType="default"
          secureTextEntry
          minLength={5}
          required

          autoCapitalize='none'
          errorText='Please enter a valid password.'
          onInputChange={inputChangeHandler}
          initialValue="" />

      </View>

      {isLoading ? (
        <ActivityIndicator size="small" color='#EE450F' />
      ) : (
          <ButtonW text="Crear Cuenta" onPress={authHandler} />

        )}
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
