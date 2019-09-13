import React, { Component } from "react";
import "@sass/app.scss";
import Background from "@components/background/Background";
export default class App extends Component {
  render() {
    return (
      <div id="container">
        <div id="container--flex" className="self-center--vert">
          <div className="self-center--hor">
            <h1>Template</h1>
          </div>
        </div>
      </div>
    );
  }
}
