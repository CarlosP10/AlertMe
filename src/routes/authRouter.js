import {Text, View} from 'react-native';

import React from 'react';
import SignIn from '@pages/SignIn';
import SignUp from '@pages/SignUp';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const authRouter = () => {
  return (
    <Stack.Navigator initialRouteName='SignIn'>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default authRouter;
