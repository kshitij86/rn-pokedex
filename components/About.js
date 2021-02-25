import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function About() {
    return (
        <View style={styles.containerStyle}>
            <Text>Owned and created by @kshitij86</Text>
            <Text>Find me on Github</Text>
        </View>
)};

const styles = StyleSheet.create({
    containerStyle: {
        "justifyContent": "center",
        "alignItems": "center"
    }
})


