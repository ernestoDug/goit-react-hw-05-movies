import axios from 'axios';

const MY_KEY = 'f56a897a3a6f379d289b4251d1cb1dbb';

const BASE_URL = 'https://api.themoviedb.org';

export const fetcher = () => {
  const response= axios.get(
`${BASE_URL}/3/trending/all/day?language=en-US&api_key=${MY_KEY}`,{

      // params: {
      //   image_type: 'photo',
      //   orientation: 'horizontal',
      //   safesearch: 'true',
      //   per_page: 12,
      // },
    }
  );

  return response;
};





