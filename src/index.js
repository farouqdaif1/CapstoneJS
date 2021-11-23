import './style.css';
import getMeals from './consume-api';
import counter from './counter';
// render 6 meals from api
const mealsList = document.querySelector('.meals');

const render = async () => {
  const dataFromAPI = await getMeals();
  const { meals } = dataFromAPI;
  meals.forEach((element, index) => {
    if (index < 6) {
      mealsList.innerHTML += `
      <li>
      <figure>
      <img src="${element.strMealThumb}" alt="meal photo">
      <figcaption>${element.strMeal}</figcaption>
      </figure>
      </li>`;
    }
  });
};
document.addEventListener('DOMContentLoaded', async () => {
  await render();
});
counter(mealsList);
// console.log();