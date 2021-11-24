const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xxVTtNdfCFcQ0XqiHtkj/likes/';

const apps = async () => {
    // const playerName = document.querySelector('#name-input').value;
    // const playerScore = document.querySelector('#score-input').value;
    const data = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: "item1"}),
    });
    const id = await data.json();
    console.log(id)
    
  };


// get the data fron api
const getlikes = async () => {
  const data = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xxVTtNdfCFcQ0XqiHtkj/likes');
  const result = await data.json();
  console.log(result)
  return result;
};


export default getlikes;