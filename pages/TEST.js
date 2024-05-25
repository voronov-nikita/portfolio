import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'

const App = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.item}>
                <Text>Item 1</Text>
            </View>
            <View style={styles.item}>
                <Text>Item 2</Text>
            </View>
            <View style={styles.item}>
                <Text>Item 3</Text>
            </View>
            {/* Добавьте столько элементов, сколько необходимо */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 20,
        margin: 10,
        backgroundColor: '#f0f0f0',
    },
})

export default App
