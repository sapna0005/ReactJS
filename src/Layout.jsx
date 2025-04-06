import { Outlet, Link } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        
            <Link to="/Tshirt">T-Shirts</Link>
            

          <Outlet/>
        </>
    )
}
export default Layout;