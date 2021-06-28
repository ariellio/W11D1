import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Link } from 'react-router-dom'
class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
    this.props.requestAllPokemon()
  }
  
  render(){
    return (

    <section className="pokedex">
      <ul>
      {this.props.pokemon.map((poke) => (
        <PokemonIndexItem key={poke.id} poke={poke}/>
      ))}
      </ul>

      <Link to = "/poke/new">Make a new pokemans</Link>
    </section>
    )
  }
  }
  
  
  
  export default PokemonIndex;