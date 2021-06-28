import { connect } from 'react-redux'
import { createPokemon } from '../../actions/pokemon_actions'
import errorsReducer from '../../reducers/errorsReducer'
import PokemonForm from './pokemon_form'

const mSTP = state => {
    return { 
        errors: state.errors 
    }
}
const mDTP = dispatch => {
    return {
        createPokemon: (pokemon) => dispatch(createPokemon(pokemon))
    }
}

export default connect(null, mDTP)(PokemonForm)