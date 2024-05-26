import { blockStyle } from './Styles'
import { View, Text, Image } from 'react-native'
import React from 'react'

export const BlockWidget = ({ title, imageSource, description }) => {
    return (
        <View style={blockStyle.container}>
            <Image source={imageSource} style={blockStyle.image}/>
            <Text style={blockStyle.title}>{title}</Text>
            <Text style={blockStyle.description}>{description}</Text>
        </View>
    )
}

