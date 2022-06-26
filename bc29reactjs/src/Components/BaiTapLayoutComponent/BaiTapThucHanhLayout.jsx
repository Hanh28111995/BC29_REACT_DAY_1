import React, { Component } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
// import Navigation from './Navigation'
// import Content from './Content'

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        {/* <h5>bài tập layout</h5> */}
        <div className='row'>
          <div className='col-12 bg-dark border border-warning'>
            <Header />
          </div>
          <div className='col-12 border border-danger mt-1'>
            <Body />
          </div>
          <div className='col-12 bg-dark border border-info'>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
