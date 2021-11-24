// const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Jxa2o7XJAhJoB2RZ7ghK/likes';
// // post the likes to api
// const postLikes = () => fetch(baseUrl, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify({
//         'item_id': "item1",
//     }),
//   })
//     .then((res) => res)
//     .catch( (rej) => console.log(rej) );

// postLikes();
// // get likes
// const getLikes = async () => {
//   const data = await fetch(baseUrl);
//   const result = data.json();
//   console.log(result)
//   return result;
// };
// getLikes()
// export default getComments;