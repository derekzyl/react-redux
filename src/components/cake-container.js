import React from 'react'
import {buyCake} from '../redux'
import { connect } from 'react-redux'

const CakeContainer = (props) => {
    return(
        <div>
            <h1> Number of cake-{props.numOfCake }</h1>
            <button onClick={props.buyCake}>buy cake</button>
        </div>
    )

}
const mapStateToProps = state =>{
    return{
numOfCake:state.cake.numOfCake

    }
}

const mapDispatchToProps = dispatch=>{
    return{
        buyCake:()=> dispatch(buyCake())
 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);