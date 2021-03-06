import * as APIUtil from '../util/api_util';
import { receiveErrors, clearErrors } from './error_actions';
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

export const RECEIVE_POKEMON = "RECEIVE_POKEMON"

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const receivePokemon = (pokemon) => ({
  type: RECEIVE_POKEMON,
  pokemon
})

export const requestSinglePokemon = (id) => (dispatch) => (
  APIUtil.fetchPokemon(id)
    .then(pokemon => dispatch(receivePokemon(pokemon)))
)

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const createPokemon = (pokemon) => (dispatch) => (
    APIUtil.createPokemon(pokemon)
    .then(payload => {
        dispatch(receivePokemon(payload))
        return payload.pokemon;
    })
    .fail(err => {
        dispatch(receivePokemonErrors(err.responseJSON))
    })
)
