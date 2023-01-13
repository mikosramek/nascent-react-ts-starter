import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InnerPokemonCard } from "components/pokemon/PokemonCard/InnerPokemonCard";
import { useUserStore } from "store/user";
import { Wrapper, Heading } from "styles/shared";
import { normalizeCamelCase } from "utils/general";

import * as Styled from "./Review.styled";

const Response = {
  pending: "Pending",
  success: "Success",
  failure: "Failure",
};

export const Review = () => {
  const navigate = useNavigate();
  const chosenPokemon = useUserStore((state) => state.chosenPokemonRef);
  const user = useUserStore((state) => state.user);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<keyof typeof Response>("pending");

  const userPresent = useMemo(() => {
    return user.address && user.firstName && user.lastName && user.phoneNumber;
  }, [user]);

  const pokemonPresent = useMemo(() => {
    return chosenPokemon.name;
  }, [chosenPokemon]);

  const canSubmit = useMemo(() => {
    return userPresent && pokemonPresent;
  }, [userPresent, pokemonPresent]);

  const handleSubmit = useCallback(() => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setResponse("pending");

    // faked response time + random chance to succeed / fail
    const fakeCall = setTimeout(() => {
      const chance = Math.random();
      if (chance > 0.3) {
        setResponse("success");
      } else {
        setResponse("failure");
        setIsSubmitting(false);
      }
    }, 1000);
    return () => {
      if (fakeCall) clearTimeout(fakeCall);
    };
  }, [isSubmitting]);

  return (
    <Wrapper>
      <Heading>Is this info correct?</Heading>
      <Styled.InfoWrapper>
        <Styled.InfoList>
          {Object.entries(user).map(([field, value]) => {
            return (
              <li key={`review-${field}`}>
                {normalizeCamelCase(field)}: {value}
              </li>
            );
          })}
          {!userPresent && (
            <Styled.Button onClick={() => navigate("/")}>
              Finish your info
            </Styled.Button>
          )}
        </Styled.InfoList>
        <Styled.PokemonWrapper>
          <InnerPokemonCard {...chosenPokemon} />
          {!pokemonPresent && (
            <Styled.Button onClick={() => navigate("/pokemon")}>
              Pick a pokemon
            </Styled.Button>
          )}
        </Styled.PokemonWrapper>
      </Styled.InfoWrapper>
      <Styled.Button
        onClick={handleSubmit}
        disabled={isSubmitting || !canSubmit}
      >
        Submit details
      </Styled.Button>
      {(isSubmitting || response === "failure") && (
        <Styled.ResponseCopy>{response}</Styled.ResponseCopy>
      )}
    </Wrapper>
  );
};
