import React, { Component } from "react";
import { InfoConsumer } from "./context";
import { Link } from "react-router-dom";

export default class Info extends Component {
  render() {
    const {id, img, headerSubTitle, headerTitle, headerText } = this.props.item;

    return (
      <InfoConsumer>
        {(value) => (
          <div className="col-10 col-lg-4 ms-auto mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img src={img} alt={headerTitle} className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title text-uppercase">{headerTitle}</h3>
                <h5 className="card-title">{headerSubTitle}</h5>
                <p className="card-text">{headerText}</p>
                <Link to="/details" onClick={()=>value.handleDetail(id)} className="btn btn-outline-primary text-uppercase">More Info</Link>
              </div>
            </div>
          </div>
        )}
      </InfoConsumer>
    );
  }
}
