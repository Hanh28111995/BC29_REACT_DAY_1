import React, { Component } from 'react'
import "./BaiTapBookingTicket.css";

export default class ChitietGhe extends Component {
    render() {
        return(
        this.props.soghe.map((ghe) => {
            console.log(this.props.input_disabled);
            return (
                <div className="stt" key={ghe.soGhe}>
                    <div className="col_hall">
                        <input
                            id={ghe.soGhe}
                            type="checkbox"
                            className={ghe.daDat ? "orangeBox seats" : "seats"}
                            defaultValue={ghe.soGhe}
                            onChange={(e) => this.props.selectTick(ghe.daDat, e, ghe.soGhe)}
                            disabled = {this.props.input_disabled}
                        />
                    </div>
                </div>
            );
        }))
    }
}
