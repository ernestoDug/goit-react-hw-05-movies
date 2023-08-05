import axios from 'axios';

// const MY_KEY = ' f56a897a3a6f379d289b4251d1cb1dbb';

// const BASE_URL = 'https://api.themoviedb.org';

export const fetchIMG = () => {
  const responseIMG = axios.get(
 'https://api.themoviedb.org/3/movie/157336/videos?api_key=f56a897a3a6f379d289b4251d1cb1dbb',
    {
      // params: {
      //   image_type: 'photo',
      //   orientation: 'horizontal',
      //   safesearch: 'true',
      //   per_page: 12,
      // },
    }
  );
  console.log(responseIMG)

  return responseIMG;
};
