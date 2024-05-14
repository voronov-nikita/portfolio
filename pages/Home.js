import { View, Text, Image } from 'react-native'
import { homeStyle, logoStyle } from './StylesPage'
import { ConfigImage } from './config'
import React from 'react'


// экран, содержащий всю основную и базовую информацию
export const HomeScreen = () => {

    return (
        <View style={homeStyle.container}>
            <Image source={ConfigImage.mainLogo} style={logoStyle.main}/>
            <Text>Этот чувак крутой</Text>
        </View>
    )
}
