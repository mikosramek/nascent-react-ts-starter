export const validatePhoneNumber = (phoneNumber: string) =>
  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phoneNumber);

export type ValidColorType = keyof typeof typeColorMap;

export const typeColorMap = {
  normal: "#A8A77A",
  fighting: "#C22E28",
  flying: "#A98FF3",
  poison: "#A33EA1",
  ground: "#E2BF65",
  rock: "#B6A136",
  bug: "#A6B91A",
  ghost: "#735797",
  steel: "#B7B7CE",
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  electric: "#F7D02C",
  psychic: "#F95587",
  ice: "#96D9D6",
  dragon: "#6F35FC",
  dark: "#705746",
  fairy: "#D685AD",
  unknown: "#68A090",
};

export const typeNames = Object.keys(typeColorMap);

export const normalizeCamelCase = (word: string) => {
  const brokenUp = word.replace(/[A-Z]/g, (a) => ` ${a.toLowerCase()}`);
  return brokenUp.charAt(0).toUpperCase() + brokenUp.slice(1);
};
