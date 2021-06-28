import React from 'react';
import { Route, Link } from 'react-router-dom';

class PokemonDetail extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.requestSinglePokemon(this.props.pokemonId)
    }
    componentDidUpdate(prevProps){
        if(this.props.pokemonId !== prevProps.pokemonId){
            this.props.requestSinglePokemon(this.props.pokemonId)
        }
    }
    render(){
        
        let itemLis;
        let moveLis;
        if(this.props.items){
            itemLis = this.props.items.map(item => (
            <Link to={`/pokemon/${this.props.pokemonId}/items/${item.id}`}>
                <li>{item.name}</li>
            </Link>
            ))
            moveLis = this.props.moves.map(move => (
                <li>{move.name}</li>
            ))
        }
        if(!this.props.pokemonId) return null
        return(
            <>
            <div>
                <h2>{this.props.pokemon.name}</h2>
                <ul>
                    <li>Attack: {this.props.pokemon.attack}</li>
                    <li>Defense: {this.props.pokemon.defense}</li>
                    <li>Type: {this.props.pokemon.pokeType}</li>
                    <img src={this.props.pokemon.imageUrl} alt="" />
                </ul>
            </div>

            <div>
                <h2>Items</h2>
                <ul>
                    {itemLis ? itemLis : ""}
                </ul>

                <h2>Moves</h2>
                <ul>
                    {moveLis ? moveLis : ""}
                </ul>
            </div>

            </>
        )
    }

}


export default PokemonDetail;