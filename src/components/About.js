import React from "react";
import ForList from "./ForList";

export default function About() {
  return (
    <div
      className="container-fluid"
      style={{ background: "#07060C" }}
      id="about"
    >
      <div className="container" style={{ paddingTop: "100px" }}>
        <div className="row">
          <div className="col-md-6">
            <div
              className="container first"
              style={{ color: "white", textAlign: "justify" }}
            >
              <br />
              <p>
                At Rariko, we are building a platform which will help users
                effectively manage their crypto currencies, NFTs and blockchain
                domains at one place instead of checcking dozens of apps all the
                time.
                <br />
                <br />
                We are bringing a smart way to track and showoff your portfolio
                among your circle and the crypto community. Fasten your seat
                belts before we take off to the moon: 🌕
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="fancy container align-middle"
              style={{ fontSize: "30px" }}
            >
              <ul class="list-group list-group-flush">
                <li className="list-group-item">
                  <ForList title="1" listItem="Cryptocurrencies" />
                </li>
                <li className="list-group-item">
                  <ForList title="2" listItem="DeFi" />
                </li>
                <li class="list-group-item">
                  <ForList title=" 3" listItem="NFTs" />
                </li>
                <li class="list-group-item">
                  <ForList title="4" listItem="DEX" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
