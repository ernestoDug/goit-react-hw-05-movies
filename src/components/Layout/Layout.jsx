
import { Outlet } from "react-router-dom"
import Header from "components/Header/Header";
import Logo from "components/Logo/Logo";
import { Suspense } from "react";




const Layout = () => {

return (

     <div className='container'> 
<Header>
   <Logo/>
   </Header>
   <Suspense fallback={<div>Loading...</div>}>
<Outlet/>
</Suspense>
</div>
)

}

export default Layout