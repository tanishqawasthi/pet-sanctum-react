
import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap";

let Navbar1 = (props) => {
    
    return (
        <div>
            <div className="d-flex justify-content-evenly bg-dark p-3 text-white">
                <Link to={"/"} style={{textDecoration:"none"}}>
                    Home Page
                </Link>
                <Link to={"/Adopt"} style={{textDecoration:"none"}}>
                    Adopt Page
                </Link>
                <Link to={"/Upload"} style={{textDecoration:"none"}}>
                    Upload Page
                </Link>
                <Link to={"/Rescue"} style={{textDecoration:"none"}}>
                    Rescue Page
                </Link>
                <Link to={"/AddBlog"} style={{textDecoration:"none"}}>
                    Add Blog
                </Link>
                <Link to={"/DonateUs"} style={{textDecoration:"none"}}>
                    Donate Us
                </Link>
                <Link to={"/Login"} style={{textDecoration:"none"}}>
                    Login Page
                </Link>
                <Link to={"/Signup"} style={{textDecoration:"none"}}>
                    Sign Up
                </Link>
                <Link to={"/Contact"} style={{textDecoration:"none"}}>
                    Contact
                </Link>
                <Link to={"/Blogs"} style={{textDecoration:"none"}}>
                    Blogs
                </Link>
                <Link to={"/Profile"} style={{textDecoration:"none"}}>
                    Profile
                </Link>
            </div>
        </div>
    )

};

export default Navbar1;