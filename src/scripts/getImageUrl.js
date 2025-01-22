export default async function getImageUrls(pokemons) {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const pokemonImageUrls = [];

  for (const pokemon of pokemons) {
    try {
      const response = await fetch(url + pokemon + "/", { mode: "cors" });

      const data = await response.json();
      pokemonImageUrls.push(data.sprites.front_default);
    } catch (err) {
      console.log(err);
    }
  }

  return pokemonImageUrls;
}
