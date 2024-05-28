import { StyleSheet } from 'react-native'

// список с основными стилями, которые используются в разных местах
export const mainStyle = StyleSheet.create({
    verticalCenter: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        height: '100%',
    },

    oneLineV: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        textAlign: 'left',
        alignItems: 'left',
        marginLeft: '10%',
    },
})

export const blockStyle = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: 'center',
    },

    image: {
        width: '100%',
        height: '20%',
    },
    title: {
        fontSize: 32,
        marginLeft: 10,
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
})

// для стилей домашней страницы
export const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d1117',
    },

    head: {},

    textHead: {
        textAlign: 'left',
        color: '#ffffff',
        fontFamily: 'sans-serif',
        fontSize: 36,
        fontWeight: 'bold',
    },

    textMain: {
        textAlign: 'left',
        color: '#9e9e9e',
        fontFamily: 'sans-serif',
        fontSize: 26,
    },

    textStatus: {
        textAlign: 'left',
        color: '#6d6d6d',
        fontFamily: 'sans-serif',
        fontSize: 18,
    },
})

// для страницы с проектами
export const projectsStyles = StyleSheet.create({
    global: {
        flex: 1,
        // marginTop: 10,
    },
    container: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
        height: '80%',
        maxHeight: '90%',
    },
})

export const conferences = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 20,
        margin: 10,
        backgroundColor: '#f0f0f0',
    },
})

// для изображения
export const logoStyle = StyleSheet.create({
    logo: {
        width: '40%',
        height: '80%',
    },
})
