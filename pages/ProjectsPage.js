import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const data = [
    {
        title: 'Title 1',
        description: 'Description for block 1',
        image: 'https://via.placeholder.com/350x150',
    },
    {
        title: 'Title 2',
        description: 'Description for block 2',
        image: 'https://via.placeholder.com/350x150',
    },
    {
        title: 'Title 3',
        description: 'Description for block 3',
        image: 'https://via.placeholder.com/350x150',
    },
]

const { width: viewportWidth } = Dimensions.get('window')

export const ProjectsScreen = () => {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Carousel
                data={data}
                renderItem={renderItem}
                sliderWidth={viewportWidth}
                itemWidth={viewportWidth - 60}
                layout={'default'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    slide: {
        backgroundColor: 'white',
        borderRadius: 8,
        height: 300,
        padding: 20,
        marginLeft: 25,
        marginRight: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
})
