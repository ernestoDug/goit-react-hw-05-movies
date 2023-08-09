import axios from 'axios';

const MY_KEY = 'f56a897a3a6f379d289b4251d1cb1dbb';

const BASE_URL = 'https://api.themoviedb.org';

export const fetcherrw = (id) => {
  const response= axios.get(
`${BASE_URL}/3/movie/${id}/reviews?language=en-US&api_key=${MY_KEY}`

  );
  console.log(response, '54hg5'); 
  return response
};







  


