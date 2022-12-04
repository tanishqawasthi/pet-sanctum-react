import React from "react";
import {Link} from "react-router-dom";
function BlogCard(props) {
  return (
    <div>
      <div
        className="row blog pt-4 pb-4 ps-1 mt-4 mb-4 border border-dark"
        data-aos="flip-up"
        data-aos-duration="1250"
      >
        <div className="col-4">
          <img src={props.imageUrl} alt="Dog" width="100%" />
        </div>
        <div className="col-8">
          <h2 className=""> {props.title.substring(0,36)+"..."} </h2>
          <p className="">{props.description.substring(0, 950) + "..."}</p>
          {/* <Link to="/BlogRead">
                                <button className="btn btn-primary" style="background-color: rgb(153, 0, 255); border: 0px;">Read More</button>
                            </Link> */}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
