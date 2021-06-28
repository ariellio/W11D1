import { RECEIVE_POKEMON } from "../actions/pokemon_actions";

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_POKEMON:
        let newState = {}
        const items = action.pokemon.items
        for(let key in items){
            let item = items[key]
            newState[item.id] = item
        }
        return newState
    default:
        return state;
  }
}
  
export default itemsReducer;
