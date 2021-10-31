import axios from 'axios';

export const fetchCommits = async () => {
  return await axios
    // .get(`https://api.github.com/users/${data}`)
    .get(`https://api.github.com/search/commits?q=30`)
    .then((res) => {
      const response = res.data.items;
      console.log('reponse', res.data.items);
      return response;
    })
    .catch((e) => console.log('error', e));
};
