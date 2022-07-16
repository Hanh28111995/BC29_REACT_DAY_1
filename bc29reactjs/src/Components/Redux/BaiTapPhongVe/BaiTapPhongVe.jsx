import React, { Component } from "react";
import data from "../../../Data/danhSachGhe.json";
import "./BaiTapBookingTicket.css";
import ConfimTicket from "./ConfimTicket";

export default class BaiTapPhongVe extends Component {
  state = {
    selectedTicket: data,
    checkedTicket: [],
  };

  takeData = () => {
    // console.log("1");
    this.setState({
      name: document.getElementById("Username").value,
      soVe: document.getElementById("Numseats").value,
    });
    document.querySelector('.show').style.display = "block";
    this.enable_selectTable(false);
  };

  selectTick = (x, e, d) => {
    let checkValue = e.target.checked;
    var dataC = this.state.checkedTicket;
    // const idx = dataC.findIndex((ele) => ele.maSP === phone.maSP);
    if (x === false) {
      if (checkValue === true) { dataC.push(d); }
      if (checkValue === false) {
        let filterResult = dataC.filter(function (element) {
          return element !== d;
        });
        dataC = filterResult;
      }
    }

    this.setState({
      checkedTicket: dataC,
    });
    
    if (dataC.length == this.state.soVe) {
      this.enable_selectTable(true);
      for (let i=0 ; i < dataC.length; i++)
      {
        document.getElementById(dataC[i]).disabled = false;
        console.log(dataC[i])
      }
    }
    if (dataC.length < this.state.soVe) {
      this.enable_selectTable(false);
    }
  }

  enable_selectTable = (boleen) => {
    let c = document.querySelectorAll("input.seats");
    for (let i = 0; i < c.length; i++) {
      c[i].disabled = boleen; }
  }

  render() {
    return (
      <div>
        <h4 className="text-center text-light">MOVIE SEAT SELECTION</h4>
        <div className="container">
          <div className="w3ls-reg">
            {/* input fields */}
            <div className="inputForm">
              <h2>fill the required details below and select your seats</h2>
              <div className="mr_agilemain mb-4">
                <div className="agileits-left">
                  <label>
                    {" "}
                    Name
                    <span>*</span>
                  </label>
                  <input type="text" id="Username" required />
                </div>
                <div className="agileits-right">
                  <label>
                    {" "}
                    Number of Seats
                    <span>*</span>
                  </label>
                  <input type="number" id="Numseats" required min={1} />
                </div>
              </div>
              <div className="text-center my-3">
                <button className="confirm_btn" onClick={() => this.takeData()}>Start Selecting</button></div>
            </div>
            {/* //input fields */}
            {/*-728x90-*/}
            {/* seat availabilty list */}
            <ConfimTicket status={this.state.status}
              selectTick={this.selectTick}
              soVe={this.state.soVe}
            />
            <div
              className="displayerBoxes txt-center"
              style={{ overflowX: "auto" }}
            >
              <table className="Displaytable w3ls-table" width="100%">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Number of Seats</th>
                    <th>Seats</th>
                  </tr>
                  <tr>
                    <td>
                      <textarea id="nameDisplay" disabled defaultValue={""} />
                    </td>
                    <td>
                      <textarea id="NumberDisplay" disabled defaultValue={""} />
                    </td>
                    <td>
                      <textarea id="seatsDisplay" disabled defaultValue={""} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* //details after booking displayed here */}
          </div>
        </div>
      </div>
    );
  }
}
