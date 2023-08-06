import axios from 'axios';

const MY_KEY = 'f56a897a3a6f379d289b4251d1cb1dbb';

const BASE_URL = 'https://api.themoviedb.org';

export const fetcher = () => {
  const responseIMG = axios.get(
// ` ${BASE_URL}/trending/get-trending?api_key=${MY_KEY}`,  
'https://api.themoviedb.org/3/movie/550?api_key=f56a897a3a6f379d289b4251d1cb1dbb',{
      // params: {
      //   image_type: 'photo',
      //   orientation: 'horizontal',
      //   safesearch: 'true',
      //   per_page: 12,
      // },
    }
  );

  return responseIMG;
};
