import React, { Component } from "react";

import styles from "./style.module.css";

export default class ItemComponent extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4 mt-5">
          <div className="card h-100 bg-light ">
            <div className="card-body text-center p-5 pt-0">
              <div className={styles.feature}>
                <i className="bi bi-collection"></i>
              </div>
              <h5 className="card-title fs-4 fw-bold">Fresh new layout</h5>
              <p className="card-text mb-0">
                With Bootstrap 5, we've created a fresh new layout for this
                template!
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 mt-5">
          <div className="card h-100 bg-light ">
            <div className="card-body text-center p-5 pt-0">
              <div className={styles.feature}>
                <i class="bi bi-cloud-download"></i>
              </div>
              <h5 className="card-title fs-4 fw-bold">Free to download</h5>
              <p className="card-text mb-0">
                As always, Start Bootstrap has a powerful collectin of free
                templates.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 mt-5">
          <div className="card h-100 bg-light ">
            <div className="card-body text-center p-5 pt-0">
              <div className={styles.feature}>
                <i class="bi bi-card-heading"></i>
              </div>
              <h5 className="card-title fs-4 fw-bold">Jumbotron hero header</h5>
              <p className="card-text mb-0">
                The heroic part of this template is the jumbotron hero header!
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 mt-5">
          <div className="card h-100 bg-light ">
            <div className="card-body text-center p-5 pt-0">
              <div className={styles.feature}>
                <i class="bi bi-bootstrap"></i>
              </div>
              <h5 className="card-title fs-4 fw-bold">Feature boxes</h5>
              <p className="card-text mb-0">
                We've created some custom feature boxes using Bootstrap icons!
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 mt-5">
          <div className="card h-100 bg-light ">
            <div className="card-body text-center p-5 pt-0">
              <div className={styles.feature}>
                <i class="bi bi-code"></i>
              </div>
              <h5 className="card-title fs-4 fw-bold">Simple clean code</h5>
              <p className="card-text mb-0">
                We keep our dependencies up to date and squash bugs as they
                come!
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 mt-5">
          <div className="card h-100 bg-light ">
            <div className="card-body text-center p-5 pt-0">
              <div className={styles.feature}>
                <i class="bi bi-patch-check"></i>
              </div>
              <h5 className="card-title fs-4 fw-bold">A name you trust</h5>
              <p className="card-text mb-0">
                Start Bootstrap has been the leader in free Bootstrap templates
                since 2013!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
