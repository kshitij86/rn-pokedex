import React, {useState, useEffect} from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PokeDetails = ({ route, params }) => {
    const { name, img, extras } = route.params;

    return (
        <View style={{flex: 1, flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}>
            <Image style={styles.imgStyle} source={img} />
            <Text style={styles.textStyle}>{name}</Text>
            <Text style={styles.textStyle}>Height: {extras.height}</Text>
            <Text style={styles.textStyle}>Weight: {extras.weight}</Text>
            <Text style={styles.textStyle}>Base Experience: {extras.base_experience}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imgStyle: {
        width: 150, 
        height: 150
    },
    textStyle: {
        fontSize: 25
    }
});

export default PokeDetails;