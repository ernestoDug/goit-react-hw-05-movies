
import { useParams } from "react-router-dom";
import { fetcherr } from "helpers/fetcherr";
import { useEffect } from "react";


const Details = () => 
{
  const { id } = useParams();


  useEffect(() => {
        fetcherr(id)
   .then(resp => {
//     setResponseMovs(resp.data.results);
                console.log(resp.data.results, 515151)
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
 <h2>
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


export default Details