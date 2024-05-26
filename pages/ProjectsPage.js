import React from 'react'
import { FlatList, Button, View, Image, Text } from 'react-native'
import { BlockWidget } from './Components'
import { projectsStyles, blockStyle } from './Styles'
import { ProjectImages } from './config'

export const ProjectsScreen = ({ navigation }) => {
    const elements = [
        {
            id: '1',
            title: 'Элемент 1',
            imageSource: ProjectImages.project1,
            description: 'Небольшое описание',
        },
        {
            id: '2',
            title: 'Элемент 2',
            imageSource: ProjectImages.project2,
            description: 'Небольшое описание',
        },
        {
            id: '3',
            title: 'Элемент 3',
            imageSource: ProjectImages.project3,
            description: 'Небольшое описание',
        },
        {
            id: '4',
            title: 'Элемент 4',
            imageSource: ProjectImages.project3,
            description: 'Небольшое описание',
        },
        {
            id: '5',
            title: 'Элемент 5',
            imageSource: ProjectImages.project3,
            description: 'Небольшое описание',
        },
        {
            id: '6',
            title: 'Элемент 5',
            imageSource: ProjectImages.project3,
            description: 'Небольшое описание',
        },
        {
            id: '7',
            title: 'Элемент 5',
            imageSource: ProjectImages.project3,
            description: 'Небольшое описание',
        },
    ]

    // Функция для рендеринга каждого элемента
    const renderItem = ({ item }) => (
        <View>
            <Image source={item.imageSource} style={blockStyle.image} resizeMode="cover"/>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
        </View>
    )

    return (
        <View>
            <FlatList
                data={elements}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
        // <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    )
}
