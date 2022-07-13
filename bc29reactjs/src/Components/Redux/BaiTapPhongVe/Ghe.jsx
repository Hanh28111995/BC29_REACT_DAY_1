import React, { Component } from "react";

import data from "../../../Data/danhSachGhe.json";

import { connect } from "react-redux";

export default class Ghe extends Component {
  renderContent = () => {
    return data.map((item, index) => {
      if (item.hang !== "") {
        if (item.hang === "E") {
          return (
            <tr key={index} className="row_hall">
              <td className="firstChar">{item.hang}</td>
              <td className="rowSeat">
                {item.danhSachGhe.map((ghe) => {
                  return (
                    <td key={ghe.soGhe}>
                      <div className="col_hall">
                        <input
                          type="checkbox"
                          className="seats"
                          defaultValue={ghe.soGhe}
                          disabled
                        />
                      </div>
                    </td>
                  );
                })}
              </td>
            </tr>
          );
        } else {
          return (
            <tr key={index}>
              <td className="firstChar">{item.hang}</td>
              <td>
                {item.danhSachGhe.map((ghe) => {
                  return (
                    <td key={ghe.soGhe}>
                      <div className="col_hall">
                        <input
                          type="checkbox"
                          className="seats"
                          defaultValue={ghe.soGhe}
                          disabled
                        />
                      </div>
                    </td>
                  );
                })}
              </td>
            </tr>
          );
        }
      } else {
        return (
          <tr key={index}>
            <td className="firstChar">{item.hang}</td>
            <td>
              {item.danhSachGhe.map((ghe) => {
                return (
                  <td className="rowNumber stt" key={ghe.soGhe}>
                    <div className="col_hall">{ghe.soGhe}</div>
                  </td>
                );
              })}
            </td>
          </tr>
        );
      }
    });
  };

  render() {
    return <tbody>{this.renderContent()}</tbody>;
  }
}
