// import {getMeals} from './consume-api';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Jxa2o7XJAhJoB2RZ7ghK/comments';
// post the comments to api

const postComments = (id, name, commentx) => fetch(baseUrl, {

  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    // item_id: 'content2-52918',
    // username: 'farouq',
    // comment: 'I love the meal',
    item_id: `${id}`,
    username: `${name}`,
    comment: `${commentx}`,

  }),
})
  // pop.js:13 52959
  // pop.js:13 52819
  // pop.js:13 52944
  // pop.js:13 53043
  // pop.js:13 52802
  // pop.js:13 52918
  .then((res) => res);
// .then((res) => res);
postComments();
// get comment

const getComments = async (x) => {
  // const id = 'item1';
  // const id = 'content-52819';

  // const id = `${x}`;
  // console.log(x);
  const data = await fetch(`${baseUrl}?item_id=${x}`);
  const result = data.json();
  // console.log(result);
  return result;
};
// getComments();

const counter = async (id) => {
  const dataFromAPI = await getComments(id);
  return dataFromAPI.length;
};

// console.log(counter());
export { getComments, counter, postComments };