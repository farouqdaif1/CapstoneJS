import './style.css';
// import getMeals from './consume-api';
// import counter from './counter';
import render from './render';
import { getikes, addLikes } from './likes';
document.addEventListener('DOMContentLoaded', async () => {
  await render();
  // console.log(await counter(mealsList));
});
