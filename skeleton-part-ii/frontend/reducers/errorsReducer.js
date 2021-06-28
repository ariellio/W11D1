import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/error_actions"

const errorsReducer = (initialState = [], action) => {
    Object.freeze(initialState)
    switch(action.type){
        case RECEIVE_ERRORS:
            if(!action.errors){
                return initialState
            }
            let newErrors = []
            newErrors = action.errors;
            return newErrors;
        case CLEAR_ERRORS:
            return [];
        default:
            return initialState
    }
}
export default errorsReducer