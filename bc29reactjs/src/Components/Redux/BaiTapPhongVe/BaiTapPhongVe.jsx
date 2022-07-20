import React, { Component } from "react";
import data from "../../../Data/danhSachGhe.json";
import "./BaiTapBookingTicket.css";
import Ghe from "./Ghe";

export default class BaiTapPhongVe extends Component {
  state = {
    name: "",
    selectedTicket: data,
    checkedTicket: [],
    input_disabled: false,
    show_block: [false,false]
  };

  getData = (event) => {
    const name = this.name.value;
    const NumberOfTicket = this.NumberOfTicket.value;
    return [name, NumberOfTicket];
  };

  enable_selectTable = (boleen) => {
    this.setState({ input_disabled: boleen })
  };

  takeData = () => {
    const input_value = this.getData();
    console.log(input_value);
    this.setState({
      name: input_value[0],
      soVe: input_value[1],
    });
    this.setState({  show_block: [true,false] })

    this.enable_selectTable(false);
  };

  





  selectTick = (x, e, d) => {
    let checkValue = e.target.checked;
    var dataC = this.state.checkedTicket;
    if (x === false) {
      if (checkValue === true) {
        dataC.push(d);
      }
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
      // console.log("1");
      for (let i = 0; i < dataC.length; i++) {
        document.getElementById(dataC[i]).disabled = false;
        console.log(dataC[i]);
      }
    }
    if (dataC.length < this.state.soVe) {
      this.enable_selectTable(false);
    }
    console.log(this.state.soVe);
  };

  confirmData = () => {
    this.setState({  show_block: [true,true] })
    let new_data = this.state.selectedTicket;
    new_data.map((item) => {
      if (item.hang !== "") {
        item.danhSachGhe.map((ele, index) => {
          // console.log(ele.soGhe)
          for (let i = 0; i < this.state.checkedTicket.length; i++) {
            if (this.state.checkedTicket[i] == ele.soGhe) {
              ele.daDat = true;
            }
            // else {ele.daDat = false;}
          }
        });
      }
    });
    this.setState({
      selectedTicket: new_data,
    });
  };
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
                  <input
                    type="text"
                    id="Username"
                    required
                    onChange={this.getData}
                    ref={(input) => (this.name = input)}
                  />
                </div>
                <div className="agileits-right">
                  <label>
                    {" "}
                    Number of Seats
                    <span>*</span>
                  </label>
                  <input
                    type="number"
                    id="Numseats"
                    required
                    min={0}
                    onChange={this.getData}
                    ref={(input) => (this.NumberOfTicket = input)}
                  />
                </div>
              </div>
              <div className="text-center my-3">
                <button className="confirm_btn" onClick={() => this.takeData()}>
                  Start Selecting
                </button>
              </div>
            </div>
            {/* //input fields */}
            {/*-728x90-*/}
            {/* seat availabilty list */}
            {/* <ConfimTicket
              selectTick={this.selectTick}
              selectedTicket={this.state.selectedTicket}
              confirmData={this.confirmData}
            /> */}
            { this.state.show_block[0] && (
            <div className="mx-auto ">
              <ul className="seat_w3ls">
                <li className="smallBox greenBox">Selected Seat</li>
                <li className="smallBox orangeBox">Reserved Seat</li>
                <li className="smallBox emptyBox">Empty Seat</li>
              </ul>

              <div className="seatStructure txt-center mx-auto">
                <p id="notification" />
                <table id="seatsBlock">
                  <Ghe
                    selectTick={this.selectTick}
                    selectedTicket={this.state.selectedTicket}
                    input_disabled = {this.state.input_disabled}
                  />
                </table>
                <div className="screen mx-auto">
                  <h2 className="wthree">Screen this way</h2>
                </div>
                <div className="text-center my-3">
                  <button
                    className="confirm_btn"
                    onClick={() => this.confirmData()}
                  >
                    Confirm Selection
                  </button>
                </div>
              </div>
            </div>
            )
            }

{ this.state.show_block[1] && (
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
                      <textarea id="nameDisplay" disabled  value ={this.state.name}/>
                    </td>
                    <td>
                      <textarea id="NumberDisplay" disabled  value ={this.state.checkedTicket.length}/>
                    </td>
                    <td>
                      <textarea id="seatsDisplay" disabled  value ={this.state.checkedTicket} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
)}
            {/* //details after booking displayed here */}
          </div>
        </div>
      </div>
    );
  }
}
