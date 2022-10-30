
import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap";

let Navbar1 = (props) => {

    return (
        <div>
            <div className="d-flex justify-content-evenly bg-dark p-3">
                <Link to={"/"} style={{textDecoration:"none"}}>
                    Home Page
                </Link>
                <Link to={"/Adopt"} style={{textDecoration:"none"}}>
                    Adopt Page
                </Link>
                <Link to={"/Upload"} style={{textDecoration:"none"}}>
                    Upload Page
                </Link>
                <Link to={"/Login"} style={{textDecoration:"none"}}>
                    Login Page
                </Link>
                <Link to={"/Rescue"} style={{textDecoration:"none"}}>
                    Rescue Page
                </Link>
            </div>
        </div>
    )

};

export default Navbar1;