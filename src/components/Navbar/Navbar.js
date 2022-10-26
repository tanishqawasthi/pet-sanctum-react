
import { Link } from "react-router-dom"

let Navbar = (props)=>{

    return (
        <div>
            <Link to={"/"}>
                Home Page
            </Link>
            <Link to={"/Adopt"}>
                Adopt Page
            </Link>
            <Link to={"/Login"}>
                Login Page
            </Link>
            <Link to={"/Upload"}>
                Upload Page
            </Link>
        </div>
    )

};

export default Navbar;