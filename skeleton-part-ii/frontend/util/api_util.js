export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
}
export const fetchPokemon = (pokemonId) => {
  return $.ajax({
    method: "GET",
    url: `/api/pokemon/${pokemonId}`
  })
}

export const createPokemon = (pokemon) => {
  return $.ajax({
    method: "post",
    url: `/api/pokemon`,
    data: {
      pokemon: pokemon
    }
  })
}