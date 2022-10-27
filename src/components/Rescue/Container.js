import FormContainer from "./FormContainer";
import ImageContainer from "./ImageContainer";
import './Rescue.css';

const Container = (props) => {
    return(
        <div>
            <div class="page-content page-container" id="page-content">
            <div class="padding">
                <div class="row container d-flex justify-content-center temp1">
                    <div class="col-xl-12 col-md-12">
                        <div class="card user-card-full">
                            <form action="http://localhost:3000/Rescue" method="post" id="form" enctype="multipart/form-data">
                                <div class="row m-l-0 m-r-0 form-background">
                                    <div
                                        class="col-sm-4 bg-c-lite-green user-profile d-flex justify-content-center align-items-center">
                                        <div class="card-block text-center text-white">
                                            <div class="m-b-25 pet-img"> </div>
                                            <div class="mb-3">
                                                <label for="formFileSm" class="form-label">Choose pet Image</label>
                                                <input class="form-control form-control-sm" id="formFileSm" type="file"
                                                    accept="image/*" onchange="loadFile(event)" name="image" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-8 form-back">
                                        <div class="card-block">
                                            <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Enter Stray Details</h6>

                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-5 f-w-600">Name of Stray</p>
                                                    <input class="form-control form-control-sm" type="text"
                                                        placeholder="Enter here" required name="name" id="nameInput" />
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-5 f-w-600">Animal</p>
                                                    <select class="form-select form-select-sm"
                                                        aria-label="Default select example" name="type">

                                                        <option selected value="Dog">Dog</option>
                                                        <option value="Cat">Cat</option>
                                                        <option value="Fish">Fish</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-5 f-w-600">Breed</p>
                                                    <input class="form-control form-control-sm" type="text"
                                                        placeholder="Enter here" name="breed" required id="breed" value="Stray" />
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-5 f-w-600">Locality</p>
                                                    <input class="form-control form-control-sm" type="text"
                                                        placeholder="Enter here" name="address" required id="address" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-5 f-w-600">Phone</p>
                                                    <input class="form-control form-control-sm" type="tel"
                                                        placeholder="8234567890" name="phone" required id="phone" />
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-5 f-w-600">Pincode</p>
                                                    <input class="form-control form-control-sm" type="text" maxlength="6" minlength="6"
                                                        placeholder="500012" name="pincode" required id="pincode" />
                                                </div>
                                            </div>
                                        </div>

                                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Any Additional Information
                                        </h6>
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <textarea rows="5" class="form-control" id="exampleFormControlTextarea1"
                                                 name="additional" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12 my-4">
                                                <button class="btn upload-btn" type="submit">
                                                    Upload
                                                </button>
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
        </div>
        
    )
}

export default Container;