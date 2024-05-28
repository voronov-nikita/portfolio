import React from 'react'
import { FlatList, Text, View, StyleSheet, Image } from 'react-native'

const App = () => {
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
        <View style={styles.item}>
            <Image
                source={{ uri: item.image }}
                style={styles.image}
                resizeMode="cover" // или "contain", в зависимости от ваших требований
            />
            <Text style={styles.title}>{item.title}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Обеспечивает, что контейнер занимает все доступное пространство
        marginTop: 50,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row', // Располагает изображение и текст в строку
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        marginLeft: 10, // Отступ между изображением и текстом
    },
    image: {
        width: 50, // Ширина изображения
        height: 50, // Высота изображения
    },
})

export default App
