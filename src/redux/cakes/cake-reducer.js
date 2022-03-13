import {BUY_CAKE, RETURN_CAKE} from './cake-type'
const initialState = {
    numOfCake: 10 
}


const cakeReducer=(state=initialState, action)=>{
switch (action.type) {
    case BUY_CAKE:
        return{
            ...state,
            numOfCake:state.numOfCake - action.payload
        }
        
        case RETURN_CAKE:
            return{
                ...state,
                numOfCake:state.numOfCake +1
            }

    default:
        return state
}
}

export default cakeReducer