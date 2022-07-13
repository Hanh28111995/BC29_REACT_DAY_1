import React, { Component } from "react";

export default class Child extends Component {
  state = {};
  constructor(props) {
    super(props);
    console.log("constructer child");
  }
  static getDerivedStateFromProps(nextProps, currentState) {
    console.log("getDirivedStateFromProps child");
    return currentState;
  }
  render() {
    console.log("render child");
    return (
      <div className="bg-light text-center p-5">
        <h4>Child</h4>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount child");
  }
}
