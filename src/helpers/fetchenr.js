import axios from 'axios';

const MY_KEY = 'f56a897a3a6f379d289b4251d1cb1dbb';

const BASE_URL = 'https://api.themoviedb.org';

export const fetchenr = search => {
  const response = axios.get(
    `${BASE_URL}/3/search/movie?query='${search}'&include_adult=false&language=en-US&page=1&api_
key=${MY_KEY}`,
    {}
  );
  // console.log(response, "***");

  return response;
};
