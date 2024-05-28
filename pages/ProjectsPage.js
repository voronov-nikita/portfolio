import React from 'react'
import { FlatList, Button, View, Image, Text, StyleSheet } from 'react-native'
import { BlockWidget } from './Components'
import { projectsStyles, blockStyle } from './Styles'
import { ProjectImages } from './config'

export const ProjectsScreen = ({ navigation }) => {
    const data = [
        {
            id: '1',
            title: 'Элемент 1',
            image: ProjectImages.project1,
            description: 'Описание',
        },
        {
            id: '2',
            title: 'Элемент 2',
            image: ProjectImages.project2,
            description: 'Описание',
        },
        {
            id: '3',
            title: 'Элемент 3',
            image: ProjectImages.project3,
            description: 'Описание',
        },
        {
            id: '4',
            title: 'Элемент 4',
            image: ProjectImages.project3,
            description: 'Описание',
        },
        {
            id: '5',
            title: 'Элемент 5',
            image: ProjectImages.project3,
            description: 'Описание',
        },
        {
            id: '6',
            title: 'Элемент 5',
            image: ProjectImages.project3,
            description: 'Описание',
        },
        {
            id: '7',
            title: 'Элемент 5',
            image: ProjectImages.project3,
            description: 'Описание',
        },
        {
            id: '8',
            title: 'Элемент 5',
            image: ProjectImages.project3,
            description: 'Описание',
        },
        {
            id: '9',
            title: 'Элемент 5',
            image: ProjectImages.project3,
            description: 'Описание',
        },
    ]

    const renderItem = ({ item }) => (
        <View style={blockStyle.item}>
            {/* <Image
                source={item.image}
                style={blockStyle.image}
                resizeMode="cover" // или "contain", в зависимости от ваших требований
            /> */}
            <Text style={blockStyle.title}>{item.title}</Text>
            <Text style={blockStyle.description}>{item.description}</Text>
        </View>
    )

    return (
        <View style={projectsStyles.global}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
