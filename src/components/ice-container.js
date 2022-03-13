import React from 'react'
import { buyIce} from '../redux'
import { connect } from 'react-redux'

const IceContainer = (props) => {
    return(
        <div>
            <h1> Number of Ice-{props.numOfIce }</h1>
            <button onClick={props.buyIce}>buy ice</button>
        </div>
    )

}
const mapStateToProps = state =>{
    return{
numOfIce:state.ice.numOfIce

    }
}

const mapDispatchToProps = dispatch=>{
    return{
        buyIce:()=> dispatch(buyIce())
 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceContainer);