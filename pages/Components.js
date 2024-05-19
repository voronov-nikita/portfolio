import { blockStyle } from './StylesPage'
import { View, Text, Image } from 'react-native'
import React from 'react'

export const BlockWidget = ({ title, imageSource, description }) => {
    return (
        <View style={blockStyle.container}>
            {imageSource && <Image source={imageSource} style={blockStyle.image} />}
            <Text style={blockStyle.title}>{title}</Text>
            <Text style={blockStyle.description}>{description}</Text>
        </View>
    )
}

// логика разработки сетки для адаптивного расположения данных по блокам и разным эллементам
// солгасно этой сетке мы располагаем элементы в порядке отдельных View объектов
export const ResponsiveGrid = ({ children, columns, spacing, style }) => {
    const gridStyles = {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }

    const itemStyles = {
        width: `${100 / columns}%`,
        marginBottom: spacing,
    }

    return (
        <View style={[gridStyles, style]}>
            {React.Children.map(children, (child, index) => (
                <View
                    style={[
                        itemStyles,
                        { marginLeft: index % columns === 0 ? spacing : 0 },
                    ]}
                    key={index}
                >
                    {child}
                </View>
            ))}
        </View>
    )
}
