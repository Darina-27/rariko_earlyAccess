import React from "react";
import Team_Members from "./Team_Members";

export default function Team() {
  return (
    <div
      id="team"
      className="container-fluid"
      style={{ background: "#040508", paddingTop: "4rem" }}
    >
      <div className="container">
        <div class="d-flex justify-content-center">
          <h1 style={{ color: "white" }}>TEAM</h1>
        </div>
        <div class="d-flex justify-content-center">
          <h3 style={{ color: "#ff0000" }}>Sub Heading</h3>
        </div>
      </div>

      <div class="container" style={{ paddingTop: "50px" }}>
        <div class="row justify-content-md-center">
          <div class="col-sm-6">
            <Team_Members
              imageT="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ncY-heISk8kAf3J_MXmEi2Utnl0LsgsfQg&usqp=CAU"
              nameT="MANI KUMAR NAREDLA"
              designation="Technology and Operations"
              linkedin=""
            />
          </div>
          <div class="col-sm-6">
            <Team_Members
              imageT="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ncY-heISk8kAf3J_MXmEi2Utnl0LsgsfQg&usqp=CAU"
              nameT="SAMAKHYA JAISWAL"
              designation="Marketing and Finance"
              linkedin=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
