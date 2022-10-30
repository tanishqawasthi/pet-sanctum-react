import "./Adopt.css"
import Filters from "./Filters"
import SearchBar from "./SearchBar";
import ListPets from "./ListPets";
import { useState, useEffect }  from "react"
import axios from "axios";

let Adopt = (props) => {
    
    let data = require("../../database/pets.json");
    let [totalData, changeTotalData] = useState([]);
    let [filterState, changeFilter] = useState("all");
    let [dataShow, changeData] = useState([]);

    useEffect(()=>{

        axios.get("http://localhost:3000/Pets")
            .then(res=>{
                console.log(res.data);
                changeData(res.data);
                changeTotalData(res.data);
            })
            .catch(err=>{
                console.log(err);
            })

    },[])


    useEffect(()=>{
        if(filterState == "all") {
            changeData(totalData)
            return;
        }
        let temp = data.filter((elmt, index)=>{
            return elmt.type.toLowerCase()==filterState;
        });
        console.log(temp);
        changeData(temp)
    },[filterState, totalData]);

    let onChangeFilter = (event)=>{

        console.log(event.target.id);
        changeFilter(event.target.id.toLowerCase())

    };

    return (
        <div>
            <SearchBar/>
            <Filters onChangeFilter = {onChangeFilter} />
            <div id="cards1" className="py-4">
                <div className="container">
                    <div className="title text-center">
                        <h2 className="position-relative d-inline-block"> Adopt a Pet </h2>
                    </div>
                    <div className="row">
                        
                        <div className="container">

                            { dataShow.length == 0 && <h3>Loading!</h3>}
                            { dataShow.length != 0 && <ListPets dataShow={dataShow}/>}
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adopt;
