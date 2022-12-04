import Adopt from "./components/Adopt/Adopt";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Upload from "./components/Upload/Upload"
import Test from "./components/Test/Test"
import Rescue from "./components/Rescue/Rescue"
import PetInformation from "./components/PetInformation/PetInformation"
import Signup from "./components/Signup/Signup"
import DonateUs from "./components/Donate/Donate"
import AddBlog from "./components/AddBlog/AddBlog"

let MainApp = (props)=>{
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/Adopt" element={<Adopt/>} />
                <Route path="/Rescue" element={<Rescue />} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Upload" element={<Upload/>} />
                <Route path="/AddBlog" element={<AddBlog/>}/>
                <Route path="/PetInformation/:id" element={<PetInformation/>} />
                <Route path="/Signup" element={<Signup/>} />
                <Route path="/DonateUs" element={<DonateUs/>} />
            </Routes>
            <Footer />
        </div>
    )
};

export default MainApp;