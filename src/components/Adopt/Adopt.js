

let Adopt = (props)=>{

    return (
        <div>
 
            <div className="container border-bottom">
                <div className="row my-3 d-flex justify-content-center align-items-center">
                    <div className="col-lg-11 col-md-10 col-sm-9">
                        <div className="search"> <i className="fa fa-search"></i> 
                            <form action="/Adopt" method="get">
                                <input type="text" className="form-control" placeholder="Search by Breed or Pincode or Name" name="search"/> <button className="btn text-light" type="submit">Search</button></form> 
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
                            <a href="http://localhost:3000/Adopt"> <button type="button" className="btn m-2 text-dark filter-btn"> All </button> </a>
                            <a href="http://localhost:3000/Adopt?type=Dog"> <button type="button" className="btn m-2 text-dark filter-btn"> Dogs </button> </a>
                            <a href="http://localhost:3000/Adopt?type=Cat"> <button type="button" className="btn m-2 text-dark filter-btn"> Cat </button> </a>
                            <a href="http://localhost:3000/Adopt?type=Fish"> <button type="button" className="btn m-2 text-dark filter-btn"> Fish </button> </a>
                            <a href="http://localhost:3000/Adopt?type=Other"> <button type="button" className="btn m-2 text-dark filter-btn"> Others </button> </a>
                            
                        </div>
                        <div className="container">


                            <div className="row g-3 mt-4">    
                                        <div className="col-md-6 col-lg-3">
                                            <div className="card bg-light h-100">
                                                <div className="card-body text-center">
                                                    <div className='square-box'>
                                                        <div className='square-content cardImage' id="card12Image" style="background-image: url('<%= animalList[index].imageUrl %>');"></div>
                                                    </div>
                                                    <h3 className="card-title mb-2 mt-2"> Pet Name  </h3>
                                                    <p className="card-text mb-0"> Breed </p>
                                                    <p className="card-text mt-0"> Pin Code </p>
                                                    <div className="">
                                                        <a href="http://localhost:3000/Pet?id=<%=animalList[index]['_id']%>" target="blank">
                                                            <button type="button" className="btn m-2 text-dark adopt-btn">
                                                                Know More
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

        
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Adopt;