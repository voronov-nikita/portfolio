import * as React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the App</Text>
            <Button
                title="Go to Carousel"
                onPress={() => navigation.navigate('Carousel')}
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

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
})
