
import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIce } from '../redux'

function ItemContainer(props) {
  return (
    <div>
        <h2> Item - {props.item}</h2>
        <button onClick={props.buyItem}>buy{props.item}</button>
        </div>
  )
}
const mapStateToProps = (state, ownProps )=>{
const itemstate = ownProps.cake ? state.cake.numOfCake: state.ice.numOfIce
return{
    item: itemstate
}}

 const mapDispatchToProps =(dispatch, ownProps)=>{
const dispatchFunc     = ownProps.cake? 
()=>dispatch(buyCake()):
()=>dispatch(buyIce())
return{
    buyItem :dispatchFunc
}
 }
export default connect(mapStateToProps,mapDispatchToProps) (ItemContainer)