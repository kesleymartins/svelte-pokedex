import { writable } from "svelte/store";
import axios from "axios";

export const pokemons = writable([])
export const pagination = writable({
  previous: '',
  next: '',
})

const getPokemon = async ({name, url}) => {
  const response = await axios.get(url)

  return {
    name: name,
    order: response.data.order,
    image: response.data.sprites.other['official-artwork'].front_default,
    types: response.data.types,
    stats: response.data.stats
  }
}

export const loadPokemons = async () => {
  const response = await axios.get('/pokemon?limit=12')
  
  pokemons.set(response.data.results.map(pokeInfo => {
    return getPokemon(pokeInfo)
  }))

  pagination.set({
    previous: response.data.previous,
    next: response.data.next,
  })
}

export const nextPage = async (url="") => {
  const response = await axios.get(url)

  pokemons.set(response.data.results.map(pokeInfo => {
    return getPokemon(pokeInfo)
  }))

  pagination.set({
    previous: response.data.previous,
    next: response.data.next,
  })
}

export const previousPage = async (url="") => {
  const response = await axios.get(url)

  pokemons.set(response.data.results.map(pokeInfo => {
    return getPokemon(pokeInfo)
  }))

  pagination.set({
    previous: response.data.previous,
    next: response.data.next,
  })
}

