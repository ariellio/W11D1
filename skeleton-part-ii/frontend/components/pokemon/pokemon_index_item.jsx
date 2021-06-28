import React from 'react';
import { Link } from 'react-router-dom';


const PokemonIndexItem = (props) => {
    const url = `/pokemon/${props.poke.id}`
    return (<li className="pokemon-index-item">
        <Link to={url}>
        <span>{props.poke.id}</span>
        <img src={props.poke.imageUrl} />
        <span>{props.poke.name}</span>
        </Link>
    </li>
    )
}

export default PokemonIndexItem;