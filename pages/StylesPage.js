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

// для изображения
export const logoStyle = StyleSheet.create({
    logo: {
        width: '40%',
        height: '80%',
    },
})
