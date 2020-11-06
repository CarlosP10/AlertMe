import {Text, View} from 'react-native';

import AuthRouter from './authRouter';
import HomeRouter from './homeRouter';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import UserRouter from './userRouter';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="HomeRouter"
          component={HomeRouter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AuthRouter"
          component={AuthRouter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserRouter"
          component={UserRouter}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
