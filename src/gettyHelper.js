import axios from 'axios';

const API_KEY = 'kepbq8fac4wve7jbxkubnnms';

var config = {
  headers: {'Api-Key': API_KEY}
};

export function getImages(query){
  return axios.get(`https://api.gettyimages.com:443/v3/search/images?phrase=${query}`, config)
  .then((results) => {
    return results.data.images;
  });
}