import React, { Component } from "react";
import data from "../../../Data/danhSachGhe.json";
import "./BaiTapBookingTicket.css";
import Ghe from "./Ghe";
import { connect } from "react-redux";

class BaiTapPhongVe extends Component {
 
//event lay gia tri tu` input
  getData = (event) => {
    const name = this.name.value;
    const NumberOfTicket = this.NumberOfTicket.value;
    return [name, NumberOfTicket];
  };
  // dua gia tri do len props redux
  takeData = () => {
    const input_value = this.getData();
    console.log(input_value);
    if (parseInt(input_value[1]) > 0) {
      this.props.take_Data([input_value[0],input_value[1],[true, false]]); 
    }
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
                <button className="confirm_btn" onClick={()=> {this.takeData()}}>
                  Start Selecting
                </button>
              </div>
            </div>
            {/* //input fields */}
            {/*-728x90-*/}
            {/* seat availabilty list */}
            
            {this.props.show_block[0] && (
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
                    // selectTick={this.selectTick}
                    // selectedTicket={this.state.selectedTicket}
                    // input_disabled = {this.state.input_disabled}
                    />
                  </table>
                  <div className="screen mx-auto">
                    <h2 className="wthree">Screen this way</h2>
                  </div>
                  <div className="text-center my-3">
                    <button
                      className="confirm_btn"
                      onClick={() => {
                        this.props.confirm_Data();
                        // this.props.takeData({thísoVe, name, show_block })
                      }}
                    >
                      Confirm Selection
                    </button>
                  </div>
                </div>
              </div>
            )}

            {this.props.show_block[1] && (
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
                        <textarea
                          id="nameDisplay"
                          disabled
                          value={this.props.name}
                        />
                      </td>
                      <td>
                        <textarea
                          id="NumberDisplay"
                          disabled
                          value={this.props.checkedTicket.length}
                        />
                      </td>
                      <td>
                        <textarea
                          id="seatsDisplay"
                          disabled
                          value={this.props.checkedTicket}
                        />
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

const mapDispatchToProp = (dispatch) => {
  return {
    take_Data: (value) => {
      dispatch({
        type: "TAKE_DATA",
        payload: value,
      });
    },

    confirm_Data: (value) => {
      dispatch({
        type: "CONFIRM_DATA",
        payload: value,
      });
    },


  };
};
const mapStateToProps = (state) => {
  return {
    ...state.DatVe,
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(BaiTapPhongVe);
