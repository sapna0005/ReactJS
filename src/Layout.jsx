import { Outlet, Link } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        
            <Link to="/Tshirt">T-Shirts</Link>
            <Link to="/TshirtDetails">TshirtDetails</Link>

          <Outlet/>
        </>
    )
}
export default Layout;