import React from "react";
import {connect} from "react-redux"
import {flip} from "../../redux/actions"

 class Room extends React.Component {
  render() {
    const lightedness = this.props.isLightOn ? "lit" : "dark";
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={()=>this.props.toggle()}>flip</button>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return {isLightOn:state.isLightOn}
   }
 
const mapDispatchToProps=(dispatch)=>{
       return {
           toggle:()=>dispatch(flip())
       }
   }
export default connect(mapStateToProps,mapDispatchToProps)(Room);