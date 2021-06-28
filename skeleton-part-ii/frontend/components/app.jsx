import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container'
import ItemDetailContainer from './items/item_detail_container'
import PokemonFormContainer from './pokemon/pokemon_form_container'
const App = () => (
    <>
        <Route exact path="/poke/new" component={PokemonFormContainer} />
        <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer }/>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer}/>
        <Route path="/" component={PokemonIndexContainer} />
    </>
)

export default App;