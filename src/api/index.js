import axios from 'axios';

const API_KEY = '8e5f194189cd42b8f76d808f6be02a5d';
const API_URL = `https://api.flickr.com/services/rest`;
const methodFetchPhotos = 'flickr.photos.search';
const methodFetchUserData = 'flickr.people.getPhotos';
const extras = 'owner_name,description,date_upload,tags';
const tags = 'dog';
const page = '1';

export const fetchPhotos = (per_page, searchText) =>{
  const url = `${API_URL}/?method=${methodFetchPhotos}&api_key=${API_KEY}&extras=${extras}&tags=${tags}&text=${searchText}&page=${page}&per_page=${per_page}&format=json&nojsoncallback=1`;
  const request = axios.get(url);
  return request;
};

export const fetchUserDataApi = (id) =>{
  const url = `${API_URL}/?method=${methodFetchUserData}&api_key=${API_KEY}&user_id=${id}&extras=${extras}&per_page=24&format=json&nojsoncallback=1`;
  const request = axios.get(url);
  return request;
};

// export const fetchUserRecentPhotoApi = (id) =>{
//   const url = `${API_URL}/?method=${methodFetchUserData}&api_key=${API_KEY}&user_id=${id}&format=json&nojsoncallback=1`;
//   const request = axios.get(url);
//   return request;
// };