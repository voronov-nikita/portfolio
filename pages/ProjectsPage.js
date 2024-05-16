import React from 'react'
import { ScrollView, Button, View } from 'react-native'
import { BlockWidget } from './Components'
import { projectsStyles } from './StylesPage'
import { ProjectImages } from './config'

export const ProjectsScreen = ({ navigation }) => {
    return (
        <View style={projectsStyles.main}>
            <ScrollView style={projectsStyles.container}>
                <BlockWidget
                    title="Test1"
                    imageSource={ProjectImages.project1}
                    description="A beautiful landscape with mountains and a river."
                />
                <BlockWidget
                    title="Test2"
                    imageSource={ProjectImages.project2}
                    description="The skyline of a bustling city during sunset."
                />
                <BlockWidget
                    title="Test3"
                    imageSource={ProjectImages.project3}
                    description="A serene path through a dense forest."
                />
                <BlockWidget
                    title="Test4"
                    imageSource={ProjectImages.project3}
                    description="A serene path through a dense forest."
                />
            </ScrollView>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}
