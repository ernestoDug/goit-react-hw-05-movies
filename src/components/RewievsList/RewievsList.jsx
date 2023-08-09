export const RewievsList = ({id, author, content}) => 
{
return (
    <>
    
    <li className="rewieItm"  > 
    <h4 className="rewieName" >
   {author }
    </h4>
       <p>{content}</p>
                            
                       </li>

  </>
);
};


//     return
//     (    <> 
//         
//                           </>
//     )
// }
