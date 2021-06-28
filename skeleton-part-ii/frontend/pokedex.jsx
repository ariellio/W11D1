import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { requestSinglePokemon } from './actions/pokemon_actions'

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();
  window.store = store
  ReactDOM.render(<Root store={store} />, rootEl)
})

let poke = {
  name: "Jo",
  attack: 0,
  defense: 0,
  poke_type: "grass",
  image_url: "asdf"
}
window.requestSinglePokemon = requestSinglePokemon