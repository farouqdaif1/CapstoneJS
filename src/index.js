import './style.css';
// import getMeals from './consume-api';
// import counter from './counter';
import render from './render';
import popCard from './pop';
// import { getikes, addLoikes } from './creatnewapp';
// import getComments from './comments';
document.addEventListener('DOMContentLoaded', async () => {
  await render();
  // console.log(await counter(mealsList));
  const comBTn = document.querySelector('.com');
  comBTn.addEventListener('click', () => {
    console.log(comBTn);
    popCard();
  });
});
