import {Text, View} from 'react-native';

import Profile from '@pages/Profile';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const userRouter = () => {
  return (
    <Stack.Navigator initialRouteName='Profile'>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default userRouter;
