import './style.css';
import getMeals from './consume-api';
// import counter from './counter';
import render from './render';
import popCard from './pop';
import { getikes, addLikes } from './likes';
// import { getikes, addLoikes } from './creatnewapp';
// import { getComments, counter } from './comments';

const displayModal = async () => {
  const data = await getMeals();
  popCard(data);
const likesNum = await getikes();

const likesBtn = document.querySelectorAll('.like');
likesBtn.forEach((btn,i) => {
  btn.addEventListener('click', (e) => {

  countAdd(data.meals[i].idMeal);
  })

  const likesNum = await getikes();

  const likesBtn = document.querySelectorAll('.like');

  likesBtn.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
 
      countAdd(data.meals[i].idMeal);
    });
  });
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

const showLikes = (arr, id) => {
  arr.forEach((like, index) => {
    if (like.item_id === id) {
      addLikes(id);
      like.likes += 1;
      console.log(like);
      console.log(`${like.likes}`);

      const likesBtn = document.querySelector('#likes');
      likesBtn.innerHTML = '<i class="fas fa-heart"></i> ' + '  ' + `${arr} Likes`;
    }
  });

};

// count+1

const countAdd = async (id) => {
  const numLikes = await getikes();
  // console.log(numLikes);
  const arr = [];
  for (let i = 2; i < 8; i + 1) {
    arr.push(numLikes[i]);
  }
  console.log(arr);

  showLikes(arr, id);

};


