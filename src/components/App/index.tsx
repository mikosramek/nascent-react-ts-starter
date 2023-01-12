import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "pages/Landing/index";
import { Pokemon } from "pages/Pokemon";
import { Review } from "pages/Review";
import { useUserStore, User } from "store/user";
import { usePokemonStore } from "store/pokemon";
import { STORED_POKEMON_KEY } from "utils/general";

import * as Styled from "./App.styled";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/pokemon",
    element: <Pokemon />,
  },
  {
    path: "/review",
    element: <Review />,
  },
]);

export function App() {
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const setChosenPokemonRef = usePokemonStore(
    (state) => state.setChosenPokemonRef
  );
  useEffect(() => {
    const storedUser = {} as User;
    for (const key of Object.keys(user)) {
      const storedValue = localStorage.getItem(key);
      if (typeof storedValue === "string") {
        storedUser[key as keyof User] = storedValue;
      }
    }
    setUser(storedUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const savedPokemon = localStorage.getItem(STORED_POKEMON_KEY);
    if (typeof savedPokemon === "string") {
      setChosenPokemonRef(JSON.parse(savedPokemon));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled.AppWrapper>
      <Styled.Header>
        <Styled.Heading>Who are you?</Styled.Heading>
      </Styled.Header>
      <Styled.RouteWrapper>
        <RouterProvider router={router} />
      </Styled.RouteWrapper>
      <Styled.Footer>Miko Sramek 2023</Styled.Footer>
    </Styled.AppWrapper>
  );
}
