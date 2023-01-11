import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { usePokemonStore, PokemonRef } from "store/pokemon";

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
  const setPokemonRefs = usePokemonStore((state) => state.setPokemonRefs);
  const setPokemon = usePokemonStore((state) => state.setPokemon);
  const [fetchedPokemonRefs, setFetchedRefs] = useState(false);

  const fetchPokemonRefs = useCallback(async () => {
    try {
      const {
        data: { results },
      } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
      const refs: PokemonRef = {};
      results.forEach((pokemonRef: { name: string; url: string }) => {
        refs[pokemonRef.name] = { url: pokemonRef.url };
      });

      setPokemonRefs(refs);
    } catch (error) {
      console.error(error);
    }
  }, [setPokemonRefs]);

  useEffect(() => {
    if (fetchedPokemonRefs) return;
    setFetchedRefs(true);
    fetchPokemonRefs();
  }, [fetchPokemonRefs, fetchedPokemonRefs]);

  const fetchPokemon = useCallback(
    async ({ url }: { url: string }) => {
      try {
        const { data } = await axios.get(url);
        setPokemon(data);
      } catch (error) {
        console.error(error);
      }
    },
    [setPokemon]
  );

  return { fetchedPokemonRefs, fetchPokemon };
};
