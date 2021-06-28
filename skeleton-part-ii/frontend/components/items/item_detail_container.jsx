import { connect } from 'react-redux'
import PokemonItemDetail from './item_detail'


const mSTP = (state, ownProps) => {
    return  {
    item: state.entities.items[ownProps.match.params.itemId]
    }
}

const PokemonItemDetailContainer = connect(mSTP, null)(PokemonItemDetail)
export default PokemonItemDetailContainer