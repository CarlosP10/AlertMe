import {Text, View} from 'react-native';

import AddPicCard from './addPicCard';
import Option from './option';
import React from 'react';
import ScrollComponent from '@components/scrollComponent';
import styles from '../styles/addPic';

const addPicModule = () => {
  return (
    <View>
      <Option
        iconName="albums-outline"
        title=" Agregar Imagen"
        typeIcon="ionicon">
        <ScrollComponent>
          <View style={styles.rowView}>
            <AddPicCard />
            <AddPicCard />
            <AddPicCard />
            <AddPicCard />
            <AddPicCard />
          </View>
        </ScrollComponent>
      </Option>
    </View>
  );
};

export default addPicModule;
