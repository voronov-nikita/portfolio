import { blockStyle } from './Styles'
import { View, Text, Image } from 'react-native'
import React from 'react'

export const BlockWidget = ({ title, imageSource, description }) => {
    return (
        <View
            style={{
                backgroundColor: '#f9c2ff',
                padding: 20,
                marginVertical: 8,
                marginHorizontal: 16,
                flexDirection: 'row', // Располагает изображение и текст в строку
                alignItems: 'center',
            }}
        >
            <Image source={imageSource} style={blockStyle.image} resizeMode="cover" />
            <Text style={blockStyle.title}>{title}</Text>
            <Text style={blockStyle.description}>{description}</Text>
        </View>
    )
}
