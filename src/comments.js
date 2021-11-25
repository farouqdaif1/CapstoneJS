// import {getMeals} from './consume-api';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Jxa2o7XJAhJoB2RZ7ghK/comments';
// post the comments to api

const postComments = (id,username, text) => fetch(baseUrl, {

  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    item_id: id,
    username: username,
    comment: text,
  }),
})
  .then((res) => res);

// postComments();
// get comment

const getComments = async (id = 12345abc) => {
 
  const data = await fetch(`${baseUrl}?item_id=${id}`);
  const result = data.json();
  // console.log(result);
  return result;
};
// getComments();

const counter = async () => {
  const dataFromAPI = await getComments();
  return dataFromAPI.length;
};

// console.log(counter());
export { getComments, counter, postComments };