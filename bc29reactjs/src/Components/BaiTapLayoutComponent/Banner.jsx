import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (

        <div className='row p-4 text-left border border-success my-3 bg-light'>
        <h1 className='display-3 '>A Warm Welcome!</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam atque consequuntur eum. Minima, accusamus. Debitis porro delectus quod ad voluptatum facere ducimus consequuntur dolorem sit? Repudiandae animi assumenda sed illo!</p>
        <button className='btn btn-success'>Call to action!</button>
        </div>
      
    )
  }
}
