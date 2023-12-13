import React from "react";

import Card from "./Card"
import ImgData from "./ImgData";
const Services=() =>{
    return (
      <>
      <div className="my-5">
        <h1 className="text-center">Our Test</h1>
      </div>
      <div className="container-fluid nav_bg">
          <div className="row">
           {
            ImgData.map((val,ind) => {
              return <Card key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              />
            })
          }
          </div>
      </div>
      </>

    );
  }
  
  export default Services;