import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import ChitietGhe from "./ChitietGhe";
import {connect} from "react-redux";


export default class Ghe extends Component {

  renderContent = () => {
    const DA = this.props.selectedTicket;
    // console.log(DA);
    return DA.map((item, index) => {
      if (item.hang !== " ") {
        if (item.hang === "E") {
          return (
            <tr key={index} className="row_hall flex_seat">
              <td className="firstChar flex_seat">{item.hang}</td>
              <td className="rowSeat flex_seat">
                <ChitietGhe soghe={item.danhSachGhe}
                  selectTick={this.props.selectTick}
                  input_disabled = {this.props.input_disabled}
                />
              </td>
            </tr>

          );
        } else {
          return (
            <tr key={index} className="flex_seat">
              <td className="firstChar flex_seat">{item.hang}</td>
              <td className="rowSeat flex_seat">
                <ChitietGhe soghe={item.danhSachGhe}
                  selectTick={this.props.selectTick}
                  input_disabled = {this.props.input_disabled}
                />
              </td>
            </tr>
          );
        }
      } else {
        return (
          <tr key={index} className="flex_seat">
            <td className="firstChar flex_seat">{item.hang}</td>
            <td className="flex_seat">
              {item.danhSachGhe.map((ghe) => {
                return (
                  <div className="rowNumber stt" key={ghe.soGhe}>
                    <div className="col_hall">{ghe.soGhe}</div>
                  </div>
                );
              })}
            </td>
          </tr>
        );
      }
    });
  };

  render() {
    return <tbody>{this.renderContent()}</tbody>
  }
}
// const mapStateToProps = (state)=> {
//   return {
//     ...state.DatVe,
//   }
// };
// export default connect(mapStateToProps)(Ghe);