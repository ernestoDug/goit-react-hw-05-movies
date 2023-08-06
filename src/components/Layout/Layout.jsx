
import { Outlet } from "react-router-dom"
import Details from "components/Details/Details"


const Layout = () => {

return (
    <> 
<Details/> 
<Outlet/>
</>
)

}

export default Layout