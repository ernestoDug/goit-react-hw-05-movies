import { Link } from "react-router-dom"
import Searchbar from "components/Searchbar/Searchbar"
import { useState } from "react"
import MovieList from "components/MoveList/MovieList"

const Movies = () =>{

  const [srchFilm, setSrchFilm] = useState([])
    // const { id } = useParams();
console.log(srchFilm, "mmm")
    return (
    <main>
      <Link to= '/'>
      <button className="btnBackHome"> go to 🏰 </button>
      </Link>
     <p>
📺
</p>
<Searchbar
setSrchFilm = {setSrchFilm}
/>


<ul className="moviesList">
                  
                  {srchFilm.map(({original_title, id}) => (
                    <Link  
                    key={id}
                    // to={`movies/${id}/query=${search}`}
                    >     
                    <MovieList
                    title={original_title}
                                     />
                     </Link> 
                          ))} 
            
                </ul>





{/* <Outlet/> */}
  </main>
    )
 
    
    



}

export default Movies