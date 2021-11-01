import axios from 'axios';

export const requestCommits = async () => {
  return await axios
    .get(`https://api.github.com/search/commits?q=per_page:30`)
    .then((res) => {
      const response = res.data.items;
      return response;
    })
    .catch((error) => {
      return error;
    });
};
