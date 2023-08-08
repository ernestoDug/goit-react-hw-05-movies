import { useParams } from "react-router-dom";
import { fetchenr } from "helpers/fetchenr";
import { useEffect, useState } from "react";

export const Cast = () => {
  const [responseMovsCast, setResponseMovsCast] = useState('');
  const  {id}  = useParams();

  
  useEffect(() => {
    fetchenr(id)
  .then(resp => {
    setResponseMovsCast(resp.data);
            console.log(resp.data, 7777777777777777777777777777777777);


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
<h2>Our mission</h2>
<p>
 
</p>
<p>
  as vel, tenetur maxime
  pariatur? Molestiae libero cum quidem.
</p>
</section>
)

}
