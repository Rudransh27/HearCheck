import React from "react";
import web from "../src/images/ear-medical-care-in-brain-india-hear-the-world-foundation-19.jpg"
import {Link} from "react-router-dom";

const Common = (props) => {
  return (
      <section id="header" className="d-flex">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>{props.name}</h1>
                  <h2 className="my-3">Rediscover Sound. Instant Hearing Tests Online. Try Now!</h2>
                  <div className="mt-3">
                    <Link to={props.visit} className="btn btn-primary">
                      {props.btname}
                    </Link> 
                  </div>
                </div>

                <div className="col-lg-6 order-lg-2 header-img">
                  <img src={props.imgsrc} className="img-fluid animated " alt="home.img" />
                </div>

              </div>  
            </div>
          </div>
        </div>
      </section>
  );
};

export default Common;
