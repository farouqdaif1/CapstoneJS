const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Jxa2o7XJAhJoB2RZ7ghK/comments';
// post the comments to api
const postComments = () => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    item_id: 'item1',
    username: 'Jane',
    comment: 'Hello',
  }),
})
  .then((res) => res);

// postComments();
// get comment

const getComments = async () => {
  const id = 'item1';
  const data = await fetch(`${baseUrl}?item_id=${id}`);
  const result = data.json();
  console.log(result);
  return result;
};
// getComments();

const counter = async () => {
  const dataFromAPI = await getComments();
  // console.log(dataFromAPI.length);
  return dataFromAPI.length;
};

console.log(counter());
export default getComments;