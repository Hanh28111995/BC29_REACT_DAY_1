import React, { Component } from 'react'
import Child from './Child'

export default class LifeCycle extends Component {
    state = {};
    constructor(props) {
        super(props);
        console.log("constructer parent");
    }
    static getDerivedStateFromProps(nextProps, currentState) {
        console.log("getDirivedStateFromProps parent");
        return currentState;
    }


  render() {
    console.log("render parent");
    return (
      <div className='bg-warning w-75 text-center mx-auto p-5'>
        <h4>Parent</h4>
        <Child />
      </div>
    )
  }

  componentDidMount() {
    console.log("componentDidMount parent");
  }
}
