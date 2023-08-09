import { Link } from "react-router-dom"
import Searchbar from "components/Searchbar/Searchbar"

const Movies = () =>{

    // const { id } = useParams();
    // const movies = fetcher(id);

    return (
    <main>
      <Link to= '/'>
      <button className="btnBackHome"> go to 🏰 </button>
      </Link>
     <p>
📺
</p>
<Searchbar/>

{/* <Outlet/> */}
  </main>
    )
 
    
    



}

export default Movies