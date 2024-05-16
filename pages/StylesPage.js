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
        flexWrap: 'nowrap',
        textAlign: 'left',
        alignItems: 'left',
        marginLeft: '10%',
    },
})

export const blockStyle = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 16,
    },

    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
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
        flexDirection: 'row',
        flexWrap: 'nowrap',
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
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
        maxHeight: '90%',
    },
})

// для изображения
export const logoStyle = StyleSheet.create({
    logo: {
        width: '40%',
        height: '80%',
    },
})
