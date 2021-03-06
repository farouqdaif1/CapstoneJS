import './style.css';
import getMeals from './consume-api';
import render from './render';
import popCard from './pop';
import { getikes, addLikes } from './likes';

const displayModal = async () => {
  const data = await getMeals();
  popCard(data);
  const likesBtn = document.querySelectorAll('.like');
  likesBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      countAdd(data.meals[i].idMeal);// eslint-disable-line
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

const countAdd = async (id) => {
  const numLikes = await getikes();
  numLikes.forEach((like, i) => {
    if (like.item_id === id) {
      addLikes(id);
      like.likes += 1;
      const likesBtn = document.querySelector(`#l-${id}`);
      likesBtn.innerHTML = `<i class="fas fa-heart">${numLikes[i].likes} Likes</i> `;
    }
  });
};