import { View, Text, Image, Button } from 'react-native'
import { homeStyle, logoStyle, mainStyle } from './StylesPage'
import { ConfigImage } from './config'
import React from 'react'

// экран, содержащий всю основную и базовую информацию
export const HomeScreen = ({ navigation }) => {
    return (
        <View style={homeStyle.container}>
            {/* <View style={mainStyle.verticalCenter}>
                <Image source={ConfigImage.mainLogo} style={logoStyle.logo} />
            </View> */}

            <View style={mainStyle.oneLineV}>
                <Text style={homeStyle.textHead}> Воронов Никита </Text>
                <Text style={homeStyle.textMain}> Начинающий разработчик </Text>
                <Text style={homeStyle.textStatus}> еще учусь </Text>
            </View>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Projects')}
            />
        </View>
    )
}
