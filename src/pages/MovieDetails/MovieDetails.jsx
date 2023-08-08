
import { useParams } from "react-router-dom";
import { fetcherrr } from "helpers/fetcherrr";
import { useEffect, useState } from "react";

// import { useContext } from 'react';

// import { Context } from 'components/App';




const MovieDetails = () => 
{
  const [responseMovsId, setResponseMovsId] = useState('');
  const  {id}  = useParams();
  const { original_title, release_date, vote_average, overview,  genres
  } = responseMovsId

  // const pp = (responseMovsId.release_date.substr(0, 4))

  useEffect(() => {
    fetcherrr(id)
  .then(resp => {
    setResponseMovsId(resp.data);
            console.log(resp, "***************")
            console.log(resp.data.genres,  45555555555555);

   })
  .catch(error => {
  // toast.warn(`🐒Отакої! ${error} 🐒`);
  })
  // лодер -
  .finally(() => {
  // setLoading(false);
  });
  }, [id]);
  



return (
<div>
<img src="" alt="" />
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
                         <ul >
      {genres.map(({ id, name,  }) => (
        <li id={id} key={id} name={name}>
        {name}
        </li>
      ))}
    </ul>
<p>
  Additional information
</p>

</div>

)

}


export default MovieDetails