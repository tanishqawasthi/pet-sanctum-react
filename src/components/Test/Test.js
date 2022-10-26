import axios from "axios";
import { useEffect, useState } from "react";

let Test = (props)=>{
    
    let [idState, changeId] = useState(1);
    let [dataState, changeData] = useState({});

    useEffect(()=>{

        axios.get(`https://jsonplaceholder.typicode.com/todos/${idState}`)
            .then(res=>{
                changeData(res.data);
            })
            .catch(err=>{
                console.log(err);
            })

    }, [idState]);


    return (
        <div>
            <input type={"number"} onChange={(event)=>{changeId(event.target.value)}} />
            <h1>{JSON.stringify(dataState)}</h1>
        </div>
    )

};

export default Test;

