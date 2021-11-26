import './style.css';
import getMeals from './consume-api';
// import counter from './counter';
import render from './render';
import popCard from './pop';
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
