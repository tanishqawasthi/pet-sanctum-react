import './PetInformation.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';

const PetInformation = (props) => {
    let [data, setData] = useState({});
    let temp = useParams()

    useEffect(()=>{

        axios.get("")
            .then(res=>{
                setData(res,data);
            })
            .catch(err=>{
                console.log(err);
            })

    }, []);

    return(
    <div class="page-content page-container" id="page-content">
                <div class="padding">
                    <div class="row container d-flex justify-content-center">
                        <div class="col-xl-8 col-md-12">
                            <div class="card user-card-full">
                                <div class="row m-l-0 m-r-0">
                                    <div
                                        class="col-sm-4 bg-c-lite-green user-profile d-flex justify-content-center align-items-center">
                                        <div class="card-block text-center text-white">
                                            <div class="m-b-25 pet-img"
                                                style="background-image: url('<%= data.imageUrl %>');">
                                            </div>
                                            <h6 class="f-w-600 lead">
                                                {props.data.name}
                                            </h6>
                                            <p class="mb-2">
                                                {props.data.breed}
                                            </p>

                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="card-block">
                                            <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Pet Profile</h6>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Animal</p>
                                                    <h6 class="text-muted f-w-400">
                                                        {props.data.type}
                                                    </h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Age</p>
                                                    <h6 class="text-muted f-w-400">
                                                        {props.data.age}
                                                    </h6>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Sex</p>
                                                    <h6 class="text-muted f-w-400">
                                                        {props.data.sex}
                                                    </h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Good with Humans</p>
                                                    <h6 class="text-muted f-w-400">
                                                        {props.data.otherhumans}
                                                    </h6>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Good with Other Pets</p>
                                                    <h6 class="text-muted f-w-400">
                                                        {props.data.otherpets}
                                                    </h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Trained</p>
                                                    <h6 class="text-muted f-w-400">
                                                        {props.data.trained}
                                                    </h6>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Vaccinated</p>
                                                    <h6 class="text-muted f-w-400">
                                                        {props.data.vaccinated}
                                                    </h6>
                                                </div>
                                            </div>
                                            <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Owner Information</h6>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Owner's Name</p>
                                                    <h6 class="text-muted f-w-400">
                                                        {props.data.owner}
                                                    </h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Owner's Phone Number</p>
                                                    <h6 class="text-muted f-w-400">
                                                        {props.data.phone}
                                                    </h6>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Owner's Address</p>
                                                    <h6 class="text-muted f-w-400">
                                                        {props.data.address}
                                                    </h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Owner's Pincode</p>
                                                    <h6 class="text-muted f-w-400">
                                                        {props.data.pincode}
                                                    </h6>
                                                </div>
                                            </div>




                                            <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Additional Information
                                            </h6>
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <h6 class="text-muted f-w-400">
                                                        {props.data.additional}
                                                    </h6>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-12 my-4">
                                                    
                                                        <button class="btn adopt-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                            Adopt Now
                                                        </button>
                                                   
                                                </div>
                                            </div>

                                            
                                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                                                data-bs-keyboard="false" tabindex="-1"
                                                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="staticBackdropLabel">Are you
                                                                sure?</h5>
                                                            <button type="button" class="btn-close"
                                                                data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-danger"
                                                                data-bs-dismiss="modal">Abort</button>
                                                            <a href="/adoptPet?id=<%= data._id %>">
                                                            <button type="button"
                                                                class="btn btn-success">Adopt</button> </a>
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
                </div>
            </div>
    )
}

export default PetInformation;