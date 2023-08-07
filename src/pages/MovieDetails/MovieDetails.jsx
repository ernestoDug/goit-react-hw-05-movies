
import { useParams } from "react-router-dom";
import { fetcherr } from "helpers/fetcherr";
import { useEffect, useState } from "react";

// import { useContext } from 'react';

// import { Context } from 'components/App';




const MovieDetails = () => 
{
  const [responseMovsId, setResponseMovsId] = useState('');
  const { id } = useParams();


  useEffect(() => {
    fetcherr(id)
  .then(resp => {
    setResponseMovsId(resp.data.results);
            console.log(responseMovsId, "fscewcwecc")
   })
  .catch(error => {
  // toast.warn(`🐒Отакої! ${error} 🐒`);
  })
  // лодер -
  .finally(() => {
  // setLoading(false);
  });
  }, [id, responseMovsId]);
  



return (
<div>
<img src="" alt="" />
 <h2>
   xz xz z zxxzxzx
 </h2>
 <p>
  
 </p>
 <h3>
         </h3>
         <p>
                         </p>
                         <h4> </h4>
                         <p>

                         </p>
</div>

)

}


export default MovieDetails