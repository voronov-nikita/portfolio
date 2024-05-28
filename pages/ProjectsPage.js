import React from 'react'
import { FlatList, Button, View, Image, Text, StyleSheet } from 'react-native'
import { BlockWidget } from './Components'
import { projectsStyles, blockStyle } from './Styles'
import { ProjectImages } from './config'

export const ProjectsScreen = ({ navigation }) => {
    const data = [
        { id: '1', title: 'Элемент 1', image: 'https://via.placeholder.com/150' },
        { id: '2', title: 'Элемент 2', image: 'https://via.placeholder.com/150' },
        { id: '3', title: 'Элемент 3', image: 'https://via.placeholder.com/150' },
        { id: '4', title: 'Элемент 4', image: 'https://via.placeholder.com/150' },
        { id: '5', title: 'Элемент 5', image: 'https://via.placeholder.com/150' },
        { id: '6', title: 'Элемент 5', image: 'https://via.placeholder.com/150' },
        { id: '7', title: 'Элемент 5', image: 'https://via.placeholder.com/150' },
        { id: '8', title: 'Элемент 5', image: 'https://via.placeholder.com/150' },
        { id: '9', title: 'Элемент 5', image: 'https://via.placeholder.com/150' },
    ]

    const renderItem = ({ item }) => (
        <BlockWidget
            title={item.title}
            imageSource={item.image}
            description={'Описание'}
        />
    )

    return (
        <View style={projectsStyles.newnew}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
