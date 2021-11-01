import axios from 'axios';

export const requestCommits = async ({ payload }: Record<any,any>) => {
  return await axios
    .get(`https://api.github.com/repos/${payload.userText}/${payload.repoText}/commits?q=per_page:30`)
    .then((res) => {
      const response = res.data;
      return response;
    })
    .catch((error) => {
      return error;
    });
};
