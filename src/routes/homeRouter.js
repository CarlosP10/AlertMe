import {Text, View} from 'react-native';

import AddReport from '@pages/AddReport';
import Home from '@pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const homeRouter = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddReport"
        component={AddReport}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default homeRouter;
