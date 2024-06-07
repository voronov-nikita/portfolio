import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Импорт экранов
import { HomeScreen } from './pages/HomePage'
// import { ProjectsScreen } from './pages/ProjectsPage'

const Stack = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                {/* <Stack.Screen name="Projects" component={ProjectsScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
