import React, { Component } from 'react'

export default class ChitietGhe extends Component {
    render() {
        const {
            soGhe,
            daDat,
        } = this.props.soghe;

        return(
        this.props.soghe.map((ghe) => {
            console.log(this.props.soghe);
            return (
                <div className="stt" key={ghe.soGhe}>
                    <div className="col_hall">
                        <input
                            type="checkbox"
                            className={ghe.daDat ? "orangeBox seats" : "seats"}
                            defaultValue={ghe.soGhe}
                            onChange={(e) => this.props.selectTick(ghe.daDat, e, this.props.soVe)}
                        />
                    </div>
                </div>
            );
        }))
    }
}
