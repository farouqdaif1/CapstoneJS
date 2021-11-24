const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Jxa2o7XJAhJoB2RZ7ghK/likes';
const addLoikes = () => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    item_id: 'item1',
  }),
})
  .then((res) => res);

const getikes = () => fetch(baseUrl)
  .then((res) => res);
addLoikes();
getikes();
export { getikes, addLoikes };
// id = Jxa2o7XJAhJoB2RZ7ghK