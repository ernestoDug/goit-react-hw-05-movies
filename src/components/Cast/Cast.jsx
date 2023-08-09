import { useParams } from "react-router-dom";
import { fetchenr } from "helpers/fetchenr";
import { useEffect, useState } from "react";

export const Cast = () => {
  const [responseMovsCast, setResponseMovsCast] = useState([]);
  const  {id}  = useParams();

  
  useEffect(() => {
    fetchenr(id)
  .then(resp => {
    setResponseMovsCast(resp.data.cast);
            console.log(resp.data.cast, 77777);


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

return (




<section>
  <ul className="listActor">
{responseMovsCast.map(({character, id, profile_path, name}) => (

       <li key = {id}> 
       <div className="actor"> 
<img src= {`https://image.tmdb.org/t/p/w200${profile_path}`} alt="actor" />
      {name}
        <span>
        {character}
          </span>  
       </div>
       </li>
))}
        </ul>




</section>
)

}
