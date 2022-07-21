import React, { Component } from 'react'
import {connect} from "react-redux";

class ChitietGhe extends Component {
    render() {
        return(
        this.props.soghe.map((ghe) => {
            // console.log(this.props.input_disabled);
            return (
                <div className="stt" key={ghe.soGhe}>
                    <div className="col_hall">
                        <input
                            id={ghe.soGhe}
                            type="checkbox"
                            className={ghe.daDat ? "orangeBox seats" : "seats"}
                            defaultValue={ghe.soGhe}
                            onChange={(e) => this.props.selectTick([ghe.daDat, e, ghe.soGhe])}
                        />
                    </div>
                </div>
            );
        }))
    }
}
const mapDispatchToProp = (dispatch) => {
    return{
        selectTick: (param) => {
        dispatch({
          type: "SELECT_TICKET",
          payload: param ,
        }) 
      }
    }
  }
const mapStateToProps = (state)=> {
  return {
    ...state.DatVe,
  }
};
export default connect(mapStateToProps,mapDispatchToProp)(ChitietGhe);
