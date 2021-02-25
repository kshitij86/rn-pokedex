import { create } from "apisauce";

const pokemonList = [
    "pikachu",
    "geodude",
    "ditto",
    "squirtle",
    "bulbasaur",
    "ekans",
];

const api = create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
  });

export const fetchPokemon = async() => {
    const dataArray = [];
    for(let i=0; i<pokemonList.length; i++){
        const response = await api.get(`${pokemonList[i]}`);
        const ext = response.data;
        dataArray.push({
            id: i,
            name: pokemonList[i],
            img: ext.sprites.front_default,
            extras: ext
        });
    }
    return dataArray;
}