import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

function Blogs() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Blogs")
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="container mt-3">
        <h1 className="text-center text-white p-2">Pet Sanctum Blogs</h1>
        <hr size="8" />

        <h2 className="text-center mt-2 mb-3 bg-white border-dark rounded d-inline-block p-2 text-center">
          Featured Posts
        </h2>

        <div className="maincontainer">
          <div className="maincard">
            <div className="card1">
              <div className="image">
                <img href="#" src="" />
              </div>
              <div className="content">
                {/* <h3> blog 0 title </h3> */}
                <p>
                  {/* blog 0 description */}
                  <Link to="http://localhost:3000/BlogRead?uid=1">
                    Read More
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="maincard">
            <div className="card1">
              <div className="image">
                <img href="#" src="" />
              </div>
              <div className="content">
                <h3></h3>
                <p>
                  <Link to="http://localhost:3000/BlogRead?uid=2">
                    Read More
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="maincard">
            <div className="card1">
              <div className="image">
                <img href="#" src="" />
              </div>
              <div className="content">
                <h3> </h3>
                <p>
                  <Link to="http://localhost:3000/BlogRead?uid=3">
                    Read More
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr size="8" className="mt-4" />

        <h2
          className="text-center mt-2 mb-3 bg-white border-dark rounded d-inline-block p-2 text-center"
          style={{ background: "rgb(216, 216, 216)" }}
          data-aos="slide-up"
          data-aos-duration="500"
        >
          Explore Other Posts
        </h2>

        <ul>
          <div className="">
            {posts.map((post) => (
              <BlogCard
                id={post.id}
                title={post.title}
                url={post.imageUrl}
                btn="Read More"
              />
            ))}{" "}
          </div>
        </ul>

        <Link to="http://localhost:3000/AddBlog">
          <Button className="btn btn-success">Add Blog</Button>
        </Link>
      </div>
    </div>
  );
}

export default Blogs;
