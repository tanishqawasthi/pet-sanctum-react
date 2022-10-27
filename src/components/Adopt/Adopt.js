import "./Adopt.css"

import { useState, useEffect }  from "react"

let Adopt = (props) => {
    
    let data = require("../../database/pets.json");

    let [filterState, changeFilter] = useState("all");
    let [dataShow, changeData] = useState(data);

    useEffect(()=>{
        if(filterState == "all") {
            return;
        }
        let temp = data.filter((elmt, index)=>{
            return elmt.type.toLowerCase()==filterState;
        });
        console.log(temp);
        changeData(temp)
    },[filterState]);

    let onChangeFilter = (event)=>{

        console.log(event.target.id);
        changeFilter(event.target.id.toLowerCase())

    };

    return (
        <div>
            <div className="container border-bottom">
                <div className="row my-3 d-flex justify-content-center align-items-center">
                    <div className="col-lg-11 col-md-10 col-sm-9">
                        <div className="search">
                            
                            <i className="fa fa-search"></i>
                            <form action="/Adopt" method="get">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by Breed or Pincode or Name"
                                    name="search"
                                />
                                <button className="btn text-light" type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div id="cards1" className="py-4">
                <div className="container">
                    <div className="title text-center">
                        <h2 className="position-relative d-inline-block"> Adopt a Pet </h2>
                    </div>
                    <div className="row">
                        <div className="d-flex flex-wrap justify-content-center mt-3">
                                <button type="button" className="btn m-2 text-dark filter-btn" id="all" onClick={onChangeFilter}>
                                    All
                                </button>
                                <button type="button" className="btn m-2 text-dark filter-btn" id="dog" onClick={onChangeFilter}>
                                    Dogs
                                </button>
                                <button type="button" className="btn m-2 text-dark filter-btn" id="cat" onClick={onChangeFilter}>
                                    Cat
                                </button>
                                <button type="button" className="btn m-2 text-dark filter-btn" id="fish" onClick={onChangeFilter}>
                                    Fish
                                </button>
                                <button type="button" className="btn m-2 text-dark filter-btn" id="other" onClick={onChangeFilter}>
                                    Other
                                </button>
                        </div>
                        <div className="container">
                            <div className="row g-3 mt-4">

                                {
                                    dataShow.map((elmt, index)=>{

                                        return ( 
                                            <div className="col-md-6 col-lg-3" key={index}>
                                                <div className="card bg-light h-100">
                                                    <div className="card-body text-center">
                                                        <div className="square-box">
                                                            <div
                                                                className="square-content cardImage"
                                                                id="card12Image"
                                                                style={
                                                                    {
                                                                        backgroundImage: `url(${elmt.imageUrl})`
                                                                    }
                                                                }
                                                            ></div>
                                                        </div>
                                                        <h3 className="card-title mb-2 mt-2"> {elmt.name} </h3>
                                                        <p className="card-text mb-0"> {elmt.breed} </p>
                                                        <p className="card-text mt-0"> {elmt.pincode} </p>
                                                        <div className="">
                                                            <a
                                                                href={`/Pet?id=${elmt._id.uid}`}
                                                                target="blank"
                                                            >
                                                                <button
                                                                    type="button"
                                                                    className="btn m-2 text-dark adopt-btn"
                                                                >
                                                                    Know More
                                                                </button>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )

                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adopt;
