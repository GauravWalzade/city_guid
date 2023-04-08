import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Contacts extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              <strong>Our Location</strong>
            </h3>
          </div>
          <div className="row">
            <div className="col-md-7">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.739859546301!2d73.78830631474545!3d20.01942998655367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebb46d387bb3%3A0x55bcedd700c83789!2sSudarshan%20Colony!5e0!3m2!1sen!2sin!4v1663237603975!5m2!1sen!2sin"
                style={{
                  border: "0",
                  width: "100%",
                  height: "315px",
                  frameborder: "0",
                }}
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-md-5">
              <h4>
                <strong>Constact Us</strong>
              </h4>
              <form action="">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="name "
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email "
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="phone "
                  />
                </div>
                <textarea
                  cols="30"
                  rows="3"
                  placeholder="Message"
                  className="form-control"
                ></textarea>
                <Link className="btn btn-outline-primary text-uppercase mt-1">
                  <i className=" fa fa-paper-plane-o" aria-hidden="true"></i>
                  <i className="fab fa-telegram-plane" />
                  &nbsp;Send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
