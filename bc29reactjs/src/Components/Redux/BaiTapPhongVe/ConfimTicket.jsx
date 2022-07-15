import React, { Component } from 'react';
import data from "../../../Data/danhSachGhe.json";
import "./BaiTapBookingTicket.css";
import Ghe from './Ghe';

export default class ConfimTicket extends Component {

    render() {
        if (this.props.status === "enabled") {
            return (
                <div className="mx-auto">
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
                            <Ghe selectTick={this.props.selectTick} soVe={this.props.soVe} 
                            />
                        </table>
                        <div className="screen mx-auto">
                            <h2 className="wthree">Screen this way</h2>
                        </div>
                        <div className="text-center my-3">
                            <button className="confirm_btn" >
                                Confirm Selection
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
