import axios from 'axios';

export const requestCommits = async () => {
  return await axios
    .get(`https://api.github.com/search/commits?q=30`)
    .then((res) => {
      const response = res.data.items;
      console.log('reponse', res);
      return response;
    })
    .catch((error) => {
      console.log('error', error);
      return error;
    });
};
