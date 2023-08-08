
import { useParams } from "react-router-dom";
import { fetcherrr } from "helpers/fetcherrr";
import { useEffect, useState } from "react";
// import { GenreList } from "components/GenresList/GenresList";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


const MovieDetails = () => 
{
  const [responseMovsId, setResponseMovsId] = useState('');
  const  {id}  = useParams();


  const {original_title, release_date, vote_average, overview, genres, poster_path,

   } = responseMovsId

  // const pp = (responseMovsId.release_date.substr(0, 4))
  
  useEffect(() => {
    fetcherrr(id)
  .then(resp => {
    setResponseMovsId(resp.data);
            console.log(resp.data, 45);

   })
  .catch(error => {
  // toast.warn(`🐒Отакої! ${error} 🐒`);
})
// лодер -
.finally(() => {
  // setLoading(false);
}
);
}, [id]);
  


console.log(genres, 111111111111111111111111)
console.dir(poster_path, 111111111111111111111111)

return (
<div>
<img src={poster_path} alt="title of film" />
 <h3>
{original_title} <span>{release_date }</span>
 </h3>
 <p>
 User Score: {vote_average*10}%
 </p>
 <h4>
 Overview 
         </h4>
         <p>
                  {overview}       </p>



                         <h5> 
                         Genres
                   </h5>

                   <ul>
                   
      {/* {genres.map(({name, id}) => (
        <GenreList
        name={name}
        id = {id}
        />
              ))}  */}

    </ul>

                      
<p>
  Additional information
</p>

<ul>
  <li>
  <Link to ="cast"> Cast </Link>

  </li>

    <Link to="reviews">  Reviews
  <li>
   
  </li>
  </Link>

</ul>

<Outlet />

</div>

)
}


export default MovieDetails