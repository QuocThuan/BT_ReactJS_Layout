import React, { Component } from "react";
import BannerComponent from "./BannerComponent";
import ItemComponent from "./ItemComponent";

export default class Bodycomponent extends Component {
  render() {
    return (
      <div className="py-4">
        <BannerComponent />
        <div className="container pt-2">
          <ItemComponent />
        </div>
      </div>
    );
  }
}
