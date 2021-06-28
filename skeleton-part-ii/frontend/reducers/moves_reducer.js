import { RECEIVE_POKEMON } from "../actions/pokemon_actions";

const movesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_POKEMON:
        let newState = {}
        let moves = action.pokemon.moves
        for(let key in moves){
            let move = moves[key]
            newState[move.id] = move
        }
        return newState
    default:
        return state;
  }
}
  
export default movesReducer;
