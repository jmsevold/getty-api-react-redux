import axios from 'axios'

// const API_KEY = 

export function getImages(query){
  return axios.get(`https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=${query}`)
  .then((data) => {
    return data.images;
  });
}