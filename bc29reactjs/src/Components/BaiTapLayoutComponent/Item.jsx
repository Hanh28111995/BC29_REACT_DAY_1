import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className='row' style={{marginLeft: "-3%",marginRight: "-3%" }}>
        <div className='col-lg-6 col-xl-3 mb-5'>
          <div className='border border-warning px-0 bg-light'>
            <img src={process.env.PUBLIC_URL + '/img/3.jpg'} className="img-fluid " />
            <div className='px-3 py-3 bg-white'>
              <h3>Card title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dignissimos laboriosam sequi ratione quisquam magnam corrupti?</p>
            </div>
            <div className='border py-2'>
              <button className='btn btn-info'>Find Out More</button>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-xl-3 mb-5'>
          <div className='border border-warning px-0 bg-light'>
            <img src={process.env.PUBLIC_URL + '/img/3.jpg'} className="img-fluid " />
            <div className='px-3 py-3 bg-white'>
              <h3>Card title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dignissimos laboriosam sequi ratione quisquam magnam corrupti?</p>
            </div>
            <div className='border py-2'>
              <button className='btn btn-info'>Find Out More</button>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-xl-3 mb-5'>
          <div className='border border-warning px-0 bg-light'>
            <img src={process.env.PUBLIC_URL + '/img/3.jpg'} className="img-fluid " />
            <div className='px-3 py-3 bg-white'>
              <h3>Card title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dignissimos laboriosam sequi ratione quisquam magnam corrupti?</p>
            </div>
            <div className='border py-2'>
              <button className='btn btn-info'>Find Out More</button>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-xl-3 mb-5'>
          <div className='border border-warning px-0 bg-light'>
            <img src={process.env.PUBLIC_URL + '/img/3.jpg'} className="img-fluid " />
            <div className='px-3 py-3 bg-white'>
              <h3>Card title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dignissimos laboriosam sequi ratione quisquam magnam corrupti?</p>
            </div>
            <div className='border py-2'>
              <button className='btn btn-info'>Find Out More</button>
            </div>
          </div>
        </div>
        
        
      </div>
    )
  }
}
