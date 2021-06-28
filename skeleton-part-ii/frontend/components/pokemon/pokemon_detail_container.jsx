import { connect } from 'react-redux'
import { requestSinglePokemon } from '../../actions/pokemon_actions'
import PokemonDetail from './pokemon_detail'


const mSTP = (state, ownProps) => (
    {
        pokemonId: ownProps.match.params.pokemonId,
        items: Object.values(state.entities.items),
        moves: Object.values(state.entities.moves),
        pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
    }
)

const mDTP = (dispatch) => (
    {
        requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
    }
)

const PokemonDetailContainer = connect(mSTP, mDTP)(PokemonDetail)
export default PokemonDetailContainer