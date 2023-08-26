import React, { Component } from "react";

export default class BannerComponent extends Component {
  render() {
    return (
      <div className="container py-4 ">
        <div className="card py-5 bg-light">
          <div className="card-body py-4">
            <h5 className="card-title text-center fs-1 fw-bold">
              A warm welcome!
            </h5>
            <p className="card-text text-center my-0 fs-4">
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been
            </p>
            <p className=" text-center fs-4">
              removed from the framework. Why create custom CSS when you can use
              utilities?
            </p>
            <div className="d-flex justify-content-center">
              <a
                href="#"
                className="btn btn-primary text-center fs-5 px-4 py-2  "
              >
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
