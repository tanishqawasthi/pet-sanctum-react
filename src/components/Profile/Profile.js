import "./Profile.css"
import { Tabs, Tab, Accordion, Button } from "react-bootstrap"; 
import { useState, useEffect } from "react";
import { Link } from "react-router-dom" 
import axios from "axios"
import EmptyProfile from "./images/empty_profile.webp"
import { authActions } from "../../store/index"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux"

let Profile = ()=>{ 

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getItem = useSelector(state=> state.isLoggedin)

    let isAdmin = true;
    let LoginProfile = {
        fname: "Tejas",
        lname: "Parse"
    }
    
    let onClickLogout = (event)=>{
        dispatch(
            authActions.logout({}) // Inside (), dictionary used (action.payload.username)
        )
        navigate("/")
    }

    let [totalPet, changePetData] = useState([]);
    let [totalBlog, changeBlogData] = useState([]);
    let [totalProfile, changeProfileData] = useState([]);

    useEffect(()=>{
        
        axios.get("http://localhost:3005/Pets")
            .then(res=>{
                
                console.log(res.data);
        
                changePetData(res.data);
                
            })
            .catch(err=>{
                console.log(err);
            })

    },[])
    useEffect(()=>{
        
        axios.get("http://localhost:3005/Blogs")
            .then(res=>{
                
                console.log(res.data);
   
                changeBlogData(res.data);
                
            })
            .catch(err=>{
                console.log(err);
            })

    },[])
    useEffect(()=>{
        
        axios.get("http://localhost:3005/Profiles")
            .then(res=>{
                
                console.log(res.data);
   
                changeProfileData(res.data);
                
            })
            .catch(err=>{
                console.log(err);
            })

    },[])


    return (
        <div className="container-lg p-3" id="Mainbox">

            <div className="row">
                <div className="col-lg-3 col-md-6 p-3 d-flex justify-content-center">
                    <img src={EmptyProfile} alt="" id="profile" width="200px" height="200px"
                        style={{backgroundPosition: "center", backgroundSize: "contain"}} />
                </div>
                <div className="col-lg-9 col-md-6 p-3">
                    <h2>{ LoginProfile.fname+" "+LoginProfile.lname }</h2>
                    <p className="mb-1">
                        
                        {isAdmin && "Admin"}
                        {!isAdmin && "User"}

                    </p>
                    <p className="fst-italic">Joined Feb 2020</p>
                    
                    <button className="btn btn-danger" onClick={onClickLogout}>Log Out</button>
                    
                </div>


            </div>

            <div className="container-fluid pt-3">

                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                    >
                    <Tab eventKey="edit" title="Edit Profile Info">
                        <form className="row g-3 mt-1" method="post" action="/editProfileInfo?id=<%= LoginProfile._id %>" enctype="multipart/form-data">
                            <div className="col-12 input-group mb-3">
                                <label className="input-group-text" for="inputGroupFile01">Upload Profile Picture</label>
                                <input type="file" className="form-control" id="inputGroupFile01" accept="image/*"
                                    onchange="loadFile(event)" name="ProfileImage" />
                            </div>
                            <div className="col-6 form-floating mb-2">
                                <input type="text" className="form-control" id="inputfName" placeholder="Full Name" name="fname"
                                    value="<%= LoginProfile.fname %>" required />
                                <label for="inputfName" className="ms-2 mb-1">First Name</label>
                            </div>
                            <div className="col-6 form-floating mb-2">
                                <input type="text" className="form-control" id="inputlName" placeholder="Full Name" name="lname"
                                value="<%= LoginProfile.lname %>" required />
                                <label for="inputlName" className="ms-2 mb-1">Last Name</label>
                            </div>
                            <div className="col-6 form-floating mb-2">
                                <input type="text" className="form-control" id="inputUsername" placeholder="Username"
                                value="<%= LoginProfile.username %>"  name="username" required />
                                <label for="inputUsername" className="ms-2 mb-1">Username</label>
                            </div>
                            <div className="col-md-6 form-floating mb-2">
                                <input type="email" className="form-control" id="floatingInput" name="email"
                                    placeholder="name@example.com required" value="<%= LoginProfile.email %>" />
                                <label for="floatingInput" className="ms-2 mb-1">Email address</label>
                            </div>
                            <div className="input-group mb-3 col-6">
                                <span className="input-group-text">+91</span>
                                <div className="form-floating flex-grow-1">
                                    <input type="number" className="form-control" name="phone" placeholder="Code 1"
                                        max="9999999999" min="0" required value="<%= LoginProfile.phone %>" />
                                    <label for="code1">Phone Number</label>
                                </div>
                            </div>
                            <div className="input-group mb-2 col-6">
                   
                                <div className="form-floating flex-grow-1">
                                    <input name="password" type="password" className="input form-control" id="password" placeholder="Enter New Password" required="true" aria-label="password" aria-describedby="basic-addon1" minlength="9" value="<%= LoginProfile.password %>" />
                                    
                                    <label for="password" className="mb-1">Password</label>
                                </div>
                                <span className="input-group-text" id="basic-addon1">
            
                                    <div className="input-group-append">
                                      <span className="input-group-text" onclick="password_show_hide();">
                                        <i className="fas fa-eye" id="show_eye"></i>
                                        <i className="fas fa-eye-slash d-none" id="hide_eye"></i>
                                      </span>
                                    </div>
            
                                </span>
            
                            </div>
                            <div className="col-12 form-floating mb-2">
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"
                                    required value="<%= LoginProfile.address %>" name="address" />
                                <label for="inputAddress" className="form-label ms-2 mb-1">Address Line</label>
                            </div>
                            <div className="col-md-6 form-floating mb-2">
                                <input type="text" className="form-control" id="inputCity" placeholder="City Name" required value="<%= LoginProfile.city %>" name="city" />
                                <label for="inputCity" className="form-label ms-2 mb-1">City</label>
                            </div>
                            <div className="col-md-4 form-floating mb-2">
                                <input type="text" className="form-control" id="inputState" placeholder="State Name"
                                    name="state" required value="<%= LoginProfile.state %>" />
                                <label for="inputState" className="form-label ms-2 mb-1">State</label>
                            </div>
                            <div className="col-md-2 form-floating mb-2">
                                <input name="zip" type="text" className="form-control" id="inputZip" placeholder="Zip Code" required value="<%= LoginProfile.zip %>" />
                                <label for="inputZip" className="form-label ms-2 mb-1" >Zip</label>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Edit</button>
                            </div>
                            <div className="col-12"></div>
                        </form>
                    </Tab>
                    <Tab eventKey="uploaded" title="Pets Uploaded">
                        Pets Upload
                    </Tab>
                    <Tab eventKey="adopted" title="Adopted">
                        Pets Adopted
                    </Tab>
                    
                    { 
                        isAdmin &&

                            <Tab eventKey="allprofiles" title="All Profiles">
                                {
                                totalProfile.length == 0 && <div>Loading...</div>
                                }
                                {
                                    totalProfile.length != 0 && 

                                    totalProfile.map(elmt=>{

                                        return (
                                            <Accordion>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Username: {
                                                        ` ${elmt.username}`
                                                    }
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div class="container-fluid row">
                                                            <div class="col-2">
                                                                <img src={EmptyProfile} alt="" style={{width: "100%"}}  />
                                                            </div>
                                                            <div class="col-10 mt-1">

                                                                <h3 className="d-inline">{elmt.fname +" "+ elmt.lname + " "}
                                                                </h3>
                                                                { elmt.isAdmin &&  <span class="badge badge-primary bg-primary">Admin</span>}
                                                                
                                                                
                                                                <p class="m-1"> { elmt.email } </p>
                                                                <p class="m-1">Adddress: { elmt.address }  </p>
                                                                <p class="m-1 mb-2"> { `${elmt.phone}` } </p>
                                                                <a href="/deleteProfile?id=<%= profileList[index]._id%>"><button class="btn btn-danger m-1 mt-2">Delete Profile</button></a>
                                                                
                                                                { (isAdmin && elmt.isAdmin==0) &&
                                                                    <a href="/makeAdmin?id=<%= profileList[index]._id%>"><button class="btn btn-success m-1 mt-2">Make Admin</button></a>
                                                                }
                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        )

                                    })
                                    
                                }
                            </Tab>                        
                    }

                    {   isAdmin &&
                        <Tab eventKey="allpets" title="All Pets">     
                            {
                                totalPet.length == 0 && <div>Loading...</div>
                            }
                            {
                                totalPet.length != 0 && 

                                totalPet.map(elmt=>{

                                    return (
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Pet Name: {
                                                    ` ${elmt.name}, Type: ${elmt.type}`
                                                }
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div class="container-fluid row">
                                                        <div class="col-2">
                                                            <img src={elmt.imageUrl} alt="" style={{width: "100%"}}  />
                                                        </div>
                                                        <div class="col-10 mt-1">
                                                            <h4> Name: {elmt.name} </h4>
                                                            
                                                            <p> Age:  {elmt.age}</p>
                                                            <p>
                                                                Additional Information: {elmt.additional}
                                                            </p>
                                                            <Link to={`/PetInformation/${elmt.id}`} >
                                                                <Button class="btn btn-outline-primary">Know More</Button>
                                                            </Link>
                                                            <a href="/deletePet?id=<%= animals[index]._id %>"><Button class="btn btn-danger">Delete Pet Data</Button></a>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    )

                                })
                                
                            }
                            
                        </Tab>
                    }
                    { 
                        isAdmin && 
                        <Tab eventKey="allblogs" title="All Blogs">
                            {
                                totalBlog.length == 0 && <div>Loading...</div>
                            }
                            {
                                totalBlog.length != 0 && 

                                totalBlog.map(elmt=>{

                                    return (
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Blog Title: {
                                                    ` ${elmt.title}`
                                                }
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div class="container-fluid row">
                                                        <div class="col-2">
                                                            <img src={elmt.imageUrl} alt="" style={{width: "100%"}}  />
                                                        </div>
                                                        <div class="col-10 mt-1">
                                                        <h4> { elmt.title } </h4>
                                                        <p> { elmt["description"].substring(0,200) + "..."} </p>
                                                            <a href="http://localhost:3000/Pet?id=<%= animals[index]._id %>"><Button class="btn btn-outline-primary">Know More</Button></a>
                                                            <a href="/deletePet?id=<%= animals[index]._id %>"><Button class="btn btn-danger">Delete Pet Data</Button></a>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    )

                                })
                                
                            }
                        </Tab>
                    }
                </Tabs>

            </div>
        </div>
    )

};

export default Profile;