import httpClient from '../httpClient';


function getPosts() {
  return httpClient.get(`posts`);
}

export default {
  getPosts,
}