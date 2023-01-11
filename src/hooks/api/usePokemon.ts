import axios from "axios";
import { useCallback, useReducer } from "react";

const FETCH_COUNT = 20;

// https://pokeapi.co/api/v2/pokemon?limit=1154
/*
    {
        results: [
            {
                name: string;
                url: string;
            }
        ]
    }
*/

/*
    compile above fetch into
    {
        name: { url }
    }
    each component then transforms store data into ->
    {
        name: { 
            abilities: […]
            base_experience: 64
            forms: […]
            game_indices: […]
            height: 7
            held_items: []
            id: 1
            is_default: true
            location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters"
            moves: […]
            name: "bulbasaur"
            order: 1
            past_types: []
            species: {…}
            sprites: {
                front_default: url
            }
            stats: […]
            types: [
                0: {
                    slot: 1
                    type: {
                        name: "grass"
                        url: "https://pokeapi.co/api/v2/type/12/"
                    }
                }	
                1: {
                    slot: 2
                    type: {
                        name: "poison"
                        url: "https://pokeapi.co/api/v2/type/4/"
                    }
                }	
            ]
            weight: 69
         }
    }
*/

// fetch all pokemon names + urls
// use intersection observer to fetch pokemon as the user scrolls
// each pokemon component will be responsible for fetching their own data

export const usePokemon = () => {
  const fetchInitialPokemonList = useCallback(() => {}, []); // might be better as useEffect?
  const fetchPokemon = useCallback(
    ({ pokemonName }: { pokemonName: string }) => {},
    []
  );

  return { fetchInitialPokemonList, fetchPokemon };
};
