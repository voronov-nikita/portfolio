import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'

import {conferences} from './Styles'

export const ConfsScreen = () => {
    return (
        <ScrollView style={conferences.container}>
            <View style={conferences.item}>
                <Text>Item 1</Text>
            </View>
            <View style={conferences.item}>
                <Text>Item 2</Text>
            </View>
            <View style={conferences.item}>
                <Text>Item 3</Text>
            </View>
        </ScrollView>
    )
}
