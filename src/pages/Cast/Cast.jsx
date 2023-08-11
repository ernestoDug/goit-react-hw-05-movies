import { useParams } from "react-router-dom";
import { fetchecr } from "helpers/fetchecr";
import { useEffect, useState } from "react";
import css from './actor.module.css'

 const Cast = () => {
  const [responseMovsCast, setResponseMovsCast] = useState([]);
  const  {id}  = useParams();

  
  useEffect(() => {
    fetchecr(id)
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
  <ul className={css.listActor}>
{responseMovsCast.map(({character, id, profile_path, name}) => (

       <li className={css.actorItm} key = {id}> 
       <div className={css.actorWr}> 
<img className={css.actorImg} src= {`https://image.tmdb.org/t/p/w200${profile_path}`} alt="actor" />
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
export default Cast