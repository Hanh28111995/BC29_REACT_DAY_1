import React, { Component } from 'react'

import {connect} from "react-redux";

 class Child extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button className='btn btn-info' onClick={() => this.props.decrease()}>Decrease</button>
        <button className='btn btn-primary' onClick={() => this.props.increase()}>Increase</button>
        <button className='btn btn-success' onClick={() => this.props.random(Math.random())}>Random</button>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
return {
    increase: () => {    const action = { type: "INCREASE",};  dispatch(action)   },
    decrease: () => {    dispatch( {type: "DECREASE",} ) ;   },
    random: (newCount) => { dispatch({type: "RANDOM", payload: newCount,} ) ; },
}
};
export default connect(null, mapDispatchToProps)(Child);
