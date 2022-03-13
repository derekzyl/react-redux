
import {BUY_CAKE} from './cake-type'


export const buyCake = (number = 1) =>{
    return {
        type: BUY_CAKE,
        payload: number
    }
}
