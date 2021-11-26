const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Jxa2o7XJAhJoB2RZ7ghK/comments';
// post the comments to api
const postComments = (id, name, commentx) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    item_id: `${id}`,
    username: `${name}`,
    comment: `${commentx}`,
  }),
}).then((res) => res);
postComments();
const getComments = async (x) => {
  const data = await fetch(`${baseUrl}?item_id=${x}`);
  const result = data.json();
  return result;
};
const counter = async (id) => {
  const dataFromAPI = await getComments(id);
  return dataFromAPI.length;
};
export { getComments, counter, postComments };