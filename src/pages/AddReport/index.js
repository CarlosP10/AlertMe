import {Text, View} from 'react-native';

import AddMapModule from './components/addMapModule';
import AddPicModule from './components/addPicModule';
import Footer from '@components/footer';
import {Input} from 'react-native-elements';
import Option from './components/option';
import React from 'react';
import styles from './styles/index';

const index = () => {
  return (
    <View style={styles.main}>
      <View style={[{flex: 1}, styles.centerView]}>
        <Text>Home</Text>
        <View>
          <Option
            iconName="pencil-outline"
            title=" Acontecimiento"
            typeIcon="ionicon">
            <Input placeholde="Ingrese el suceso" />
          </Option>
        </View>
        <AddMapModule />
        <AddPicModule />
      </View>
      <Footer />
    </View>
  );
};

export default index;
