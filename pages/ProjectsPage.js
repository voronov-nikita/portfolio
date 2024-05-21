import React from 'react'
import { ScrollView, Button, View, Dimensions} from 'react-native'
import { BlockWidget, ResponsiveGrid } from './Components'
import { projectsStyles } from './StylesPage'
import { ProjectImages } from './config'

export const ProjectsScreen = ({ navigation }) => {
    const columns = isSmallScreen() ? 1 : 2
    const spacing = 10

    return (
        <View style={projectsStyles.main}>
            <ResponsiveGrid columns={columns} spacing={spacing}>
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
                <BlockWidget
                    title="Test5"
                    imageSource={ProjectImages.project3}
                    description="A serene path through a dense forest."
                />
                <BlockWidget
                    title="Test6"
                    imageSource={ProjectImages.project3}
                    description="A serene path through a dense forest."
                />
            </ResponsiveGrid>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

const isSmallScreen = () => {
    const { width } = Dimensions.get('window')
    return width < 415;
};
