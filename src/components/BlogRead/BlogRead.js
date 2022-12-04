import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import {useState, useEffect} from 'react'

function BlogRead(props) {

    const temp = useParams();

    let [totalBlog, changeBlogData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3005/Blogs/${temp.id}`)
      .then((res) => {
        console.log(res.data);

        changeBlogData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    
  return (
    <div>
     { totalBlog.id && (
    <div className="card mb-3 ms-auto me-auto mt-5 p-4 shadow-lg">
        <img src={props.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h1 className="card-title"> {totalBlog.titel} </h1>
          <p className="card-text">
              {totalBlog.description}
          </p>
        </div>
    </div>
     )}
    </div>
  )
}

export default BlogRead
