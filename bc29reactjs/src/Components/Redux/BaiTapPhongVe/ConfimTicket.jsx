import React, { Component } from 'react';
import "./BaiTapBookingTicket.css";
import Ghe from './Ghe';
import { connect } from "react-redux";


class ConfimTicket extends Component {

    render() {
       
            return (
                <div className="mx-auto show">
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
                            <Ghe 
                            // selectTick={this.props.selectTick}  
                            selectedTicket = {this.state.selectedTicket}
                            />
                        </table>
                        <div className="screen mx-auto">
                            <h2 className="wthree">Screen this way</h2>
                        </div>
                        <div className="text-center my-3">
                            <button className="confirm_btn" onClick={() => this.props.confirmData()}>
                                Confirm Selection
                            </button>
                        </div>
                    </div>
                </div>
            )
    }
}
const mapStateToProps = (state)=> {
  return {
    ...state.DatVe,
  }
};
export default connect(mapStateToProps)(ConfimTicket);

