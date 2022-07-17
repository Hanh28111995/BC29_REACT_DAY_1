import React, { Component } from "react";

import data from "../../../Data/danhSachGhe.json";
import ChitietGhe from "./ChitietGhe";

export default class Ghe extends Component {

  renderContent = () => {
    return data.map((item, index) => {
      if (item.hang !== "") {
        if (item.hang === "E") {
          return (
            <tr key={index} className="row_hall flex_seat">
              <td className="firstChar flex_seat">{item.hang}</td>
              <td className="rowSeat flex_seat">
                <ChitietGhe soghe={item.danhSachGhe}
                  selectTick={this.props.selectTick}
                  soVe={this.props.soVe}
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
                />
              </td>
            </tr>
          );
        }
      } else {
        return (
          <tr key={index}>
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
