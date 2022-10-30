import Adopt from "./components/Adopt/Adopt";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Upload from "./components/Upload/Upload"
import Test from "./components/Test/Test"

let MainApp = (props)=>{
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/Adopt" element={<Adopt/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Upload" element={<Upload/>} />
                <Route path="/Test" element={<Test/>} />
            </Routes>
            <Footer />
        </div>
    )
};

export default MainApp;