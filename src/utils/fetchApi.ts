import axios from 'axios';

const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchData = async (url: string) => {
  const { data } = await axios.get(`${baseUrl}/${url}`, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'ef812e9885mshf566aa34110a936p1806e5jsn9d70cc8c27f4',
    },
  });
  return data;
};
// ef812e9885mshf566aa34110a936p1806e5jsn9d70cc8c27f4
