
import { Outlet } from "react-router-dom"
import Header from "components/Header/Header";
import Logo from "components/Logo/Logo";



const Layout = () => {

return (

     <div className='container'> 
<Header>
   <Logo/>
   </Header>
<Outlet/>
</div>
)

}

export default Layout