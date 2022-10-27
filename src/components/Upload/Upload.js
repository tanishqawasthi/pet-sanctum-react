import "./Upload.css"
import EmptyPic from "./empty_profile.webp"

let Upload = (props)=>{
    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-xl-8 col-md-12">
                        <div className="card user-card-full">
                            <form action="http://localhost:3000/Upload" method="post" id="form">
                                <div className="row m-l-0 m-r-0">
                                    <div
                                        className="col-sm-4 bg-c-lite-green user-profile d-flex justify-content-center align-items-center">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25 pet-img" style={{
                                                backgroundImage: `url(${EmptyPic})`
                                            }}> </div>
                                            <div className="mb-3">
                                                <label for="formFileSm" className="form-label">Choose pet Image</label>
                                                <input className="form-control form-control-sm" id="formFileSm" type="file"
                                                    accept="image/*" onchange="loadFile(event)" name="image" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-block">
                                            <h6 className="h6_tejas m-b-20 p-b-5 b-b-default f-w-600">Enter Pet Profile</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-5 f-w-600">Name of Pet</p>
                                                    <input className="form-control form-control-sm" type="text"
                                                        placeholder="Enter here" name="name" required id="petName" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-5 f-w-600">Animal</p>
                                                    <select defaultValue={"Dog"} className="form-select form-select-sm" aria-label="Default select example" name="type">
                                
                                                        <option value="Dog" defa>Dog</option>
                                                        <option value="Cat">Cat</option>
                                                        <option value="Fish">Fish</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-5 f-w-600">Name of Breed</p>
                                                    <input className="form-control form-control-sm" type="text"
                                                        placeholder="Enter here" name="breed" id="breed" required />
                                                </div>
                                                <div className="col-sm-3">
                                                    <p className="m-b-5 f-w-600">Age</p>
                                                    <input className="form-control form-control-sm" type="number"
                                                        placeholder="Enter here" name="age" value="1" />
                                                </div>
                                                <div className="col-sm-3">
                                                    <p className="m-b-5 f-w-600">Sex</p>
                                                    <select defaultValue={"Male"} name="sex" id="sex" className="form-control form-control-sm">
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-5 f-w-600">Good with Humans</p>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" id="inlineRadio1"
                                                            value="Yes" name="otherhumans" />
                                                        <label className="form-check-label" for="inlineRadio1">Yes</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" id="inlineRadio2"
                                                            value="No" name="otherhumans" defaultChecked={true} />
                                                        <label className="form-check-label" for="inlineRadio2">No</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-5 f-w-600">Good with Other Pets</p>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" id="inlineRadio11"
                                                            value="Yes" name="otherpets"/>
                                                        <label className="form-check-label" for="inlineRadio11">Yes</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" id="inlineRadio21"
                                                            value="No" name="otherpets" defaultChecked={true} />
                                                        <label className="form-check-label" for="inlineRadio21">No</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-5 f-w-600">Trained</p>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" id="inlineRadio12"
                                                            value="Yes" name="trained" />
                                                        <label className="form-check-label" for="inlineRadio12">Yes</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" id="inlineRadio22"
                                                            value="No" name="trained" defaultChecked={true} />
                                                        <label className="form-check-label" for="inlineRadio22">No</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-5 f-w-600">Vaccinated</p>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" id="inlineRadio13"
                                                            value="Yes" name="vaccinated" />
                                                        <label className="form-check-label" for="inlineRadio13">Yes</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" id="inlineRadio23"
                                                            value="No" name="vaccinated" defaultChecked={true} />
                                                        <label className="form-check-label" for="inlineRadio23">No</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="h6_tejas m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Any Additional Information</h6>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <textarea rows="5" className="form-control"
                                                        id="exampleFormControlTextarea1"
                                                        name="additional"></textarea>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 my-4">
                                                    <button className="btn adopt-btn" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                                                        Upload
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};      

export default Upload;