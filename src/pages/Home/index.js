import { Text, View } from 'react-native'

import Footer from '@components/footer'
import React from 'react'

const index = () => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex:1}}><Text>Home</Text></View>
            <Footer />
        </View>
    )
}

export default index
