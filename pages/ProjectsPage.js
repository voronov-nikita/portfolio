import React from 'react'
import { ScrollView, Button, View, Text, Image } from 'react-native'
import { BlockWidget, ResponsiveGrid } from './Components'
import { projectsStyles, blockStyle } from './StylesPage'
import { ProjectImages } from './config'

export const ProjectsScreen = ({ navigation }) => {
    return (
        <ScrollView style={{ flexGrow: 1 }}>
            <View style={blockStyle.container}>
                <Text>ПРивет</Text>
            </View>
            <View style={blockStyle.container}>
                <Text>ПРивет</Text>
            </View>
            <View style={blockStyle.container}>
                <Text>ПРивет</Text>
            </View>
            <View style={blockStyle.container}>
                <Text>ПРивет</Text>
            </View>
            <View style={blockStyle.container}>
                <Text>ПРивет</Text>
            </View>
            <View style={blockStyle.container}>
                <Text>ПРивет</Text>
            </View>
            <View style={blockStyle.container}>
                <Text>ПРивет</Text>
            </View>
            <View style={blockStyle.container}>
                <Text>ПРивет</Text>
            </View>
            <View style={blockStyle.container}>
                <Text>ПРивет</Text>
            </View>
            <View style={blockStyle.container}>
                <Text>ПРивет</Text>
            </View>
            <View style={blockStyle.container}>
                <Text>ПРивет</Text>
            </View>
            <View style={blockStyle.container}>
                <Text>ПРивет</Text>
            </View>
            {/* <BlockWidget
                title="Test1"
                require("../assets/images/test1.jpg")={ProjectImages.project1}
                description="A beautiful landscape with mountains and a river."
            />
            <BlockWidget
                title="Test2"
                require("../assets/images/test1.jpg")={ProjectImages.project2}
                description="The skyline of a bustling city during sunset."
            />
            <BlockWidget
                title="Test3"
                require("../assets/images/test1.jpg")={ProjectImages.project3}
                description="A serene path through a dense forest."
            />
            <BlockWidget
                title="Test4"
                require("../assets/images/test1.jpg")={ProjectImages.project3}
                description="A serene path through a dense forest."
            />
            <BlockWidget
                title="Test5"
                require("../assets/images/test1.jpg")={ProjectImages.project3}
                description="A serene path through a dense forest."
            />
            <BlockWidget
                title="Test6"
                require("../assets/images/test1.jpg")={ProjectImages.project3}
                description="A serene path through a dense forest."
            /> */}
        </ScrollView>
        // <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    )
}
