import React from 'react'
import { View, Text, Button } from 'react-native'
import { homeStyle } from './StylesPage'

export const HomeScreen = () => {
    const handleButtonPress = buttonName => {
        alert(`Вы нажали кнопку "${buttonName}"`)
    }

    return (
        <View style={homeStyle.container}>
            <Text style={homeStyle.heading}>Домашняя страница</Text>
            <View style={homeStyle.buttonContainer}>
                <Button title="Кнопка 1" onPress={() => handleButtonPress('Кнопка 1')} />
                <Button title="Кнопка 2" onPress={() => handleButtonPress('Кнопка 2')} />
            </View>
        </View>
    )
}
