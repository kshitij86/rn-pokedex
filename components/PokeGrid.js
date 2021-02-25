import React, { useEffect, useState } from "react";
import { FlatGrid } from "react-native-super-grid";

import PokeGridCell from "./PokeGridCell"; 
import { fetchPokemon } from "../api/api";

export default function PokeGrid({navigation}) {

    const [pokemonData, setPokemonData] = useState([]);

    useEffect(async() => {
        // call API
        setPokemonData(await fetchPokemon());
    }, [])
    
    return (
        <FlatGrid
        contentContainerStyle={{
            flex:1,
            flexDirection: "columns",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center"
        
        }}
            spacing={10}
            data={pokemonData}
            renderItem={({ item }) => 
                (<PokeGridCell 
                    id={item.id} 
                    name={item.name} 
                    img={item.img}
                    navigation={navigation}
                    extras={item.extras} />)} />
    )
}
