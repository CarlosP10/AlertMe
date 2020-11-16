/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { SafeAreaView, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import authReducer from './src/store/reducers/auth'
import Navigator from '@routes';
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  auth: authReducer
});


const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigator />
      </SafeAreaView>
    </Provider>

  );
};

export default App;
