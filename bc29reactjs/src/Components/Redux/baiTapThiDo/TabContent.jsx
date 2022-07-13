import React, { Component } from "react";

import clothes from "../../../Data/clothes.json";

import { connect } from "react-redux";
class TabContent extends Component {
  renderContent = () => {
    
    const filterData = clothes.tabPanes.filter((ele) => {
      return ele.type === this.props.selectedType;
    });

    return filterData.map((ele) => {
      const {id, imgSrc_jpg, name, type, imgSrc_png }= ele;
      return (
        <div key={id} className="col-md-3">
          <div className="card text-center">
            <img src={imgSrc_jpg} />
            <h4>
              <b>{name}</b>
            </h4>
            <button onClick={()=> this.props.dispatch({
              type: 'CHANGE_MODEL',
              payload: {type, imgSrc_png},
            })}>Thử đồ</button>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="well mt-2 p-5">
        {/* Tab panes */}
        <div className="tab-content">
          <div className="tab-pane container active">
            <div className="container">
              <div className="row">
                {this.renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    ...state.thuDoReducer,
  }
}
export default connect(mapStateToProps)(TabContent);