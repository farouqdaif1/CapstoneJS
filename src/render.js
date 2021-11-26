import getMeals from './consume-api';
import { getikes } from './likes';

const mealsList = document.querySelector('.meals');
// render 6 meals from api
const render = async () => {
  const dataFromAPI = await getMeals();
  const { meals } = dataFromAPI;
  const numLikes = await getikes();
  meals.forEach((element, index) => {
    if (index < 6) {
      mealsList.innerHTML += `
        <li  id=id-${element.idMeal}>
        <figure>
        <img src="${element.strMealThumb}" alt="meal photo" width="250" height="250">
        <figcaption>${element.strMeal}</figcaption>
        </figure>
        <div id="buttons">
        <button class="like" id="l-${element.idMeal}">
        <i class="fas fa-heart">${numLikes[index + 2].likes} Likes</i> 
        </button>
        <button  id=x-${element.idMeal} class="com ${element.idMeal}">
        <i class="fas fa-comment ${element.idMeal}" ></i>
        <div id="num-comments" class="num-comments  ${element.idMeal}"><span class="span ${element.idMeal}">comment</span></div>
        </button>
        </div>
        </li>`;
    }
  });
};
export default render;
