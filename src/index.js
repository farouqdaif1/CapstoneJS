import './style.css';
import getMeals from './consume-api';
// import counter from './counter';
import render from './render';
import popCard from './pop';
import { getikes, addLikes } from './likes'
// import { getikes, addLoikes } from './creatnewapp';
// import { getComments, counter } from './comments';

// const dataFromAPI = await getMeals();
//   const  {meals}  = dataFromAPI;
//   console.log(meals)
//   // data comments
//   const dataComents = await getComments();
//   console.log(dataComents)

const displayModal = async () => {
  const data = await getMeals();
  popCard(data);
const likesNum = await getikes();
// const postLikes = await addLikes();
// console.log(likesNum)
const likesBtn = document.querySelectorAll('.like');
likesBtn.forEach((btn,i) => {
  btn.addEventListener('click', (e) => {
    // console.log(data.meals[i].idMeal);
  countAdd(data.meals[i].idMeal);
  })

})
  const comBTn = document.querySelectorAll('.com');
  comBTn.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      if (btn.id === `x-${e.target.classList[1]}` || btn.id === `x-${e.target.classList[2]}`) {
        const pop = document.querySelector('#popup');
        pop.classList.toggle('active');
        const cards = document.querySelectorAll(`.c-${btn.id}`);
        cards.forEach((card) => {
          card.classList.toggle('hidden');
        });
      }
    });
  });
  const clsBtns1 = document.querySelectorAll('.x');
  clsBtns1.forEach((clsBtn) => {
    clsBtn.addEventListener('click', async () => {
      const cards = document.querySelectorAll(`.${clsBtn.classList[1]}`);
      const pop = document.querySelector('#popup');
      pop.classList.toggle('active');
      cards.forEach((card) => {
        card.classList.toggle('hidden');
      });
    });
  });
};
document.addEventListener('DOMContentLoaded', async () => {
  await render();
  await displayModal();
});

const showLikes = (arr,i) =>{
  const likesBtn = document.querySelector('#likes');
  likesBtn.innerHTML = '<i class="fas fa-heart"></i> ' +"  "+ `${arr[0].likes} Likes`;
}

// count+1

 const countAdd = async (id) => {
  const numLikes = await getikes();
  // console.log(numLikes);
  numLikes.forEach( (like, i) => {
    if(like.item_id === id ){
      addLikes(id);
      like.likes  =like.likes + 1;
      // console.log(id)
      const likesBtn = document.querySelector(`#l-${id}`);
      console.log(likesBtn.id)
      likesBtn.innerHTML = '<i class="fas fa-heart"></i> ' +"  "+ `${numLikes[i].likes} Likes`;
    }
  })
  // console.log(numLikes)
}

// countAdd()
