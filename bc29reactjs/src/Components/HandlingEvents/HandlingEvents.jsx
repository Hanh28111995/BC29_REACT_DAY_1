import React, { Component } from 'react'

export default class HandlingEvents extends Component {
handleLogin = () => {
    alert("Welcome to cybersoft!")
};
handleLogout = (a) => {
    alert(`${a} đã đăng xuất`);
};

  render() {
    return (
      <div>
        <h5>HandlingEvents</h5>
        <button className='btn btn-success' onClick={this.handleLogin} >Login</button>
        <button className='btn btn-info' onClick={()=> {
            alert("Welcome to cybersoft!");
        }}>Login</button>
         <br />
         <button onClick={this.handleLogout.bind(this, "Cybersoft")} className="btn btn-warning">
         Logout</button>
         <button onClick={() => this.handleLogout("Cybersoft")} className="btn btn-warning"> 
         Logout</button>
        </div>
    )
  }
}
