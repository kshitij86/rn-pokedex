import React, { useState } from "react";
import { Text, StyleSheet, Image, TouchableHighlight, Pressable, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import store from "../redux/store";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Make more state aware
const ToggleHeart = ({ name }) => {
    const foundPokemonInStore = store.getState().includes(name);
    if(!foundPokemonInStore) {
        return (
            <AntDesign name="hearto" size={30} color="black" />
        )
    } else {
        return (
            <AntDesign name="heart" size={30} color="black" />
        )   
    }
}

const PokeGridCell = ({id, name, img, navigation, extras}) => {
    const [isLiked, setIsLiked] = useState(false);    
    return (
        <Pressable 
            style={styles.gridCellStyle}
            onPress={() => { navigation.navigate("PokeDetails", {name: name, img: img, extras: extras}); }}>
            <Text style={styles.headerStyle}>{name}</Text>
            <Image style={styles.imgStyle} source={img}/>
            <TouchableHighlight 
                onPress={() => {
                isLiked ? (
                    store.dispatch({
                        type: "POKEMON_DISLIKED",
                        payload: {
                            pokemonName: name
                        }
                    })
                ) : (
                    store.dispatch({
                        type: "POKEMON_LIKED",
                        payload: {
                            pokemonName: name
                        }
                    })
                )
                setIsLiked(isLiked ? false : true);
            }}>
                <ToggleHeart name={name} />
            </TouchableHighlight>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    gridCellStyle: {
        flex: 1,
        paddingRight: 20,
        width: 0.5 * windowWidth,
        height: 0.5 * windowHeight,
        borderRadius: 5,
        backgroundColor: "white",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    headerStyle: {
        fontSize: 25,
        color: "#505050",
        marginBottom: 5
    },
    imgStyle: {
        margin: 5,
        width: 100, 
        height: 100
    }
});

export default PokeGridCell;