import React, { Component } from "react";

import "./BaiTapBookingTicket.css";
import Ghe from "./Ghe";
export default class BaiTapPhongVe extends Component {
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
              <button className="confirm_btn" onclick="takeData()">Start Selecting</button></div>
            </div>
            {/* //input fields */}
            {/*-728x90-*/}
            {/* seat availabilty list */}
            <ul className="seat_w3ls">
              <li className="smallBox greenBox">Selected Seat</li>
              <li className="smallBox orangeBox">Reserved Seat</li>
              <li className="smallBox emptyBox">Empty Seat</li>
            </ul>
           
            <div
              className="seatStructure txt-center mx-auto"
              style={{ overflowX: "auto" }}
            >
              <p id="notification" />
              <table id="seatsBlock">
                <Ghe />
              </table>
              <div className="screen mx-auto">
                <h2 className="wthree">Screen this way</h2>
              </div>
              <div className="text-center my-3">
              <button className="confirm_btn" onclick="updateTextArea()" disabled>
                Confirm Selection
              </button>
              </div>
            </div>
            
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
