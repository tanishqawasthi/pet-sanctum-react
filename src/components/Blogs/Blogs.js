import { useEffect, useState } from "react";
import axios from "axios";

let Blogs = (props)=>{

    let [blogData, changeBlogData] = useState({});
    useEffect(()=>{
        axios.get("http://localhost:3005/Blogs")
            .then(res=>{
                console.log(res.data);
                changeBlogData(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    }, [])

    return (
        <h2>This is a blogs page</h2>
    )

};

export default Blogs;