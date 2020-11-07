import { Text, View } from 'react-native'

import Option from './components/option';
import {PrimaryText} from '@common'
import React from 'react'

const addMapModule = () => {
    return (
        <View>
            <Option
            iconName="location-outline"
            title=" Agregar Localizacion"
            typeIcon="ionicons">
            <PrimaryText>Aca va el mapa</PrimaryText>
          </Option>
        </View>
    )
}

export default addMapModule
