
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
<<<<<<< HEAD
                <Link to={"/Rescue"} style={{textDecoration:"none"}}>
                    Rescue Page
=======
                <Link to={"/Login"} style={{textDecoration:"none"}}>
                    Login Page
>>>>>>> b2883a4a5537652f566de428f61a4f52f01305c3
                </Link>
            </div>
        </div>
    )

};

export default Navbar1;