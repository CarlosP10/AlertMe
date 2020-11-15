import {Text, View} from 'react-native';

import AddPicCard from './addPicCard';
import Option from './option';
import React from 'react';
import ScrollComponent from '@components/scrollComponent';
import styles from '../styles/addPic';

const addPicModule = () => {
  return (
    <View style={styles.container}>
      <Option
        iconName="albums-outline"
        title=" Agregar Imagen"
        typeIcon="ionicon">
        <ScrollComponent horizontal={true} >
          <View style={styles.rowView}>
            <AddPicCard onPress={() => console.log("HELLO WORLD")} />
            <AddPicCard onPress={() => console.log("HELLO WORLD")} />
            <AddPicCard onPress={() => console.log("HELLO WORLD")} />
            <AddPicCard onPress={() => console.log("HELLO WORLD")} />
            <AddPicCard onPress={() => console.log("HELLO WORLD")} />
          </View>
        </ScrollComponent>
      </Option>
    </View>
  );
};

export default addPicModule;
